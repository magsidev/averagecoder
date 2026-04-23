"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, UserMinus, RotateCcw } from "lucide-react";

interface Person {
  id: number;
  name: string;
  color: string;
}

const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
];

const names = ["Ahmed", "Sara", "Bilal", "Zainab", "Ali", "Fatima", "Usman", "Ayesha"];

export default function QueueVisualizer() {
  const [queue, setQueue] = useState<Person[]>([]);
  const [count, setCount] = useState(0);
  const [serving, setServing] = useState<Person | null>(null);

  const handleEnqueue = () => {
    if (queue.length >= 6) return; // Max people in line
    const newPerson = {
      id: count,
      name: names[count % names.length],
      color: colors[count % colors.length],
    };
    setQueue((prev) => [...prev, newPerson]);
    setCount((prev) => prev + 1);
  };

  const handleDequeue = () => {
    if (queue.length === 0) return;
    const servedPerson = queue[0];
    setServing(servedPerson);
    setQueue((prev) => prev.slice(1));
    
    // Clear the serving person after a short delay
    setTimeout(() => {
      setServing(null);
    }, 1500);
  };

  const handleReset = () => {
    setQueue([]);
    setCount(0);
    setServing(null);
  };

  return (
    <div className="w-full flex flex-col h-full bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">NADRA Office Line (FIFO)</h3>
        <div className="flex gap-2">
          <button
            onClick={handleEnqueue}
            disabled={queue.length >= 6}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-[var(--primary)] rounded-md hover:bg-[var(--primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <UserPlus className="w-4 h-4" /> Enqueue (Join)
          </button>
          <button
            onClick={handleDequeue}
            disabled={queue.length === 0 || serving !== null}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <UserMinus className="w-4 h-4" /> Dequeue (Serve)
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] border border-[var(--border)] rounded-md hover:bg-[var(--muted)] transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 relative min-h-[300px] overflow-hidden">
        {/* Counter/Desk area */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-40 border-4 border-slate-700 dark:border-slate-500 rounded-lg flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 z-0">
          <div className="text-xl font-bold mb-2">DESK 1</div>
          <div className="text-sm text-center text-slate-500">NADRA Officer</div>
          
          <AnimatePresence>
            {serving && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -50 }}
                className={`absolute -right-6 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs ${serving.color} shadow-lg z-20`}
              >
                {serving.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The Queue line */}
        <div className="flex items-center ml-40 h-24 relative w-full overflow-hidden">
          <div className="absolute left-0 w-full h-1 bg-dashed bg-slate-300 dark:bg-slate-600 border-t-2 border-dashed border-slate-300 dark:border-slate-600 top-1/2 -translate-y-1/2 -z-10"></div>
          
          <div className="flex gap-4 px-4 items-center">
            <AnimatePresence>
              {queue.map((person, index) => (
                <motion.div
                  key={person.id}
                  layout
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full flex flex-col items-center justify-center text-white font-bold text-xs shadow-[0_4px_10px_rgba(0,0,0,0.15)] z-10 ${person.color} relative`}>
                    {person.name}
                    {index === 0 && (
                      <span className="absolute -top-6 text-[10px] font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                        FRONT
                      </span>
                    )}
                    {index === queue.length - 1 && queue.length > 1 && (
                      <span className="absolute -bottom-6 text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                        REAR
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {queue.length === 0 && !serving && (
            <div className="text-[var(--muted-foreground)] font-medium italic ml-10">
              Line is empty. Desk is free!
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 bg-[var(--muted)]/50 border-t border-[var(--border)] text-sm text-[var(--muted-foreground)]">
        <p><strong>FIFO Principle:</strong> First In, First Out. The first person to join the line is the first one to be served at the desk.</p>
      </div>
    </div>
  );
}
