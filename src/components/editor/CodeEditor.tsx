"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, CheckCircle } from "lucide-react";

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
}

export default function CodeEditor({ initialCode = "// Write your code here\n", language = "javascript" }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    // Simulate execution
    setTimeout(() => {
      setOutput("Code executed successfully!\nOutput:\nHello, World!");
      setIsRunning(false);
    }, 800);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
  };

  return (
    <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden bg-[#1e1e1e]">
      <div className="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] border-b border-black/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs font-mono text-gray-400">{language}</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleReset}
            className="flex items-center gap-1 text-xs px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1 text-xs px-3 py-1 rounded bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold transition-colors"
          >
            {isRunning ? (
              <span className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
            ) : (
              <Play className="w-3 h-3" />
            )}
            Run Code
          </button>
        </div>
      </div>
      
      <div className="h-[400px]">
        <Editor
          height="100%"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 16 },
            scrollBeyondLastLine: false,
            smoothScrolling: true,
          }}
        />
      </div>
      
      <div className="bg-[#1e1e1e] border-t border-black/20 p-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Terminal Output</h4>
        <div className="font-mono text-sm text-green-400 bg-black/50 p-3 rounded min-h-[100px] whitespace-pre-wrap">
          {output || <span className="text-gray-600">Run code to see output...</span>}
        </div>
      </div>
    </div>
  );
}
