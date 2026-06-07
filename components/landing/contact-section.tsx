"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLandingContent } from "@/components/providers/landing-content-provider"

const HCaptcha = dynamic(() => import("@hcaptcha/react-hcaptcha"), {
  ssr: false,
  loading: () => <div className="h-[78px] w-full animate-pulse rounded-md bg-muted/20" />,
})

const CONTACT_ID = "contact"
const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit"
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_API_KEY_WEB3FORMS
const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  size: string
  offer: string
  message: string
  "h-captcha-response": string
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [loadCaptcha, setLoadCaptcha] = useState(false)
  const [captchaInstanceKey, setCaptchaInstanceKey] = useState(0)
  const { content } = useLandingContent()
  const organizationSizes = content.contact.organizationSizes
  const offers = content.contact.offers
  const formSchema = z.object({
    firstName: z.string().min(2, { message: content.contact.fields.firstName.error }),
    lastName: z.string().min(2, { message: content.contact.fields.lastName.error }),
    email: z.string().email({ message: content.contact.fields.email.error }),
    company: z.string().min(1, { message: content.contact.fields.company.error }),
    role: z.string().min(1, { message: content.contact.fields.role.error }),
    size: z.string().min(1, { message: content.contact.fields.size.error }),
    offer: z.string().min(1, { message: content.contact.fields.offer.error }),
    message: z.string().min(10, { message: content.contact.fields.message.error }),
    "h-captcha-response": z.string().min(1, { message: content.contact.fields.captcha.error }),
  })

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      role: "",
      size: "",
      offer: "",
      message: "",
      "h-captcha-response": "",
    },
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const prefillEmail = window.sessionStorage.getItem("contact_prefill_email")
    if (prefillEmail) {
      setValue("email", prefillEmail)
      window.sessionStorage.removeItem("contact_prefill_email")
    }

    const handlePrefill = (event: Event) => {
      const customEvent = event as CustomEvent<string>
      setValue("email", customEvent.detail)
    }

    window.addEventListener("contact-prefill-email", handlePrefill)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoadCaptcha(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )

    const element = document.getElementById(CONTACT_ID)
    if (element) {
      observer.observe(element)
    }

    return () => {
      window.removeEventListener("contact-prefill-email", handlePrefill)
      observer.disconnect()
    }
  }, [setValue])

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Odock landing demo request",
        from_name: "Odock landingpage",
        replyto: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.company,
        role: data.role,
        size: data.size,
        offer: data.offer,
        message: data.message,
        "h-captcha-response": data["h-captcha-response"],
      }

      const response = await fetch(WEB3FORMS_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed")
      }

      setIsSuccess(true)
      reset()
      setCaptchaInstanceKey((current) => current + 1)
    } catch (error) {
      console.error("Contact form submission failed", error)
      alert(content.contact.errorAlert)
      setValue("h-captcha-response", "")
      setCaptchaInstanceKey((current) => current + 1)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={CONTACT_ID} className="relative overflow-hidden px-4 py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {content.contact.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {content.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {isSuccess ? (
            <Card className="border-accent bg-card/50 p-8 text-center backdrop-blur">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-accent/20 p-3">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">{content.contact.successTitle}</h3>
              <p className="mx-auto max-w-md text-muted-foreground">
                {content.contact.successDescription}
              </p>
              <Button className="mt-8 bg-accent hover:bg-accent/90" onClick={() => setIsSuccess(false)}>
                {content.contact.successCta}
              </Button>
            </Card>
          ) : (
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {content.contact.cardTitle}
                </CardTitle>
                <CardDescription>
                  {content.contact.cardDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                  <input type="hidden" {...register("h-captcha-response")} />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{content.contact.fields.firstName.label}</Label>
                      <Input
                        {...register("firstName")}
                        id="firstName"
                        placeholder={content.contact.fields.firstName.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                      {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{content.contact.fields.lastName.label}</Label>
                      <Input
                        {...register("lastName")}
                        id="lastName"
                        placeholder={content.contact.fields.lastName.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                      {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">{content.contact.fields.email.label}</Label>
                      <Input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder={content.contact.fields.email.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{content.contact.fields.company.label}</Label>
                      <Input
                        {...register("company")}
                        id="company"
                        placeholder={content.contact.fields.company.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                      {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="role">{content.contact.fields.role.label}</Label>
                      <Input
                        {...register("role")}
                        id="role"
                        placeholder={content.contact.fields.role.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                      {errors.role && <p className="text-xs text-destructive">{errors.role.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>{content.contact.fields.size.label}</Label>
                      <Select onValueChange={(value) => setValue("size", value, { shouldValidate: true })}>
                        <SelectTrigger
                          className="w-full border-border/70 bg-background/80"
                          aria-label={content.contact.fields.size.placeholder}
                        >
                          <SelectValue placeholder={content.contact.fields.size.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {organizationSizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.size && <p className="text-xs text-destructive">{errors.size.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>{content.contact.fields.offer.label}</Label>
                    <Select onValueChange={(value) => setValue("offer", value, { shouldValidate: true })}>
                      <SelectTrigger
                        className="w-full border-border/70 bg-background/80"
                        aria-label={content.contact.fields.offer.placeholder}
                      >
                        <SelectValue placeholder={content.contact.fields.offer.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {offers.map((offer) => (
                          <SelectItem key={offer.value} value={offer.value}>
                            {offer.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.offer && <p className="text-xs text-destructive">{errors.offer.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{content.contact.fields.message.label}</Label>
                    <Textarea
                      {...register("message")}
                      id="message"
                      rows={4}
                      placeholder={content.contact.fields.message.placeholder}
                      className="border-border/70 bg-background/80"
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                  </div>

                  <div className="pt-2">
                    {loadCaptcha && (
                      <HCaptcha
                        key={captchaInstanceKey}
                        sitekey={HCAPTCHA_SITE_KEY}
                        reCaptchaCompat={false}
                        onVerify={(token: string) => {
                          setValue("h-captcha-response", token, { shouldValidate: true })
                          clearErrors("h-captcha-response")
                        }}
                        onExpire={() => {
                          setValue("h-captcha-response", "")
                          setError("h-captcha-response", {
                            type: "manual",
                            message: content.contact.fields.captcha.error,
                          })
                        }}
                      />
                    )}
                    {errors["h-captcha-response"] && (
                      <p className="mt-2 text-xs text-destructive">
                        {errors["h-captcha-response"].message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent py-6 text-lg font-bold text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? content.contact.submittingText : content.contact.submitText}
                  </Button>
                  <p className="text-center text-[10px] text-muted-foreground">
                    {content.contact.formDisclaimer}
                  </p>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
