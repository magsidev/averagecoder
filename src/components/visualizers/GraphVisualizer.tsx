"use client";

import { motion } from "framer-motion";

export default function GraphVisualizer() {
  const cities = [
    { id: "LHR", name: "Lahore", x: "70%", y: "40%" },
    { id: "ISB", name: "Islamabad", x: "40%", y: "15%" },
    { id: "KHI", name: "Karachi", x: "20%", y: "80%" },
    { id: "MUL", name: "Multan", x: "45%", y: "55%" },
    { id: "QTA", name: "Quetta", x: "15%", y: "45%" }
  ];

  const roads = [
    { from: "LHR", to: "ISB", dist: "375km" },
    { from: "LHR", to: "MUL", dist: "350km" },
    { from: "ISB", to: "QTA", dist: "900km" },
    { from: "MUL", to: "KHI", dist: "850km" },
    { from: "QTA", to: "KHI", dist: "680km" },
    { from: "MUL", to: "QTA", dist: "550km" }
  ];

  return (
    <div className="w-full flex flex-col h-full bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">Motorway Network (Graph)</h3>
      </div>
      <div className="flex-1 p-8 min-h-[400px] relative">
        <svg className="absolute inset-0 w-full h-full">
          {roads.map((road, i) => {
            const from = cities.find(c => c.id === road.from);
            const to = cities.find(c => c.id === road.to);
            if (!from || !to) return null;
            return (
              <motion.g key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: i * 0.2}}>
                <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="currentColor" className="text-[var(--primary)]/50" strokeWidth="4" />
                <text x="50%" y="50%" fill="currentColor" fontSize="10" className="text-slate-500">
                  {/* Simplified text positioning, real app would calculate midpoint */}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {cities.map((city, i) => (
          <motion.div 
            key={city.id} 
            initial={{scale:0}} 
            animate={{scale:1}} 
            transition={{delay: 1 + i * 0.1}}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ left: city.x, top: city.y }}
          >
            <div className="w-4 h-4 bg-[var(--primary)] rounded-full border-2 border-white shadow-md z-10" />
            <div className="mt-1 bg-white/80 dark:bg-black/50 px-2 py-0.5 rounded text-xs font-bold shadow-sm backdrop-blur">
              {city.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
