"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PlayCircle, GitBranch, Search, Layers, Pizza, IterationCcw, RefreshCw, Play, Pause, RotateCcw } from "lucide-react";

interface AlgorithmVisualizerProps {
  topicId: string;
  topicTitle: string;
}

export default function AlgorithmVisualizer({ topicId, topicTitle }: AlgorithmVisualizerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 10);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const renderGreedy = () => {
    const coins = [20, 10, 5, 1];
    const target = 43;
    // Current state based on step
    let remaining = target;
    let selected: number[] = [];
    
    // Simple greedy logic for visual
    for (let c of coins) {
      while (remaining >= c && selected.length < (step % 8) + 1) {
        remaining -= c;
        selected.push(c);
      }
    }

    return (
      <div className="flex flex-col items-center gap-8 w-full max-w-md">
        <div className="flex items-center gap-4">
          <div className="text-sm font-bold text-gray-400 uppercase">Target:</div>
          <div className="text-3xl font-black text-[var(--primary)]">Rs. {target}</div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 min-h-[60px]">
          <AnimatePresence>
            {selected.map((val, i) => (
              <motion.div
                key={`${val}-${i}`}
                initial={{ scale: 0, y: -20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold shadow-lg border-2 border-amber-600"
              >
                {val}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-4 gap-4 w-full">
          {coins.map((c) => (
            <div key={c} className={`p-3 rounded-xl border-2 transition-all text-center ${remaining >= c ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-gray-200 opacity-30"}`}>
              <div className="text-xs font-bold text-gray-500">Take {c}?</div>
              <div className="font-black">{remaining >= c ? "YES" : "NO"}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBubbleSort = () => {
    const bars = [40, 70, 30, 90, 50];
    const activeIdx = step % 4;
    
    return (
      <div className="flex items-end gap-3 h-48">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            animate={{ 
              height: h,
              backgroundColor: i === activeIdx || i === activeIdx + 1 ? "#10b981" : "#e2e8f0"
            }}
            className="w-10 rounded-t-lg relative"
          >
            {i === activeIdx && (
              <motion.div 
                layoutId="pointer"
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-[var(--primary)]"
              >
                <Search className="w-5 h-5" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  const renderBinarySearch = () => {
    const range = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const mid = Math.floor(range.length / 2);
    const active = step % 3; // 0: full, 1: half, 2: found
    
    return (
      <div className="flex gap-2">
        {range.map((n, i) => {
          let state = "normal";
          if (active === 1 && i < mid) state = "ignored";
          if (active === 2 && i === 6) state = "found";
          
          return (
            <motion.div
              key={i}
              animate={{ 
                opacity: state === "ignored" ? 0.2 : 1,
                scale: state === "found" ? 1.2 : 1,
                backgroundColor: state === "found" ? "#10b981" : "transparent"
              }}
              className={`w-10 h-10 flex items-center justify-center border-2 rounded-lg font-bold ${state === "found" ? "text-white border-[var(--primary)]" : "border-gray-200"}`}
            >
              {n}
            </motion.div>
          );
        })}
      </div>
    );
  };

  const renderBFS = () => {
    const activeLevel = Math.floor(step / 3) % 3;
    return (
      <div className="flex flex-col items-center gap-8 pt-10">
        <motion.div animate={{ backgroundColor: activeLevel >= 0 ? "#10b981" : "#e2e8f0" }} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg z-10">1</motion.div>
        <div className="flex gap-16 relative">
          <div className="absolute top-[-30px] left-[20%] w-[60%] h-[30px] border-t-2 border-l-2 border-r-2 border-gray-300 rounded-t-lg -z-10"></div>
          <motion.div animate={{ backgroundColor: activeLevel >= 1 ? "#10b981" : "#e2e8f0" }} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg z-10">2</motion.div>
          <motion.div animate={{ backgroundColor: activeLevel >= 1 ? "#10b981" : "#e2e8f0" }} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg z-10">3</motion.div>
        </div>
        <div className="flex gap-4 relative w-[200px] h-12">
          <div className="absolute top-[-30px] left-[10%] w-[2px] h-[30px] bg-gray-300 -z-10"></div>
          <div className="absolute top-[-30px] right-[10%] w-[2px] h-[30px] bg-gray-300 -z-10"></div>
          <motion.div animate={{ backgroundColor: activeLevel >= 2 ? "#10b981" : "#e2e8f0" }} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg absolute left-0 z-10">4</motion.div>
          <motion.div animate={{ backgroundColor: activeLevel >= 2 ? "#10b981" : "#e2e8f0" }} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg absolute right-0 z-10">5</motion.div>
        </div>
      </div>
    );
  };

  const renderRecursion = () => {
    const depth = (step % 5) + 1;
    return (
      <div className="flex flex-col items-center relative h-64 w-full">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: i < depth ? 1 : 0.8,
              opacity: i < depth ? 1 : 0,
              y: i * 20
            }}
            className={`w-48 h-16 rounded-xl border-2 flex items-center justify-center font-bold absolute shadow-lg transition-colors ${i === depth - 1 ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]' : 'border-gray-200 bg-white text-gray-400'}`}
            style={{ zIndex: 10 - i }}
          >
            factorial({5 - i})
          </motion.div>
        ))}
      </div>
    );
  };

  const renderDP = () => {
    const arr = [1, 1, 2, 3, 5, 8, 13];
    const active = step % 7;
    return (
      <div className="flex flex-col gap-8 items-center w-full max-w-md">
        <div className="flex gap-2">
          {arr.map((val, i) => (
            <motion.div
              key={i}
              animate={{
                backgroundColor: i <= active ? "#10b981" : "transparent",
                color: i <= active ? "#fff" : "#9ca3af",
                scale: i === active ? 1.1 : 1
              }}
              className="w-10 h-10 border-2 border-gray-200 rounded-lg flex items-center justify-center font-bold"
            >
              {i <= active ? val : "?"}
            </motion.div>
          ))}
        </div>
        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl text-xs font-mono text-gray-500 w-full">
          <div className="mb-2 font-bold text-gray-400">Memoization Cache:</div>
          <div className="text-[var(--primary)] font-bold flex flex-wrap gap-2">
            {arr.slice(0, active + 1).map((v, i) => (
              <span key={i} className="bg-[var(--primary)]/10 px-2 py-1 rounded">fib({i}): {v}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const getContent = () => {
    switch(topicId) {
      case 'greedy': return renderGreedy();
      case 'bubble-sort': return renderBubbleSort();
      case 'binary-search': return renderBinarySearch();
      case 'bfs': return renderBFS();
      case 'recursion': return renderRecursion();
      case 'dynamic-programming': return renderDP();
      default:
        return (
          <motion.div 
            animate={{ rotate: isPlaying ? 360 : 0 }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="p-12 bg-[var(--primary)]/5 rounded-full border-4 border-dashed border-[var(--primary)]/20"
          >
            <Pizza className="w-24 h-24 text-[var(--primary)]" />
          </motion.div>
        );
    }
  };

  return (
    <div className="w-full flex flex-col h-[400px] bg-white dark:bg-[#0f172a] rounded-3xl border border-[var(--border)] overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-gray-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
          <h3 className="font-bold text-sm tracking-tight uppercase text-gray-500">{topicTitle} Live Visualizer</h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 hover:bg-white rounded-xl transition-colors shadow-sm border border-transparent hover:border-gray-200"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setStep(0)}
            className="p-2 hover:bg-white rounded-xl transition-colors shadow-sm border border-transparent hover:border-gray-200"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="relative z-10 w-full flex justify-center">
          {getContent()}
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`h-1 w-4 rounded-full transition-all ${i === step ? "bg-[var(--primary)] w-8" : "bg-gray-200"}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
