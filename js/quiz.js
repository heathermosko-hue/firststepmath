/* ============================================
   FirstStepMath – Quiz Logic
   ============================================ */

let currentGrade = '';
let currentTopic = '';
let allQuestions  = [];
let questions     = [];
let currentIndex  = 0;
let score         = 0;
let answered      = false;

const CORRECT_MSG = [
  ["Great job! 🎉","🎉"], ["You got it! 🌟","🌟"], ["Awesome! 🥳","🥳"],
  ["Correct! 🎊","🎊"],   ["Super star! ⭐","⭐"], ["Way to go! 🏆","🏆"],
];
const WRONG_MSG = [
  "Nice try! Keep going! 💪","Almost there! 😊","Don't give up! 🌈","Keep practicing! 📚",
];

/* ============================================================
   VISUAL RENDERERS
   ============================================================ */

function renderTenFrame(filled, max) {
  max = max || 10;
  const rows = max <= 5 ? 1 : 2;
  const cols = max <= 5 ? max : 5;
  let html = '<div class="tenframe-wrap"><div class="tenframe">';
  for (let r = 0; r < rows; r++) {
    html += '<div class="tf-row">';
    for (let c = 0; c < cols; c++) {
      const cls = (r * cols + c) < filled ? ' red' : '';
      html += `<div class="tf-cell${cls}"></div>`;
    }
    html += '</div>';
  }
  html += '</div></div>';
  return html;
}

function renderTenFrameAdd(a, b) {
  const total = a + b;
  if (total > 10) {
    let html = '<div class="tenframe-pair">';
    html += '<div class="tenframe-wrap"><div class="tenframe-label">First</div><div class="tenframe">';
    for (let r = 0; r < 2; r++) {
      html += '<div class="tf-row">';
      for (let c = 0; c < 5; c++) {
        const i = r * 5 + c;
        const cls = i < Math.min(a, 10) ? ' red' : (i < Math.min(total, 10) ? ' yellow' : '');
        html += `<div class="tf-cell${cls}"></div>`;
      }
      html += '</div>';
    }
    html += '</div></div>';
    const overflow = total - 10;
    html += '<div class="tenframe-wrap"><div class="tenframe-label">Second</div><div class="tenframe">';
    for (let r = 0; r < 2; r++) {
      html += '<div class="tf-row">';
      for (let c = 0; c < 5; c++) {
        const i = r * 5 + c;
        const cls = i < overflow ? ' yellow' : '';
        html += `<div class="tf-cell${cls}"></div>`;
      }
      html += '</div>';
    }
    html += '</div></div>';
    html += '</div>';
    return html;
  }
  let html = '<div class="tenframe-wrap"><div class="tenframe">';
  for (let r = 0; r < 2; r++) {
    html += '<div class="tf-row">';
    for (let c = 0; c < 5; c++) {
      const i = r * 5 + c;
      const cls = i < a ? ' red' : (i < a + b ? ' yellow' : '');
      html += `<div class="tf-cell${cls}"></div>`;
    }
    html += '</div>';
  }
  html += '</div></div>';
  return html;
}

function renderNumberLine(min, max, mark) {
  const steps = max - min;
  const W = 380, H = 72, mx = 28, lineY = 36;
  const stepW = (W - mx * 2) / steps;
  let svg = `<div class="numberline-wrap"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<line x1="${mx}" y1="${lineY}" x2="${W - mx + 8}" y2="${lineY}" stroke="#333" stroke-width="2.5"/>`;
  svg += `<polygon points="${W-mx+8},${lineY} ${W-mx},${lineY-5} ${W-mx},${lineY+5}" fill="#333"/>`;
  for (let i = 0; i <= steps; i++) {
    const x = mx + i * stepW;
    const n = min + i;
    const isMark = n === mark;
    svg += `<line x1="${x}" y1="${lineY-7}" x2="${x}" y2="${lineY+7}" stroke="${isMark?'#FF6B35':'#333'}" stroke-width="${isMark?3:1.5}"/>`;
    if (isMark) {
      svg += `<circle cx="${x}" cy="${lineY}" r="13" fill="#FF6B35"/>`;
      svg += `<text x="${x}" y="${lineY+5}" text-anchor="middle" font-size="12" fill="white" font-family="Fredoka One,cursive">${n}</text>`;
    } else {
      svg += `<text x="${x}" y="${lineY+21}" text-anchor="middle" font-size="11" fill="#333" font-family="Nunito,sans-serif">${n}</text>`;
    }
  }
  svg += '</svg></div>';
  return svg;
}

