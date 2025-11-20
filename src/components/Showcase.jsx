import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Studio Nova',
    url: 'https://example.com/studio-nova',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    tags: ['Creative', 'Animations', 'Portfolio']
  },
  {
    title: 'Finlytics',
    url: 'https://example.com/finlytics',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    tags: ['SaaS', 'Dashboard', 'Data']
  },
  {
    title: 'Terra Homes',
    url: 'https://example.com/terra',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
    tags: ['Real Estate', 'Lead Gen']
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">Previous websites</h2>
          <p className="mt-4 text-white/70">A selection of sites Ive crafted. Click to explore.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <span className="text-sm text-white/60">View ↗</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/10 text-white/70">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
