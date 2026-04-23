import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-[var(--border)] text-white py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-[var(--primary)]" />
              <span className="text-xl font-bold tracking-tight">Average Coder</span>
            </Link>
            <p className="text-slate-300 max-w-sm mb-6">
              Learn Algorithms Like a Pakistani Genius. We make complex computer science concepts chai-level simple using highly relatable local examples.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-[var(--primary)] transition-colors font-medium">
                GitHub
              </a>
              <a href="#" className="text-slate-300 hover:text-[var(--primary)] transition-colors font-medium">
                Twitter
              </a>
              <a href="#" className="text-slate-300 hover:text-[var(--primary)] transition-colors font-medium">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/learn" className="text-slate-300 hover:text-[var(--primary)] transition-colors">Learn Data Structures</Link></li>
              <li><Link href="/learn/algorithms" className="text-slate-300 hover:text-[var(--primary)] transition-colors">Learn Algorithms</Link></li>
              <li><Link href="/practice" className="text-slate-300 hover:text-[var(--primary)] transition-colors">Practice Playground</Link></li>
              <li><Link href="/challenges" className="text-slate-300 hover:text-[var(--primary)] transition-colors">Daily Challenges</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-300 hover:text-[var(--primary)] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-[var(--primary)] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Average Coder. Made with ❤️ in Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