function renderNumberLineAdd(min, max, start, jump) {
  const steps = max - min;
  const W = 380, H = 88, mx = 28, lineY = 58;
  const stepW = (W - mx * 2) / steps;
  let svg = `<div class="numberline-wrap"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<line x1="${mx}" y1="${lineY}" x2="${W-mx+8}" y2="${lineY}" stroke="#333" stroke-width="2.5"/>`;
  svg += `<polygon points="${W-mx+8},${lineY} ${W-mx},${lineY-5} ${W-mx},${lineY+5}" fill="#333"/>`;
  for (let i = 0; i <= steps; i++) {
    const x = mx + i * stepW;
    const n = min + i;
    const isStart = n === start, isEnd = n === start + jump;
    svg += `<line x1="${x}" y1="${lineY-6}" x2="${x}" y2="${lineY+6}" stroke="#333" stroke-width="1.5"/>`;
    svg += `<text x="${x}" y="${lineY+20}" text-anchor="middle" font-size="11" fill="#333" font-family="Nunito,sans-serif">${n}</text>`;
    if (isStart) {
      svg += `<circle cx="${x}" cy="${lineY}" r="11" fill="#4ECDC4"/>`;
      svg += `<text x="${x}" y="${lineY+4}" text-anchor="middle" font-size="10" fill="white" font-family="Nunito" font-weight="bold">${n}</text>`;
    }
    if (isEnd) {
      svg += `<circle cx="${x}" cy="${lineY}" r="11" fill="#FF6B35"/>`;
      svg += `<text x="${x}" y="${lineY+4}" text-anchor="middle" font-size="10" fill="white" font-family="Nunito" font-weight="bold">${n}</text>`;
    }
  }
  const x1 = mx + (start - min) * stepW;
  const x2 = mx + (start + jump - min) * stepW;
  const midX = (x1 + x2) / 2;
  svg += `<path d="M${x1},${lineY-12} Q${midX},${lineY-50} ${x2},${lineY-12}" fill="none" stroke="#FF6B35" stroke-width="2.5" stroke-dasharray="5"/>`;
  svg += `<text x="${midX}" y="${lineY-52}" text-anchor="middle" font-size="12" fill="#FF6B35" font-family="Fredoka One" font-weight="bold">+${jump}</text>`;
  svg += '</svg></div>';
  return svg;
}

function renderBase10(tens, ones) {
  if (!tens && !ones) return '';
  const safeTens = Math.min(tens || 0, 9);
  const safeOnes = Math.min(ones || 0, 9);
  let html = '<div class="base10-wrap">';
  for (let t = 0; t < safeTens; t++) {
    html += '<div class="b10-rod">';
    for (let u = 0; u < 10; u++) html += '<div class="b10-rod-cell"></div>';
    html += '</div>';
  }
  for (let o = 0; o < safeOnes; o++) html += '<div class="b10-unit"></div>';
  html += '</div>';
  return html;
}

function renderVisual(visual) {
  if (!visual) return null;
  if (typeof visual === 'string') return visual ? `<span class="visual-emoji">${visual}</span>` : null;
  switch (visual.type) {
    case 'tenframe':       return renderTenFrame(visual.filled, visual.max || 10);
    case 'tenframe_add':   return renderTenFrameAdd(visual.a, visual.b);
    case 'numberline':     return renderNumberLine(visual.min, visual.max, visual.mark);
    case 'numberline_add': return renderNumberLineAdd(visual.min, visual.max, visual.start, visual.jump);
    case 'base10':         return renderBase10(visual.tens, visual.ones);
    case 'equation':
    case 'text':           return `<div class="equation-display">${visual.text || visual.content}</div>`;
    case 'emoji':          return `<span class="visual-emoji">${visual.content}</span>`;
    case 'shape':          return renderShape(visual.name);
    case 'compare':        return renderCompare(visual.compare, visual.items);
    default: return null;
  }
}

