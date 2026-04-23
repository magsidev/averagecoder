export interface Topic {
  id: string;
  title: string;
  description: string;
  detailedExplanation?: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: "Data Structures" | "Algorithms";
  icon?: string;
  initialCode?: string;
  complexities?: {
    time: {
      average: string;
      worst: string;
    };
    space: {
      worst: string;
    };
  };
  realWorld?: string[];
  walkthrough?: {
    code: string;
    steps: { line: number; explanation: string; }[];
  };
}

export const topics: Topic[] = [
  {
    id: "array",
    title: "Arrays",
    description: "Like an egg tray. Each egg has one exact slot.",
    detailedExplanation: "Arrays bilkul ek andon ki tray ki tarah hote hain. Har item ki apni ek fixed jagah (index) hoti hai. Agar aapko 5th item chahiye, toh aap direct us jagah se utha sakte hain, bina baaki items check kiye. Is liye data dhoondna bohot fast (O(1)) hota hai. Lekin agar tray full ho jaye toh nayi bari tray lani parti hai.",
    difficulty: "Beginner",
    category: "Data Structures",
    initialCode: `// Working with Arrays in JavaScript
function eggTrayOperations() {
  let eggTray = new Array(6).fill(null);
  eggTray[0] = "Egg 1";
  eggTray[2] = "Egg 2";
  console.log("Current Tray:", eggTray);
  console.log("Egg at index 2 is:", eggTray[2]);
}
eggTrayOperations();
`,
    complexities: { time: { average: "O(1) access", worst: "O(n) search" }, space: { worst: "O(n)" } },
    realWorld: ["Attendance register", "Pixel data in images"]
  },
  {
    id: "linked-list",
    title: "Linked Lists",
    description: "Like a treasure hunt where each clue points to the next.",
    detailedExplanation: "Linked List ek treasure hunt jaisa hai. Is mein items memori mein lagatar nahi pare hote jaise Array mein. Har item (node) ke paas sirf apni value aur agle item ka pata (address/pointer) hota hai. Aapko start se le kar ek ek karke aage jana parta hai. Naya item add karna bohot asan hai, bas address update karo aur link jorr do!",
    difficulty: "Intermediate",
    category: "Data Structures",
    initialCode: `class Node {
  constructor(clue) {
    this.clue = clue;
    this.next = null;
  }
}
class TreasureHunt {
  constructor() { this.head = null; }
  addClue(clue) {
    const newNode = new Node(clue);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while(current.next) current = current.next;
      current.next = newNode;
    }
  }
}
const hunt = new TreasureHunt();
hunt.addClue("Look under the rug");
hunt.addClue("Check the fridge");
`,
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Browser previous/next navigation", "Music player playlists"]
  },
  {
    id: "stack",
    title: "Stacks",
    description: "Like plates in a dhaba kitchen. Last one on top comes off first.",
    detailedExplanation: "Stack bilkul dhaba mein rakhi plates ki tarah hai. Jo plate sab se aakhir mein rakhi jati hai (Push), wohi sab se pehle uthai jati hai (Pop). Is rule ko LIFO (Last In, First Out) kehte hain. Browser ki 'Back' button aur MS Word ka Undo feature bilkul isi tarah background mein Stack use karke kaam karta hai.",
    difficulty: "Beginner",
    category: "Data Structures",
    initialCode: `class Stack {
  constructor() { this.items = []; }
  push(plate) { this.items.push(plate); }
  pop() { return this.items.pop(); }
}
const dhabaPlates = new Stack();
dhabaPlates.push("Plate 1");
dhabaPlates.push("Plate 2");
console.log(dhabaPlates.pop()); // Plate 2
`,
    walkthrough: {
      code: `class Stack {
  constructor() {
    this.items = [];
  }

  push(plate) {
    this.items.push(plate);
  }

  pop() {
    return this.items.pop();
  }
}

const dhabaPlates = new Stack();
dhabaPlates.push("Plate 1");`,
      steps: [
        { line: 1, explanation: "Pehle humne ek 'Stack' class banai, jo plates handle karegi." },
        { line: 3, explanation: "Constructor mein humne ek empty array 'items' banaya jahan plates store hongi." },
        { line: 6, explanation: "Push method naya plate line ke aakhir (top) mein add karta hai." },
        { line: 7, explanation: "Array.push() use karke hum plate ko list ke end pe bhej dete hain." },
        { line: 10, explanation: "Pop method sab se upar wali plate wapas nikalne ke liye hai." },
        { line: 11, explanation: "Array.pop() array ka last element delete karke wapas deta hai (LIFO logic)." },
        { line: 15, explanation: "Ab hum 'dhabaPlates' ke naam se apna naya stack banate hain." },
        { line: 16, explanation: "Pehli plate stack mein chali gayi!" }
      ]
    },
    complexities: { time: { average: "O(1)", worst: "O(1)" }, space: { worst: "O(n)" } },
    realWorld: ["Undo/Redo in editors", "Function call stack"]
  },
  {
    id: "queue",
    title: "Queues",
    description: "Like people waiting at NADRA office. First in, first out.",
    detailedExplanation: "Queue bilkul NADRA office ya bank ki line ki tarah hai. Jo banda pehle aata hai, uski baari pehle aati hai. Isko FIFO (First In, First Out) kehte hain. Log piche se line mein enter hote hain (Enqueue), aur aage se serve ho kar nikalte hain (Dequeue).",
    difficulty: "Beginner",
    category: "Data Structures",
    initialCode: `class Queue {
  constructor() { this.items = []; }
  enqueue(person) { this.items.push(person); }
  dequeue() { return this.items.shift(); }
}
const nadraLine = new Queue();
nadraLine.enqueue("Ahmed");
console.log(nadraLine.dequeue()); // Ahmed
`,
    complexities: { time: { average: "O(1)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Printer spooling", "Web server requests"]
  },
  {
    id: "hash-table",
    title: "Hash Tables",
    description: "Like saving mobile contacts by name. Quick lookup.",
    detailedExplanation: "Hash Table aapke smartphone ki contact list ki tarah hai. Aap direct kisi ka naam search karte hain aur uska number foran mil jata hai. Piche ek jadu (jise 'hash function' kehte hain) hota hai jo string (naam) ko ek array index mein convert karta hai, taake search bilkul instantly O(1) time mein ho jaye.",
    difficulty: "Intermediate",
    category: "Data Structures",
    initialCode: `const mobileContacts = new Map();
mobileContacts.set("Ahmed", "0300-1234567");
mobileContacts.set("Sara", "0333-7654321");
console.log(mobileContacts.get("Ahmed"));
`,
    complexities: { time: { average: "O(1)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Database indexing", "Caching (Redis)"]
  },
  {
    id: "tree",
    title: "Trees & BST",
    description: "Like a Pakistani family structure with Dada at the top.",
    detailedExplanation: "Tree ek khandaan ke shajra-e-nasab (family tree) ki tarah hai. Sab se upar Dada Abu hote hain jise 'Root' kehte hain, phir unke bachay, aur phir unke bachay (jinhe 'Leaves' kehte hain). BST (Binary Search Tree) mein ek special rule hota hai: chotay numbers hamesha left par, baday right par. Is se baray data mein searching bohot asan ho jati hai.",
    difficulty: "Intermediate",
    category: "Data Structures",
    initialCode: `class FamilyMember {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
}
const dada = new FamilyMember("Dada Abu");
const father = new FamilyMember("Father");
const uncle = new FamilyMember("Uncle");
dada.children.push(father, uncle);
`,
    complexities: { time: { average: "O(log n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["File system directories", "HTML DOM representation"]
  },
  {
    id: "graph",
    title: "Graphs",
    description: "Like cities connected by roads and motorway networks.",
    detailedExplanation: "Graph shehron (cities) ke network ki tarah hai jo motorways aur sarak se connected hain. Har shehar ek 'Node' hai aur har sarak ek 'Edge' hai. Kuch rastay one-way hote hain (Directed Graph) aur kuch two-way. Google Maps ya Bykea graph ko use karke do jagahon ke darmiyan sab se chota rasta (shortest path) dhoondte hain.",
    difficulty: "Advanced",
    category: "Data Structures",
    initialCode: `class MotorwayNetwork {
  constructor() { this.cities = new Map(); }
  addRoad(cityA, cityB) {
    if (!this.cities.has(cityA)) this.cities.set(cityA, []);
    this.cities.get(cityA).push(cityB);
  }
}
const m2 = new MotorwayNetwork();
m2.addRoad("Lahore", "Islamabad");
`,
    complexities: { time: { average: "O(V + E)", worst: "O(V + E)" }, space: { worst: "O(V + E)" } },
    realWorld: ["Google Maps routing", "Social network connections"]
  },
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    description: "Like school assembly lines, sorting students by height.",
    detailedExplanation: "Bubble Sort bilkul school ki morning assembly ki tarah hai jahan bacho ko height ke hisab se line mein khara kiya jata hai. Teacher line ke start se chalna shuru karta hai, do bacho ko dekhta hai, agar pehla bada hai toh dono ki jagah swap kar deta hai. Aese karte karte sab se lamba bacha 'bubble up' ho kar line ke aakhir par chala jata hai.",
    difficulty: "Beginner",
    category: "Algorithms",
    initialCode: `function bubbleSort(heights) {
  let n = heights.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (heights[j] > heights[j + 1]) {
        let temp = heights[j];
        heights[j] = heights[j + 1];
        heights[j + 1] = temp;
      }
    }
  }
  return heights;
}
console.log(bubbleSort([5, 3, 8, 1]));
`,
    complexities: { time: { average: "O(n^2)", worst: "O(n^2)" }, space: { worst: "O(1)" } },
    realWorld: ["Sorting small datasets", "Educational introductions"]
  },
  {
    id: "binary-search",
    title: "Binary Search",
    description: "Like guessing a number by halving choices. Very fast!",
    detailedExplanation: "Agar aap book mein koi chapter dhoond rahe hain, toh aap seedha kitab ko middle se open karte hain. Agar apka topic left side par hai, toh aap right half ko bilkul chor dete hain aur bache hue hissay ka dubara middle check karte hain. Har step par galat options aadhay (half) ho jate hain. Is liye yeh O(log n) time leta hai jo ke bohot fast hai!",
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: `function binarySearch(pages, targetPage) {
  let left = 0, right = pages.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (pages[mid] === targetPage) return mid;
    if (pages[mid] < targetPage) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
`,
    complexities: { time: { average: "O(log n)", worst: "O(log n)" }, space: { worst: "O(1)" } },
    realWorld: ["Dictionary lookups", "Database querying"]
  },
  {
    id: "bfs",
    title: "BFS & DFS",
    description: "Like exploring a neighborhood street by street (BFS) or going down a dead end (DFS).",
    detailedExplanation: "BFS (Breadth First Search) aese hai jaise apne ghar ke aas paas wali saari streets aur parosiyon ko pehle check karna, phir agle ilaqay mein jana. Is ke liye hum 'Queue' use karte hain. \n\nDFS (Depth First Search) aese hai jaise ek hi sarak par aakhir tak mazeed aage chalte jana jab tak dead end na aa jaye, phir wapas aakar (backtrack) doosra rasta check karna. Is ke liye 'Stack' ya Recursion use hoti hai.",
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: `function BFS(graph, startCity) {
  let queue = [startCity];
  let visited = new Set([startCity]);
  
  while(queue.length > 0) {
    let city = queue.shift();
    console.log("Visiting:", city);
    let neighbors = graph[city] || [];
    for(let neighbor of neighbors) {
      if(!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
`,
    complexities: { time: { average: "O(V + E)", worst: "O(V + E)" }, space: { worst: "O(V)" } },
    realWorld: ["Web crawlers", "GPS Navigation"]
  },
  {
    id: "recursion",
    title: "Recursion",
    description: "Like a dream inside a dream, breaking problems into smaller ones.",
    detailedExplanation: "Recursion ek aesa concept hai jahan function khud ko hi bar bar call karta rehta hai. Bilkul 'Inception' movie ki tarah jahan khawab ke andar ek aur khawab hota hai. Lekin is mein ek aakhri condition (jise base case kehte hain) ka hona lazmi hai taake recursion wapas aa sake, warna apka program hamesha ke liye atak jayega (Stack Overflow).",
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: `function factorial(n) {
  // Base case: wake up from the dream
  if (n <= 1) return 1;
  // Dream deeper
  return n * factorial(n - 1);
}
console.log(factorial(5));
`,
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(n) due to call stack" } },
    realWorld: ["Parsing XML/JSON", "Directory traversal"]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    description: "Like remembering answers to old questions so you don't calculate again.",
    detailedExplanation: "Dynamic Programming (DP) ka maqsad time bachana hai. Iska concept simple hai: 'Jo sawal ka jawab pehle calculate kar liya hai, usay yaad rakh lo'. Jaise agar mein aapse poochu 2+2 kya hai? Aap kahoge 4. Phir mein poochu 2+2+1 kya hai? Aap wapas 2+2 = 4 nahi karoge, balke pehle wale 4 mein direct 1 add karke 5 bata do ge. DP mein is technique ko 'Memoization' kehte hain.",
    difficulty: "Advanced",
    category: "Algorithms",
    initialCode: `function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n]; // Remembered!
  if (n <= 2) return 1;
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
console.log(fibonacci(50));
`,
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Optimization problems", "Sequence alignments in DNA"]
  },
  {
    id: "greedy",
    title: "Greedy Algorithms",
    description: "Like taking the biggest slice of pizza available right now.",
    detailedExplanation: "Greedy algorithm ka asool bada seedha hai: 'abhi is waqt jo rasta sab se zyada faida mand lag raha hai, woh le lo, future ki baad mein dekhenge'. Misaal ke tor par, agar kisi ko 85 rupees ka change wapas karna hai, toh aap pehle sab se bada note dhoondte hain (50 ka), phir 20, phir 10, phir 5 ka coin. Is se change foran calculate ho jata hai.",
    difficulty: "Intermediate",
    category: "Algorithms",
    initialCode: `function makeChange(amount) {
  const coins = [50, 20, 10, 5, 1]; // Pakistani Rupee coins/notes
  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}
console.log("Change for 85:", makeChange(85));
`,
    complexities: { time: { average: "O(n)", worst: "O(n)" }, space: { worst: "O(n)" } },
    realWorld: ["Network routing", "Huffman encoding in compression"]
  }
];

export const getTopicById = (id: string) => topics.find((t) => t.id === id);
