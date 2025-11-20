import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900 pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-28">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                AI-powered portfolio SaaS
              </span>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
                Launch a standout portfolio in minutes
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-xl">
                Create, customize, and publish beautiful sites with built-in AI automation. No code required.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#pricing" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition">Get started</a>
                <a href="#work" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">See examples</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 blur-2xl rounded-3xl"></div>
                <div className="relative backdrop-blur-xl rounded-3xl border border-white/10 bg-white/5 p-6">
                  <ul className="grid grid-cols-2 gap-3 text-sm text-white/80">
                    <li className="p-3 rounded-xl bg-white/5 border border-white/10">Drag-and-drop editor</li>
                    <li className="p-3 rounded-xl bg-white/5 border border-white/10">AI content & images</li>
                    <li className="p-3 rounded-xl bg-white/5 border border-white/10">Custom domains</li>
                    <li className="p-3 rounded-xl bg-white/5 border border-white/10">Analytics & SEO</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
