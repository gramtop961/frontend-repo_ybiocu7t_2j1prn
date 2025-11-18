import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero3D() {
  // Mouse-driven parallax/tilt
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  // Smooth springs for natural feel
  const sx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.6 })

  // Map mouse delta to subtle 3D tilt + parallax
  const rotateX = useTransform(sy, [ -0.5, 0.5 ], [ 8, -8 ])
  const rotateY = useTransform(sx, [ -0.5, 0.5 ], [ -12, 12 ])
  const parallaxX = useTransform(sx, [ -0.5, 0.5 ], [ -12, 12 ])
  const parallaxY = useTransform(sy, [ -0.5, 0.5 ], [ -8, 8 ])

  // Scroll-driven depth + reveal
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.94])
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -40])
  const textY = useTransform(scrollYProgress, [0, 0.25], [0, -24])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.6])

  useEffect(() => {
    // Initialize to center
    mx.set(0)
    my.set(0)
  }, [])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width // 0..1
    const y = (e.clientY - rect.top) / rect.height // 0..1
    // Normalize around center to -0.5..0.5
    mx.set(x - 0.5)
    my.set(y - 0.5)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      className="relative min-h-[90vh] flex items-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive 3D hero section"
    >
      {/* 3D stage with perspective and subtle tilt/parallax on mouse move + scroll depth */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          perspective: 1000,
          scale: heroScale,
          y: heroY,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ rotateX, rotateY, x: parallaxX, y: parallaxY }}
        >
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </motion.div>

      {/* gradient overlay to improve text contrast without blocking 3D interactions */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80"
        style={{ opacity: glowOpacity }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pt-32 pb-20"
          style={{ y: textY }}
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
