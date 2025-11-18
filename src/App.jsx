import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero3D />
        <Showcase />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built with love, motion, and clean code.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
