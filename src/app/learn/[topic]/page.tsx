"use client";

import { getTopicById, topics } from "@/data/topics";
import { notFound } from "next/navigation";
import CodeEditor from "@/components/editor/CodeEditor";
import CodeWalkthrough from "@/components/editor/CodeWalkthrough";
import TopicVisualizer from "@/components/visualizers/TopicVisualizer";
import MiniQuiz from "@/components/interactive/MiniQuiz";
import PitfallsSection from "@/components/layout/PitfallsSection";
import CheatSheet from "@/components/layout/CheatSheet";
import { ArrowLeft, BookOpen, Clock, Lightbulb, Target, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, use } from "react";

export default function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const resolvedParams = use(params);
  const topic = getTopicById(resolvedParams.topic);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("javascript");

  if (!topic) {
    notFound();
  }

  const currentIndex = topics.findIndex(t => t.id === topic.id);
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  const initialCode = typeof topic.initialCode === 'object' 
    ? (topic.initialCode as any)[selectedLanguage] 
    : topic.initialCode;

  const availableLanguages = typeof topic.initialCode === 'object' 
    ? Object.keys(topic.initialCode) 
    : ["javascript"];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/learn" className="inline-flex items-center text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Topics
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            topic.difficulty === "Beginner" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
            topic.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }`}>
            {topic.difficulty}
          </span>
          <span className="text-sm font-medium text-[var(--muted-foreground)]">{topic.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{topic.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Asal Kahani - The Core Analogy */}
          <section className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MessageCircle className="w-24 h-24 text-emerald-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-600 text-white p-2 rounded-xl">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">Asal Kahani: {topic.pakistaniAnalogy.title}</h2>
              </div>
              <p className="text-lg leading-relaxed text-emerald-800 dark:text-emerald-200 font-medium">
                {topic.pakistaniAnalogy.story}
              </p>
            </div>
          </section>

          {/* Visual Animation */}
          <section>
            <TopicVisualizer topicId={topic.id} topicTitle={topic.title} />
          </section>

          {/* Explanation Section */}
          <section className="prose prose-slate dark:prose-invert max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--primary)]" />
              <h2 className="text-2xl font-bold m-0">In Technical Words...</h2>
            </div>
            <div className="text-lg text-[var(--muted-foreground)] leading-relaxed whitespace-pre-wrap">
              {topic.detailedExplanation || topic.description}
            </div>
          </section>

          {/* Code Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-[var(--primary)]" />
                <h2 className="text-2xl font-bold">Step-by-Step Walkthrough</h2>
              </div>
            </div>
            
            {topic.walkthrough ? (
              <div className="mb-12">
                <p className="mb-6 text-[var(--muted-foreground)]">Har line ka matlab Roman English mein samjhein:</p>
                <CodeWalkthrough code={topic.walkthrough.code} steps={topic.walkthrough.steps} />
              </div>
            ) : null}

            <div className="flex items-center justify-between mb-4 mt-12">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-[var(--primary)]" />
                <h2 className="text-2xl font-bold">Practice Playground</h2>
              </div>
            </div>
            <p className="mb-6 text-[var(--muted-foreground)]">Try it yourself! Modify the code below and see how it works.</p>
            
            <CodeEditor 
              language={selectedLanguage} 
              onLanguageChange={setSelectedLanguage}
              availableLanguages={availableLanguages}
              initialCode={initialCode || `// Implement ${topic.title} below\n\nfunction main() {\n  console.log("Learning ${topic.title} with Average Coder!");\n}\n\nmain();`} 
            />
          </section>

          {/* Pitfalls Section */}
          {topic.pitfalls && (
            <section>
              <PitfallsSection pitfalls={topic.pitfalls} />
            </section>
          )}

          {/* Quiz Section */}
          {topic.quiz && (
            <section>
              <MiniQuiz questions={topic.quiz} topicTitle={topic.title} />
            </section>
          )}

          {/* Cheat Sheet Section */}
          <section>
            <CheatSheet 
              topicTitle={topic.title}
              summary={topic.detailedExplanation || topic.description}
              timeComplexity={topic.complexities?.time.average || "O(n)"}
              spaceComplexity={topic.complexities?.space.worst || "O(1)"}
              keyMantra={topic.category === "Data Structures" ? "Data kahan aur kese rakhna hai?" : "Kaam jaldi kese khatam karna hai?"}
            />
          </section>
        </div>

        {/* Right Column: Meta info & Complexity */}
        <div className="space-y-8">
          <div className="bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)] shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[var(--primary)]" />
              <h3 className="font-bold text-lg">Complexity</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-[var(--muted-foreground)] mb-1 uppercase tracking-wider">Time Complexity</p>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <span className="text-sm">Average</span>
                  <code className="bg-[var(--muted)] px-2 py-1 rounded font-mono text-[var(--primary)] font-bold">{topic.complexities?.time.average || "O(n)"}</code>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <span className="text-sm">Worst</span>
                  <code className="bg-[var(--muted)] px-2 py-1 rounded font-mono text-[var(--primary)] font-bold">{topic.complexities?.time.worst || "O(n)"}</code>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-bold text-[var(--muted-foreground)] mb-1 mt-4 uppercase tracking-wider">Space Complexity</p>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <span className="text-sm">Worst</span>
                  <code className="bg-[var(--muted)] px-2 py-1 rounded font-mono text-[var(--primary)] font-bold">{topic.complexities?.space.worst || "O(1)"}</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)] shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[var(--primary)]" />
              <h3 className="font-bold text-lg">Real World Use</h3>
            </div>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              {(topic.realWorld || ["General data processing", "Foundation for other structures"]).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {nextTopic && (
        <div className="mt-20 pt-10 border-t border-[var(--border)] flex justify-end">
          <Link href={`/learn/${nextTopic.id}`} className="group flex flex-col items-end">
            <span className="text-sm font-medium text-[var(--muted-foreground)] mb-1">Next Topic</span>
            <div className="flex items-center gap-2 text-xl font-bold group-hover:text-[var(--primary)] transition-colors">
              {nextTopic.title} <ArrowLeft className="w-5 h-5 rotate-180 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
