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
      {/* Watercolor sweep background in hero */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background:
            'radial-gradient(900px 600px at 10% 20%, rgba(255, 214, 165, 0.45), transparent 60%), radial-gradient(900px 600px at 90% 10%, rgba(167, 216, 255, 0.45), transparent 60%), radial-gradient(900px 600px at 50% 90%, rgba(199, 230, 208, 0.45), transparent 60%)'
        }}
      />

      {/* soft paper vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(1200px 800px at 50% 0%, rgba(255,255,255,0.4), transparent 70%)'
      }} />

      {/* optional 3D scene, subtly blurred to feel painted */}
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%', filter: 'saturate(0.8) blur(0.5px)' }} />
      </div>

      {/* Floating blotches */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl mix-blend-multiply"
        animate={{ y: [0, -25, 0], x:[0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-16 bottom-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl mix-blend-multiply"
        animate={{ y: [0, 20, 0], x:[0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-slate-800 border border-slate-200 mb-4 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Hand-painted aesthetic
              </span>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 drop-shadow-[0_0_30px_rgba(255,182,193,0.25)]">
                A watercolor web experience
              </h1>
              <p className="mt-5 text-lg text-slate-700 max-w-xl">
                Gentle textures, ink-like motion, and soft palettes bring your portfolio to life.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium shadow-md shadow-slate-500/20"
                >
                  Get started
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#work"
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 bg-white/70 hover:bg-white"
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
                  className="absolute -inset-6 bg-gradient-to-tr from-pink-300/30 to-sky-300/30 blur-2xl rounded-3xl mix-blend-multiply"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="relative backdrop-blur-md rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl">
                  <ul className="grid grid-cols-2 gap-3 text-sm text-slate-800">
                    {['Organic motion','Ink diffusion glows','Soft palettes','Paper texture'].map((f) => (
                      <motion.li
                        key={f}
                        whileHover={{ scale: 1.03 }}
                        className="p-3 rounded-xl bg-white/70 border border-slate-200 shadow-sm"
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
            className="mx-auto mt-6 hidden sm:flex h-10 w-6 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 shadow"
          >
            <motion.span
              className="h-2 w-1 rounded-full bg-slate-700"
              animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
