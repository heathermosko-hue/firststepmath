/* ============================================
   FirstStepMath – Question Bank
   Aligned to Common Core (California / Ontario)
   PK–Grade 2

   Visual types (for MC questions):
     null                              – no visual
     { type:"tenframe",  filled:N, max:10 }   – 10-frame (max:5 → 5-frame)
     { type:"tenframe_add", a:N, b:M }        – addition two-color 10-frame
     { type:"numberline", min:N, max:M, mark:V }
     { type:"numberline_add", min:N, max:M, start:S, jump:J }
     { type:"equation",  text:"8 + ? = 11" }
     { type:"base10",    tens:N, ones:M }
     { type:"emoji",     content:"🍎🍎🍎" }

   Interactive question types (replace MC):
     { type:"pattern_complete", pattern:["🔴","🔵","?"], choices:["🔴","🔵","🟡"], correct:"🔵" }
     { type:"cross_off",  total:N, crossOff:M, emoji:"🍎", correct:"3" }
     { type:"tap_add",    groupA:N, groupB:M,  emoji:"⭐", correct:"7" }
   ============================================ */

const QUESTIONS = {

  /* ======================= PRESCHOOL / TK ======================= */
  prek: {

    counting5: {
      title: "Counting to 5", icon: "🔢", difficulty: 1,
      standard: "PK.NS.1–3",
      questions: [
        { q: "How many dots do you see?",          visual: { type:"tenframe", filled:2, max:5 }, answers: ["1","2","3","4"],   correct: "2",  standard:"PK.NS.3" },
        { q: "How many dots do you see?",          visual: { type:"tenframe", filled:4, max:5 }, answers: ["3","4","5","6"],   correct: "4",  standard:"PK.NS.3" },
        { q: "How many dots do you see?",          visual: { type:"tenframe", filled:1, max:5 }, answers: ["1","2","3","4"],   correct: "1",  standard:"PK.NS.3" },
        { q: "How many dots do you see?",          visual: { type:"tenframe", filled:5, max:5 }, answers: ["3","4","5","6"],   correct: "5",  standard:"PK.NS.3" },
        { type:"count_tap", q:"How many apples are there?", items:["🍎","🍎","🍎"],         answers:["2","3","4","5"],  correct:"3",  standard:"PK.NS.1" },
        { type:"count_tap", q:"How many stars are there?",  items:["⭐","⭐","⭐","⭐"],      answers:["3","4","5","6"],  correct:"4",  standard:"PK.NS.1" },
        { q: "How many dots do you see?",          visual: { type:"tenframe", filled:3, max:5 }, answers: ["2","3","4","5"],   correct: "3",  standard:"PK.NS.3" },
        { type:"count_tap", q:"How many frogs are there?",  items:["🐸","🐸"],              answers:["1","2","3","4"],  correct:"2",  standard:"PK.NS.1" },
      ]
    },

    counting10: {
      title: "Counting to 10", icon: "🔟", difficulty: 1,
      standard: "PK.NS.1–2",
      questions: [
        { q: "How many dots are in the ten frame?", visual: { type:"tenframe", filled:6  }, answers: ["5","6","7","8"],   correct: "6",  standard:"PK.NS.1" },
        { q: "How many dots are in the ten frame?", visual: { type:"tenframe", filled:7  }, answers: ["6","7","8","9"],   correct: "7",  standard:"PK.NS.1" },
        { q: "How many dots are in the ten frame?", visual: { type:"tenframe", filled:9  }, answers: ["7","8","9","10"],  correct: "9",  standard:"PK.NS.2" },
        { q: "How many dots are in the ten frame?", visual: { type:"tenframe", filled:8  }, answers: ["6","7","8","9"],   correct: "8",  standard:"PK.NS.1" },
        { q: "How many more are needed to make 10?",  visual: { type:"tenframe", filled:7  }, answers: ["2","3","4","5"],   correct: "3",  standard:"PK.NS.2" },
        { q: "How many dots are in the ten frame?", visual: { type:"tenframe", filled:10 }, answers: ["8","9","10","11"], correct: "10", standard:"PK.NS.1" },
        { q: "How many dots are in the ten frame?", visual: { type:"tenframe", filled:4  }, answers: ["3","4","5","6"],   correct: "4",  standard:"PK.NS.1" },
        { q: "How many more are needed to make 10?",  visual: { type:"tenframe", filled:6  }, answers: ["3","4","5","6"],   correct: "4",  standard:"PK.NS.2" },
      ]
    },

    compare: {
      title: "More & Fewer", icon: "⚖️", difficulty: 1,
      standard: "PK.NS.4",
      questions: [
        { q: "Which group has MOST?",  visual: null, answers: ["🍎🍎","🍎🍎🍎🍎"],                     correct: "🍎🍎🍎🍎", standard:"PK.NS.4" },
        { q: "Which group has LEAST?", visual: null, answers: ["⭐⭐⭐","⭐⭐"],                          correct: "⭐⭐",      standard:"PK.NS.4" },
        { q: "Which group has MOST?",  visual: null, answers: ["🐸","🐸🐸🐸"],                           correct: "🐸🐸🐸",   standard:"PK.NS.4" },
        { q: "Which group has LEAST?", visual: null, answers: ["🍭🍭🍭🍭","🍭🍭"],                       correct: "🍭🍭",     standard:"PK.NS.4" },
        { q: "Which group has MOST?",  visual: null, answers: ["🌟🌟","🌟🌟🌟🌟🌟","🌟🌟🌟","🌟"],       correct: "🌟🌟🌟🌟🌟", standard:"PK.NS.4" },
        { q: "Which group has LEAST?", visual: null, answers: ["🐣🐣🐣","🐣","🐣🐣🐣🐣","🐣🐣"],         correct: "🐣",       standard:"PK.NS.4" },
        { q: "Which number is the BIGGEST?",  visual: null, answers: ["2","5","3","4"],    correct: "5",       standard:"PK.NS.4" },
        { q: "Which number is the SMALLEST?", visual: null, answers: ["8","6","9","7"],    correct: "6",       standard:"PK.NS.4" },
        { q: "Which number is the BIGGEST?",  visual: null, answers: ["1","4","2","3"],    correct: "4",       standard:"PK.NS.4" },
        { q: "Which number is the SMALLEST?", visual: null, answers: ["5","3","7","1"],    correct: "1",       standard:"PK.NS.4" },
        { q: "5 is ? than 3",          visual: null, answers: ["greater","equal","less","none"],       correct: "greater",   standard:"PK.NS.4" },
        { q: "2 is ? than 4",          visual: null, answers: ["greater","equal","less","none"],       correct: "less",      standard:"PK.NS.4" },
        { q: "3 is ? than 3",          visual: null, answers: ["greater","equal","less","none"],       correct: "equal",     standard:"PK.NS.4" },
        { q: "7 is ? than 9",          visual: null, answers: ["greater","equal","less","none"],       correct: "less",      standard:"PK.NS.4" },
      ]
    },

    patterns: {
      title: "Patterns", icon: "🎨", difficulty: 2,
      standard: "PK.AF.1–2",
      questions: [
        { type:"pattern_complete", q:"What comes next? (AB)", pattern:["🔴","🔵","🔴","🔵","🔴","?"], choices:["🔴","🔵","🟡","🟢"], correct:"🔵", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (AB)", pattern:["🐱","🐶","🐱","🐶","🐱","?"], choices:["🐱","🐶","🐰","🐻"], correct:"🐶", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (ABC)", pattern:["🍎","🍊","🍋","🍎","🍊","?"], choices:["🍎","🍊","🍋","🍇"], correct:"🍋", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (ABC)", pattern:["🐸","🦋","🐢","🐸","🦋","?"], choices:["🐸","🦋","🐢","🐝"], correct:"🐢", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (ABB)", pattern:["⭐","🌙","🌙","⭐","🌙","?"], choices:["⭐","🌙","☀️","💫"], correct:"🌙", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (ABB)", pattern:["🚗","🚕","🚕","🚗","🚕","?"], choices:["🚗","🚕","🚙","🚌"], correct:"🚕", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (AAB)", pattern:["🌸","🌸","🌻","🌸","🌸","?"], choices:["🌸","🌻","🌺","🌼"], correct:"🌻", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (AAB)", pattern:["🔺","🔺","🟦","🔺","🔺","?"], choices:["🔺","🟦","🟡","🔴"], correct:"🟦", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (ABCD)", pattern:["🐶","🐱","🐰","🐻","🐶","?"], choices:["🐶","🐱","🐰","🐻"], correct:"🐱", standard:"PK.AF.2" },
        { type:"pattern_complete", q:"What comes next? (ABCD)", pattern:["🍕","🍔","🌮","🍩","🍕","?"], choices:["🍕","🍔","🌮","🍩"], correct:"🍔", standard:"PK.AF.2" },
      ]
    },

    shapes2d: {
      title: "2D Shapes", icon: "🔷", difficulty: 1,
      standard: "PK.G.1",
      questions: [
        { q: "Which shape has 3 sides?",             visual: null,                             answers: ["Circle","Square","Triangle","Rectangle"], correct: "Triangle",  standard:"PK.G.1" },
        { q: "Which shape is perfectly round?",      visual: null,                             answers: ["Square","Triangle","Rectangle","Circle"],  correct: "Circle",    standard:"PK.G.1" },
        { q: "Which shape has 4 equal sides?",       visual: null,                             answers: ["Circle","Square","Triangle","Rectangle"],  correct: "Square",    standard:"PK.G.1" },
        { q: "Which shape has 0 corners?",           visual: null,                             answers: ["Triangle","Square","Circle","Rectangle"],  correct: "Circle",    standard:"PK.G.1" },
        { q: "How many sides does a triangle have?", visual: { type:"shape", name:"triangle"  }, answers: ["2","3","4","5"],  correct: "3", standard:"PK.G.1" },
        { q: "How many sides does a square have?",   visual: { type:"shape", name:"square"    }, answers: ["3","4","5","6"],  correct: "4", standard:"PK.G.1" },
        { q: "How many sides does a rectangle have?",visual: { type:"shape", name:"rectangle" }, answers: ["3","4","5","6"],  correct: "4", standard:"PK.G.1" },
        { q: "What is this shape called?",           visual: { type:"shape", name:"hexagon"   }, answers: ["Pentagon","Hexagon","Octagon","Rhombus"], correct: "Hexagon",  standard:"PK.G.1" },
        { q: "How many sides does a hexagon have?",  visual: { type:"shape", name:"hexagon"   }, answers: ["5","6","7","8"],  correct: "6", standard:"PK.G.1" },
        { q: "What is this shape called?",           visual: { type:"shape", name:"octagon"   }, answers: ["Hexagon","Rhombus","Octagon","Pentagon"], correct: "Octagon",  standard:"PK.G.1" },
        { q: "How many sides does an octagon have?", visual: { type:"shape", name:"octagon"   }, answers: ["6","7","8","9"],  correct: "8", standard:"PK.G.1" },
        { q: "What is this shape called?",           visual: { type:"shape", name:"rhombus"   }, answers: ["Square","Rectangle","Rhombus","Circle"],  correct: "Rhombus",  standard:"PK.G.1" },
        { q: "A rhombus has 4 equal sides — true or false?", visual: { type:"shape", name:"rhombus" }, answers: ["True","False"],  correct: "True", standard:"PK.G.1" },
        { q: "What is this shape called?",           visual: { type:"shape", name:"oval"      }, answers: ["Circle","Oval","Rectangle","Square"],     correct: "Oval",     standard:"PK.G.1" },
        { q: "How is an oval different from a circle?", visual: { type:"shape", name:"oval"   }, answers: ["It has corners","It is stretched out","It has 4 sides","It is flat"], correct: "It is stretched out", standard:"PK.G.1" },
        { q: "What shape is an egg? 🥚",             visual: { type:"emoji",  content:"🥚"    }, answers: ["Circle","Square","Oval","Triangle"],       correct: "Oval",     standard:"PK.G.1" },
        { q: "What shape is a door? 🚪",             visual: { type:"emoji",  content:"🚪"    }, answers: ["Circle","Triangle","Rectangle","Square"],  correct: "Rectangle",standard:"PK.G.3" },
        { q: "What shape is the sun? ☀️",            visual: { type:"emoji",  content:"☀️"    }, answers: ["Square","Circle","Triangle","Star"],       correct: "Circle",   standard:"PK.G.3" },
      ]
    },

    shapes3d: {
      title: "3D Shapes", icon: "🎱", difficulty: 2,
      standard: "PK.G.2",
      questions: [
        { q: "Which shape looks like a ball? ⚽",    visual: { type:"emoji", content:"⚽" }, answers: ["Cube","Cylinder","Sphere","Cone"],    correct: "Sphere",   standard:"PK.G.2" },
        { q: "Which shape looks like a box? 📦",    visual: { type:"emoji", content:"📦" }, answers: ["Sphere","Cone","Cylinder","Cube"],    correct: "Cube",     standard:"PK.G.2" },
        { q: "Which shape looks like a can? 🥫",    visual: { type:"emoji", content:"🥫" }, answers: ["Cube","Cone","Cylinder","Sphere"],    correct: "Cylinder", standard:"PK.G.2" },
        { q: "Which shape looks like an ice cream cone? 🍦", visual: { type:"emoji", content:"🍦" }, answers: ["Sphere","Cube","Cylinder","Cone"], correct: "Cone", standard:"PK.G.2" },
        { q: "A 🎲 is a ?",                         visual: { type:"emoji", content:"🎲" }, answers: ["Sphere","Cone","Cube","Cylinder"],correct: "Cube", standard:"PK.G.2" },
        { q: "A 🌐 globe is a ?",                   visual: { type:"emoji", content:"🌐" }, answers: ["Cube","Sphere","Cone","Cylinder"],correct: "Sphere",standard:"PK.G.2"},
        { q: "How many flat faces does a cube have?", visual: null, answers: ["4","5","6","8"],                    correct: "6",        standard:"PK.G.2" },
      ]
    },

    measurement: {
      title: "Compare Sizes", icon: "📏", difficulty: 1,
      standard: "PK.M.1–3",
      questions: [
        { q: "Which is TALLER?",  visual: { type:"compare", compare:"tall", items:[{emoji:"🌳", label:"Tree",    size:"large"},{emoji:"🌸", label:"Flower", size:"small"}] }, answers: ["Tree","Flower"],    correct: "Tree",    standard:"PK.M.1" },
        { q: "Which is SHORTER?", visual: { type:"compare", compare:"tall", items:[{emoji:"🦒", label:"Giraffe", size:"large"},{emoji:"🐱", label:"Cat",    size:"small"}] }, answers: ["Giraffe","Cat"],    correct: "Cat",     standard:"PK.M.1" },
        { q: "Which is TALLER?",  visual: { type:"compare", compare:"tall", items:[{emoji:"🏠", label:"House",   size:"large"},{emoji:"🚗", label:"Car",    size:"small"}] }, answers: ["House","Car"],      correct: "House",   standard:"PK.M.1" },
        { q: "Which is LONGER?",  visual: { type:"compare", compare:"long", items:[{emoji:"✏️", label:"Pencil",  size:"large"},{emoji:"🖍️", label:"Crayon", size:"small"}] }, answers: ["Pencil","Crayon"],  correct: "Pencil",  standard:"PK.M.1" },
        { q: "Which is SHORTER?", visual: { type:"compare", compare:"long", items:[{emoji:"🚌", label:"Bus",     size:"large"},{emoji:"🚲", label:"Bike",   size:"small"}] }, answers: ["Bus","Bike"],       correct: "Bike",    standard:"PK.M.1" },
        { q: "Which is LONGER?",  visual: { type:"compare", compare:"long", items:[{emoji:"🐍", label:"Snake",   size:"large"},{emoji:"🐛", label:"Worm",   size:"small"}] }, answers: ["Snake","Worm"],     correct: "Snake",   standard:"PK.M.1" },
        { q: "Which is BIGGER?",  visual: { type:"compare", compare:"big",  items:[{emoji:"🐘", label:"Elephant",size:"large"},{emoji:"🐭", label:"Mouse",  size:"small"}] }, answers: ["Elephant","Mouse"], correct: "Elephant",standard:"PK.M.1" },
        { q: "Which is SMALLER?", visual: { type:"compare", compare:"big",  items:[{emoji:"🌳", label:"Tree",    size:"large"},{emoji:"🍎", label:"Apple",  size:"small"}] }, answers: ["Tree","Apple"],     correct: "Apple",   standard:"PK.M.1" },
        { q: "Which is BIGGER?",  visual: { type:"compare", compare:"big",  items:[{emoji:"🐋", label:"Whale",   size:"large"},{emoji:"🐟", label:"Fish",   size:"small"}] }, answers: ["Whale","Fish"],     correct: "Whale",   standard:"PK.M.1" },
        { q: "A giraffe is ? than a cat",  visual: null, answers: ["taller","shorter","same"],  correct: "taller",  standard:"PK.M.3" },
        { q: "A pencil is ? than a crayon",visual: null, answers: ["shorter","longer","same"],  correct: "longer",  standard:"PK.M.3" },
        { q: "An elephant is ? than a mouse",visual: null, answers: ["smaller","bigger","same"],correct: "bigger",  standard:"PK.M.3" },
      ]
    },

    numberpath: {
      title: "Number Path", icon: "📏", difficulty: 1,
      standard: "PK.NS.1–4",
      questions: [
        { q: "What number comes AFTER 3?",         visual: { type:"numberline", min:1, max:10, mark:4 }, answers: ["2","3","4","5"],   correct: "4",  standard:"PK.NS.2" },
        { q: "What number comes AFTER 6?",         visual: { type:"numberline", min:1, max:10, mark:7 }, answers: ["5","6","7","8"],   correct: "7",  standard:"PK.NS.2" },
        { q: "What number comes BEFORE 5?",        visual: { type:"numberline", min:1, max:10, mark:4 }, answers: ["3","4","6","7"],   correct: "4",  standard:"PK.NS.2" },
        { q: "What number comes BEFORE 9?",        visual: { type:"numberline", min:1, max:10, mark:8 }, answers: ["6","7","8","10"],  correct: "8",  standard:"PK.NS.2" },
        { q: "Hop forward 2 from 3. Where do you land?", visual: { type:"numberline_add", min:1, max:10, start:3, jump:2 }, answers: ["3","4","5","6"], correct: "5", standard:"PK.NS.1" },
        { q: "Hop forward 3 from 2. Where do you land?", visual: { type:"numberline_add", min:1, max:10, start:2, jump:3 }, answers: ["4","5","6","7"], correct: "5", standard:"PK.NS.1" },
        { q: "Which number is GREATER — 4 or 7?",  visual: { type:"numberline", min:1, max:10, mark:7 }, answers: ["4","5","6","7"],   correct: "7",  standard:"PK.NS.4" },
        { q: "Which number is LESS — 8 or 5?",     visual: { type:"numberline", min:1, max:10, mark:5 }, answers: ["5","6","7","8"],   correct: "5",  standard:"PK.NS.4" },
      ]
    },

    sorting: {
      title: "Sorting", icon: "🗂️", difficulty: 1,
      standard: "PK.G.1",
      questions: [
        { q: "Which animal is DIFFERENT from the others?", visual: null, answers: ["🐶🐶🐶🐱 — the cat","🐶🐶🐶🐶 — a dog","🐱🐱🐱🐱 — a cat","🐶🐶🐶🐶 — all dogs"], correct: "🐶🐶🐶🐱 — the cat", standard:"PK.G.1" },
        { q: "Which shape is different from the others?",  visual: null, answers: ["○○○□ — the square","○○○○ — circle","□□□□ — square","△△△△ — triangle"], correct: "○○○□ — the square", standard:"PK.G.1" },
        { q: "Which group shows ALL circles?",             visual: null, answers: ["○○△○","○○○○","□○□○","△△○△"], correct: "○○○○", standard:"PK.G.1" },
        { q: "Which belongs with 🍎🍊🍋? (a fruit)",      visual: null, answers: ["🚗","🍇","🐶","🌳"],  correct: "🍇",  standard:"PK.AF.1" },
        { q: "Which does NOT belong: 🐶🐱🐦🚗?",          visual: null, answers: ["🐶","🐱","🐦","🚗"],  correct: "🚗",  standard:"PK.AF.1" },
        { q: "Which group shows ALL big shapes: 🔴🔵🟡?",  visual: null, answers: ["Sort by color","Sort by size","Sort by shape","Sort by number"], correct: "Sort by color", standard:"PK.G.1" },
        { q: "🍎🍎🍊🍎 — which fruit appears MOST?",      visual: null, answers: ["🍊","🍎","Same","Neither"], correct: "🍎", standard:"PK.NS.4" },
        { q: "Which two are the SAME shape?",             visual: null, answers: ["🔺 and 🟦","🔺 and 🔺","🟦 and ○","🔺 and ○"], correct: "🔺 and 🔺", standard:"PK.G.1" },
      ]
    },

    position: {
      title: "Position Words", icon: "📦", difficulty: 1,
      standard: "PK.G.3",
      questions: [
        { q: "The cat is ___ the box. 🐱📦 (inside)", visual: null, answers: ["above","below","inside","beside"], correct: "inside", standard:"PK.G.3" },
        { q: "The bird is ___ the tree. 🐦🌳 (on top)", visual: null, answers: ["under","inside","above","behind"], correct: "above", standard:"PK.G.3" },
        { q: "The ball is ___ the table. ⚽🪑 (under)", visual: null, answers: ["above","below","beside","inside"], correct: "below", standard:"PK.G.3" },
        { q: "The dog is ___ the fence. 🐶🏡 (next to)", visual: null, answers: ["inside","above","below","beside"], correct: "beside", standard:"PK.G.3" },
        { q: "Which word means NOT inside?",              visual: null, answers: ["inside","outside","under","over"], correct: "outside", standard:"PK.G.3" },
        { q: "The hat is ON the head. Where is the hat?", visual: { type:"emoji", content:"🎩" }, answers: ["under","beside","on top","behind"], correct: "on top", standard:"PK.G.3" },
        { q: "Which word means the OPPOSITE of above?",   visual: null, answers: ["above","inside","below","beside"], correct: "below", standard:"PK.G.3" },
        { q: "A fish swims ___ the water. 🐟💧",          visual: { type:"emoji", content:"🐟" }, answers: ["above","outside","inside","on top of"], correct: "inside", standard:"PK.G.3" },
      ]
    }
  },

  /* ======================= KINDERGARTEN ======================= */
  kindergarten: {

    counting20: {
      title: "Counting to 20", icon: "🔢", difficulty: 1,
      standard: "K.CC.1–5",
      questions: [
        { q: "How many dots are in the ten frame?",  visual: { type:"tenframe", filled:10 }, answers: ["8","9","10","11"],  correct: "10", standard:"K.CC.5" },
        { q: "What number comes AFTER 12?",          visual: null, answers: ["11","12","13","14"], correct: "13", standard:"K.CC.2" },
        { q: "What number comes BEFORE 17?",         visual: null, answers: ["15","16","18","19"], correct: "16", standard:"K.CC.2" },
        { q: "What number is MISSING? 14, 15, ?, 17", visual: { type:"equation", text:"14, 15, ?, 17" }, answers: ["13","15","16","18"], correct: "16", standard:"K.CC.2" },
        { q: "What number comes AFTER 19?",          visual: null, answers: ["17","18","20","21"], correct: "20", standard:"K.CC.1" },
        { q: "Count by 10s. What comes after 10?",   visual: null, answers: ["11","15","20","30"], correct: "20", standard:"K.CC.1" },
        { q: "How many dots?",                       visual: { type:"tenframe_add", a:10, b:5 }, answers: ["13","14","15","16"], correct: "15", standard:"K.CC.5" },
        { q: "What number is MISSING? 17, 18, ?, 20", visual: { type:"equation", text:"17, 18, ?, 20" }, answers: ["16","17","19","21"], correct: "19", standard:"K.CC.2" },
        { q: "What number comes AFTER 15?",  visual: { type:"numberline", min:10, max:20, mark:16 }, answers: ["14","15","16","17"], correct: "16", standard:"K.CC.2" },
        { q: "What number is MISSING? 11, ?, 13", visual: { type:"numberline", min:10, max:20, mark:12 }, answers: ["10","11","12","14"], correct: "12", standard:"K.CC.2" },
      ]
    },

    compare: {
      title: "Compare Numbers", icon: "⚖️", difficulty: 2,
      standard: "K.CC.6–7",
      questions: [
        { q: "Which is GREATER — 7 or 9?",           visual: { type:"numberline", min:0, max:10, mark:9 }, answers: ["7","8","9","10"],   correct: "9",  standard:"K.CC.7" },
        { q: "Which is LESS — 4 or 6?",              visual: { type:"numberline", min:0, max:10, mark:4 }, answers: ["3","4","5","6"],    correct: "4",  standard:"K.CC.7" },
        { q: "8 is ? than 5",                      visual: null, answers: ["less","equal to","greater","smaller"], correct: "greater", standard:"K.CC.7" },
        { q: "3 is ? than 7",                      visual: null, answers: ["greater","equal to","less","more"],    correct: "less",    standard:"K.CC.7" },
        { q: "Which number is GREATEST?",            visual: null, answers: ["6","3","9","7"],                       correct: "9",       standard:"K.CC.6" },
        { q: "5 ○ 5 — which symbol goes in the circle?", visual: { type:"equation", text:"5 ○ 5" }, answers: [">","<","=","≠"],          correct: "=",  standard:"K.CC.7" },
        { q: "8 ○ 6 — which symbol goes in the circle?", visual: { type:"equation", text:"8 ○ 6" }, answers: [">","<","=","≠"],          correct: ">",  standard:"K.CC.7" },
        { q: "Which group has LEAST?",               visual: null, answers: ["🔴🔴🔴🔴🔴 (5)","🔴🔴🔴 (3)","🔴🔴🔴🔴 (4)","🔴🔴🔴🔴🔴🔴 (6)"], correct: "🔴🔴🔴 (3)", standard:"K.CC.6" },
        { q: "Which is GREATER — 3 or 8?",  visual: { type:"numberline", min:0, max:10, mark:8 }, answers: ["3","5","7","8"], correct: "8", standard:"K.CC.7" },
        { q: "Hop forward 3 from 5. Where do you land?", visual: { type:"numberline_add", min:0, max:10, start:5, jump:3 }, answers: ["6","7","8","9"], correct: "8", standard:"K.CC.2" },
      ]
    },

    addition5: {
      title: "Add & Subtract within 5", icon: "➕", difficulty: 1,
      standard: "K.OA.5",
      questions: [
        { type:"tap_add",   q:"Tap the stars to add them to the group!",   groupA:2, groupB:1, emoji:"⭐", correct:"3",  standard:"K.OA.5" },
        { type:"tap_add",   q:"Tap the apples to add them to the group!",  groupA:3, groupB:2, emoji:"🍎", correct:"5",  standard:"K.OA.5" },
        { type:"tap_add",   q:"Tap the hearts to add them to the group!",  groupA:1, groupB:3, emoji:"❤️", correct:"4",  standard:"K.OA.5" },
        { type:"tap_add",   q:"Tap the balloons to add them to the group!", groupA:2, groupB:2, emoji:"🎈", correct:"4",  standard:"K.OA.5" },
        { type:"cross_off", q:"5 − 2 = ?  Tap to cross off apples!",  total:5, crossOff:2, emoji:"🍎", correct:"3", standard:"K.OA.5" },
        { type:"cross_off", q:"4 − 1 = ?  Tap to cross off stars!",  total:4, crossOff:1, emoji:"⭐", correct:"3", standard:"K.OA.5" },
        { type:"cross_off", q:"3 − 2 = ?  Tap to cross off frogs!",  total:3, crossOff:2, emoji:"🐸", correct:"1", standard:"K.OA.5" },
        { type:"cross_off", q:"5 − 3 = ?  Tap to cross off flowers!",total:5, crossOff:3, emoji:"🌸", correct:"2", standard:"K.OA.5" },
      ]
    },

    addition10: {
      title: "Add & Subtract within 10", icon: "🔢", difficulty: 2,
      standard: "K.OA.1–2",
      questions: [
        { type:"tap_add",   q:"Tap the stars to add them to the group!", groupA:3, groupB:4, emoji:"⭐", correct:"7",  standard:"K.OA.2" },
        { type:"tap_add",   q:"Tap the fish to add them to the group!",  groupA:5, groupB:3, emoji:"🐟", correct:"8",  standard:"K.OA.2" },
        { type:"tap_add",   q:"Tap the suns to add them to the group!",  groupA:6, groupB:2, emoji:"☀️", correct:"8",  standard:"K.OA.2" },
        { type:"tap_add",   q:"Tap the hearts to add them to the group!", groupA:4, groupB:5, emoji:"❤️", correct:"9", standard:"K.OA.2" },
        { type:"cross_off", q:"8 − 3 = ?  Tap to cross off apples!",  total:8,  crossOff:3, emoji:"🍎", correct:"5", standard:"K.OA.2" },
        { type:"cross_off", q:"10 − 4 = ?  Tap to cross off stars!", total:10, crossOff:4, emoji:"⭐", correct:"6", standard:"K.OA.2" },
        { type:"cross_off", q:"9 − 5 = ?  Tap to cross off frogs!",  total:9,  crossOff:5, emoji:"🐸", correct:"4", standard:"K.OA.2" },
        { type:"tap_add",   q:"Tom has 4 apples. He picks 3 more. Tap to add!", groupA:4, groupB:3, emoji:"🍎", correct:"7", standard:"K.OA.2" },
        { q: "7 + 3 = ?", visual: { type:"tenframe_add", a:7, b:3 }, answers: ["8","9","10","11"], correct: "10", standard:"K.OA.2" },
        { q: "6 + 4 = ?", visual: { type:"tenframe_add", a:6, b:4 }, answers: ["8","9","10","11"], correct: "10", standard:"K.OA.2" },
      ]
    },

    maketen: {
      title: "Make 10", icon: "🔟", difficulty: 2,
      standard: "K.OA.4",
      questions: [
        { q: "How many more dots to make 10?", visual: { type:"tenframe", filled:7 }, answers: ["2","3","4","5"], correct: "3", standard:"K.OA.4" },
        { q: "How many more dots to make 10?", visual: { type:"tenframe", filled:6 }, answers: ["3","4","5","6"], correct: "4", standard:"K.OA.4" },
        { q: "How many more dots to make 10?", visual: { type:"tenframe", filled:8 }, answers: ["1","2","3","4"], correct: "2", standard:"K.OA.4" },
        { q: "How many more dots to make 10?", visual: { type:"tenframe", filled:5 }, answers: ["4","5","6","7"], correct: "5", standard:"K.OA.4" },
        { q: "How many more dots to make 10?", visual: { type:"tenframe", filled:9 }, answers: ["0","1","2","3"], correct: "1", standard:"K.OA.4" },
        { q: "How many more dots to make 10?", visual: { type:"tenframe", filled:4 }, answers: ["5","6","7","8"], correct: "6", standard:"K.OA.4" },
        { q: "7 + ? = 10",                  visual: { type:"equation", text:"7 + ? = 10" }, answers: ["1","2","3","4"], correct: "3", standard:"K.OA.4" },
        { q: "6 + ? = 10",                  visual: { type:"equation", text:"6 + ? = 10" }, answers: ["3","4","5","6"], correct: "4", standard:"K.OA.4" },
      ]
    },

    teennumbers: {
      title: "Teen Numbers", icon: "🔢", difficulty: 2,
      standard: "K.NBT.1",
      questions: [
        { q: "14 = 10 + ?",  visual: { type:"tenframe_add", a:10, b:4 }, answers: ["3","4","5","6"],  correct: "4", standard:"K.NBT.1" },
        { q: "17 = 10 + ?",  visual: { type:"tenframe_add", a:10, b:7 }, answers: ["6","7","8","9"],  correct: "7", standard:"K.NBT.1" },
        { q: "How many dots?",  visual: { type:"tenframe_add", a:10, b:3 }, answers: ["12","13","14","15"], correct: "13", standard:"K.NBT.1" },
        { q: "How many dots?",  visual: { type:"tenframe_add", a:10, b:8 }, answers: ["17","18","19","20"], correct: "18", standard:"K.NBT.1" },
        { q: "16 is made of 10 ones and ? more ones", visual: { type:"equation", text:"16 = 10 + ?" }, answers: ["4","5","6","7"], correct: "6", standard:"K.NBT.1" },
        { q: "11 = 10 + ?",  visual: null, answers: ["0","1","2","3"],  correct: "1", standard:"K.NBT.1" },
        { q: "19 = 10 + ?",  visual: null, answers: ["7","8","9","10"], correct: "9", standard:"K.NBT.1" },
        { q: "Which number has 10 ones and 5 more?", visual: null, answers: ["5","10","15","20"], correct: "15", standard:"K.NBT.1" },
      ]
    },

    shapes: {
      title: "2D & 3D Shapes", icon: "🔶", difficulty: 1,
      standard: "K.G.1–4",
      questions: [
        { q: "How many sides does a hexagon have?",   visual: null, answers: ["5","6","7","8"],  correct: "6",       standard:"K.G.2" },
        { q: "Which shape is 3-dimensional (solid)?", visual: null, answers: ["Circle","Triangle","Sphere","Square"], correct: "Sphere", standard:"K.G.3" },
        { q: "Which shape is 2-dimensional (flat)?",  visual: null, answers: ["Cube","Cone","Cylinder","Rectangle"], correct: "Rectangle", standard:"K.G.3" },
        { q: "How many corners does a rectangle have?", visual: null, answers: ["2","3","4","5"], correct: "4",       standard:"K.G.4" },
        { q: "What shape is a stop sign? 🛑",          visual: { type:"emoji", content:"🛑" }, answers: ["Hexagon","Circle","Octagon","Square"], correct: "Octagon", standard:"K.G.1" },
        { q: "Which two shapes make a rectangle when joined?", visual: null, answers: ["Two circles","Two triangles","Two squares","Two hexagons"], correct: "Two triangles", standard:"K.G.6" },
        { q: "A sphere has ? flat faces.",           visual: null, answers: ["0","1","2","6"], correct: "0",         standard:"K.G.4" },
        { q: "Which shape has NO straight sides?",     visual: null, answers: ["Square","Triangle","Circle","Rectangle"], correct: "Circle", standard:"K.G.4" },
      ]
    },

    wordproblems: {
      title: "Word Problems", icon: "📖", difficulty: 2,
      standard: "K.OA.2",
      questions: [
        { q: "3 frogs sit on a log. 2 more jump on. How many frogs in all?", visual: { type:"tenframe_add", a:3, b:2 }, answers: ["3","4","5","6"], correct: "5", standard:"K.OA.2" },
        { q: "Kate has 5 stickers. She gives 2 away. How many are left?", visual: null, answers: ["2","3","4","5"], correct: "3", standard:"K.OA.2" },
        { q: "There are 4 dogs and 3 cats. How many animals in all?", visual: { type:"tenframe_add", a:4, b:3 }, answers: ["5","6","7","8"], correct: "7", standard:"K.OA.2" },
        { q: "Mom has 8 balloons. 3 pop. How many are left?", visual: null, answers: ["4","5","6","7"], correct: "5", standard:"K.OA.2" },
        { q: "There are 6 birds. 4 fly away. How many stay?", visual: null, answers: ["1","2","3","4"], correct: "2", standard:"K.OA.2" },
        { q: "Tom has 2 apples. He picks 4 more. How many now?", visual: { type:"tenframe_add", a:2, b:4 }, answers: ["4","5","6","7"], correct: "6", standard:"K.OA.2" },
        { q: "9 ducks are in a pond. 5 swim away. How many stay?", visual: null, answers: ["3","4","5","6"], correct: "4", standard:"K.OA.2" },
        { q: "Lily has 3 red crayons and 3 blue crayons. How many crayons in all?", visual: { type:"tenframe_add", a:3, b:3 }, answers: ["4","5","6","7"], correct: "6", standard:"K.OA.2" },
      ]
    },

    measurement: {
      title: "Measurement", icon: "📏", difficulty: 1,
      standard: "K.MD.1–2",
      questions: [
        { q: "Which is LONGER — a pencil or a crayon?",   visual: null, answers: ["Crayon","Pencil","Same","Neither"], correct: "Pencil",   standard:"K.MD.1" },
        { q: "Which is SHORTER — a bus or a bicycle?",    visual: null, answers: ["Bus 🚌","Bicycle 🚲","Same","Neither"], correct: "Bicycle 🚲", standard:"K.MD.1" },
        { q: "Which is TALLER — a giraffe or a cat?",     visual: null, answers: ["Cat 🐱","Giraffe 🦒","Same","Neither"], correct: "Giraffe 🦒", standard:"K.MD.1" },
        { q: "Which is HEAVIER — a rock or a feather?",   visual: null, answers: ["Feather 🪶","Rock 🪨","Same","Neither"], correct: "Rock 🪨",    standard:"K.MD.1" },
        { q: "Which is LIGHTER — a truck or a sock?",     visual: null, answers: ["Truck 🚛","Sock 🧦","Same","Neither"], correct: "Sock 🧦",    standard:"K.MD.1" },
        { q: "Which word means NOT long?",                visual: null, answers: ["tall","heavy","short","wide"],          correct: "short",    standard:"K.MD.1" },
        { q: "A dog is shorter than a horse. A mouse is shorter than a dog. Which is TALLEST?", visual: null, answers: ["Mouse","Dog","Horse","Same"], correct: "Horse", standard:"K.MD.2" },
        { q: "If a book weighs MORE than a pencil, the pencil is ?", visual: null, answers: ["heavier","lighter","taller","longer"], correct: "lighter", standard:"K.MD.1" },
      ]
    },

    data: {
      title: "Sorting & Data", icon: "📊", difficulty: 1,
      standard: "K.MD.3",
      questions: [
        { q: "🍎🍎🍎🍊🍊🍋 — How many apples?",          visual: null, answers: ["2","3","4","5"],   correct: "3", standard:"K.MD.3" },
        { q: "🍎🍎🍎🍊🍊🍋 — Which fruit has the MOST?", visual: null, answers: ["🍊","🍋","🍎","Same"], correct: "🍎", standard:"K.MD.3" },
        { q: "🍎🍎🍎🍊🍊🍋 — Which fruit has the FEWEST?", visual: null, answers: ["🍎","🍊","🍋","Same"], correct: "🍋", standard:"K.MD.3" },
        { q: "🔴🔴🔵🔴🔵🔵🔵 — How many blue circles?",  visual: null, answers: ["2","3","4","5"],   correct: "4", standard:"K.MD.3" },
        { q: "Sort these: 🐱🐶🐱🐶🐱 — how many cats?",  visual: null, answers: ["1","2","3","4"],   correct: "3", standard:"K.MD.3" },
        { q: "🐱🐶🐱🐶🐱 — are there more cats or dogs?", visual: null, answers: ["More dogs","More cats","Same","Neither"], correct: "More cats", standard:"K.MD.3" },
        { q: "Which group has 2 items: 🌟🌟🌟 or ⭐⭐?",  visual: null, answers: ["🌟🌟🌟 (3)","⭐⭐ (2)","Same","Neither"], correct: "⭐⭐ (2)", standard:"K.MD.3" },
        { q: "🍦🍦🍭🍦🍭🍭🍭 — how many lollipops?",    visual: null, answers: ["2","3","4","5"],   correct: "4", standard:"K.MD.3" },
      ]
    }
  },

  /* ======================= GRADE 1 ======================= */
  grade1: {

    addition20: {
      title: "Add & Subtract within 20", icon: "➕", difficulty: 2,
      standard: "1.OA.6",
      questions: [
        { q: "8 + 5 = ?",  visual: { type:"tenframe_add", a:8, b:5 }, answers: ["11","12","13","14"], correct: "13", standard:"1.OA.6" },
        { q: "9 + 4 = ?",  visual: { type:"numberline_add", min:0, max:20, start:9, jump:4 }, answers: ["11","12","13","14"], correct: "13", standard:"1.OA.6" },
        { q: "7 + 8 = ?",  visual: { type:"tenframe_add", a:7, b:8 }, answers: ["13","14","15","16"], correct: "15", standard:"1.OA.6" },
        { q: "6 + 7 = ?",  visual: null, answers: ["11","12","13","14"], correct: "13", standard:"1.OA.6" },
        { q: "16 − 8 = ?", visual: { type:"numberline", min:0, max:20, mark:8 }, answers: ["6","7","8","9"], correct: "8",  standard:"1.OA.6" },
        { q: "15 − 7 = ?", visual: null, answers: ["6","7","8","9"], correct: "8",  standard:"1.OA.6" },
        { q: "14 − 6 = ?", visual: null, answers: ["6","7","8","9"], correct: "8",  standard:"1.OA.6" },
        { q: "9 + 9 = ?",  visual: null, answers: ["16","17","18","19"], correct: "18", standard:"1.OA.6" },
        { q: "17 − 9 = ?", visual: null, answers: ["6","7","8","9"], correct: "8",  standard:"1.OA.6" },
        { q: "Sara has 8 stickers. She gets 7 more. How many in all?", visual: { type:"emoji", content:"⭐⭐⭐⭐⭐⭐⭐⭐ + ⭐⭐⭐⭐⭐⭐⭐" }, answers: ["13","14","15","16"], correct: "15", standard:"1.OA.1" },
      ]
    },

    missingnum: {
      title: "Missing Number", icon: "❓", difficulty: 2,
      standard: "1.OA.8",
      questions: [
        { q: "8 + ? = 11",  visual: { type:"equation", text:"8 + ? = 11" },  answers: ["2","3","4","5"],   correct: "3",  standard:"1.OA.8" },
        { q: "? + 5 = 12",  visual: { type:"equation", text:"? + 5 = 12" },  answers: ["6","7","8","9"],   correct: "7",  standard:"1.OA.8" },
        { q: "15 − ? = 9",  visual: { type:"equation", text:"15 − ? = 9" },  answers: ["5","6","7","8"],   correct: "6",  standard:"1.OA.8" },
        { q: "6 + ? = 10",  visual: { type:"equation", text:"6 + ? = 10" },  answers: ["3","4","5","6"],   correct: "4",  standard:"1.OA.8" },
        { q: "? + 7 = 15",  visual: { type:"equation", text:"? + 7 = 15" },  answers: ["6","7","8","9"],   correct: "8",  standard:"1.OA.8" },
        { q: "14 − ? = 7",  visual: { type:"equation", text:"14 − ? = 7" },  answers: ["6","7","8","9"],   correct: "7",  standard:"1.OA.8" },
        { q: "9 + ? = 17",  visual: { type:"equation", text:"9 + ? = 17" },  answers: ["6","7","8","9"],   correct: "8",  standard:"1.OA.8" },
        { q: "? − 4 = 9",   visual: { type:"equation", text:"? − 4 = 9" },   answers: ["11","12","13","14"],correct: "13", standard:"1.OA.8" },
      ]
    },

    equalSign: {
      title: "True or False?", icon: "⚖️", difficulty: 2,
      standard: "1.OA.7",
      questions: [
        { q: "Is this TRUE or FALSE?  6 = 6",         visual: { type:"equation", text:"6 = 6" },         answers: ["True","False"], correct: "True",  standard:"1.OA.7" },
        { q: "Is this TRUE or FALSE?  7 = 8 − 1",     visual: { type:"equation", text:"7 = 8 − 1" },     answers: ["True","False"], correct: "True",  standard:"1.OA.7" },
        { q: "Is this TRUE or FALSE?  5 + 2 = 2 + 5", visual: { type:"equation", text:"5 + 2 = 2 + 5" }, answers: ["True","False"], correct: "True",  standard:"1.OA.7" },
        { q: "Is this TRUE or FALSE?  4 + 3 = 6",     visual: { type:"equation", text:"4 + 3 = 6" },     answers: ["True","False"], correct: "False", standard:"1.OA.7" },
        { q: "Is this TRUE or FALSE?  9 − 3 = 7",     visual: { type:"equation", text:"9 − 3 = 7" },     answers: ["True","False"], correct: "False", standard:"1.OA.7" },
        { q: "Is this TRUE or FALSE?  10 = 5 + 5",    visual: { type:"equation", text:"10 = 5 + 5" },    answers: ["True","False"], correct: "True",  standard:"1.OA.7" },
        { q: "Is this TRUE or FALSE?  8 = 4 + 5",     visual: { type:"equation", text:"8 = 4 + 5" },     answers: ["True","False"], correct: "False", standard:"1.OA.7" },
        { q: "Is this TRUE or FALSE?  12 − 4 = 8",    visual: { type:"equation", text:"12 − 4 = 8" },    answers: ["True","False"], correct: "True",  standard:"1.OA.7" },
      ]
    },

    placevalue: {
      title: "Tens & Ones", icon: "🏗️", difficulty: 2,
      standard: "1.NBT.2",
      questions: [
        { q: "How many TENS are in 34?",        visual: { type:"base10", tens:3, ones:4 }, answers: ["1","2","3","4"],       correct: "3",  standard:"1.NBT.2" },
        { q: "How many ONES are in 27?",         visual: { type:"base10", tens:2, ones:7 }, answers: ["2","4","7","9"],       correct: "7",  standard:"1.NBT.2" },
        { q: "What number is shown?",            visual: { type:"base10", tens:4, ones:6 }, answers: ["44","46","64","66"],   correct: "46", standard:"1.NBT.2" },
        { q: "What is 3 tens and 5 ones?",       visual: null, answers: ["35","53","305","503"],  correct: "35", standard:"1.NBT.2" },
        { q: "What is 6 tens and 2 ones?",       visual: null, answers: ["26","62","602","260"],  correct: "62", standard:"1.NBT.2" },
        { q: "What is the TENS digit in 78?",    visual: null, answers: ["7","8","70","0"],        correct: "7",  standard:"1.NBT.2" },
        { q: "5 tens = ?",                     visual: null, answers: ["5","50","500","15"],     correct: "50", standard:"1.NBT.2c" },
        { q: "What number is shown?",            visual: { type:"base10", tens:1, ones:9 }, answers: ["17","18","19","91"],   correct: "19", standard:"1.NBT.2b" },
      ]
    },

    compare2d: {
      title: "Compare Numbers", icon: "🔢", difficulty: 2,
      standard: "1.NBT.3",
      questions: [
        { q: "Which is GREATER — 47 or 52?",   visual: { type:"numberline", min:40, max:60, mark:52 }, answers: ["47","50","52","45"],  correct: "52", standard:"1.NBT.3" },
        { q: "Which is LESS — 63 or 36?",      visual: { type:"numberline", min:30, max:70, mark:36 }, answers: ["63","36","60","70"],  correct: "36", standard:"1.NBT.3" },
        { q: "45 ○ 54 — which symbol?",        visual: { type:"equation", text:"45 ○ 54" }, answers: [">","<","=","≠"],               correct: "<",  standard:"1.NBT.3" },
        { q: "78 ○ 78 — which symbol?",        visual: { type:"equation", text:"78 ○ 78" }, answers: [">","<","=","≠"],               correct: "=",  standard:"1.NBT.3" },
        { q: "83 ○ 38 — which symbol?",        visual: { type:"equation", text:"83 ○ 38" }, answers: [">","<","=","≠"],               correct: ">",  standard:"1.NBT.3" },
        { q: "Which number is GREATEST?",      visual: null, answers: ["29","43","17","38"],                                           correct: "43", standard:"1.NBT.3" },
        { q: "Which number is LEAST?",         visual: null, answers: ["51","35","47","62"],                                           correct: "35", standard:"1.NBT.3" },
        { q: "Order from least to greatest — which is the MIDDLE number: 24, 42, 14?", visual: null, answers: ["14","24","42","34"],   correct: "24", standard:"1.NBT.3" },
      ]
    },

    tenmore: {
      title: "10 More & 10 Less", icon: "➕🔟", difficulty: 2,
      standard: "1.NBT.5",
      questions: [
        { q: "What is 10 MORE than 23?",   visual: { type:"numberline", min:20, max:40, mark:33 }, answers: ["24","30","33","43"], correct: "33", standard:"1.NBT.5" },
        { q: "What is 10 LESS than 47?",   visual: { type:"numberline", min:30, max:55, mark:37 }, answers: ["37","46","57","27"], correct: "37", standard:"1.NBT.5" },
        { q: "What is 10 MORE than 56?",   visual: null, answers: ["46","57","66","76"], correct: "66", standard:"1.NBT.5" },
        { q: "What is 10 LESS than 80?",   visual: null, answers: ["60","70","71","90"], correct: "70", standard:"1.NBT.5" },
        { q: "What is 10 MORE than 91?",   visual: null, answers: ["81","92","100","101"], correct: "101", standard:"1.NBT.1" },
        { q: "What is 10 LESS than 30?",   visual: null, answers: ["10","20","21","40"], correct: "20", standard:"1.NBT.5" },
        { q: "35 + 10 = ?",              visual: { type:"equation", text:"35 + 10 = ?" }, answers: ["36","40","45","55"], correct: "45", standard:"1.NBT.5" },
        { q: "72 − 10 = ?",              visual: { type:"equation", text:"72 − 10 = ?" }, answers: ["62","63","71","82"], correct: "62", standard:"1.NBT.5" },
      ]
    },

    time: {
      title: "Telling Time", icon: "🕐", difficulty: 2,
      standard: "1.MD.3",
      questions: [
        { q: "What time does 🕐 show?",   visual: { type:"emoji", content:"🕐" }, answers: ["12:00","1:00","2:00","3:00"],    correct: "1:00",  standard:"1.MD.3" },
        { q: "What time does 🕒 show?",   visual: { type:"emoji", content:"🕒" }, answers: ["2:00","3:00","4:00","5:00"],    correct: "3:00",  standard:"1.MD.3" },
        { q: "What time does 🕖 show?",   visual: { type:"emoji", content:"🕖" }, answers: ["5:00","5:30","6:00","6:30"],    correct: "6:00",  standard:"1.MD.3" },
        { q: "What time does 🕧 show?",   visual: { type:"emoji", content:"🕧" }, answers: ["12:00","12:30","1:00","1:30"],  correct: "12:30", standard:"1.MD.3" },
        { q: "What time does 🕠 show?",   visual: { type:"emoji", content:"🕠" }, answers: ["4:00","4:30","5:00","5:30"],    correct: "5:30",  standard:"1.MD.3" },
        { q: "It is 3:00. What time will it be in 1 hour?", visual: { type:"emoji", content:"🕒" }, answers: ["2:00","3:00","4:00","5:00"], correct: "4:00", standard:"1.MD.3" },
        { q: "The minute hand points to 6. The time is ? past.", visual: null, answers: ["quarter","15 minutes","half","20 minutes"], correct: "half", standard:"1.MD.3" },
        { q: "What time does 🕘 show?",   visual: { type:"emoji", content:"🕘" }, answers: ["8:00","8:30","9:00","9:30"],    correct: "9:00",  standard:"1.MD.3" },
      ]
    },

    fractions: {
      title: "Halves & Fourths", icon: "🍕", difficulty: 2,
      standard: "1.G.3",
      questions: [
        { q: "A shape is split into 2 EQUAL parts. Each part is called ?", visual: null, answers: ["a quarter","a half","a third","a fifth"], correct: "a half",    standard:"1.G.3" },
        { q: "A shape is split into 4 EQUAL parts. Each part is called ?", visual: null, answers: ["a half","a third","a fourth","a fifth"],  correct: "a fourth",  standard:"1.G.3" },
        { q: "Another word for one-fourth is ?",         visual: null, answers: ["a half","a quarter","a third","a whole"],                 correct: "a quarter", standard:"1.G.3" },
        { q: "A pizza is cut into 4 equal slices. You eat 1 slice. What fraction did you eat?", visual: { type:"emoji", content:"🍕" }, answers: ["1/2","1/3","1/4","1/8"], correct: "1/4", standard:"1.G.3" },
        { q: "Splitting a circle into MORE equal parts makes each part ?", visual: null, answers: ["bigger","the same","smaller","wider"], correct: "smaller",  standard:"1.G.3" },
        { q: "A rectangle split into 2 equal parts — each part is ?",     visual: null, answers: ["1/4","1/2","2/3","3/4"],               correct: "1/2",     standard:"1.G.3" },
        { q: "How many fourths make 1 whole?",                               visual: null, answers: ["2","3","4","8"],                       correct: "4",       standard:"1.G.3" },
        { q: "How many halves make 1 whole?",                                visual: null, answers: ["1","2","3","4"],                       correct: "2",       standard:"1.G.3" },
      ]
    },

    wordproblems: {
      title: "Word Problems", icon: "📖", difficulty: 2,
      standard: "1.OA.1",
      questions: [
        { q: "Mia has 6 stickers. She gets 5 more. How many does she have now?",               visual: null, answers: ["9","10","11","12"], correct: "11", standard:"1.OA.1" },
        { q: "There are 13 apples. 7 are eaten. How many are left?",                           visual: null, answers: ["4","5","6","7"],   correct: "6",  standard:"1.OA.1" },
        { q: "Ben has 12 marbles. Ava has 8. How many MORE does Ben have?",                    visual: { type:"numberline", min:0, max:20, mark:12 }, answers: ["3","4","5","6"], correct: "4", standard:"1.OA.1" },
        { q: "Jake has 8 stickers. Emma has 9. How many do they have together?",               visual: null, answers: ["15","16","17","18"], correct: "17", standard:"1.OA.1" },
        { q: "There are 15 fish. 6 swim away. How many are left?",                             visual: null, answers: ["7","8","9","10"],   correct: "9",  standard:"1.OA.1" },
        { q: "Sam read 14 pages. He needs to read 20 total. How many more pages does he need?",visual: { type:"numberline", min:10, max:25, mark:20 }, answers: ["4","5","6","7"], correct: "6", standard:"1.OA.1" },
        { q: "A bag has 7 red and 8 blue marbles. How many marbles in all?",                   visual: null, answers: ["13","14","15","16"], correct: "15", standard:"1.OA.1" },
        { q: "Lily has 16 crayons. She gives 7 to her friend. How many does she have left?",   visual: null, answers: ["7","8","9","10"],   correct: "9",  standard:"1.OA.1" },
      ]
    },

    money: {
      title: "Money", icon: "💰", difficulty: 2,
      standard: "1.MD.4",
      questions: [
        { q: "Which coin is worth 1¢?",                           visual: null, answers: ["Nickel","Dime","Penny","Quarter"],   correct: "Penny",   standard:"1.MD.4" },
        { q: "Which coin is worth 5¢?",                           visual: null, answers: ["Penny","Dime","Quarter","Nickel"],   correct: "Nickel",  standard:"1.MD.4" },
        { q: "Which coin is worth 10¢?",                          visual: null, answers: ["Penny","Nickel","Dime","Quarter"],   correct: "Dime",    standard:"1.MD.4" },
        { q: "Which coin is worth 25¢?",                          visual: null, answers: ["Penny","Nickel","Dime","Quarter"],   correct: "Quarter", standard:"1.MD.4" },
        { q: "1 dime + 2 pennies = ?¢",                           visual: null, answers: ["10","11","12","13"],                 correct: "12",      standard:"1.MD.4" },
        { q: "2 nickels = ?¢",                                    visual: null, answers: ["5","8","10","15"],                   correct: "10",      standard:"1.MD.4" },
        { q: "1 quarter + 1 penny = ?¢",                          visual: null, answers: ["24","25","26","30"],                 correct: "26",      standard:"1.MD.4" },
        { q: "How many pennies equal 1 nickel?",                  visual: null, answers: ["1","3","5","10"],                    correct: "5",       standard:"1.MD.4" },
      ]
    },

    measurement: {
      title: "Measurement", icon: "📐", difficulty: 2,
      standard: "1.MD.1–2",
      questions: [
        { q: "A pencil is 6 cubes long. A pen is 9 cubes long. How much longer is the pen?",   visual: { type:"numberline", min:0, max:15, mark:3 }, answers: ["2","3","4","5"], correct: "3", standard:"1.MD.4" },
        { q: "Which is the correct way to measure an object?",    visual: null, answers: ["Skip spaces between cubes","Line cubes end to end","Use different sized cubes","Measure from the middle"], correct: "Line cubes end to end", standard:"1.MD.2" },
        { q: "A book is 8 cubes long. A pencil is 5 cubes long. Which is shorter?",           visual: null, answers: ["Book","Pencil","Same","Neither"],   correct: "Pencil", standard:"1.MD.1" },
        { q: "You measure a desk with paper clips. It takes 12 paper clips. About how many cubes long is it?", visual: null, answers: ["About 5","About 8","About 12","About 20"], correct: "About 12", standard:"1.MD.2" },
        { q: "Order from shortest to longest: 3 cubes, 7 cubes, 5 cubes — which is longest?", visual: null, answers: ["3 cubes","5 cubes","7 cubes","Same"],  correct: "7 cubes", standard:"1.MD.1" },
        { q: "Which unit would you use to measure a classroom?",  visual: null, answers: ["Paper clips","Cubes","Steps (feet)","Thumbs"],  correct: "Steps (feet)", standard:"1.MD.2" },
        { q: "The crayon is 4 cubes. The marker is 2 cubes longer. How long is the marker?",  visual: null, answers: ["4","5","6","7"],   correct: "6", standard:"1.MD.4" },
        { q: "If two objects are the same length, they are ?",    visual: null, answers: ["taller","shorter","equal","different"],         correct: "equal", standard:"1.MD.1" },
      ]
    },

    factfamilies: {
      title: "Fact Families", icon: "🔗", difficulty: 2,
      standard: "1.OA.3–4",
      questions: [
        { q: "4 + 3 = 7. Which is in the same fact family?",     visual: null, answers: ["4 + 4 = 8","7 − 3 = 4","3 + 5 = 8","7 + 3 = 10"], correct: "7 − 3 = 4", standard:"1.OA.4" },
        { q: "If 5 + 6 = 11, then 11 − 6 = ?",                  visual: { type:"equation", text:"11 − 6 = ?" }, answers: ["4","5","6","7"], correct: "5", standard:"1.OA.4" },
        { q: "If 9 + 7 = 16, then 16 − 7 = ?",                  visual: { type:"equation", text:"16 − 7 = ?" }, answers: ["7","8","9","10"], correct: "9", standard:"1.OA.4" },
        { q: "Which equation belongs with 8 + 6 = 14?",          visual: null, answers: ["8 − 6 = 2","14 + 6 = 20","14 − 6 = 8","6 − 8 = 2"], correct: "14 − 6 = 8", standard:"1.OA.3" },
        { q: "3 + ? = 12. Which subtraction checks this?",       visual: null, answers: ["12 + 3","12 − 3","3 − 12","3 + 12"], correct: "12 − 3", standard:"1.OA.4" },
        { q: "Which pair of facts goes together?",                visual: null, answers: ["6+4=10 and 10−5=5","7+8=15 and 15−8=7","4+3=7 and 8−4=4","9+2=11 and 11+2=13"], correct: "7+8=15 and 15−8=7", standard:"1.OA.3" },
        { q: "If 13 − 5 = 8, then 8 + ? = 13",                  visual: { type:"equation", text:"8 + ? = 13" }, answers: ["4","5","6","7"], correct: "5", standard:"1.OA.4" },
        { q: "Which is NOT in the fact family for 6, 9, 15?",    visual: null, answers: ["6 + 9 = 15","15 − 6 = 9","9 − 6 = 3","15 − 9 = 6"], correct: "9 − 6 = 3", standard:"1.OA.3" },
      ]
    },

    numberlinejumps: {
      title: "Number Line Jumps", icon: "🦘", difficulty: 2,
      standard: "1.OA.5",
      questions: [
        { q: "Start at 6. Jump forward 4. Where do you land?",   visual: { type:"numberline_add", min:0, max:20, start:6, jump:4 },  answers: ["8","9","10","11"], correct: "10", standard:"1.OA.5" },
        { q: "Start at 8. Jump forward 5. Where do you land?",   visual: { type:"numberline_add", min:0, max:20, start:8, jump:5 },  answers: ["11","12","13","14"], correct: "13", standard:"1.OA.5" },
        { q: "Start at 15. Jump back 6. Where do you land?",     visual: { type:"numberline", min:0, max:20, mark:9 },               answers: ["7","8","9","10"],  correct: "9",  standard:"1.OA.5" },
        { q: "Start at 12. Jump back 4. Where do you land?",     visual: { type:"numberline", min:0, max:20, mark:8 },               answers: ["6","7","8","9"],   correct: "8",  standard:"1.OA.5" },
        { q: "Start at 7. Jump forward 7. Where do you land?",   visual: { type:"numberline_add", min:0, max:20, start:7, jump:7 },  answers: ["12","13","14","15"], correct: "14", standard:"1.OA.5" },
        { q: "Start at 18. Jump back 9. Where do you land?",     visual: { type:"numberline", min:0, max:20, mark:9 },               answers: ["7","8","9","10"],  correct: "9",  standard:"1.OA.5" },
        { q: "Start at 3. Jump forward 8. Where do you land?",   visual: { type:"numberline_add", min:0, max:20, start:3, jump:8 },  answers: ["9","10","11","12"], correct: "11", standard:"1.OA.5" },
        { q: "Start at 20. Jump back 7. Where do you land?",     visual: { type:"numberline", min:0, max:20, mark:13 },              answers: ["11","12","13","14"], correct: "13", standard:"1.OA.5" },
      ]
    },

    graphs: {
      title: "Graphs & Data", icon: "📊", difficulty: 2,
      standard: "1.MD.4",
      questions: [
        { q: "A graph shows: Dogs=8, Cats=5, Fish=3. Which pet got the MOST votes?",  visual: null, answers: ["Cats","Fish","Dogs","Same"],      correct: "Dogs",  standard:"1.MD.4" },
        { q: "A graph shows: Dogs=8, Cats=5, Fish=3. Which got the FEWEST votes?",    visual: null, answers: ["Dogs","Cats","Fish","Same"],      correct: "Fish",  standard:"1.MD.4" },
        { q: "A graph shows: Dogs=8, Cats=5. How many MORE dogs than cats?",           visual: { type:"numberline", min:0, max:15, mark:3 }, answers: ["2","3","4","5"], correct: "3", standard:"1.MD.4" },
        { q: "A graph shows: Red=4, Blue=6, Green=2. How many children voted in all?", visual: null, answers: ["10","11","12","13"],              correct: "12",    standard:"1.MD.4" },
        { q: "A tally chart shows: ||||  for apples. How many apples?",                visual: null, answers: ["3","4","5","6"],                  correct: "4",     standard:"1.MD.4" },
        { q: "A graph shows: Sun=6, Rain=4, Snow=2. How many fewer snow days than sun days?", visual: null, answers: ["2","3","4","5"],           correct: "4",     standard:"1.MD.4" },
        { q: "A bar graph's tallest bar shows 9. The shortest shows 3. What is the difference?", visual: null, answers: ["4","5","6","7"],       correct: "6",     standard:"1.MD.4" },
        { q: "5 kids chose pizza, 3 chose tacos, 4 chose salad. How many kids in all?",visual: null, answers: ["10","11","12","13"],              correct: "12",    standard:"1.MD.4" },
      ]
    }
  },

  /* ======================= GRADE 2 ======================= */
  grade2: {

    addition100: {
      title: "Add within 100", icon: "➕", difficulty: 2,
      standard: "2.NBT.5",
      questions: [
        { q: "36 + 25 = ?",   visual: { type:"base10", tens:5, ones:11 }, answers: ["59","60","61","62"],   correct: "61", standard:"2.NBT.5" },
        { q: "47 + 38 = ?",   visual: null, answers: ["74","83","85","87"],   correct: "85", standard:"2.NBT.5" },
        { q: "54 + 29 = ?",   visual: null, answers: ["73","82","83","84"],   correct: "83", standard:"2.NBT.5" },
        { q: "65 + 27 = ?",   visual: null, answers: ["82","91","92","93"],   correct: "92", standard:"2.NBT.5" },
        { q: "48 + 34 = ?",   visual: null, answers: ["72","81","82","83"],   correct: "82", standard:"2.NBT.5" },
        { q: "What is 10 more than 67?",    visual: { type:"numberline", min:60, max:85, mark:77 }, answers: ["57","68","77","78"], correct: "77", standard:"2.NBT.8" },
        { q: "35 + ? = 60", visual: { type:"equation", text:"35 + ? = 60" }, answers: ["20","25","30","35"], correct: "25", standard:"2.NBT.5" },
        { q: "What is 23 + 40?", visual: null, answers: ["53","62","63","73"], correct: "63", standard:"2.NBT.5" },
        { q: "Tia has 34 crayons. Sam gives her 28 more. How many in all?", visual: null, answers: ["52","62","63","72"], correct: "62", standard:"2.OA.1" },
        { q: "56 + 44 = ?",   visual: null, answers: ["90","99","100","110"], correct: "100", standard:"2.NBT.5" },
      ]
    },

    sub100: {
      title: "Subtract within 100", icon: "➖", difficulty: 2,
      standard: "2.NBT.5",
      questions: [
        { q: "75 − 38 = ?",   visual: null, answers: ["27","36","37","47"],  correct: "37", standard:"2.NBT.5" },
        { q: "62 − 25 = ?",   visual: null, answers: ["27","36","37","47"],  correct: "37", standard:"2.NBT.5" },
        { q: "90 − 47 = ?",   visual: null, answers: ["40","43","47","53"],  correct: "43", standard:"2.NBT.5" },
        { q: "81 − 36 = ?",   visual: null, answers: ["44","45","46","55"],  correct: "45", standard:"2.NBT.5" },
        { q: "54 − 28 = ?",   visual: null, answers: ["24","25","26","36"],  correct: "26", standard:"2.NBT.5" },
        { q: "What is 10 LESS than 83?",  visual: { type:"numberline", min:65, max:90, mark:73 }, answers: ["63","73","74","93"], correct: "73", standard:"2.NBT.8" },
        { q: "70 − ? = 30", visual: { type:"equation", text:"70 − ? = 30" }, answers: ["30","40","50","60"], correct: "40", standard:"2.NBT.5" },
        { q: "100 − 55 = ?",  visual: null, answers: ["35","44","45","55"],  correct: "45", standard:"2.NBT.5" },
        { q: "Jake had 60 cards. He gave away 23. How many left?", visual: null, answers: ["27","36","37","47"], correct: "37", standard:"2.OA.1" },
        { q: "80 − 40 = ?",   visual: null, answers: ["20","30","40","50"],  correct: "40", standard:"2.NBT.6" },
      ]
    },

    placevalue: {
      title: "Place Value to 1000", icon: "🏛️", difficulty: 3,
      standard: "2.NBT.1",
      questions: [
        { q: "What is the value of the 5 in 534?",  visual: null, answers: ["5","50","500","5000"],   correct: "500", standard:"2.NBT.1" },
        { q: "What is the value of the 7 in 274?",  visual: null, answers: ["7","70","700","7000"],   correct: "70",  standard:"2.NBT.1" },
        { q: "3 hundreds + 6 tens + 2 ones = ?",  visual: null, answers: ["326","362","623","632"], correct: "362", standard:"2.NBT.1" },
        { q: "How many hundreds are in 850?",        visual: null, answers: ["5","8","50","85"],       correct: "8",   standard:"2.NBT.1" },
        { q: "What is 4 hundreds + 0 tens + 9 ones?", visual: null, answers: ["409","490","904","940"],correct: "409", standard:"2.NBT.1" },
        { q: "Which digit is in the TENS place of 726?", visual: null, answers: ["7","2","6","72"],   correct: "2",   standard:"2.NBT.1" },
        { q: "600 + 30 + 5 = ?",                  visual: null, answers: ["635","653","365","356"], correct: "635", standard:"2.NBT.3" },
        { q: "What is 100 more than 450?",           visual: null, answers: ["451","460","540","550"], correct: "550", standard:"2.NBT.8" },
      ]
    },

    evenodd: {
      title: "Even & Odd Numbers", icon: "🔢", difficulty: 1,
      standard: "2.OA.3",
      questions: [
        { q: "Is 6 even or odd?",   visual: { type:"tenframe_add", a:3, b:3 }, answers: ["Even","Odd"], correct: "Even", standard:"2.OA.3" },
        { q: "Is 7 even or odd?",   visual: { type:"tenframe", filled:7 }, answers: ["Even","Odd"], correct: "Odd",  standard:"2.OA.3" },
        { q: "Is 14 even or odd?",  visual: null, answers: ["Even","Odd"], correct: "Even", standard:"2.OA.3" },
        { q: "Is 23 even or odd?",  visual: null, answers: ["Even","Odd"], correct: "Odd",  standard:"2.OA.3" },
        { q: "Is 40 even or odd?",  visual: null, answers: ["Even","Odd"], correct: "Even", standard:"2.OA.3" },
        { q: "Which set of numbers are ALL even?", visual: null, answers: ["2, 4, 6, 8","1, 3, 5, 7","2, 4, 5, 8","1, 2, 3, 4"], correct: "2, 4, 6, 8", standard:"2.OA.3" },
        { q: "Even numbers always end in ?",     visual: null, answers: ["1, 3, 5, 7, 9","0, 2, 4, 6, 8","0, 1, 2, 3, 4","5, 6, 7, 8, 9"], correct: "0, 2, 4, 6, 8", standard:"2.OA.3" },
        { q: "Is 99 even or odd?",  visual: null, answers: ["Even","Odd"], correct: "Odd",  standard:"2.OA.3" },
      ]
    },

    time: {
      title: "Time to 5 Minutes", icon: "⏰", difficulty: 3,
      standard: "2.MD.7",
      questions: [
        { q: "What time does 🕔 show?",   visual: { type:"emoji", content:"🕔" }, answers: ["3:00","4:00","5:00","4:30"],   correct: "4:00",  standard:"2.MD.7" },
        { q: "What time does 🕟 show?",   visual: { type:"emoji", content:"🕟" }, answers: ["4:00","4:30","5:00","3:30"],   correct: "4:30",  standard:"2.MD.7" },
        { q: "The minute hand points to 3. How many minutes past the hour?", visual: null, answers: ["3","10","15","20"],  correct: "15", standard:"2.MD.7" },
        { q: "The minute hand points to 6. How many minutes past the hour?", visual: null, answers: ["6","20","30","60"],  correct: "30", standard:"2.MD.7" },
        { q: "The minute hand points to 9. How many minutes past the hour?", visual: null, answers: ["9","35","40","45"], correct: "45", standard:"2.MD.7" },
        { q: "It is 2:15. What time was it 30 minutes ago?",    visual: null, answers: ["1:45","1:55","2:45","3:15"], correct: "1:45", standard:"2.MD.7" },
        { q: "It is 9:30. What time will it be in 1 hour?",     visual: { type:"emoji", content:"🕤" }, answers: ["9:00","10:00","10:30","11:00"], correct: "10:30", standard:"2.MD.7" },
        { q: "Each number on a clock face equals ? minutes.", visual: null, answers: ["1","4","5","10"], correct: "5", standard:"2.MD.7" },
      ]
    },

    measurement: {
      title: "Measure Length", icon: "📏", difficulty: 2,
      standard: "2.MD.1",
      questions: [
        { q: "A pencil is measured with paper clips and is 5 paper clips long. Each clip is 1 inch. How long is the pencil?", visual: null, answers: ["4 inches","5 inches","6 inches","10 inches"], correct: "5 inches", standard:"2.MD.2" },
        { q: "Which unit is best for measuring the length of a classroom?", visual: null, answers: ["Inches","Feet","Miles","Yards"],  correct: "Feet",   standard:"2.MD.1" },
        { q: "Which unit is best for measuring the length of your thumb?",  visual: null, answers: ["Miles","Yards","Feet","Inches"], correct: "Inches", standard:"2.MD.1" },
        { q: "A book is 8 inches long. A pencil is 6 inches long. How much longer is the book?", visual: null, answers: ["1 inch","2 inches","3 inches","14 inches"], correct: "2 inches", standard:"2.MD.4" },
        { q: "To measure something, you must start at ?",     visual: null, answers: ["the middle","any mark","the end","the zero mark"],    correct: "the zero mark", standard:"2.MD.1" },
        { q: "A desk is 3 feet wide. How many inches is that? (1 foot = 12 inches)", visual: null, answers: ["3","12","36","48"], correct: "36", standard:"2.MD.1" },
        { q: "Which is LONGER — 14 inches or 2 feet? (1 foot = 12 inches)",          visual: null, answers: ["14 inches","2 feet","They're equal","Can't tell"], correct: "2 feet", standard:"2.MD.4" },
        { q: "Using the same ruler to measure twice gives ? result.",               visual: null, answers: ["a different","the same","a longer","a shorter"],   correct: "the same", standard:"2.MD.1" },
      ]
    }
  }
};

