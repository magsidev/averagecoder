import { 
  BookOpen, 
  Code2, 
  Globe, 
  Heart, 
  ShieldCheck, 
  Target, 
  Trophy, 
  Users, 
  Zap, 
  Search, 
  Database, 
  TrendingUp,
  Cpu,
  BrainCircuit,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary)]/5 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary)]/10 rounded-full">
            The Story Behind Average Coder
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Built for <span className="text-[var(--primary)]">Clarity</span>,<br/>
            Made for <span className="text-gold-500">Logicians</span>.
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-[var(--muted-foreground)] leading-relaxed">
            Average Coder was born from a simple realization: Computer Science isn't hard, the way we teach it is. We're here to kill the "Ratta" and replace it with real-world logic.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 border-y border-[var(--border)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 relative group">
                {/* Visual Representation of Platform */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-20">
                  <div className="w-32 h-32 bg-[var(--primary)]/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                    <BrainCircuit className="w-16 h-16 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-2">Average Coder</h3>
                  <p className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm">Empowering Students Worldwide</p>
                </div>
                
                {/* Achievement Floating Tags */}
                <div className="absolute top-8 left-8 z-30 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-3 h-3 text-gold-500" /> Simplified Learning
                </div>
                <div className="absolute top-24 right-8 z-30 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                  <Code2 className="w-3 h-3 text-blue-400" /> Interactive Playgrounds
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl border border-[var(--border)] max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500 p-3 rounded-xl text-white shadow-lg shadow-emerald-500/20">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted-foreground)] uppercase font-bold tracking-tighter">Core Mission</p>
                    <p className="font-bold text-sm leading-tight">Making complex algorithms accessible to everyone.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight">The "Stupid Simple" Philosophy</h2>
                <div className="w-20 h-2 bg-[var(--primary)] rounded-full"></div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  We believe that the best technology is invisible—it just works. We saw students struggling with complex data structures and thought: <em>"Why can't this be as simple as an egg tray or a Dhaba line?"</em>
                </p>
                <p>
                  That's why Average Coder focuses on the <strong>"Asal Kahani"</strong> (Real Story) behind every algorithm. We break down intimidating theoretical concepts into everyday analogies that just make sense.
                </p>
                <p>
                  With our interactive multi-language playgrounds, step-by-step visualizers, and culturally relevant storytelling, we are building a foundation that helps students bridge the gap between abstract computer science and real-world problem-solving.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-[var(--border)]">
                  <Database className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm">Data Structures</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-[var(--border)]">
                  <Globe className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm">Global Reach</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-[var(--border)]">
                  <Zap className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm">Fast Execution</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-[var(--border)]">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm">Proven Logic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center italic">
            <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              "True understanding of technology only comes from managing your own 'why'. If you aren't building, you aren't learning."
            </h3>
            <p className="text-emerald-400 font-bold tracking-widest uppercase">— Average Coder Team</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="text-6xl font-black text-[var(--primary)]">13+</div>
              <p className="text-lg font-bold text-[var(--foreground)]">Core Algorithms</p>
              <p className="text-sm text-[var(--muted-foreground)]">Master the essential data structures and algorithms needed for any technical interview.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl font-black text-[var(--primary)]">3</div>
              <p className="text-lg font-bold text-[var(--foreground)]">Programming Languages</p>
              <p className="text-sm text-[var(--muted-foreground)]">Practice and execute your logic in JavaScript, Python, and C++.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl font-black text-[var(--primary)]">100%</div>
              <p className="text-lg font-bold text-[var(--foreground)]">Clarity Focus</p>
              <p className="text-sm text-[var(--muted-foreground)]">Combining technical excellence with the art of simple, cultural communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-black rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Stop Reading. Start Mastering.</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto opacity-90 relative z-10 leading-relaxed">
            This platform was built to give you the clarity you wish you had in university. It's time to build your foundation.
          </p>
          <Link href="/learn" className="inline-block px-12 py-5 bg-[var(--primary)] text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-emerald-500/20 relative z-10 text-lg">
            Let's Crack the Logic
          </Link>
        </div>
      </section>
    </div>
  );
}
