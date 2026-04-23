"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, RotateCcw, Search } from "lucide-react";

export default function HashTableVisualizer() {
  const [contacts, setContacts] = useState<{name: string, phone: string}[]>([
    { name: "Ahmed", phone: "0300-1111111" }
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleAdd = () => {
    if (!name || !phone) return;
    setContacts(prev => {
      const exists = prev.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
      if (exists >= 0) {
        const newArr = [...prev];
        newArr[exists].phone = phone;
        return newArr;
      }
      return [...prev, { name, phone }];
    });
    setName(""); setPhone("");
  };

  const handleSearch = () => {
    const found = contacts.find(c => c.name.toLowerCase() === search.toLowerCase());
    setResult(found ? found.phone : "Not Found");
  };

  return (
    <div className="w-full flex flex-col h-full bg-white dark:bg-[#101c3d] rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--muted)]/50">
        <h3 className="font-bold">Mobile Contacts (Hash Table)</h3>
        <button onClick={() => setContacts([])} className="border px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-[var(--muted)]"><RotateCcw className="w-4 h-4"/> Reset</button>
      </div>
      <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[300px]">
        
        {/* Controls */}
        <div className="space-y-6">
          <div className="bg-[var(--muted)]/30 p-4 rounded-xl border border-[var(--border)]">
            <h4 className="font-bold text-sm mb-3">Add / Update Contact</h4>
            <div className="flex gap-2 mb-2">
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name (Key)" className="flex-1 px-2 py-1 text-sm border rounded dark:bg-slate-800" />
            </div>
            <div className="flex gap-2 mb-3">
              <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone (Value)" className="flex-1 px-2 py-1 text-sm border rounded dark:bg-slate-800" />
            </div>
            <button onClick={handleAdd} className="w-full bg-[var(--primary)] text-white px-3 py-2 rounded text-sm flex justify-center items-center gap-1"><Plus className="w-4 h-4"/> Save Contact</button>
          </div>

          <div className="bg-[var(--muted)]/30 p-4 rounded-xl border border-[var(--border)]">
            <h4 className="font-bold text-sm mb-3">O(1) Quick Lookup</h4>
            <div className="flex gap-2 mb-3">
              <input value={search} onChange={e=>{setSearch(e.target.value); setResult(null);}} placeholder="Search Name..." className="flex-1 px-2 py-1 text-sm border rounded dark:bg-slate-800" />
              <button onClick={handleSearch} className="bg-slate-800 text-white px-3 py-1 rounded text-sm flex items-center gap-1"><Search className="w-4 h-4"/> Find</button>
            </div>
            {result && (
              <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-sm font-bold text-center">
                Result: {result}
              </div>
            )}
          </div>
        </div>

        {/* Visual Table */}
        <div className="border rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800/50">
          <div className="grid grid-cols-2 bg-[var(--muted)] p-3 font-bold border-b text-sm">
            <div>Key (Hash)</div>
            <div>Value</div>
          </div>
          <div className="overflow-y-auto max-h-[250px] p-2 space-y-2">
            <AnimatePresence>
              {contacts.map(c => (
                <motion.div key={c.name} initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="grid grid-cols-2 p-2 bg-white dark:bg-slate-800 rounded border shadow-sm text-sm items-center">
                  <div className="font-mono text-[var(--primary)] truncate">{c.name}</div>
                  <div className="font-mono truncate">{c.phone}</div>
                </motion.div>
              ))}
              {contacts.length === 0 && <div className="text-center p-4 text-sm text-[var(--muted-foreground)]">Table is empty</div>}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
