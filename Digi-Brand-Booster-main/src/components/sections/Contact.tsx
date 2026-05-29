'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Clock, ArrowRight, Check } from 'lucide-react'
import { serviceOptions, budgetOptions, siteConfig } from '@/lib/data'
import ShimmerButton from '@/components/ui/ShimmerButton'

type FormData = {
  firstName: string; lastName: string; email: string; phone: string
  website: string; company: string; service: string; budget: string; message: string
}

const initialForm: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  website: '', company: '', service: '', budget: '', message: '',
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof FormData, value: string) => setForm((prev) => ({ ...prev, [field]: value }))

  const isStep1Valid = form.firstName && form.lastName && form.email && form.phone && form.company
  const isStep2Valid = form.service && form.budget && form.message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isStep2Valid) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setForm(initialForm)
      setStep(1)
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative gradient-border rounded-3xl"
        >
          <div className="rounded-3xl bg-bg-card/60 backdrop-blur-xl p-6 lg:p-12 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4">
                Contact
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading leading-tight mb-4">
                Get your <span className="gradient-text">free Growth Audit</span> in 7 days.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We&apos;ll audit your ads, site, funnel, and CRM, then send back a written diagnosis with the exact 3 changes that&apos;ll move the needle. No fluff, no sales pitch.
              </p>

              <div className="space-y-3 mb-6">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-primary transition-colors">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                    <Mail size={16} className="text-accent-primary" />
                  </span>
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-primary transition-colors">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                    <Phone size={16} className="text-accent-primary" />
                  </span>
                  {siteConfig.phone}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-accent-success/5 border border-accent-success/20 flex items-start gap-3">
                <Clock className="text-accent-success shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-sm font-semibold text-text-primary">Average response time: 2 hours</p>
                  <p className="text-xs text-text-secondary mt-0.5">Join 50+ brands already growing with us</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-text-secondary">Step {step} of 2</span>
                <div className="flex-1 h-1 rounded-full bg-bg-card-hover overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                    initial={{ width: '50%' }}
                    animate={{ width: step === 1 ? '50%' : '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput placeholder="First name" value={form.firstName} onChange={(v) => updateField('firstName', v)} />
                    <FormInput placeholder="Last name" value={form.lastName} onChange={(v) => updateField('lastName', v)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput type="email" placeholder="Email Address" value={form.email} onChange={(v) => updateField('email', v)} />
                    <FormInput type="tel" placeholder="Phone Number" value={form.phone} onChange={(v) => updateField('phone', v)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput type="url" placeholder="Website (optional)" value={form.website} onChange={(v) => updateField('website', v)} />
                    <FormInput placeholder="Company Name" value={form.company} onChange={(v) => updateField('company', v)} />
                  </div>
                  <ShimmerButton type="button" variant="primary" fullWidth onClick={() => isStep1Valid && setStep(2)} disabled={!isStep1Valid}>
                    Next Step <ArrowRight size={16} className="ml-2" />
                  </ShimmerButton>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormSelect placeholder="Select Service" value={form.service} onChange={(v) => updateField('service', v)} options={serviceOptions} />
                    <FormSelect placeholder="Select Budget" value={form.budget} onChange={(v) => updateField('budget', v)} options={budgetOptions} />
                  </div>
                  <textarea
                    placeholder="Tell us about your brand vision and goals..."
                    aria-label="Tell us about your brand vision and goals"
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-card-hover/50 border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary/50 focus:bg-bg-card-hover/80 transition-colors resize-none"
                  />
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-full text-sm font-medium border border-border text-text-secondary hover:text-text-primary transition-colors">
                      Back
                    </button>
                    <ShimmerButton type="submit" variant="cta" fullWidth disabled={!isStep2Valid || submitting}>
                      {submitted ? (
                        <><Check size={18} className="mr-2" /> Audit Booked!</>
                      ) : submitting ? (
                        'Scheduling strategy call...'
                      ) : (
                        <>Schedule Now <ArrowRight size={18} className="ml-2" /></>
                      )}
                    </ShimmerButton>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FormInput({ type = 'text', placeholder, value, onChange }: {
  type?: string; placeholder: string; value: string; onChange: (v: string) => void
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={type !== 'url'}
      className="w-full px-4 py-3 rounded-xl bg-bg-card-hover/50 border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary/50 focus:bg-bg-card-hover/80 transition-colors"
    />
  )
}

function FormSelect({ placeholder, value, onChange, options }: {
  placeholder: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[]
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      aria-label={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-bg-card-hover/50 border border-border text-text-primary focus:outline-none focus:border-accent-primary/50 transition-colors appearance-none cursor-pointer"
    >
      <option value="" className="bg-bg-card">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-bg-card">{opt.label}</option>
      ))}
    </select>
  )
}
