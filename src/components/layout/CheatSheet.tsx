"use client";

import { Download, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface CheatSheetProps {
  topicTitle: string;
  summary: string;
  timeComplexity: string;
  spaceComplexity: string;
  keyMantra: string;
}

export default function CheatSheet({ 
  topicTitle, 
  summary, 
  timeComplexity, 
  spaceComplexity, 
  keyMantra 
}: CheatSheetProps) {
  const handleDownload = () => {
    // In a real app, this would generate a PDF. 
    // For now, we'll trigger a print or show a success message.
    window.print();
  };

  return (
    <div className="mt-20 relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl group-hover:bg-[var(--primary)]/10 transition-colors"></div>
      
      <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#101c3d] dark:to-[#0a1229] p-8 rounded-3xl border-2 border-dashed border-[var(--primary)]/30 shadow-sm relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--primary)]/20 rotate-3 group-hover:rotate-0 transition-transform">
              <Zap className="w-8 h-8 text-white fill-white" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-1">Quick Revision Sheet</h2>
              <p className="text-[var(--muted-foreground)]">Exam se pehle ek dafa nazar maar lein!</p>
            </div>
          </div>
          
          <button 
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-2xl font-bold shadow-lg hover:shadow-[var(--primary)]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-5 h-5" /> Download PDF Cheat Sheet
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-5 bg-white dark:bg-[#16254a] rounded-2xl border border-[var(--border)] shadow-sm">
            <h4 className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Concept Summary
            </h4>
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>

          <div className="p-5 bg-white dark:bg-[#16254a] rounded-2xl border border-[var(--border)] shadow-sm">
            <h4 className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Complexities
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Time:</span>
                <code className="font-bold text-[var(--primary)]">{timeComplexity}</code>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Space:</span>
                <code className="font-bold text-[var(--primary)]">{spaceComplexity}</code>
              </div>
            </div>
          </div>

          <div className="p-5 bg-[var(--primary)] text-white rounded-2xl shadow-lg rotate-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 opacity-80 flex items-center gap-2">
              <Zap className="w-4 h-4 fill-white" /> Key Mantra
            </h4>
            <p className="text-lg font-bold leading-tight">"{keyMantra}"</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-2 opacity-50">
            <img src="/icon.png" alt="Logo" className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-tighter">Average Coder | Premium Series</span>
          </div>
          <p className="text-[10px] text-[var(--muted-foreground)] italic uppercase">Validated by Pakistani Dev Community</p>
        </div>
      </div>
    </div>
  );
}

import { Clock } from "lucide-react";