function renderCompare(compType, items) {
  const W = 240, H = 180;
  const fill = '#a78bfa', stroke = '#6d28d9', sw = 3;

  if (compType === 'tall') {
    const spacing = W / (items.length + 1);
    const shapes = items.map(function(item, i) {
      const cx = spacing * (i + 1);
      const barH = item.size === 'large' ? 105 : 52;
      const barY = H - barH - 28;
      return '<rect x="' + (cx-20) + '" y="' + barY + '" width="40" height="' + barH + '" rx="6" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"/>'
           + '<text x="' + cx + '" y="' + (barY - 6) + '" text-anchor="middle" font-size="26">' + item.emoji + '</text>'
           + '<text x="' + cx + '" y="' + (H - 6) + '" text-anchor="middle" font-size="14" font-family="Fredoka One,cursive" fill="#333">' + item.label + '</text>';
    }).join('');
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" xmlns="http://www.w3.org/2000/svg">' + shapes + '</svg>';
  }

  if (compType === 'long') {
    const rowH = H / (items.length + 1);
    const shapes = items.map(function(item, i) {
      const cy = rowH * (i + 1);
      const barW = item.size === 'large' ? 155 : 75;
      return '<text x="8" y="' + (cy + 8) + '" font-size="24">' + item.emoji + '</text>'
           + '<rect x="42" y="' + (cy - 14) + '" width="' + barW + '" height="26" rx="6" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"/>'
           + '<text x="' + (42 + barW + 8) + '" y="' + (cy + 8) + '" font-size="14" font-family="Fredoka One,cursive" fill="#333">' + item.label + '</text>';
    }).join('');
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" xmlns="http://www.w3.org/2000/svg">' + shapes + '</svg>';
  }

  if (compType === 'big') {
    const spacing = W / (items.length + 1);
    const shapes = items.map(function(item, i) {
      const cx = spacing * (i + 1);
      const cy = H / 2 - 12;
      const r = item.size === 'large' ? 54 : 28;
      const fs = item.size === 'large' ? 36 : 20;
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"/>'
           + '<text x="' + cx + '" y="' + (cy + fs * 0.38) + '" text-anchor="middle" font-size="' + fs + '">' + item.emoji + '</text>'
           + '<text x="' + cx + '" y="' + (H - 6) + '" text-anchor="middle" font-size="13" font-family="Fredoka One,cursive" fill="#333">' + item.label + '</text>';
    }).join('');
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" xmlns="http://www.w3.org/2000/svg">' + shapes + '</svg>';
  }

  return null;
}

function renderShape(name) {
  const size = 160;
  const cx = size / 2, cy = size / 2, r = 68;
  function poly(n, rotate) {
    rotate = rotate || 0;
    let pts = [];
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 * i / n) - Math.PI / 2 + (rotate * Math.PI / 180);
      pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1));
    }
    return pts.join(' ');
  }
  const fill = '#a78bfa', stroke = '#6d28d9', sw = 4;
  let inner = '';
  switch (name) {
    case 'circle':    inner = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'triangle':  inner = `<polygon points="${poly(3)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'square':    inner = `<rect x="${cx-r}" y="${cy-r}" width="${r*2}" height="${r*2}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'rectangle': inner = `<rect x="${cx-r}" y="${cy-r*0.6}" width="${r*2}" height="${r*1.2}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'hexagon':   inner = `<polygon points="${poly(6)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'octagon':   inner = `<polygon points="${poly(8)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'rhombus':   inner = `<polygon points="${cx},${cy-r} ${cx+r*0.65},${cy} ${cx},${cy+r} ${cx-r*0.65},${cy}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'oval':      inner = `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r*0.6}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    case 'pentagon':  inner = `<polygon points="${poly(5)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; break;
    default: return null;
  }
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

/* ============================================================
   INTERACTIVE ACTIVITY RENDERERS
   ============================================================ */

