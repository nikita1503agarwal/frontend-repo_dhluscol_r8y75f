import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]"></div>

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