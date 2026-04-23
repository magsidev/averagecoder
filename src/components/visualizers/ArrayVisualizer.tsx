"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, RotateCcw } from "lucide-react";

export default function ArrayVisualizer() {
  // An array of 6 slots, null means empty
  const [array, setArray] = useState<(string | null)[]>(Array(6).fill(null));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [eggCounter, setEggCounter] = useState(1);

  const handleAddEgg = () => {
    if (array[activeIndex] !== null) return; // Slot already occupied
    const newArray = [...array];
    newArray[activeIndex] = `Egg ${eggCounter}`;
    setArray(newArray);
    setEggCounter(prev => prev + 1);
  };

  const handleRemoveEgg = () => {
    if (array[activeIndex] === null) return; // Slot already empty
    const newArray = [...array];
    newArray[activeIndex] = null;
    setArray(newArray);
  };

  const handleReset = () => {
    setArray(Array(6).fill(null));
    setEggCounter(1);
    setActiveIndex(0);
  };

  return (
    <div className="w-full flex flex-col h-full bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">Egg Tray Array</h3>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] border border-[var(--border)] rounded-md hover:bg-[var(--muted)] transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 relative min-h-[300px]">
        {/* Array Controls */}
        <div className="mb-10 flex flex-col items-center gap-4 w-full max-w-md">
          <div className="flex w-full gap-4 items-center">
            <span className="font-medium whitespace-nowrap">Selected Index:</span>
            <div className="flex gap-1 overflow-x-auto pb-2 flex-1">
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-10 h-10 flex-shrink-0 rounded flex items-center justify-center font-mono font-bold transition-colors ${
                    activeIndex === idx 
                      ? "bg-[var(--primary)] text-white" 
                      : "bg-[var(--muted)] hover:bg-[var(--primary)]/20"
                  }`}
                >
                  {idx}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex w-full gap-2">
            <button
              onClick={handleAddEgg}
              disabled={array[activeIndex] !== null}
              className="flex-1 flex justify-center items-center gap-2 py-2 text-sm font-medium text-white bg-[var(--primary)] rounded-md hover:bg-[var(--primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="w-4 h-4" /> Place Egg at [{activeIndex}]
            </button>
            <button
              onClick={handleRemoveEgg}
              disabled={array[activeIndex] === null}
              className="flex-1 flex justify-center items-center gap-2 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Minus className="w-4 h-4" /> Remove from [{activeIndex}]
            </button>
          </div>
        </div>

        {/* Visual Egg Tray */}
        <div className="flex bg-[#e2e8f0] dark:bg-[#1e293b] p-4 rounded-xl shadow-inner gap-2 border-2 border-dashed border-gray-400 dark:border-gray-600">
          {array.map((item, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-16 h-20 bg-black/5 dark:bg-black/20 rounded-xl flex items-center justify-center border-2 transition-colors cursor-pointer ${
                activeIndex === index ? "border-[var(--primary)]" : "border-transparent"
              }`}
            >
              <div className="absolute -top-6 text-xs font-mono font-bold text-[var(--muted-foreground)]">
                [{index}]
              </div>
              
              <AnimatePresence>
                {item && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="w-12 h-16 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-200 dark:to-amber-400 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-md flex items-center justify-center text-xs font-bold text-amber-900 border border-amber-300"
                  >
                    {item.split(' ')[1]}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-[var(--muted)]/50 border-t border-[var(--border)] text-sm text-[var(--muted-foreground)]">
        <p><strong>Fixed Size:</strong> Arrays have a set number of slots. <strong>Direct Access:</strong> You can instantly access or change an egg by knowing its exact index (like `tray[2]`).</p>
      </div>
    </div>
  );
}
