"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, RotateCcw } from "lucide-react";

export default function LinkedListVisualizer() {
  const [nodes, setNodes] = useState(["Start at Map"]);
  const [clueInput, setClueInput] = useState("");

  const handleAdd = () => {
    if (!clueInput.trim() || nodes.length >= 6) return;
    setNodes([...nodes, clueInput]);
    setClueInput("");
  };

  return (
    <div className="w-full flex flex-col h-full bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">Treasure Hunt (Linked List)</h3>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Next Clue (e.g. Under Rug)" 
            value={clueInput}
            onChange={(e) => setClueInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            className="px-2 py-1 text-sm border rounded dark:bg-slate-800"
          />
          <button onClick={handleAdd} disabled={!clueInput.trim() || nodes.length >= 6} className="bg-[var(--primary)] text-white px-3 py-1 rounded text-sm flex items-center gap-1 disabled:opacity-50"><Plus className="w-4 h-4"/> Add Node</button>
          <button onClick={() => setNodes(["Start at Map"])} className="border px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-[var(--muted)]"><RotateCcw className="w-4 h-4"/> Reset</button>
        </div>
      </div>
      <div className="flex-1 p-8 flex items-center overflow-x-auto min-h-[300px]">
        <div className="flex items-center gap-2 w-max">
          <AnimatePresence>
            {nodes.map((node, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
                <div className="border-2 border-[var(--primary)] bg-[var(--primary)]/10 p-4 rounded-xl shadow-sm text-sm font-bold min-w-[120px] text-center">
                  <div className="text-xs text-[var(--muted-foreground)] mb-1">Node {i}</div>
                  {node}
                </div>
                {i < nodes.length - 1 && <ArrowRight className="text-[var(--primary)] w-6 h-6" />}
              </motion.div>
            ))}
          </AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <ArrowRight className="text-[var(--primary)] w-6 h-6" />
            <div className="border-2 border-dashed border-slate-400 p-4 rounded-xl text-sm font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/50">NULL</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
