import { motion } from 'framer-motion'
import { Code2, Rocket, Puzzle, Wrench } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'A multiplayer canvas and editor with CRDT sync, presence, and voice chat.',
    tags: ['React', 'WebRTC', 'CRDT', 'Tailwind'],
  },
  {
    title: 'AI Product Finder',
    description: 'Semantic search across millions of products with vector embeddings and RAG.',
    tags: ['FastAPI', 'OpenAI', 'Pinecone', 'MongoDB'],
  },
  {
    title: '3D Commerce Demo',
    description: 'Immersive product explorer built with Spline and custom shaders.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
            <p className="text-white/70 mt-2">A few projects that highlight range, depth, and a love for polish.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/70">
            <Code2 size={18} /> quality over quantity
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-colors"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white/30 text-sm">
                <Rocket className="opacity-60" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{p.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-900/60 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
