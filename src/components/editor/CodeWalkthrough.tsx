"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw, Lightbulb } from "lucide-react";

export interface WalkthroughStep {
  line: number; // 1-indexed line number
  explanation: string;
}

interface CodeWalkthroughProps {
  code: string;
  steps: WalkthroughStep[];
}

export default function CodeWalkthrough({ code, steps }: CodeWalkthroughProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const lines = code.split("\n");

  if (!steps || steps.length === 0) return null;

  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) setCurrentStepIndex((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) setCurrentStepIndex((p) => p - 1);
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm">
      {/* Code Display */}
      <div className="flex-1 bg-[#1e1e1e] text-slate-300 font-mono text-sm overflow-x-auto p-4 leading-relaxed relative rounded-l-2xl">
        {lines.map((lineContent, index) => {
          const lineNumber = index + 1;
          const isActive = currentStep.line === lineNumber;
          
          return (
            <div 
              key={index} 
              className={`flex px-2 py-0.5 rounded transition-colors ${
                isActive 
                  ? "bg-blue-500/30 border-l-2 border-blue-400 text-white" 
                  : "border-l-2 border-transparent opacity-80"
              }`}
            >
              <span className="w-8 shrink-0 text-slate-600 select-none">{lineNumber}</span>
              <span className="whitespace-pre">{lineContent || " "}</span>
            </div>
          );
        })}
      </div>

      {/* Explanation Panel */}
      <div className="w-full lg:w-80 flex flex-col p-6 bg-white dark:bg-[#101c3d] border-l border-[var(--border)]">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-lg">Samjhao Mujhe</h3>
        </div>

        <div className="flex-1">
          <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs font-bold mb-3">
            Step {currentStepIndex + 1} of {steps.length} (Line {currentStep.line})
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[var(--foreground)] font-medium leading-relaxed"
            >
              {currentStep.explanation}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--border)]">
          <button 
            onClick={handlePrev} 
            disabled={currentStepIndex === 0}
            className="p-2 border border-[var(--border)] rounded-lg hover:bg-[var(--muted)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <button 
            onClick={handleReset} 
            className="p-2 text-slate-500 hover:bg-[var(--muted)] rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button 
            onClick={handleNext} 
            disabled={currentStepIndex === steps.length - 1}
            className="flex items-center gap-1 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]/90 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
