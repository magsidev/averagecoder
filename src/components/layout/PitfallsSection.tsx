"use client";

import { AlertTriangle, Info } from "lucide-react";

interface Pitfall {
  title: string;
  explanation: string;
}

interface PitfallsSectionProps {
  pitfalls: Pitfall[];
}

export default function PitfallsSection({ pitfalls }: PitfallsSectionProps) {
  if (!pitfalls || pitfalls.length === 0) return null;

  return (
    <div className="mt-16 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-6 h-6 text-amber-500" />
        <h2 className="text-2xl font-bold">Interview Mein Kahan Phaso Ge?</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {pitfalls.map((p, idx) => (
          <div key={idx} className="flex gap-4 p-5 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-2xl">
            <div className="mt-1 shrink-0">
              <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-1">{p.title}</h4>
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">{p.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
