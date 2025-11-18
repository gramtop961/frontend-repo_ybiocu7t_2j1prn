import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      // In a real setup, post to your backend email endpoint.
      await new Promise((r) => setTimeout(r, 700))
      setStatus('Thanks! I’ll reply soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Try again?')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-white/70">Tell me about your project and timelines. I’ll get back within a day.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
              <textarea name="message" required placeholder="Project details" rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center justify-center rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/30">
                  Send Message
                </button>
                <span className="text-sm text-white/70">{status}</span>
              </div>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent" />
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              <li><span className="text-white/50">Location:</span> Remote / GMT±2</li>
              <li><span className="text-white/50">Email:</span> you@email.com</li>
              <li><span className="text-white/50">Freelance:</span> Available</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
