"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-[var(--primary)]" />
              <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                Average Coder
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div
                className="relative group"
                onMouseEnter={() => setIsLearnOpen(true)}
                onMouseLeave={() => setIsLearnOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Learn
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                <AnimatePresence>
                  {isLearnOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-[600px] rounded-md shadow-lg bg-[var(--card)] ring-1 ring-black ring-opacity-5 border z-50 p-6 grid grid-cols-2 gap-8"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4">Data Structures</h3>
                        <ul className="space-y-2">
                          <li><Link href="/learn/array" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Arrays</Link></li>
                          <li><Link href="/learn/linked-list" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Linked Lists</Link></li>
                          <li><Link href="/learn/stack" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Stacks</Link></li>
                          <li><Link href="/learn/queue" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Queues</Link></li>
                          <li><Link href="/learn/hash-table" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Hash Tables</Link></li>
                          <li><Link href="/learn/tree" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Trees & BST</Link></li>
                          <li><Link href="/learn/graph" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Graphs</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4">Algorithms</h3>
                        <ul className="space-y-2">
                          <li><Link href="/learn/bubble-sort" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Bubble Sort</Link></li>
                          <li><Link href="/learn/binary-search" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Binary Search</Link></li>
                          <li><Link href="/learn/bfs" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">BFS & DFS</Link></li>
                          <li><Link href="/learn/recursion" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Recursion</Link></li>
                          <li><Link href="/learn/dynamic-programming" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)]">Dynamic Programming</Link></li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/practice" className="px-3 py-2 rounded-md text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Practice
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search topics..."
                className="h-9 w-64 rounded-md border border-[var(--border)] bg-[var(--input)] pl-9 pr-4 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              />
            </div>
            <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[var(--primary)]/90 transition-colors">
              Sign In
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground)] hover:text-[var(--primary)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[var(--border)]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--background)]">
              <Link href="/learn" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)]">Learn</Link>
              <Link href="/practice" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)]">Practice</Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)]">About</Link>
              <div className="mt-4 px-3">
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-full h-10 rounded-md border border-[var(--border)] bg-[var(--input)] px-4 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
