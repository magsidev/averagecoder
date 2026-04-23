"use client";

import StackVisualizer from "./StackVisualizer";
import ArrayVisualizer from "./ArrayVisualizer";
import QueueVisualizer from "./QueueVisualizer";
import LinkedListVisualizer from "./LinkedListVisualizer";
import HashTableVisualizer from "./HashTableVisualizer";
import TreeVisualizer from "./TreeVisualizer";
import GraphVisualizer from "./GraphVisualizer";
import AlgorithmVisualizer from "./AlgorithmVisualizer";

interface TopicVisualizerProps {
  topicId: string;
  topicTitle: string;
}

export default function TopicVisualizer({ topicId, topicTitle }: TopicVisualizerProps) {
  // Render specific visualizers based on topic ID
  switch (topicId) {
    case "stack": return <StackVisualizer />;
    case "array": return <ArrayVisualizer />;
    case "queue": return <QueueVisualizer />;
    case "linked-list": return <LinkedListVisualizer />;
    case "hash-table": return <HashTableVisualizer />;
    case "tree": return <TreeVisualizer />;
    case "graph": return <GraphVisualizer />;
    
    // Fallback for algorithm visualizers
    case "bubble-sort":
    case "binary-search":
    case "bfs":
    case "recursion":
    case "dynamic-programming":
    case "greedy":
      return <AlgorithmVisualizer topicId={topicId} topicTitle={topicTitle} />;
      
    default:
      return <AlgorithmVisualizer topicId={topicId} topicTitle={topicTitle} />;
  }
}
