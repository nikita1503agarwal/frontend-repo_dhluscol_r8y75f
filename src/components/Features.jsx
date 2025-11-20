import { Brain, Sparkles, Workflow, Clock3, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="ai" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.15),transparent_40%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl sm:text-5xl font-semibold text-white">AI automation built-in</motion.h2>
          <p className="mt-4 text-white/70">From content to publishing, our AI assists every step so you can focus on your craft.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5, delay:i*0.05}} className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-500/30 to-violet-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-500 to-violet-500 text-white inline-flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
