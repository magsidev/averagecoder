import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-[var(--border)] text-white py-12 mt-20">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-[var(--primary)]" />
              <span className="text-xl font-bold tracking-tight">Average Coder</span>
            </Link>
            <p className="text-slate-300 max-w-sm mb-6">
              Learn Algorithms Like a Pakistani Genius. We make complex computer science concepts chai-level simple using highly relatable local examples.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Platform</h3>
            <ul className="space-y-4 md:space-y-2">
              <li><Link href="/learn" className="inline-block py-2 md:py-0 text-slate-300 hover:text-[var(--primary)] transition-colors">Learn Data Structures & Algorithms</Link></li>
              <li><Link href="/practice" className="inline-block py-2 md:py-0 text-slate-300 hover:text-[var(--primary)] transition-colors">Practice Playground</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-4 md:space-y-2">
              <li><Link href="/about" className="inline-block py-2 md:py-0 text-slate-300 hover:text-[var(--primary)] transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Average Coder. Made with ❤️ in Pakistan. Built by Usman.</p>
        </div>
      </div>
    </footer>
  );
}
