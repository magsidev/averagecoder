export interface Topic {
  id: string;
  title: string;
  description: string;
  detailedExplanation: string;
  pakistaniAnalogy: {
    title: string;
    story: string;
  };
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: "Data Structures" | "Algorithms";
  initialCode: {
    javascript: string;
    python: string;
    cpp: string;
  };
  complexities: {
    time: { average: string; worst: string; };
    space: { worst: string; };
  };
  realWorld: string[];
  walkthrough: {
    code: string;
    steps: { line: number; explanation: string; }[];
  };
  pitfalls: { title: string; explanation: string; }[];
  quiz: {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export const topics: Topic[] = [
  {
    id: "array",
    title: "Arrays",
    description: "Like an egg tray. Each egg has one exact slot.",
    detailedExplanation: "Arrays memori mein lagatar (contiguous) slots hote hain. Har element ka apna index hota hai jo 0 se start hota hai. Iska sab se bada faida ye hai ke aap kisi bhi index par direct ja sakte hain.",
    pakistaniAnalogy: {
      title: "Andon Wali Tray (Egg Tray)",
      story: "Socho aap nashtay ke liye anday lene gaye ho. Dukandaar aapko ek plastic ki tray deta hai jis mein 12 khaane bane hote hain. Har khaane ka apna ek number hai (0 se 11 tak). Agar aapko pata hai ke 'desi anda' teesre khaane mein hai, toh aap direct wahan hath daal kar nikal loge. Aapko baaki 11 khaane check karne ki zaroorat nahi paregi. Yehi array ki power hai: 'O(1) access'!"
    },
    difficulty: "Beginner",
    category: "Data Structures",
    initialCode: {
      javascript: `const eggTray = ["Desi", "Farm", "Omega"];\nconsole.log("Picking egg at index 1:", eggTray[1]);\nconsole.log("Full tray:", eggTray);`,
      python: `egg_tray = ["Desi", "Farm", "Omega"]\nprint(f"Picking egg at index 1: {egg_tray[1]}")`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string eggTray[3] = {"Desi", "Farm", "Omega"};\n    cout << "Picking egg at index 1: " << eggTray[1] << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(1)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Student Attendance List", "Pixel data in Images"],
    walkthrough: {
      code: `let tray = ["Egg1", "Egg2"];\nconsole.log(tray[1]);`,
      steps: [
        { line: 1, explanation: "Pehle humne 2 slots wali tray banai." },
        { line: 2, explanation: "Humne index 1 (dusra slot) se anda nikala." }
      ]
    },
    pitfalls: [{ title: "0-Indexing", explanation: "Yaad rakhein, 1st item index 0 par hota hai. array[5] matlab 6th item!" }],
    quiz: [{ id: 1, text: "Array access ki time complexity kya hai?", options: ["O(1)", "O(n)"], correctAnswer: 0, explanation: "Direct index use karne se O(1) hota hai." }]
  },
  {
    id: "linked-list",
    title: "Linked Lists",
    description: "Like a treasure hunt where clues point to the next spot.",
    detailedExplanation: "Linked List nodes se banti hai. Har node mein data aur agle node ka pointer hota hai. Is mein naya data add karna asan hai kyunke array ki tarah shifts nahi karne parte.",
    pakistaniAnalogy: {
      title: "Treasure Hunt Clues",
      story: "Bachpan mein hum sab ne treasure hunt khela hai. Har parchi (node) par ek task hota hai aur agle task ka pata likha hota hai. Jab tak aap ek task nahi dhoondte, aapko agle ka nahi pata chalta. Linked List bilkul isi parchi ke system par chalti hai."
    },
    difficulty: "Intermediate",
    category: "Data Structures",
    initialCode: {
      javascript: `class Node {\n  constructor(v) {\n    this.v = v;\n    this.next = null;\n  }\n}\nconst head = new Node("Clue 1");\nhead.next = new Node("Clue 2");\nconsole.log("Current:", head.v);\nconsole.log("Next:", head.next.v);`,
      python: `class Node:\n    def __init__(self, v):\n        self.v = v\n        self.next = None\n\nhead = Node("Clue 1")\nhead.next = Node("Clue 2")\nprint(f"Current: {head.v}")\nprint(f"Next: {head.next.v}")`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Node {\n    string v;\n    Node* next;\n};\n\nint main() {\n    Node* head = new Node{"Clue 1", nullptr};\n    head->next = new Node{"Clue 2", nullptr};\n    cout << "Current: " << head->v << endl;\n    cout << "Next: " << head->next->v << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Music Playlist", "Browser History"],
    walkthrough: {
      code: `let head = { val: 1, next: null };\nhead.next = { val: 2, next: null };`,
      steps: [
        { line: 1, explanation: "Pehli parchi banai." },
        { line: 2, explanation: "Pehli parchi ko dusri se link kar diya." }
      ]
    },
    pitfalls: [{ title: "Memory Loss", explanation: "Agar aapne 'next' pointer kho diya, toh poori list gayab ho sakti hai!" }],
    quiz: [{ id: 1, text: "Linked list search complexity?", options: ["O(1)", "O(n)"], correctAnswer: 1, explanation: "Humein ek ek karke aage jana parta hai." }]
  },
  {
    id: "stack",
    title: "Stacks",
    description: "Like plates in a dhaba kitchen. Last on top comes off first.",
    detailedExplanation: "Stack LIFO (Last In, First Out) asool par kaam karta hai. Jo data aakhir mein enter hota hai, woi sab se pehle nikalta hai.",
    pakistaniAnalogy: {
      title: "Dhabay Ki Plates",
      story: "Jo plate sab se aakhir mein dhul kar upar rakhi jati hai, woi sab se pehle uthai jati hai. Isay kehte hain LIFO (Last In, First Out)."
    },
    difficulty: "Beginner",
    category: "Data Structures",
    initialCode: {
      javascript: `let stack = [];\nstack.push("Plate 1");\nstack.push("Plate 2");\nconsole.log("Popped:", stack.pop());\nconsole.log("Stack remains:", stack);`,
      python: `stack = []\nstack.append("Plate 1")\nstack.append("Plate 2")\nprint(f"Popped: {stack.pop()}")`,
      cpp: `#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nint main() {\n    stack<string> s;\n    s.push("Plate 1");\n    s.push("Plate 2");\n    cout << "Popped: " << s.top() << endl;\n    s.pop();\n    return 0;\n}`
    },
    complexities: { time: { average: "O(1)", worst: "O(1)" }, space: { worst: "O(n)" } },
    realWorld: ["Undo Button in Word", "Function Call Stack"],
    walkthrough: {
      code: `let s = [];\ns.push("Plate 1");\ns.pop();`,
      steps: [
        { line: 2, explanation: "Plate stack ke upar rakhi (Push)." },
        { line: 3, explanation: "Upar wali plate wapas utha li (Pop)." }
      ]
    },
    pitfalls: [{ title: "Stack Overflow", explanation: "Agar stack full ho jaye aur aap phir bhi push karein, toh memory crash ho jati hai." }],
    quiz: [{ id: 1, text: "Stack ka asool kya hai?", options: ["FIFO", "LIFO"], correctAnswer: 1, explanation: "Last In First Out." }]
  },
  {
    id: "queue",
    title: "Queues",
    description: "Like people waiting at NADRA office. First in, first out.",
    detailedExplanation: "Queue FIFO (First In, First Out) asool par chalti hai. Jo pehle aya, woi pehle serve hoga.",
    pakistaniAnalogy: {
      title: "NADRA Office Line",
      story: "Jo banda pehle line mein aya, token bhi usay pehle milega. Simple FIFO (First In, First Out) rule."
    },
    difficulty: "Beginner",
    category: "Data Structures",
    initialCode: {
      javascript: `let queue = ["Ahmed"];\nqueue.push("Sara");\nconsole.log("Serving:", queue.shift());\nconsole.log("Next in line:", queue[0]);`,
      python: `from collections import deque\nqueue = deque(["Ahmed"])\nqueue.append("Sara")\nprint(f"Serving: {queue.popleft()}")\nprint(f"Next in line: {queue[0]}")`,
      cpp: `#include <iostream>\n#include <queue>\n#include <string>\nusing namespace std;\n\nint main() {\n    queue<string> q;\n    q.push("Ahmed");\n    q.push("Sara");\n    cout << "Serving: " << q.front() << endl;\n    q.pop();\n    cout << "Next in line: " << q.front() << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(1)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Printer Job Queue", "Web Server Requests"],
    walkthrough: {
      code: `let q = [];\nq.push("Ahmed");\nq.shift();`,
      steps: [
        { line: 2, explanation: "Ahmed line mein lag gaya (Enqueue)." },
        { line: 3, explanation: "Ahmed ko token mil gaya aur wo nikal gaya (Dequeue)." }
      ]
    },
    pitfalls: [{ title: "Blocking", explanation: "Agar pehla banda agay nahi barh raha, toh poori line rukh jati hai." }],
    quiz: [{ id: 1, text: "Queue ka asool?", options: ["FIFO", "LIFO"], correctAnswer: 0, explanation: "First In First Out." }]
  },
  {
    id: "hash-table",
    title: "Hash Tables",
    description: "Like a mobile contact list. Search by name, get number instantly.",
    detailedExplanation: "Hash table keys ko values ke saath map karti hai. Ye 'Hashing' use karti hai taake search O(1) mein ho sake.",
    pakistaniAnalogy: {
      title: "Mobile Contact List",
      story: "Aap ko kisi dost ka number chahiye, aap poori list scroll nahi karte balkay uska naam search karte hain. Hash table piche se ek jadu (hash function) use karke direct number dhoond lata hai."
    },
    difficulty: "Intermediate",
    category: "Data Structures",
    initialCode: {
      javascript: `const phonebook = new Map();\nphonebook.set("Ali", "0300-1112223");\nconsole.log("Ali's Number:", phonebook.get("Ali"));`,
      python: `phonebook = {"Ali": "0300-1112223"}\nprint(f"Ali's Number: {phonebook['Ali']}")`,
      cpp: `#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    unordered_map<string, string> pb;\n    pb["Ali"] = "0300-1112223";\n    cout << "Ali's Number: " << pb["Ali"] << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(1)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Database Indexing", "Caching systems"],
    walkthrough: {
      code: `let m = new Map();\nm.set("Ali", "0300");\nm.get("Ali");`,
      steps: [
        { line: 2, explanation: "Ali ke naam se number save kiya." },
        { line: 3, explanation: "Direct Ali search karke number nikal liya." }
      ]
    },
    pitfalls: [{ title: "Collisions", explanation: "Jab do mukhtalif names ek hi slot pe chahay jayein, usay collision kehte hain." }],
    quiz: [{ id: 1, text: "Hash table search complexity?", options: ["O(1)", "O(n)"], correctAnswer: 0, explanation: "Ideally O(1) hota hai." }]
  },
  {
    id: "tree",
    title: "Trees & BST",
    description: "Like a family tree with Dada at the top.",
    detailedExplanation: "Trees hierarchical data structure hain. Binary Search Tree (BST) mein left child hamesha root se chota aur right child bada hota hai.",
    pakistaniAnalogy: {
      title: "Family Tree (Shajra)",
      story: "Sab se upar Dada (Root), phir unke bachay aur phir potay (Leaves). BST mein ek rule hai: chotay bachay left par, baday right par."
    },
    difficulty: "Intermediate",
    category: "Data Structures",
    initialCode: {
      javascript: `class Node {\n  constructor(v) {\n    this.v = v;\n    this.l = null;\n    this.r = null;\n  }\n}\nconst root = new Node(10);\nroot.l = new Node(5);\nroot.r = new Node(15);\nconsole.log("BST Root:", root.v);\nconsole.log("Left child (smaller):", root.l.v);`,
      python: `class Node:\n    def __init__(self, v):\n        self.v = v\n        self.l = None\n        self.r = None\n\nroot = Node(10)\nroot.l = Node(5)\nroot.r = Node(15)\nprint(f"BST Root: {root.v}")\nprint(f"Left child (smaller): {root.l.v}")`,
      cpp: `#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int v;\n    Node *l, *r;\n};\n\nint main() {\n    Node* root = new Node{10, nullptr, nullptr};\n    root->l = new Node{5, nullptr, nullptr};\n    root->r = new Node{15, nullptr, nullptr};\n    cout << "BST Root: " << root->v << endl;\n    cout << "Left child (smaller): " << root->l->v << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(log n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["File Systems", "HTML DOM"],
    walkthrough: {
      code: `let root = { v: 10, l: null, r: null };\nroot.l = { v: 5, l: null, r: null };`,
      steps: [
        { line: 1, explanation: "Root node banaya (Dada)." },
        { line: 2, explanation: "Chota bacha left side par rakha." }
      ]
    },
    pitfalls: [{ title: "Unbalanced Trees", explanation: "Agar tree ek hi side pe barhta jaye, toh ye Linked List ban jata hai aur speed kam ho jati hai." }],
    quiz: [{ id: 1, text: "BST mein choti values kahan jati hain?", options: ["Left", "Right"], correctAnswer: 0, explanation: "BST rule: Left is smaller." }]
  },
  {
    id: "graph",
    title: "Graphs",
    description: "Like motorways connecting Pakistani cities.",
    detailedExplanation: "Graph nodes (vertices) aur unke connections (edges) ka collection hai. Ye complex networks ko represent karne ke liye use hota hai.",
    pakistaniAnalogy: {
      title: "Motorway Network",
      story: "Lahore, Islamabad aur Karachi nodes hain, aur M2/M3 motorways unke edges hain. Shortest path dhoondne ke liye hum graph use karte hain."
    },
    difficulty: "Advanced",
    category: "Data Structures",
    initialCode: {
      javascript: `const graph = {\n  "LHR": ["ISB", "MUL"]\n};\nconsole.log("Connections from Lahore:", graph["LHR"]);`,
      python: `graph = {"LHR": ["ISB", "MUL"]}\nprint(f"Connections from Lahore: {graph['LHR']}")`,
      cpp: `#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, vector<string>> g;\n    g["LHR"] = {"ISB", "MUL"};\n    cout << "Connections from Lahore: ISB, MUL" << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(V + E)", worst: "O(V + E)" }, space: { worst: "O(V + E)" } },
    realWorld: ["Social Media Networks", "Google Maps"],
    walkthrough: {
      code: `let g = { "LHR": ["ISB", "MUL"] };`,
      steps: [
        { line: 1, explanation: "Lahore shehar ko Islamabad aur Multan se link kiya." }
      ]
    },
    pitfalls: [{ title: "Cycles", explanation: "Agar rasta ghoom kar wapas wahin aa jaye, toh recursion mein cycle ban sakti hai." }],
    quiz: [{ id: 1, text: "Social media friends kya hain?", options: ["Tree", "Graph"], correctAnswer: 1, explanation: "Kyunke koi bhi kisi se bhi connect ho sakta hai." }]
  },
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    description: "Like school assembly lines, sorting students by height.",
    detailedExplanation: "Bubble sort bar bar sath wale elements ko compare karta hai aur swap karta hai jab tak poori list sort na ho jaye.",
    pakistaniAnalogy: {
      title: "Assembly Line Sorting",
      story: "Teacher heights check kar raha hai. Lambay bache ko agay bhejte bhejte sab se lamba bacha aakhir mein chala jata hai."
    },
    difficulty: "Beginner",
    category: "Algorithms",
    initialCode: {
      javascript: `function bubbleSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length - 1; j++) {\n      if (arr[j] > arr[j+1]) {\n        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}\nconsole.log("Sorted:", bubbleSort([5, 1, 4, 2, 8]));`,
      python: `def bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(len(arr)-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\nprint(f"Sorted: {bubble_sort([5, 1, 4, 2, 8])}")`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid bubbleSort(vector<int>& arr) {\n    for(int i = 0; i < arr.size(); i++) {\n        for(int j = 0; j < arr.size() - 1; j++) {\n            if(arr[j] > arr[j+1]) {\n                swap(arr[j], arr[j+1]);\n            }\n        }\n    }\n}\n\nint main() {\n    vector<int> arr = {5, 1, 4, 2, 8};\n    bubbleSort(arr);\n    cout << "Sorted: ";\n    for(int n : arr) cout << n << " ";\n    cout << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(n^2)", worst: "O(n^2)" }, space: { worst: "O(1)" } },
    realWorld: ["Small list sorting"],
    walkthrough: {
      code: `if (arr[j] > arr[j+1]) swap();`,
      steps: [
        { line: 1, explanation: "Agar pehla bada hai, toh dono ki jagah badal do." }
      ]
    },
    pitfalls: [{ title: "Very Slow", explanation: "Bari lists ke liye ye bohot slow algorithm hai." }],
    quiz: [{ id: 1, text: "Bubble sort worst case complexity?", options: ["O(n)", "O(n^2)"], correctAnswer: 1, explanation: "Nested loops ki wajah se O(n^2) hai." }]
  },
  {
    id: "binary-search",
    title: "Binary Search",
    description: "Fast way to find a page in a book by halving it.",
    detailedExplanation: "Binary Search sorted array mein middle element check karta hai aur har step par search space ko half kar deta hai.",
    pakistaniAnalogy: {
      title: "Guessing Number Game",
      story: "Agar mein kahun 1 se 100 ke beech koi number guess karo, toh aap 50 bolte ho. Agar mein kahun 'high', toh aap 50 se neechay sab bhool jate ho. Har step pe options aadhay!"
    },
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: {
      javascript: `function binarySearch(arr, x) {\n  let l = 0, r = arr.length - 1;\n  while (l <= r) {\n    let m = Math.floor((l+r)/2);\n    if (arr[m] === x) return m;\n    if (arr[m] < x) l = m + 1;\n    else r = m - 1;\n  }\n  return -1;\n}\nconsole.log("Index of 3:", binarySearch([1, 2, 3, 4, 5], 3));`,
      python: `def binary_search(arr, x):\n    l, r = 0, len(arr) - 1\n    while l <= r:\n        m = (l + r) // 2\n        if arr[m] == x: return m\n        if arr[m] < x: l = m + 1\n        else: r = m - 1\n    return -1\n\nprint(f"Index of 3: {binary_search([1, 2, 3, 4, 5], 3)}")`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint binarySearch(vector<int>& arr, int x) {\n    int l = 0, r = arr.size() - 1;\n    while(l <= r) {\n        int m = l + (r - l) / 2;\n        if(arr[m] == x) return m;\n        if(arr[m] < x) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n}\n\nint main() {\n    vector<int> arr = {1, 2, 3, 4, 5};\n    cout << "Index of 3: " << binarySearch(arr, 3) << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(log n)", worst: "O(log n)" }, space: { worst: "O(1)" } },
    realWorld: ["Dictionary search", "Library catalog"],
    walkthrough: {
      code: `let mid = (l + r) / 2;\nif (arr[mid] < target) l = mid + 1;`,
      steps: [
        { line: 1, explanation: "Middle element nikalo." },
        { line: 2, explanation: "Agar target bada hai, toh left half chor do." }
      ]
    },
    pitfalls: [{ title: "Sorted Only", explanation: "Ye sirf sorted data par kaam karta hai. Agar data unsorted hai, toh pehle sort karna parega." }],
    quiz: [{ id: 1, text: "Binary search complexity?", options: ["O(n)", "O(log n)"], correctAnswer: 1, explanation: "Divide and conquer ki wajah se log n hai." }]
  },
  {
    id: "bfs",
    title: "BFS & DFS",
    description: "Ways to explore streets or dead ends.",
    detailedExplanation: "BFS level by level explore karta hai (Queue use karke), jabke DFS gehrai mein jata hai (Stack/Recursion use karke).",
    pakistaniAnalogy: {
      title: "Street Mapping",
      story: "BFS matlab apne parosiyon se milna pehle, phir agle ilaqay jana. DFS matlab ek hi sarak ke aakhir tak jana jab tak dead end na aa jaye."
    },
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: {
      javascript: `function BFS(g, s) {\n  let q = [s], v = new Set([s]);\n  while (q.length) {\n    let n = q.shift();\n    console.log("Visited:", n);\n    for (let neighbor of g[n]) {\n      if (!v.has(neighbor)) {\n        v.add(neighbor);\n        q.push(neighbor);\n      }\n    }\n  }\n}\nBFS({1:[2,3], 2:[4], 3:[], 4:[]}, 1);`,
      python: `from collections import deque\ndef bfs(g, s):\n    q = deque([s])\n    v = {s}\n    while q:\n        n = q.popleft()\n        print(f"Visited: {n}")\n        for neighbor in g[n]:\n            if neighbor not in v:\n                v.add(neighbor)\n                q.append(neighbor)\n\nbfs({1:[2,3], 2:[4], 3:[], 4:[]}, 1)`,
      cpp: `#include <iostream>\n#include <vector>\n#include <queue>\n#include <map>\n#include <set>\nusing namespace std;\n\nvoid bfs(map<int, vector<int>>& g, int s) {\n    queue<int> q; q.push(s);\n    set<int> v; v.insert(s);\n    while(!q.empty()) {\n        int n = q.front(); q.pop();\n        cout << "Visited: " << n << endl;\n        for(int neighbor : g[n]) {\n            if(!v.count(neighbor)) {\n                v.insert(neighbor);\n                q.push(neighbor);\n            }\n        }\n    }\n}\n\nint main() {\n    map<int, vector<int>> g;\n    g[1] = {2, 3}; g[2] = {4}; g[3] = {}; g[4] = {};\n    bfs(g, 1);\n    return 0;\n}`
    },
    complexities: { time: { average: "O(V + E)", worst: "O(V + E)" }, space: { worst: "O(V)" } },
    realWorld: ["GPS Navigation", "Friend suggestions"],
    walkthrough: {
      code: `queue.push(start);\nwhile(queue.length) { node = queue.shift(); }`,
      steps: [
        { line: 1, explanation: "Start node line mein lagaya." },
        { line: 2, explanation: "Jab tak line khali nahi, ek ek karke visit karo." }
      ]
    },
    pitfalls: [{ title: "Memory (BFS)", explanation: "BFS bohot zyada memory leta hai kyunke usay saare neighbors store karne parte hain." }],
    quiz: [{ id: 1, text: "BFS mein kya use hota hai?", options: ["Queue", "Stack"], correctAnswer: 0, explanation: "BFS level-order ke liye Queue use karta hai." }]
  },
  {
    id: "recursion",
    title: "Recursion",
    description: "A dream inside a dream. Inception for code.",
    detailedExplanation: "Recursion mein function apne aap ko call karta hai. Is mein hamesha ek base case hona chahiye.",
    pakistaniAnalogy: {
      title: "Inception Dream",
      story: "Khawab ke andar ek aur khawab. Bas base case (wake up call) hona chahiye warna aap stack overflow (hamesha ke liye so gaye) mein chale jayenge."
    },
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: {
      javascript: `function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log("Factorial of 5:", factorial(5));`,
      python: `def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\nprint(f"Factorial of 5: {factorial(5)}")`,
      cpp: `#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    cout << "Factorial of 5: " << factorial(5) << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Folders inside Folders", "Fractals"],
    walkthrough: {
      code: `if (n <= 1) return 1;\nreturn n * f(n-1);`,
      steps: [
        { line: 1, explanation: "Base case: Jab n 1 ho jaye, toh rukh jao." },
        { line: 2, explanation: "Apne aap ko choti value ke liye call karo." }
      ]
    },
    pitfalls: [{ title: "Stack Overflow", explanation: "Agar base case galat ho, toh program crash ho jayega." }],
    quiz: [{ id: 1, text: "Recursion ke liye sab se zaruri cheez?", options: ["Base Case", "Loop"], correctAnswer: 0, explanation: "Base case recursion ko rokta hai." }]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    description: "Remembering old answers to save time.",
    detailedExplanation: "DP complex problems ko sub-problems mein torta hai aur unke results store (memoize) karta hai.",
    pakistaniAnalogy: {
      title: "Diary Technique",
      story: "Agar mein poochu 2+2 kya hai, aap 4 kahoge. Phir 2+2+1 poochu toh aap direct 4+1 karoge. Pichla answer diary mein likh lene ko DP kehte hain."
    },
    difficulty: "Advanced",
    category: "Algorithms",
    initialCode: {
      javascript: `function fib(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 2) return 1;\n  memo[n] = fib(n-1, memo) + fib(n-2, memo);\n  return memo[n];\n}\nconsole.log("50th Fibonacci:", fib(50));`,
      python: `def fib(n, memo=None):\n    if memo is None: memo = {}\n    if n in memo: return memo[n]\n    if n <= 2: return 1\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]\n\nprint(f"50th Fibonacci: {fib(50)}")`,
      cpp: `#include <iostream>\n#include <map>\nusing namespace std;\n\nlong long fib(int n, map<int, long long>& memo) {\n    if (memo.count(n)) return memo[n];\n    if (n <= 2) return 1;\n    return memo[n] = fib(n-1, memo) + fib(n-2, memo);\n}\n\nint main() {\n    map<int, long long> memo;\n    cout << "50th Fibonacci: " << fib(50, memo) << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Optimizing Google Maps", "Financial modeling"],
    walkthrough: {
      code: `if (n in memo) return memo[n];\nmemo[n] = calculate();`,
      steps: [
        { line: 1, explanation: "Pehle check karo: kya diary mein answer pehle se hai?" },
        { line: 2, explanation: "Agar nahi, toh calculate karke save kar lo." }
      ]
    },
    pitfalls: [{ title: "Space usage", explanation: "Answers store karne ke liye kafi memory chahiye hoti hai." }],
    quiz: [{ id: 1, text: "Memoization ka maqsad?", options: ["Save Time", "Save Space"], correctAnswer: 0, explanation: "Results yaad rakhne se bar bar calculation nahi karni parti." }]
  },
  {
    id: "greedy",
    title: "Greedy Algorithms",
    description: "Take the best slice right now, don't worry about future.",
    detailedExplanation: "Greedy algorithms har step par local optimum (sab se behtreen) option chunte hain is umeed mein ke global optimum mil jaye.",
    pakistaniAnalogy: {
      title: "Pizza Slice Strategy",
      story: "Pizza ka dabba khulay toh jo sab se bada piece samne hai wo utha lo. Future ka nahi sochna, bas abhi ka best rasta chun-na."
    },
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: {
      javascript: `function change(amt) {\n  const coins = [25, 10, 5, 1];\n  let result = [];\n  for (let c of coins) {\n    while (amt >= c) {\n      amt -= c;\n      result.push(c);\n    }\n  }\n  return result;\n}\nconsole.log("Change for 41:", change(41));`,
      python: `def change(amt):\n    coins = [25, 10, 5, 1]\n    res = []\n    for c in coins:\n        while amt >= c:\n            amt -= c\n            res.append(c)\n    return res\n\nprint(f"Change for 41: {change(41)}")`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> change(int amt) {\n    int coins[] = {25, 10, 5, 1};\n    vector<int> res;\n    for(int c : coins) {\n        while(amt >= c) {\n            amt -= c;\n            res.push_back(c);\n        }\n    }\n    return res;\n}\n\nint main() {\n    vector<int> res = change(41);\n    cout << "Change for 41: ";\n    for(int c : res) cout << c << " ";\n    cout << endl;\n    return 0;\n}`
    },
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(1)" } },
    realWorld: ["Coin change problem", "Compression algorithms"],
    walkthrough: {
      code: `for (let c of coins) { if (amt >= c) take(c); }`,
      steps: [
        { line: 1, explanation: "Coins mein se sab se bada note uthao jo amount se chota ho." }
      ]
    },
    pitfalls: [{ title: "Not always perfect", explanation: "Zaruri nahi ke abhi ka best option future mein bhi best ho." }],
    quiz: [{ id: 1, text: "Greedy approach?", options: ["Best right now", "Think future"], correctAnswer: 0, explanation: "Greedy bas abhi ke faiday ka sochta hai." }]
  }
];

export const getTopicById = (id: string) => topics.find((t) => t.id === id);
