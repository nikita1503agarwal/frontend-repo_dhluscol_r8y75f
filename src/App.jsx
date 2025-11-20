import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-slate-800 relative">
      {/* Watercolor paper texture background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=60&w=1800&auto=format&fit=crop'), radial-gradient(1200px_800px_at_10%_0%, rgba(255,182,193,0.25), transparent 60%), radial-gradient(900px_700px_at_90%_10%, rgba(147,197,253,0.25), transparent 60%)",
          backgroundBlendMode: 'multiply, normal, normal',
          backgroundSize: 'cover, 100% 100%, 100% 100%'
        }}
      />

      {/* Soft animated wash overlay */}
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(800px 500px at 20% 20%, rgba(255, 214, 165, 0.35), transparent 60%), radial-gradient(700px 500px at 80% 10%, rgba(167, 216, 255, 0.35), transparent 60%), radial-gradient(600px 500px at 50% 90%, rgba(199, 230, 208, 0.35), transparent 60%)'
        }}
      />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Footer />
      </main>
    </div>
  )
}

export default App