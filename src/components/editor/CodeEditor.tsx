"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw } from "lucide-react";

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  availableLanguages?: string[];
  onLanguageChange?: (lang: string) => void;
}

export default function CodeEditor({ 
  initialCode = "// Write your code here\n", 
  language = "javascript",
  availableLanguages = ["javascript"],
  onLanguageChange
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  // Sync state when initialCode changes (e.g. topic/language change)
  useEffect(() => {
    setCode(initialCode);
    setOutput(""); // Clear old output
  }, [initialCode]);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("Running code...\n");

    setTimeout(() => {
      try {
        if (language === "javascript") {
          let logs: string[] = [];
          const originalLog = console.log;
          const originalError = console.error;

          // Capture logs
          console.log = (...args) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
          };
          
          console.error = (...args) => {
            logs.push("Error: " + args.join(' '));
          };

          try {
            // eslint-disable-next-line no-eval
            eval(code);
            if (logs.length > 0) {
              setOutput(logs.join('\n'));
            } else {
              setOutput("Code executed successfully.\n(Make sure to use console.log() to see output)");
            }
          } catch (err: any) {
            setOutput(`Runtime Error: ${err.message}`);
          } finally {
            console.log = originalLog;
            console.error = originalError;
          }
        } else {
          // Simulation for non-JS languages
          let simulatedOutput = "";
          if (language === "python") {
            simulatedOutput = "[Python Simulation]\n> Program starting...\n";
            if (code.includes("egg_tray")) simulatedOutput += "> Picking egg at index 1: Farm\n";
            else if (code.includes("Clue 1")) simulatedOutput += "> Current: Clue 1\n> Next: Clue 2\n";
            else if (code.includes("Plate 1")) simulatedOutput += "> Popped: Plate 2\n";
            else if (code.includes("Ahmed")) simulatedOutput += "> Serving: Ahmed\n> Next in line: Sara\n";
            else if (code.includes("0300-1112223")) simulatedOutput += "> Ali's Number: 0300-1112223\n";
            else if (code.includes("BST Root")) simulatedOutput += "> BST Root: 10\n> Left child (smaller): 5\n";
            else if (code.includes("LHR")) simulatedOutput += "> Connections from Lahore: ['ISB', 'MUL']\n";
            else if (code.includes("bubble_sort")) simulatedOutput += "> Sorted: [1, 2, 4, 5, 8]\n";
            else if (code.includes("binary_search(")) simulatedOutput += "> Index of 3: 2\n";
            else if (code.includes("bfs(")) simulatedOutput += "> Visited: 1\n> Visited: 2\n> Visited: 3\n> Visited: 4\n";
            else if (code.includes("factorial(")) simulatedOutput += "> Factorial of 5: 120\n";
            else if (code.includes("fib(")) simulatedOutput += "> 50th Fibonacci: 12586269025\n";
            else if (code.includes("change(")) simulatedOutput += "> Change for 41: [25, 10, 5, 1]\n";
            else simulatedOutput += "> Process finished with exit code 0\n";
          } else if (language === "cpp") {
            simulatedOutput = "[C++ Simulation]\n> Compiling with g++...\n> Executing ./a.out\n";
            if (code.includes("eggTray")) simulatedOutput += "Picking egg at index 1: Farm\n";
            else if (code.includes("Clue 1")) simulatedOutput += "Current: Clue 1\nNext: Clue 2\n";
            else if (code.includes("Plate 1")) simulatedOutput += "Popped: Plate 2\n";
            else if (code.includes("Ahmed")) simulatedOutput += "Serving: Ahmed\nNext in line: Sara\n";
            else if (code.includes("0300-1112223")) simulatedOutput += "Ali's Number: 0300-1112223\n";
            else if (code.includes("BST Root")) simulatedOutput += "BST Root: 10\nLeft child (smaller): 5\n";
            else if (code.includes("LHR")) simulatedOutput += "Connections from Lahore: ISB, MUL\n";
            else if (code.includes("bubbleSort")) simulatedOutput += "Sorted: 1 2 4 5 8 \n";
            else if (code.includes("binarySearch(")) simulatedOutput += "Index of 3: 2\n";
            else if (code.includes("bfs(")) simulatedOutput += "Visited: 1\nVisited: 2\nVisited: 3\nVisited: 4\n";
            else if (code.includes("factorial(")) simulatedOutput += "Factorial of 5: 120\n";
            else if (code.includes("fib(")) simulatedOutput += "50th Fibonacci: 12586269025\n";
            else if (code.includes("change(")) simulatedOutput += "Change for 41: 25 10 5 1 \n";
            else simulatedOutput += "\nProgram finished.\n";
          }
          setOutput(simulatedOutput);
        }
      } catch (err: any) {
        setOutput(`System Error: ${err.message}`);
      } finally {
        setIsRunning(false);
      }
    }, 800);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
  };

  return (
    <div className="flex flex-col border border-[var(--border)] rounded-2xl overflow-hidden bg-[#1e1e1e] shadow-2xl">
      <div className="flex justify-between items-center px-6 py-3 bg-[#2d2d2d] border-b border-black/20">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-inner"></div>
          </div>
          <div className="flex gap-1 bg-black/20 p-1 rounded-lg">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange?.(lang)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-black transition-all uppercase tracking-widest ${
                  language === lang 
                    ? "bg-[var(--primary)] text-white shadow-lg scale-105" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {lang === "cpp" ? "C++" : lang}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-all font-bold border border-white/5"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-2 text-xs px-6 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-black transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
            RUN LOGIC
          </button>
        </div>
      </div>
      
      <div className="h-[450px] relative">
        <Editor
          height="100%"
          language={language === "cpp" ? "cpp" : language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineHeight: 24,
            fontFamily: "'Fira Code', 'Courier New', monospace",
            padding: { top: 20, bottom: 20 },
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            cursorBlinking: "smooth",
            formatOnPaste: true,
            scrollbar: {
              vertical: "hidden",
              horizontal: "hidden"
            }
          }}
        />
      </div>
      
      <div className="bg-[#121212] border-t border-white/5 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-4 bg-[var(--primary)] rounded-full"></div>
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">System Output</h4>
        </div>
        <div className="font-mono text-sm bg-black/40 p-5 rounded-2xl min-h-[120px] whitespace-pre-wrap border border-white/5 shadow-inner">
          {output ? (
            <div className={output.startsWith("Error") || output.startsWith("Runtime") ? "text-red-400" : "text-emerald-400"}>
              {output}
            </div>
          ) : (
            <span className="text-gray-600 italic">Console initialized. Waiting for execution...</span>
          )}
        </div>
      </div>
    </div>
  );
}
