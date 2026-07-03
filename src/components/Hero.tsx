import { motion } from 'framer-motion'
import { Calendar, MapPin, Hotel, ArrowRight } from 'lucide-react'
import { EVENT, HERO_TAGS } from '../data/content'
// import { IMAGES } from '../data/images'
import Countdown from './Countdown'
import Back from "../../public/back.jpeg"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          // src={IMAGES.heroBonfire}
          src={Back}
          alt="Feu de plage au coucher du soleil"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-vignette" />
      </div>

      <div className="container-x relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Left copy */}
          <div>
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
              <span className="mb-3 inline-block font-script text-3xl text-sand-50 sm:text-4xl">The</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="font-display text-7xl uppercase leading-[0.85] tracking-tight text-ember-500 drop-shadow-[0_4px_24px_rgba(226,86,15,0.35)] sm:text-8xl md:text-9xl"
            >
              Detty
            </motion.h1>

            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible">
              <span className="font-script text-6xl text-sand-50 sm:text-7xl">Escape</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="mt-4 text-xl font-semibold text-sand-50 sm:text-2xl"
            >
              {EVENT.tagline}
            </motion.p>

            {/* Meta row */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm"
            >
              <Meta icon={Calendar} lines={EVENT.dates.split(' - ')} />
              <Meta icon={Hotel} lines={[EVENT.hotel]} />
              <Meta icon={MapPin} lines={[EVENT.location]} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-lg text-base leading-relaxed text-sand-100/90"
            >
              {EVENT.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={6}
              initial="hidden"
              animate="visible"
              className="mt-4 flex max-w-xl flex-wrap gap-x-3 gap-y-1 text-sm text-sand-100/85"
            >
              {HERO_TAGS.map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={7}
              initial="hidden"
              animate="visible"
              className="mt-5 font-script text-3xl text-ember-400"
            >
              Ça va bien se passer !
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={8}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="#reserver" className="btn-primary">
                Je réserve ma place <ArrowRight size={16} />
              </a>
              <a href="#programme" className="btn-ghost">
                Voir le programme
              </a>
            </motion.div>
          </div>

          {/* Right countdown card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card w-full max-w-sm justify-self-end p-6 shadow-2xl shadow-black/50 lg:p-7"
          >
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-sand-100/70">
              L'évasion commence dans
            </p>
            <div className="mt-5">
              <Countdown target={EVENT.target} />
            </div>

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* <div className="flex items-center gap-2 text-sm font-medium text-sand-50">
              <Users size={18} className="text-ember-400" />
              <span>
                <strong className="font-bold text-white">{EVENT.roomsLeft}</strong> chambres restantes
              </span>
            </div> */}
            {/* <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${roomsPct}%` }}
                transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-ember-600 to-ember-400"
              />
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night-950 to-transparent" />
    </section>
  )
}

function Meta({ icon: Icon, lines }: { icon: typeof Calendar; lines: string[] }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={18} className="shrink-0 text-ember-500" />
      <span className="leading-tight text-sand-50">
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </span>
    </div>
  )
}