/* ---- Grade / topic metadata ---- */
const GRADE_INFO = {
  prek: {
    label: "Pre-K / TK", icon: "🌱", color: "#FF6B9D", ages: "Ages 3–5",
    desc: "Building early number sense and foundational math concepts.",
    topics: ["counting5","counting10","compare","patterns","shapes2d","shapes3d","measurement","numberpath","sorting","position"]
  },
  kindergarten: {
    label: "Kindergarten", icon: "⭐", color: "#4A90E2", ages: "Ages 5–6",
    desc: "Numbers to 20, addition and subtraction, shapes, and patterns.",
    topics: ["counting20","compare","addition5","addition10","maketen","teennumbers","shapes","wordproblems","measurement","data"]
  },
  grade1: {
    label: "1st Grade", icon: "🚀", color: "#7B5EA7", ages: "Ages 6–7",
    desc: "Addition and subtraction to 20, place value, time, and geometry.",
    topics: ["addition20","missingnum","equalSign","placevalue","compare2d","tenmore","time","fractions","wordproblems","money","measurement","factfamilies","numberlinejumps","graphs"]
  },
  grade2: {
    label: "2nd Grade", icon: "🎯", color: "#E67E22", ages: "Ages 7–8",
    desc: "Addition and subtraction to 100, place value, time, and measurement.",
    topics: ["addition100","sub100","placevalue","evenodd","time","measurement"]
  }
};
