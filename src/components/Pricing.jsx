import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$9/mo',
    desc: 'Perfect for personal portfolios',
    features: ['1 website', 'Basic themes', 'AI copy assist', 'SSL & analytics']
  },
  {
    name: 'Pro',
    price: '$29/mo',
    desc: 'For freelancers and creators',
    features: ['5 websites', 'Theme editor', 'AI image & copy', 'Custom domain']
  },
  {
    name: 'Agency',
    price: '$79/mo',
    desc: 'Scale with clients',
    features: ['Unlimited sites', 'White-label', 'Team seats', 'Priority support']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.15),transparent_35%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">Simple pricing</h2>
          <p className="mt-4 text-white/70">Choose a plan that grows with you.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{opacity:0, y:16}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:.55, delay:i*0.06}}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 ${t.name==='Pro' ? 'ring-2 ring-blue-400/60' : ''}`}
            >
              {t.name==='Pro' && <span className="absolute -top-3 right-6 px-2 py-1 text-xs rounded-full bg-blue-500 text-white">Popular</span>}
              <h3 className="text-white font-medium text-lg">{t.name}</h3>
              <p className="mt-1 text-white/60 text-sm">{t.desc}</p>
              <div className="mt-5 text-4xl font-semibold text-white">{t.price}</div>
              <ul className="mt-5 grid gap-2 text-sm text-white/80">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-xl bg-white text-slate-900 font-medium"
              >
                Choose {t.name}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