/* ── Cross-Off Subtraction ─────────────────────────────── */
function renderCrossOff(q) {
  const container = document.getElementById('activityContainer');
  container.style.display = 'flex';
  document.getElementById('answersGrid').style.display = 'none';

  const emoji = q.emoji || '🍎';
  let crossed = 0;

  function build() {
    crossed = 0;
    container.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'co-grid';
    for (let i = 0; i < q.total; i++) {
      const item = document.createElement('div');
      item.className = 'co-item';
      item.textContent = emoji;
      item.addEventListener('click', () => {
        if (answered) return;
        const wasCrossed = item.classList.contains('crossed');
        item.classList.toggle('crossed');
        crossed += wasCrossed ? -1 : 1;
        const countEl  = document.getElementById('coCountEl');
        const checkBtn = document.getElementById('coCheckBtn');
        if (countEl)  countEl.textContent = crossed;
        if (checkBtn) checkBtn.disabled = (crossed === 0);
      });
      grid.appendChild(item);
    }
    container.appendChild(grid);

    const prog = document.createElement('div');
    prog.className = 'co-progress';
    prog.innerHTML = `Crossed off: <span class="co-count" id="coCountEl">0</span>`;
    container.appendChild(prog);

    const btnRow = document.createElement('div');
    btnRow.className = 'co-btn-row';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'co-reset-btn';
    resetBtn.textContent = '↺ Reset';
    resetBtn.addEventListener('click', () => { if (!answered) build(); });

    const checkBtn = document.createElement('button');
    checkBtn.id = 'coCheckBtn';
    checkBtn.className = 'co-check-btn';
    checkBtn.textContent = '✓ Check Answer';
    checkBtn.disabled = true;
    checkBtn.addEventListener('click', () => {
      if (answered) return;
      const result = document.createElement('div');
      result.className = 'co-result';
      result.textContent = `${q.total} − ${crossed} = ${q.total - crossed}`;
      container.insertBefore(result, btnRow);
      setTimeout(() => onActivityAnswer(String(q.total - crossed), q.correct), 500);
    });

    btnRow.appendChild(resetBtn);
    btnRow.appendChild(checkBtn);
    container.appendChild(btnRow);
  }

  build();
}

/* ── Tap-to-Count ──────────────────────────────────────── */
function renderCountTap(q) {
  const container = document.getElementById('activityContainer');
  container.style.display = 'flex';
  document.getElementById('answersGrid').style.display = 'none';
  document.getElementById('visualDisplay').innerHTML = '';
  document.getElementById('visualDisplay').setAttribute('data-empty', 'true');

  const items = q.items || [];
  let tapped = new Set();

  container.innerHTML = '';

  const hint = document.createElement('div');
  hint.className = 'count-hint-text';
  hint.textContent = 'Tap each one to count!';

  const grid = document.createElement('div');
  grid.className = 'count-grid';

  items.forEach((emoji, i) => {
    const btn = document.createElement('button');
    btn.className = 'count-item';
    btn.innerHTML = `<span class="count-emoji">${emoji}</span>`;
    btn.addEventListener('click', () => {
      if (answered || tapped.has(i)) return;
      tapped.add(i);
      btn.classList.add('tapped');
      const badge = document.createElement('span');
      badge.className = 'count-badge';
      badge.textContent = tapped.size;
      btn.appendChild(badge);
      speakText(String(tapped.size));
      const numEl = document.getElementById('countNum');
      if (numEl) {
        numEl.textContent = tapped.size;
        numEl.classList.add('pop');
        setTimeout(() => numEl.classList.remove('pop'), 300);
      }
      if (tapped.size === items.length) {
        hint.textContent = `You counted ${items.length}! `;
        setTimeout(() => onActivityAnswer(String(items.length), q.correct), 800);
      }
    });
    grid.appendChild(btn);
  });

  const countDisplay = document.createElement('div');
  countDisplay.className = 'count-display';
  countDisplay.innerHTML = `<span id="countNum">0</span>`;

  container.appendChild(hint);
  container.appendChild(grid);
  container.appendChild(countDisplay);
}

