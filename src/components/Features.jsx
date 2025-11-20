import { Brain, Sparkles, Workflow, Clock3, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } }
};

export default function Features() {
  const items = [
    { icon: Brain, title: "AI content generation", desc: "Instantly draft copy and imagery tailored to your niche." },
    { icon: Workflow, title: "Automation flows", desc: "Connect forms to CRM, email, and automations without code." },
    { icon: Clock3, title: "1-click updates", desc: "Publish changes globally and roll back anytime." },
    { icon: Zap, title: "Fast performance", desc: "Edge-optimized delivery and best-in-class Lighthouse scores." },
    { icon: Shield, title: "Secure by default", desc: "Best practices for auth, DNS and DDoS baked in." },
    { icon: Sparkles, title: "Polished themes", desc: "Modern, accessible designs that adapt to your brand." },
  ];

  return (
    <section id="ai" className="relative py-28">
      {/* watercolor backdrop */}
      <div className="absolute inset-0" style={{
        background:
          'radial-gradient(700px 500px at 15% 10%, rgba(255, 214, 165, 0.35), transparent 60%), radial-gradient(700px 500px at 85% 0%, rgba(167, 216, 255, 0.35), transparent 60%)'
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.6}}
            className="text-3xl sm:text-5xl font-semibold text-slate-900"
          >
            Watercolor motion, AI built-in
          </motion.h2>
          <p className="mt-4 text-slate-700">Soft glows and gentle motion create an inviting, hand-painted feel.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} variants={item} className="group relative rounded-2xl bg-white/80 border border-slate-200 p-6 overflow-hidden shadow-sm">
              <motion.div
                aria-hidden
                className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-pink-300/30 blur-2xl mix-blend-multiply"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-pink-300 to-sky-300 text-slate-800 inline-flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-slate-900 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
