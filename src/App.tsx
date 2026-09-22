import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Honors from '@/components/Honors';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base-950 text-slate-100 font-sans selection:bg-market-500/25 selection:text-market-300">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Timeline />
        <Projects />
        <Honors />
        <Footer />
      </main>
    </div>
  );
}

export default App;