/* ── Tap-to-Add ────────────────────────────────────────── */
function renderTapAdd(q) {
  const container = document.getElementById('activityContainer');
  container.style.display = 'flex';
  document.getElementById('answersGrid').style.display = 'none';

  const groupA   = q.groupA;    // number of static items
  const groupB   = q.groupB;    // number of items to tap over
  const emoji    = q.emoji || '⭐';
  let moved      = 0;

  container.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'tap-add-wrap';

  // Group A (destination)
  const groupAEl = document.createElement('div');
  groupAEl.className = 'tap-group group-a';
  groupAEl.innerHTML = `<div class="tap-group-label">Group A</div>
    <div class="tap-group-items" id="groupAItems">
      ${'<span class="tap-item">'+emoji+'</span>'.repeat(groupA)}
    </div>`;

  // Group B (source — tap to move)
  const groupBEl = document.createElement('div');
  groupBEl.className = 'tap-group group-b';
  groupBEl.innerHTML = `<div class="tap-group-label">Tap to add →</div>
    <div class="tap-group-items" id="groupBItems"></div>`;

  wrap.appendChild(groupAEl);
  wrap.appendChild(groupBEl);

  const eqDisplay = document.createElement('div');
  eqDisplay.className = 'tap-equation';
  eqDisplay.innerHTML = `<span class="tap-eq-a">${groupA}</span> <span class="tap-eq-plus">+</span> <span class="tap-eq-b" id="tapEqB">?</span> <span class="tap-eq-eq">=</span> <span class="tap-eq-ans" id="tapEqAns">?</span>`;

  const hint = document.createElement('div');
  hint.className = 'tap-hint';
  hint.textContent = `Tap each ${emoji} to move it over!`;

  const totalDisplay = document.createElement('div');
  totalDisplay.className = 'tap-total';
  totalDisplay.innerHTML = `Total: <span class="t-num" id="tapTotal">${groupA}</span>`;

  container.appendChild(eqDisplay);
  container.appendChild(wrap);
  container.appendChild(hint);
  container.appendChild(totalDisplay);

  // Build moveable items in group B
  const bItems = document.getElementById('groupBItems');
  for (let i = 0; i < groupB; i++) {
    const item = document.createElement('span');
    item.className = 'tap-item moveable';
    item.textContent = emoji;
    item.addEventListener('click', () => {
      if (answered || item.classList.contains('moved')) return;
      item.classList.remove('moveable');
      item.classList.add('moved');
      moved++;

      // Add to group A
      const newItem = document.createElement('span');
      newItem.className = 'tap-item bounce-in';
      newItem.textContent = emoji;
      document.getElementById('groupAItems').appendChild(newItem);

      // Update total
      const totalEl = document.getElementById('tapTotal');
      totalEl.textContent = groupA + moved;
      totalEl.classList.add('bounce');
      setTimeout(() => totalEl.classList.remove('bounce'), 350);

      // Update equation display
      const eqB   = document.getElementById('tapEqB');
      const eqAns = document.getElementById('tapEqAns');
      if (eqB)   { eqB.textContent   = moved; eqB.classList.add('eq-pop'); setTimeout(() => eqB.classList.remove('eq-pop'), 300); }
      if (eqAns) { eqAns.textContent = groupA + moved; eqAns.classList.add('eq-pop'); setTimeout(() => eqAns.classList.remove('eq-pop'), 300); }

      if (moved === groupB) {
        hint.textContent = `🎉 ${groupA} + ${groupB} = ${groupA + groupB}`;
        setTimeout(() => onActivityAnswer(String(groupA + groupB), q.correct), 700);
      }
    });
    bItems.appendChild(item);
  }
}

/* ── Pattern Completion ────────────────────────────────── */
function renderPattern(q) {
  const container = document.getElementById('activityContainer');
  container.style.display = 'flex';
  document.getElementById('answersGrid').style.display = 'none';

  const pattern = q.pattern;       // array like ["🔴","🔵","🔴","🔵","?"]
  const choices = q.choices;       // array of possible answers
  const blankIdx = pattern.indexOf('?');

  container.innerHTML = '';

  // Pattern display row
  const display = document.createElement('div');
  display.className = 'pattern-display';
  pattern.forEach((item, i) => {
    if (item === '?') {
      const blank = document.createElement('div');
      blank.className = 'pattern-blank';
      blank.id = 'patternBlank';
      display.appendChild(blank);
    } else {
      const span = document.createElement('span');
      span.className = 'pattern-item';
      span.textContent = item;
      display.appendChild(span);
    }
  });
  container.appendChild(display);

  // Choice buttons
  const choicesEl = document.createElement('div');
  choicesEl.className = 'pattern-choices';
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'pattern-choice';
    btn.textContent = choice;
    btn.addEventListener('click', () => {
      if (answered) return;
      choicesEl.querySelectorAll('.pattern-choice').forEach(b => b.disabled = true);

      const isCorrect = choice === q.correct;
      btn.classList.add(isCorrect ? 'correct' : 'wrong');

      const blank = document.getElementById('patternBlank');
      if (blank) {
        blank.textContent = choice;
        blank.classList.add('filled');
      }

      if (isCorrect) {
        setTimeout(() => onActivityAnswer(choice, q.correct), 500);
      } else {
        // Show correct answer
        choicesEl.querySelectorAll('.pattern-choice').forEach(b => {
          if (b.textContent === q.correct) b.classList.add('correct');
        });
        setTimeout(() => onActivityAnswer(choice, q.correct), 800);
      }
    });
    choicesEl.appendChild(btn);
  });
  container.appendChild(choicesEl);
}

