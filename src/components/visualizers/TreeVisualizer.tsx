"use client";

import { motion } from "framer-motion";

export default function TreeVisualizer() {
  return (
    <div className="w-full flex flex-col h-full bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">Family Tree (Hierarchical)</h3>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 min-h-[300px] relative">
        <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          <path d="M 50% 20% L 30% 50%" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M 50% 20% L 70% 50%" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M 30% 50% L 15% 80%" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M 30% 50% L 45% 80%" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M 70% 50% L 85% 80%" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
        </svg>

        <div className="flex flex-col items-center h-full w-full justify-between py-10">
          <motion.div initial={{scale:0}} animate={{scale:1}} className="bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-xl shadow-lg border-2 border-white">
            Root: Dada Abu
          </motion.div>
          
          <div className="flex w-full justify-around mt-10">
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.2}} className="bg-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg border-2 border-white">
              Node: Father
            </motion.div>
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3}} className="bg-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg border-2 border-white">
              Node: Uncle
            </motion.div>
          </div>

          <div className="flex w-full justify-between mt-10 px-10">
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4}} className="bg-green-500 text-white font-bold px-4 py-2 rounded-xl shadow-md border-2 border-white text-sm">Leaf: You</motion.div>
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5}} className="bg-green-500 text-white font-bold px-4 py-2 rounded-xl shadow-md border-2 border-white text-sm">Leaf: Sister</motion.div>
            <div className="w-10"></div>
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.6}} className="bg-green-500 text-white font-bold px-4 py-2 rounded-xl shadow-md border-2 border-white text-sm">Leaf: Cousin</motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
