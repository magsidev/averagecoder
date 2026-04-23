import CodeEditor from "@/components/editor/CodeEditor";
import { Terminal, Lightbulb } from "lucide-react";

export default function PracticePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 h-[calc(100vh-4rem)] flex flex-col">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Code Playground</h1>
          <p className="text-[var(--muted-foreground)]">Practice your algorithms in a free, open sandbox environment.</p>
        </div>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-1 space-y-6 overflow-y-auto pr-2">
          <div className="bg-[var(--card)] p-5 rounded-2xl border border-[var(--border)] shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[var(--primary)]" /> Challenge Ideas
            </h3>
            <ul className="space-y-3">
              <li>
                <button className="text-left text-sm hover:text-[var(--primary)] text-[var(--muted-foreground)] transition-colors">
                  1. Implement Bubble Sort for an array of mango prices.
                </button>
              </li>
              <li>
                <button className="text-left text-sm hover:text-[var(--primary)] text-[var(--muted-foreground)] transition-colors">
                  2. Create a Queue for a ticket line at a cricket match.
                </button>
              </li>
              <li>
                <button className="text-left text-sm hover:text-[var(--primary)] text-[var(--muted-foreground)] transition-colors">
                  3. Reverse a Linked List of train stations.
                </button>
              </li>
            </ul>
          </div>
          
          <div className="bg-[var(--card)] p-5 rounded-2xl border border-[var(--border)] shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[var(--primary)]" /> Keyboard Shortcuts
            </h3>
            <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <div className="flex justify-between">
                <span>Run Code</span>
                <kbd className="bg-[var(--muted)] px-2 py-0.5 rounded font-mono text-xs">Ctrl + Enter</kbd>
              </div>
              <div className="flex justify-between">
                <span>Format Code</span>
                <kbd className="bg-[var(--muted)] px-2 py-0.5 rounded font-mono text-xs">Shift + Alt + F</kbd>
              </div>
              <div className="flex justify-between">
                <span>Toggle Comment</span>
                <kbd className="bg-[var(--muted)] px-2 py-0.5 rounded font-mono text-xs">Ctrl + /</kbd>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 flex flex-col h-full">
          <div className="flex-grow rounded-2xl overflow-hidden shadow-lg border border-[var(--border)]">
            <CodeEditor language="javascript" initialCode={`// Welcome to the Average Coder Playground!\n// Let's write some beautiful code today.\n\nfunction main() {\n  console.log("Ready to learn like a Pakistani genius!");\n}\n\nmain();`} />
          </div>
        </div>
      </div>
    </div>
  );
}
