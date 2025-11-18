import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30 ring-1 ring-white/20" />
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">Software Developer</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10" />
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1.5 rounded-lg transition-colors">
                <Mail size={16} /> Hire Me
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white/80 hover:text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
                  {n.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
                <a href="#contact" onClick={() => setOpen(false)} className="ml-auto inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1.5 rounded-lg transition-colors">
                  <Mail size={16} /> Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
