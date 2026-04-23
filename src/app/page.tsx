import Link from "next/link";
import { topics } from "@/data/topics";
import { ArrowRight, BookOpen, Code, Lightbulb, PlayCircle, Star, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[var(--primary)]"></span>
              The #1 DSA Platform in Pakistan
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Learn Algorithms Like a <span className="text-[var(--primary)]">Pakistani Genius</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Understand complex coding concepts with chai-level simple explanations. No boring jargon, just relatable everyday examples.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/learn" className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2">
                Start Learning <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/practice" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                Explore Topics
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes for background */}
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-[var(--primary)]/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Why Average Coder */}
      <section className="w-full py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Average Coder?</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg">We took the hardest CS topics and translated them into the language of the streets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pakistani Relatable</h3>
              <p className="text-[var(--muted-foreground)]">Learn Stacks like plates at a dhaba. Queues like NADRA lines. Examples that actually make sense to you.</p>
            </div>
            
            <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                <PlayCircle className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visual Animations</h3>
              <p className="text-[var(--muted-foreground)]">Don't just read about algorithms. Watch them sort, search, and traverse in real-time with beautiful animations.</p>
            </div>
            
            <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                <Terminal className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Practice</h3>
              <p className="text-[var(--muted-foreground)]">Built-in code editor to write and test your solutions immediately in Python, JavaScript, Java, or C++.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics Grid */}
      <section className="w-full py-24 bg-[var(--muted)]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Every Topic</h2>
              <p className="text-[var(--muted-foreground)] text-lg">From zero to hero in Data Structures and Algorithms.</p>
            </div>
            <Link href="/learn" className="hidden md:flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <Link href={`/learn/${topic.id}`} key={topic.id} className="group flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[var(--primary)]/10 rounded-lg group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    {topic.category === "Data Structures" ? <BookOpen className="w-6 h-6 text-[var(--primary)] group-hover:text-white" /> : <Code className="w-6 h-6 text-[var(--primary)] group-hover:text-white" />}
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    topic.difficulty === "Beginner" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    topic.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {topic.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{topic.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4 flex-grow">{topic.description}</p>
                <div className="text-sm font-medium text-[var(--primary)] flex items-center mt-auto">
                  Start learning <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="w-full py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Students</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg">See what other engineers are saying about Average Coder.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Ali",
                role: "CS Student at FAST",
                content: "I finally understand Linked Lists. The treasure hunt analogy was spot on. I used to fall asleep reading textbooks, now I'm actually coding!"
              },
              {
                name: "Sara Khan",
                role: "Junior Dev",
                content: "The dynamic programming explanation using 'remembering answers' literally saved my job interview. This site is a goldmine for Pakistani students."
              },
              {
                name: "Bilal",
                role: "Self-taught Coder",
                content: "Explaining stacks using dhaba plates? Pure genius. I've tried LeetCode but this is so much more friendly and easier to grasp as a beginner."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[var(--card)] border border-[var(--border)] p-8 rounded-2xl relative">
                <div className="flex text-[var(--gold-500)] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[var(--foreground)] mb-6 text-lg italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-navy-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--muted-foreground)]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
