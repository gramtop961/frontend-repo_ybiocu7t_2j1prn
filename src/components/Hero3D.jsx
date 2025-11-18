import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay to improve text contrast without blocking 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pt-32 pb-20"
        >
          <p className="text-cyan-300/80 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Building playful, robust experiences for the web
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            I craft full‑stack applications with modern tooling, delightful motion, and strong fundamentals. Let’s bring your ideas to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-semibold transition-colors">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/30">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
