import { motion } from 'framer-motion'
import { Sparkles, Cpu, Palette } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: <Cpu size={16} />, label: 'Full‑stack' },
    { icon: <Palette size={16} />, label: 'Design systems' },
    { icon: <Sparkles size={16} />, label: 'Animations' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About</h2>
            <p className="mt-4 text-white/70">
              I’m a software developer focused on interactive UI, performance, and DX. I blend solid engineering with tasteful motion to craft experiences that feel alive and purposeful.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {skills.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                  {s.icon} {s.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="aspect-video rounded-xl bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-indigo-500/20 to-transparent" />
            <p className="mt-4 text-white/70 text-sm">
              Tools I reach for: React, FastAPI, Tailwind, Framer Motion, MongoDB, and Spline for 3D.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
