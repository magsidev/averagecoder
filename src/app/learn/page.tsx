import Link from "next/link";
import { topics } from "@/data/topics";
import { ArrowRight, BookOpen, Code } from "lucide-react";

export default function LearnPage() {
  const dataStructures = topics.filter(t => t.category === "Data Structures");
  const algorithms = topics.filter(t => t.category === "Algorithms");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Learning Path</h1>
        <p className="text-xl text-[var(--muted-foreground)]">
          Follow our curriculum to master Data Structures and Algorithms. Start with the basics and work your way up to advanced topics.
        </p>
      </div>

      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-[var(--primary)]/10 rounded-xl">
            <BookOpen className="w-8 h-8 text-[var(--primary)]" />
          </div>
          <h2 className="text-3xl font-bold">Data Structures</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dataStructures.map((topic) => (
            <Link href={`/learn/${topic.id}`} key={topic.id} className="group flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  topic.difficulty === "Beginner" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                  topic.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                  {topic.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{topic.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 flex-grow">{topic.description}</p>
              <div className="text-sm font-medium text-[var(--primary)] flex items-center mt-auto">
                Study topic <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-[var(--primary)]/10 rounded-xl">
            <Code className="w-8 h-8 text-[var(--primary)]" />
          </div>
          <h2 className="text-3xl font-bold">Algorithms</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {algorithms.map((topic) => (
            <Link href={`/learn/${topic.id}`} key={topic.id} className="group flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  topic.difficulty === "Beginner" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                  topic.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                  {topic.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{topic.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 flex-grow">{topic.description}</p>
              <div className="text-sm font-medium text-[var(--primary)] flex items-center mt-auto">
                Study topic <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