/* ── Shared activity answer handler ───────────────────── */
function onActivityAnswer(selected, correct) {
  if (answered) return;
  answered = true;
  incrementQuestionCount();
  const isCorrect = selected === correct;
  if (isCorrect) { score++; document.getElementById('currentScore').textContent = score; }
  setTimeout(() => showFeedback(isCorrect, correct), 200);
}

/* ============================================================
   TTS
   ============================================================ */
function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.rate = 0.88;
  utt.pitch = 1.0;
  window.speechSynthesis.speak(utt);
}

function speakQuestion() {
  const q = questions[currentIndex];
  if (!q) return;
  speakText(q.q);
}

/* ============================================================
   SHUFFLE
   ============================================================ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================================
   INIT & QUESTION DISPLAY
   ============================================================ */
function init() {
  const params = new URLSearchParams(window.location.search);
  currentGrade = params.get('grade') || 'prek';
  currentTopic = params.get('topic') || 'counting5';
  const topicData = QUESTIONS[currentGrade] && QUESTIONS[currentGrade][currentTopic];
  if (!topicData) { window.location.href = 'index.html'; return; }
  document.getElementById('topicTitle').textContent = topicData.title;
  allQuestions = topicData.questions;
  questions    = shuffle(allQuestions).slice(0, Math.min(10, allQuestions.length));
  showQuestion();
}

function showQuestion() {
  if (currentIndex >= questions.length) { showEndScreen(); return; }
  if (checkQuestionGate()) return;
  answered = false;
  const q     = questions[currentIndex];
  const total = questions.length;

  document.getElementById('questionCounter').textContent = `${currentIndex + 1} of ${total}`;
  document.getElementById('progressBar').style.width     = `${((currentIndex + 1) / total) * 100}%`;
  document.getElementById('questionText').textContent    = q.q;
  document.getElementById('currentScore').textContent   = score;

  const stdBadge = document.getElementById('standardBadge');
  if (stdBadge) stdBadge.textContent = q.standard || '';

  // Hide submit row (shown only for MC questions)
  const submitRowEl = document.getElementById('submitRow');
  if (submitRowEl) submitRowEl.style.display = 'none';

  // Reset activity container
  const actEl = document.getElementById('activityContainer');
  actEl.style.display = 'none';
  actEl.innerHTML = '';

  // Reset answers grid
  const grid = document.getElementById('answersGrid');
  grid.style.display = '';
  grid.innerHTML = '';

  // Visual
  const visualEl = document.getElementById('visualDisplay');
  const html = renderVisual(q.visual);
  if (html) {
    visualEl.innerHTML = html;
    visualEl.removeAttribute('data-empty');
  } else {
    visualEl.innerHTML = '';
    visualEl.setAttribute('data-empty', 'true');
  }

  // Dispatch by question type
  const qType = q.type || 'mc';

  if (qType === 'cross_off') {
    renderCrossOff(q);
  } else if (qType === 'tap_add') {
    renderTapAdd(q);
  } else if (qType === 'pattern_complete') {
    renderPattern(q);
  } else if (qType === 'count_tap') {
    renderCountTap(q);
  } else {
    // Default: multiple choice with submit button
    const isWide = q.answers && q.answers.length === 2;
    grid.className = isWide ? 'answers-grid wide' : 'answers-grid';
    const submitRow = document.getElementById('submitRow');
    const submitBtn = document.getElementById('submitBtn');
    submitRow.style.display = 'block';
    submitBtn.style.opacity = '0.4';
    submitBtn.style.pointerEvents = 'none';
    let selectedBtn = null, selectedVal = null;
    submitBtn.onclick = null;

    shuffle(q.answers).forEach(answer => {
      const btn = document.createElement('button');
      btn.className   = 'answer-btn';
      btn.dataset.val = answer;
      const hasWords = /[a-zA-Z]/.test(answer);
      btn.innerHTML   = `<span class="ans-text">${answer}</span>${hasWords ? '<span class="ans-speak" role="button" title="Hear this answer" aria-label="Listen">🔊</span>' : ''}`;
      if (hasWords) {
        btn.querySelector('.ans-speak').addEventListener('click', e => {
          e.stopPropagation();
          speakText(answer);
        });
      }
      btn.addEventListener('click', () => {
        if (answered) return;
        document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedBtn = btn; selectedVal = answer;
        submitBtn.style.opacity = '1';
        submitBtn.style.pointerEvents = 'auto';
      });
      grid.appendChild(btn);
    });

    submitBtn.onclick = () => {
      if (!selectedBtn || answered) return;
      submitRow.style.display = 'none';
      onAnswer(selectedBtn, selectedVal, q.correct);
    };
  }

}

