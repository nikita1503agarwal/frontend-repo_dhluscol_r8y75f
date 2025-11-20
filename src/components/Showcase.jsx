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
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900">Painted projects</h2>
          <p className="mt-4 text-slate-700">Soft filters and grain emulate watercolor swatches.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  style={{ filter: 'saturate(0.8) contrast(0.95) brightness(1.05)', mixBlendMode: 'multiply' }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                {/* watercolor grain overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
                  mixBlendMode: 'overlay',
                  opacity: 0.25
                }} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900 font-medium">{p.title}</h3>
                  <span className="text-sm text-slate-600">View ↗</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                  ))}
                </div>
              </div>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
