import { motion } from 'framer-motion'
import { ArrowRight, Bed, Utensils, Music, Landmark, Users } from 'lucide-react'
import { EVENT } from '../data/content'
import Basketball from './icons/Basketball'
import Reveal from './Reveal'

const perks = [
  { icon: Bed, label: 'Hébergement' },
  { icon: Utensils, label: 'Tous les repas' },
  { icon: Music, label: 'Activités & soirées' },
  { icon: Basketball, label: 'Accès aux infrastructures' },
  { icon: Landmark, label: 'Visite de Ouidah' },
  { icon: Users, label: 'Deux personnes' },
]

export default function Reserve() {
  return (
    <section id="reserver" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-ember-600/30 bg-gradient-to-br from-night-850 to-night-900 p-8 sm:p-12">
          {/* glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ember-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ember-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <h3 className="font-display text-4xl uppercase tracking-tight text-sand-50 sm:text-5xl">
                  Réservez maintenant
                </h3>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-2 text-lg font-medium text-sand-100/80">Early Bird</p>
              </Reveal>
              <p className="mt-3 font-display text-6xl leading-none text-gradient-ember sm:text-7xl">
                  <span className='line-through'>299.000</span>
                  <span className="ml-2 align-middle text-2xl text-ember-500 sm:text-3xl">
                    {EVENT.currency}
                  </span>
                </p>
              <Reveal delay={0.1}>
                <p className="mt-3 font-display text-6xl leading-none text-gradient-ember sm:text-7xl">
                  {EVENT.price}
                  <span className="ml-2 align-middle text-2xl text-ember-500 sm:text-3xl">
                    {EVENT.currency}
                  </span>
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-1 text-lg font-medium text-sand-100/70 sm:text-xl">
                  soit {EVENT.priceEur} {EVENT.currencyEur}
                </p>
              </Reveal>

              <ul className="mt-7 grid grid-cols-2 gap-4">
                {perks.map((p, i) => (
                  <motion.li
                    key={p.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-2.5 text-sm text-sand-100/85"
                  >
                    <p.icon size={18} className="shrink-0 text-ember-400" />
                    {p.label}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Limited places card */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm">
                <p className="font-display text-xl uppercase tracking-tight text-ember-500">
                  Les places sont limitées
                </p>
                <p className="mt-2 text-sm text-sand-100/70">
                  Une fois les chambres complétées, les réservations seront fermées.
                </p>
                <a href={`mailto:${EVENT.email}`} className="btn-primary mt-6 w-full">
                  Je réserve maintenant <ArrowRight size={16} />
                </a>
                {/* <div className="mt-5 flex items-center justify-center gap-2 text-xs text-sand-100/60">
                  <Lock size={13} className="text-ember-400" /> Paiement 100% sécurisé
                </div>
                <div className="mt-3 flex items-center justify-center gap-2">
                  {['VISA', 'MC', 'Flooz'].map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold tracking-wide text-sand-100/80"
                    >
                      {p}
                    </span>
                  ))}
                </div> */}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
