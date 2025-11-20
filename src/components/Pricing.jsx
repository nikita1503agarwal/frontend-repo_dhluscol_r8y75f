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
      {/* watercolor backdrop */}
      <div className="absolute inset-0" style={{
        background:
          'radial-gradient(700px 500px at 0% 100%, rgba(255, 214, 165, 0.35), transparent 35%), radial-gradient(700px 500px at 100% 100%, rgba(167, 216, 255, 0.35), transparent 35%)'
      }}></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900">Simple pricing</h2>
          <p className="mt-4 text-slate-700">Choose a plan that grows with you.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{opacity:0, y:16}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:.55, delay:i*0.06}}
              className={`relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm ${t.name==='Pro' ? 'ring-2 ring-pink-300/60' : ''}`}
            >
              {t.name==='Pro' && <span className="absolute -top-3 right-6 px-2 py-1 text-xs rounded-full bg-slate-900 text-white">Popular</span>}
              <h3 className="text-slate-900 font-medium text-lg">{t.name}</h3>
              <p className="mt-1 text-slate-600 text-sm">{t.desc}</p>
              <div className="mt-5 text-4xl font-semibold text-slate-900">{t.price}</div>
              <ul className="mt-5 grid gap-2 text-sm text-slate-800">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-pink-300 to-sky-300"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-xl bg-slate-900 text-white font-medium shadow"
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
