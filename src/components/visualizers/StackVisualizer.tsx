"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, RotateCcw } from "lucide-react";

interface Plate {
  id: number;
  color: string;
}

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
];

export default function StackVisualizer() {
  const [stack, setStack] = useState<Plate[]>([]);
  const [count, setCount] = useState(0);

  const handlePush = () => {
    if (stack.length >= 7) return; // Max height to fit in the container
    const newPlate = {
      id: count,
      color: colors[count % colors.length],
    };
    setStack((prev) => [...prev, newPlate]);
    setCount((prev) => prev + 1);
  };

  const handlePop = () => {
    if (stack.length === 0) return;
    setStack((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setStack([]);
    setCount(0);
  };

  return (
    <div className="w-full flex flex-col h-full bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">Dhaba Plate Stack (LIFO)</h3>
        <div className="flex gap-2">
          <button
            onClick={handlePush}
            disabled={stack.length >= 7}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-[var(--primary)] rounded-md hover:bg-[var(--primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-4 h-4" /> Push
          </button>
          <button
            onClick={handlePop}
            disabled={stack.length === 0}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Minus className="w-4 h-4" /> Pop
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] border border-[var(--border)] rounded-md hover:bg-[var(--muted)] transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-end p-8 relative min-h-[300px] bg-gradient-to-t from-[var(--muted)]/30 to-transparent">
        {/* Background illustration elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}>
        </div>

        {/* Stack Container */}
        <div className="w-64 h-full flex flex-col-reverse justify-start items-center relative border-x-2 border-b-4 border-[var(--border)] rounded-b-xl pb-2">
          <AnimatePresence initial={false}>
            {stack.map((plate, index) => (
              <motion.div
                key={plate.id}
                initial={{ opacity: 0, y: -100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -100, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`w-48 h-8 rounded-full mb-1 shadow-[0_4px_0_rgba(0,0,0,0.2)] border-2 border-white/20 flex items-center justify-center font-mono font-bold text-white z-10 ${plate.color}`}
              >
                Plate {plate.id + 1}
                {index === stack.length - 1 && (
                  <span className="absolute -right-24 text-sm font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded-md hidden md:block">
                    ← TOP
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {stack.length === 0 && (
            <div className="absolute bottom-10 text-[var(--muted-foreground)] font-medium italic">
              Stack is empty
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 bg-[var(--muted)]/50 border-t border-[var(--border)] text-sm text-[var(--muted-foreground)]">
        <p><strong>LIFO Principle:</strong> Last In, First Out. The last plate placed on the stack is the first one you can take off.</p>
      </div>
    </div>
  );
}
