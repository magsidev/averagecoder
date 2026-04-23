"use client";

import { motion } from "framer-motion";
import { PlayCircle, GitBranch, Search, Layers, Pizza, IterationCcw, RefreshCw } from "lucide-react";

interface AlgorithmVisualizerProps {
  topicId: string;
  topicTitle: string;
}

export default function AlgorithmVisualizer({ topicId, topicTitle }: AlgorithmVisualizerProps) {
  
  const getIcon = () => {
    switch(topicId) {
      case 'bubble-sort': return <RefreshCw className="w-16 h-16 text-[var(--primary)]" />;
      case 'binary-search': return <Search className="w-16 h-16 text-[var(--primary)]" />;
      case 'bfs': return <GitBranch className="w-16 h-16 text-[var(--primary)]" />;
      case 'recursion': return <Layers className="w-16 h-16 text-[var(--primary)]" />;
      case 'dynamic-programming': return <IterationCcw className="w-16 h-16 text-[var(--primary)]" />;
      case 'greedy': return <Pizza className="w-16 h-16 text-[var(--primary)]" />;
      default: return <PlayCircle className="w-16 h-16 text-[var(--primary)]" />;
    }
  };

  const getAnimation = () => {
    switch(topicId) {
      case 'bubble-sort': 
        return (
          <div className="flex gap-2 items-end h-32">
            {[40, 20, 50, 10, 30].map((h, i) => (
              <motion.div key={i} animate={{ height: [h, Math.random()*50 + 10, h] }} transition={{ repeat: Infinity, duration: 2, delay: i*0.2 }} className="w-8 bg-[var(--primary)] rounded-t-sm" />
            ))}
          </div>
        );
      case 'binary-search':
        return (
          <div className="flex gap-1">
            {[1,2,3,4,5,6,7,8,9,10].map((n, i) => (
              <motion.div key={i} animate={{ opacity: [1, 0.2, 1], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, delay: Math.abs(5-i)*0.2 }} className="w-8 h-8 flex items-center justify-center bg-[var(--primary)]/20 rounded border border-[var(--primary)] text-xs">
                {n}
              </motion.div>
            ))}
          </div>
        );
      default:
        return (
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
            {getIcon()}
          </motion.div>
        );
    }
  };

  return (
    <div className="w-full flex flex-col h-80 bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">{topicTitle} Animation</h3>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--gold-500)]/5"></div>
        <div className="z-10 flex flex-col items-center">
          {getAnimation()}
          <p className="mt-8 text-[var(--muted-foreground)] font-medium">Algorithm execution simulated visually</p>
        </div>
      </div>
    </div>
  );
}
