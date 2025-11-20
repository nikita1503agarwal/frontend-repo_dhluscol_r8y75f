import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useCallback } from 'react';

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-6, 6]);

  const onMouseMove = useCallback((e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) - 0.5;
    const y = (e.clientY / innerHeight) - 0.5;
    mx.set(x);
    my.set(y);
  }, [mx, my]);

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden" onMouseMove={onMouseMove}>
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Animated gradient veil */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950"
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-32">
            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="[transform-style:preserve-3d]"
            >
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
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-blue-500/20"
                >
                  Get started
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#work"
                  className="px-6 py-3 rounded-xl border border-white/20 text-white bg-white/5/0 hover:bg-white/10"
                >
                  See examples
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  aria-hidden
                  className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 blur-2xl rounded-3xl"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="relative backdrop-blur-xl rounded-3xl border border-white/10 bg-white/5 p-6">
                  <ul className="grid grid-cols-2 gap-3 text-sm text-white/80">
                    {['Drag-and-drop editor','AI content & images','Custom domains','Analytics & SEO'].map((f) => (
                      <motion.li
                        key={f}
                        whileHover={{ scale: 1.03 }}
                        className="p-3 rounded-xl bg-white/5 border border-white/10"
                      >
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-6 hidden sm:flex h-10 w-6 items-center justify-center rounded-full border border-white/20"
          >
            <motion.span
              className="h-2 w-1 rounded-full bg-white/70"
              animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
