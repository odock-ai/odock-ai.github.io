"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import HCaptcha from "@hcaptcha/react-hcaptcha"

import HeroBackround from "./HeroFigure/hero-backround"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"
import landingContent from "@/data/landing-content.json"

const { contact, offers } = landingContent

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // react-hook-form
  const { register, handleSubmit, setValue, watch } = useForm()

  // Web3Forms requires this field exactly
  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token)
  }

  async function onSubmit(formData: any) {
    setIsSubmitting(true)

    const data = new FormData()
    data.append("access_key", process.env.NEXT_PUBLIC_API_KEY_WEB3FORMS!);

    for (const key in formData) {
      data.append(key, formData[key])
    }

    const res = await fetch(contact.form.submitUrl, {
      method: "POST",
      body: data,
    })

    const json = await res.json()

    setIsSubmitting(false)
    if (json.success) {
      setIsSubmitted(true)
    } else {
      alert(contact.form.errorAlert)
      console.error(json)
    }
  }

  return (
    <section id={contact.id} className="relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute -left-24 top-6 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <HeroBackround dotCount={48} shape="horizontal" glowIntensity={0.35} />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.05fr_1.1fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
            {contact.badge}
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{contact.title}</h2>
            <p className="text-lg text-muted-foreground text-balance">{contact.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contact.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 backdrop-blur"
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/30 px-4 py-3 backdrop-blur">
            <p className="text-sm text-muted-foreground">
              {contact.emailCopy}{" "}
              <a className="font-semibold text-accent underline decoration-accent/50" href={`mailto:${contact.contactEmail}`}>
                {contact.contactEmail}
              </a>{" "}
              {contact.emailResponseTime}
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/30 px-4 py-3 backdrop-blur">
            <p className="text-sm text-muted-foreground mt-2">
              {contact.githubCopy}{" "}
              <a
                className="font-semibold text-accent underline decoration-accent/50"
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.githubLabel}
              </a>
              .
            </p>
          </div>
        </div>

        {/* FORM CARD */}
        <Card className="relative overflow-hidden border border-border/70 bg-card/70 shadow-2xl backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          {isSubmitted ? (
            <CardContent className="relative flex min-h-[420px] flex-col items-center justify-center space-y-4 text-center">
              <CheckCircle2 className="h-14 w-14 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">{contact.form.successTitle}</h3>
              <p className="max-w-md text-muted-foreground">{contact.form.successDescription}</p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
                {contact.form.successCta}
              </Button>
            </CardContent>
          ) : (
            <>
              <CardHeader className="relative space-y-2">
                <CardTitle className="text-2xl font-bold text-foreground">{contact.form.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {contact.form.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                  {/* Name Fields */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{contact.form.fields.firstName.label}</Label>
                      <Input
                        {...register("firstName", { required: true })}
                        id="firstName"
                        placeholder={contact.form.fields.firstName.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{contact.form.fields.lastName.label}</Label>
                      <Input
                        {...register("lastName", { required: true })}
                        id="lastName"
                        placeholder={contact.form.fields.lastName.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">{contact.form.fields.email.label}</Label>
                    <Input
                      {...register("email", { required: true })}
                      id="email"
                      type="email"
                      placeholder={contact.form.fields.email.placeholder}
                      className="border-border/70 bg-background/80"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company">{contact.form.fields.company.label}</Label>
                    <Input
                      {...register("company", { required: true })}
                      id="company"
                      placeholder={contact.form.fields.company.placeholder}
                      className="border-border/70 bg-background/80"
                    />
                  </div>

                  {/* Role & Size */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="role">{contact.form.fields.role.label}</Label>
                      <Input
                        {...register("role", { required: true })}
                        id="role"
                        placeholder={contact.form.fields.role.placeholder}
                        className="border-border/70 bg-background/80"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>{contact.form.fields.size.label}</Label>
                      <Select onValueChange={(v) => setValue("size", v)}>
                        <SelectTrigger className="w-full border-border/70 bg-background/80">
                          <SelectValue placeholder={contact.form.fields.size.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {contact.organizationSizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Offer */}
                  <div className="space-y-2">
                    <Label>{contact.form.fields.offer.label}</Label>
                    <Select onValueChange={(v) => setValue("offer", v)}>
                      <SelectTrigger className="w-full border-border/70 bg-background/80">
                        <SelectValue placeholder={contact.form.fields.offer.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {offers.plans.map((plan) => (
                          <SelectItem key={plan.title} value={plan.title}>
                            {`${plan.title} – ${plan.subtitle}`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">{contact.form.fields.message.label}</Label>
                    <Textarea
                      {...register("message")}
                      id="message"
                      rows={4}
                      placeholder={contact.form.fields.message.placeholder}
                      className="border-border/70 bg-background/80"
                    />
                  </div>

                  {/* HCaptcha */}
                  <HCaptcha
                    sitekey={contact.form.hcaptchaSiteKey}
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? contact.form.submittingText : contact.form.submitText}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    {contact.form.disclaimer}
                  </p>
                </form>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </section>
  )
}
