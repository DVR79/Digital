'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import ShimmerButton from '@/components/ui/ShimmerButton'

type Currency = 'USD' | 'INR'

const currencySettings: Record<Currency, {
  symbol: string
  locale: string
  budgetMin: number
  budgetMax: number
  budgetStep: number
  budgetDefault: number
  acvMin: number
  acvMax: number
  acvStep: number
  acvDefault: number
  ecomThreshold: number
  cpcEcom: number
  cpcLead: number
}> = {
  USD: {
    symbol: '$', locale: 'en-US',
    budgetMin: 2000, budgetMax: 100000, budgetStep: 1000, budgetDefault: 10000,
    acvMin: 500, acvMax: 50000, acvStep: 500, acvDefault: 5000,
    ecomThreshold: 1500, cpcEcom: 1.20, cpcLead: 4.00,
  },
  INR: {
    symbol: '₹', locale: 'en-IN',
    budgetMin: 100000, budgetMax: 5000000, budgetStep: 50000, budgetDefault: 500000,
    acvMin: 10000, acvMax: 2500000, acvStep: 10000, acvDefault: 250000,
    ecomThreshold: 100000, cpcEcom: 30.00, cpcLead: 150.00,
  },
}

export default function ROICalculator() {
  const [currency, setCurrencyState] = useState<Currency>('USD')
  const [budget, setBudget] = useState(currencySettings.USD.budgetDefault)
  const [convRate, setConvRate] = useState(1.5)
  const [acv, setAcv] = useState(currencySettings.USD.acvDefault)

  const setCurrency = (next: Currency) => {
    setCurrencyState(next)
    setBudget(currencySettings[next].budgetDefault)
    setAcv(currencySettings[next].acvDefault)
  }

  const settings = currencySettings[currency]
  const isEcommerce = acv <= settings.ecomThreshold
  const avgCpc = isEcommerce ? settings.cpcEcom : settings.cpcLead
  const closeRate = isEcommerce ? 1.0 : 0.15
  const monthlyVisitors = budget / avgCpc
  const leads = Math.round(monthlyVisitors * (convRate / 100))
  const cpl = leads > 0 ? Math.round(budget / leads) : 0
  const pipelineValue = Math.round(leads * closeRate * acv)
  const roi = budget > 0 ? (pipelineValue / budget).toFixed(1) : '0.0'

  const fmt = (n: number) => `${settings.symbol}${n.toLocaleString(settings.locale)}`

  return (
    <section id="roi" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive Insights"
          title="Estimate Your Revenue Potential"
          description="Use the sliders to preview the lead volumes, pipeline values, and ROI models we can generate together based on a 3.5x target ROAS."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative gradient-border rounded-3xl"
        >
          <div className="rounded-3xl bg-bg-card/60 backdrop-blur-xl p-6 lg:p-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className={`text-sm font-medium transition-colors ${currency === 'USD' ? 'text-text-primary' : 'text-text-secondary'}`}>USD ($)</span>
              <button
                type="button"
                role="switch"
                aria-checked={currency === 'INR'}
                aria-label="Toggle currency between USD and INR"
                onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
                className="relative w-14 h-7 rounded-full bg-bg-card-hover border border-border transition-colors"
              >
                <span
                  className={`absolute top-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary transition-transform shadow-lg ${
                    currency === 'INR' ? 'translate-x-7' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${currency === 'INR' ? 'text-text-primary' : 'text-text-secondary'}`}>INR (₹)</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <Slider
                  label="Monthly Ad Budget"
                  value={fmt(budget)}
                  min={settings.budgetMin}
                  max={settings.budgetMax}
                  step={settings.budgetStep}
                  current={budget}
                  onChange={setBudget}
                />
                <Slider
                  label="Target Conversion Rate"
                  value={`${convRate.toFixed(1)}%`}
                  min={0.5}
                  max={8.0}
                  step={0.1}
                  current={convRate}
                  onChange={setConvRate}
                />
                <Slider
                  label="Average Customer Value (ACV)"
                  value={fmt(acv)}
                  min={settings.acvMin}
                  max={settings.acvMax}
                  step={settings.acvStep}
                  current={acv}
                  onChange={setAcv}
                />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <ResultCard label={isEcommerce ? 'Est. Qualified Orders' : 'Est. Qualified Leads'} value={leads.toLocaleString(settings.locale)} />
                  <ResultCard label={isEcommerce ? 'Est. Cost / Order' : 'Est. Cost Per Lead'} value={fmt(cpl)} />
                </div>
                <ResultCard label="Projected Revenue Value" value={fmt(pipelineValue)} highlight />
                <ResultCard label="Estimated ROI Multiple" value={`${roi}x`} />
                <ShimmerButton href="#contact" variant="cta" fullWidth>
                  Apply For This Growth Plan
                </ShimmerButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Slider({ label, value, min, max, step, current, onChange }: {
  label: string; value: string; min: number; max: number; step: number; current: number; onChange: (v: number) => void
}) {
  const pct = ((current - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <label className="text-sm font-medium text-text-secondary">{label}</label>
        <span className="text-sm font-bold font-heading gradient-text">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-bg-card-hover slider-input"
        style={{ background: `linear-gradient(to right, var(--accent-primary) 0%, var(--accent-secondary) ${pct}%, var(--bg-card-hover) ${pct}%, var(--bg-card-hover) 100%)` }}
      />
      <style jsx>{`
        .slider-input::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          cursor: pointer;
          box-shadow: 0 0 10px color-mix(in srgb, var(--accent-primary) 50%, transparent);
        }
        .slider-input::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px color-mix(in srgb, var(--accent-primary) 50%, transparent);
        }
      `}</style>
    </div>
  )
}

function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-4 lg:p-5 rounded-xl border ${highlight ? 'bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border-accent-primary/30' : 'glass'}`}>
      <p className="text-xs text-text-secondary mb-1">{label}</p>
      <p className={`text-2xl lg:text-3xl font-bold font-heading ${highlight ? 'gradient-text' : 'text-text-primary'}`}>{value}</p>
    </div>
  )
}
