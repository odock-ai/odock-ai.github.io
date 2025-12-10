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
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS as string);

    for (const key in formData) {
      data.append(key, formData[key])
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })

    const json = await res.json()

    setIsSubmitting(false)
    if (json.success) {
      setIsSubmitted(true)
    } else {
      alert("Submission failed. Check console.")
      console.error(json)
    }
  }

  const highlights = [
    "Enterprise support and SLAs",
    "Security and compliance reviews",
    "Model-agnostic routing and governance",
    "Private cloud and on-prem options",
  ]

  return (
    <section id="waitlist-section" className="relative overflow-hidden py-24 px-4">
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
            Contact
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Talk with our team</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Get a tailored walkthrough of Odock.ai and see how a unified API gateway can simplify model routing,
              governance, and enterprise controls for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
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
              Prefer email? Reach us at{" "}
              <a className="font-semibold text-accent underline decoration-accent/50" href="mailto:hello@odock.ai">
                hello@odock.ai
              </a>{" "}
              and we&apos;ll respond within one business day.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/30 px-4 py-3 backdrop-blur">
            <p className="text-sm text-muted-foreground mt-2">
              Want to contribute to our open-source project? Visit our GitHub at{" "}
              <a
                className="font-semibold text-accent underline decoration-accent/50"
                href="https://github.com/odock-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/odock-ai
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
              <h3 className="text-2xl font-bold text-foreground">Thank you!</h3>
              <p className="max-w-md text-muted-foreground">
                Your inquiry is in. Our team will reach out shortly with next steps tailored to your environment.
              </p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
                Submit another inquiry
              </Button>
            </CardContent>
          ) : (
            <>
              <CardHeader className="relative space-y-2">
                <CardTitle className="text-2xl font-bold text-foreground">Contact our team</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Share a few details so we can prep the right demo and guidance for you.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                  {/* Name Fields */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        {...register("firstName", { required: true })}
                        id="firstName"
                        placeholder="Alex"
                        className="border-border/70 bg-background/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        {...register("lastName", { required: true })}
                        id="lastName"
                        placeholder="Doe"
                        className="border-border/70 bg-background/80"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      {...register("email", { required: true })}
                      id="email"
                      type="email"
                      placeholder="alex.doe@company.com"
                      className="border-border/70 bg-background/80"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      {...register("company", { required: true })}
                      id="company"
                      placeholder="Acme Inc."
                      className="border-border/70 bg-background/80"
                    />
                  </div>

                  {/* Role & Size */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <Input
                        {...register("role", { required: true })}
                        id="role"
                        placeholder="CTO, IT Director, etc."
                        className="border-border/70 bg-background/80"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Organization Size</Label>
                      <Select onValueChange={(v) => setValue("size", v)}>
                        <SelectTrigger className="w-full border-border/70 bg-background/80">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1001+">1001+ employees</SelectItem>
                          <SelectItem value="government">Government Agency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Offer */}
                  <div className="space-y-2">
                    <Label>Offer you're interested in</Label>
                    <Select onValueChange={(v) => setValue("offer", v)}>
                      <SelectTrigger className="w-full border-border/70 bg-background/80">
                        <SelectValue placeholder="Select an offer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open-source">Open Source – Self-Hosted</SelectItem>
                        <SelectItem value="managed-odock">Managed Odock – Hosted by Us</SelectItem>
                        <SelectItem value="enterprise">Enterprise – Private Network</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      {...register("message")}
                      id="message"
                      rows={4}
                      placeholder="Tell us about your specific requirements..."
                      className="border-border/70 bg-background/80"
                    />
                  </div>

                  {/* HCaptcha */}
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request information"}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service.
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
