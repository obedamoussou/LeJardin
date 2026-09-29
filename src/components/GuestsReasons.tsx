import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { REASONS } from '../data/content'
import Reveal from './Reveal'

export default function GuestsReasons() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        {/* Ils seront présents */}
        {/* <div>
          <Reveal>
            <h3 className="font-display text-3xl uppercase tracking-tight text-sand-50">
              Ils seront présents
            </h3>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-4">
            {GUESTS.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center sm:w-28"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-600/15 text-ember-400">
                  <g.icon size={22} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-sand-100/85">
                  {g.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Pourquoi participer */}
        <div>
          <Reveal>
            <h3 className="font-display text-3xl uppercase tracking-tight text-sand-50">
              Pourquoi participer ?
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <motion.li
                key={r.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ember-600/90">
                  <Check size={16} strokeWidth={3} className="text-white" />
                </span>
                <span className="text-sm text-sand-50">{r.label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