function onAnswer(btn, selected, correct) {
  if (answered) return;
  answered = true;
  incrementQuestionCount();
  const isCorrect = selected === correct;
  document.querySelectorAll('.answer-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.val === correct) b.classList.add('correct');
  });
  if (!isCorrect) btn.classList.add('wrong');
  else { score++; document.getElementById('currentScore').textContent = score; }
  setTimeout(() => showFeedback(isCorrect, correct), 450);
}

function showFeedback(isCorrect, correct) {
  const overlay = document.getElementById('feedbackOverlay');
  const emoji   = document.getElementById('feedbackEmoji');
  const msg     = document.getElementById('feedbackMsg');
  const nextBtn = document.getElementById('nextBtn');

  if (isCorrect) {
    const pick = CORRECT_MSG[Math.floor(Math.random() * CORRECT_MSG.length)];
    emoji.textContent = pick[1];
    msg.textContent   = pick[0];
    overlay.style.background = 'rgba(0,80,0,0.35)';
    speakText(pick[0].replace(/[^\w\s!]/g, ''));
  } else {
    emoji.textContent = '🤔';
    msg.innerHTML = `${WRONG_MSG[Math.floor(Math.random() * WRONG_MSG.length)]}<br><span style="font-size:0.9rem;color:#555;font-family:'Nunito',sans-serif">The answer is <strong>${correct}</strong></span>`;
    overlay.style.background = 'rgba(100,0,0,0.25)';
    speakText(`The answer is ${correct}`);
  }

  nextBtn.textContent = currentIndex + 1 >= questions.length ? 'See Results! 🎊' : 'Next →';
  overlay.classList.add('show');
}

function nextQuestion() {
  window.speechSynthesis.cancel();
  document.getElementById('feedbackOverlay').classList.remove('show');
  currentIndex++;
  showQuestion();
}

function saveMoney(earned) {
  const prev = parseFloat(localStorage.getItem('fsm_dollars') || '0');
  localStorage.setItem('fsm_dollars', (prev + earned * 0.05).toFixed(2));
}

function checkQuestionGate() {
  const count = parseInt(localStorage.getItem('fsm_q_count') || '0');
  const loggedIn = sessionStorage.getItem('fsm_session');
  if (count >= 30 && !loggedIn) {
    document.getElementById('loginGate').style.display = 'flex';
    return true;
  }
  return false;
}

function incrementQuestionCount() {
  const count = parseInt(localStorage.getItem('fsm_q_count') || '0');
  localStorage.setItem('fsm_q_count', count + 1);
}

function showEndScreen() {
  saveMoney(score);
  document.getElementById('feedbackOverlay').classList.remove('show');
  const total = questions.length;
  const pct   = Math.round((score / total) * 100);
  let stars, title;
  if (pct >= 90)      { stars = '⭐⭐⭐'; title = "Amazing! You're a Math Star! 🌟"; }
  else if (pct >= 70) { stars = '⭐⭐';   title = 'Great Job! Keep It Up! 👏'; }
  else                { stars = '⭐';     title = 'Good Try! Practice Makes Perfect! 💪'; }
  document.getElementById('endStars').textContent = stars;
  document.getElementById('endTitle').textContent  = title;
  const earned = (score * 0.05).toFixed(2);
  document.getElementById('endScore').textContent  = `You got ${score} out of ${total} correct! (${pct}%) — Earned $${earned}!`;
  document.getElementById('endScreen').style.display = 'flex';
  speakText(title.replace(/[^\w\s!]/g, ''));
}

function retry() {
  currentIndex = 0; score = 0;
  document.getElementById('endScreen').style.display = 'none';
  document.getElementById('currentScore').textContent = '0';
  questions = shuffle(allQuestions).slice(0, Math.min(10, allQuestions.length));
  showQuestion();
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('retryBtn').addEventListener('click', retry);

const speakBtn = document.getElementById('speakBtn');
if (speakBtn) speakBtn.addEventListener('click', speakQuestion);

init();
