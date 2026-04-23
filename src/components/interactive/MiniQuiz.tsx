"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface MiniQuizProps {
  questions: Question[];
  topicTitle: string;
}

export default function MiniQuiz({ questions, topicTitle }: MiniQuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<Record<number, boolean>>({});

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (showResults[questionId]) return;
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const checkAnswer = (questionId: number) => {
    if (answers[questionId] === undefined) return;
    setShowResults({ ...showResults, [questionId]: true });
  };

  return (
    <div className="mt-16 pt-10 border-t border-[var(--border)]">
      <div className="flex items-center gap-2 mb-8">
        <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
        <h2 className="text-2xl font-bold">Concept Check: {topicTitle}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((q) => {
          const isAnswered = showResults[q.id];
          const isCorrect = answers[q.id] === q.correctAnswer;

          return (
            <div key={q.id} className="bg-white dark:bg-[#101c3d] p-6 rounded-2xl border border-[var(--border)] shadow-sm">
              <p className="font-bold text-lg mb-4">{q.text}</p>
              <div className="space-y-3">
                {q.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(q.id, idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                      isAnswered
                        ? idx === q.correctAnswer
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                          : idx === answers[q.id]
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : "border-transparent opacity-50"
                        : answers[q.id] === idx
                        ? "border-[var(--primary)] bg-[var(--primary)]/5"
                        : "border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {isAnswered && idx === q.correctAnswer && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      {isAnswered && idx === answers[q.id] && idx !== q.correctAnswer && <XCircle className="w-5 h-5 text-red-500" />}
                    </div>
                  </button>
                ))}
              </div>

              {!isAnswered ? (
                <button
                  onClick={() => checkAnswer(q.id)}
                  disabled={answers[q.id] === undefined}
                  className="mt-6 w-full py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold disabled:opacity-30 transition-all"
                >
                  Check Answer
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className={`mt-6 p-4 rounded-xl text-sm ${
                    isCorrect ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300" : "bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300"
                  }`}
                >
                  <p className="font-bold mb-1">{isCorrect ? "Bilkul Sahi! 🎉" : "Sahi Jawab:"}</p>
                  <p>{q.explanation}</p>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
