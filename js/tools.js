/* ============================================
   FirstStepMath – Math Manipulatives Toolbox
   8 tools: Base-10 Blocks, Ten Frame, Number Line,
   100 Chart, Counters, Number Bonds, Money, Clock
   ============================================ */

window.Tools = (function () {

  /* ─── State ─────────────────────────────────────── */
  let activeTab = 'base10';

  // Base 10
  const b10 = { h: 0, t: 0, o: 0 };

  // Ten Frame (supports double = 20 cells)
  const tf = { cells: Array(20).fill(false), size: 10 };

  // Number Line
  const nl = { max: 20, marks: new Set() };

  // 100 Chart
  const chart = { hl: new Set() };

  // Counters
  const ctr = { items: [], nextId: 0, color: '#e74c3c' };
  const CTR_COLORS = ['#e74c3c','#3498db','#f1c40f','#2ecc71','#9b59b6','#e67e22','#1abc9c','#e91e63'];

  // Number Bonds
  const bonds = { whole: 0, part1: 0, part2: 0 };

  // Money (US cents)
  const money = { penny: 0, nickel: 0, dime: 0, quarter: 0, dollar: 0 };
  const COINS = [
    { key:'penny',   label:'Penny',   cents:1,   color:'#b87333', w:42, h:42, r:true  },
    { key:'nickel',  label:'Nickel',  cents:5,   color:'#a8a9ad', w:47, h:47, r:true  },
    { key:'dime',    label:'Dime',    cents:10,  color:'#c0c0c0', w:37, h:37, r:true  },
    { key:'quarter', label:'Quarter', cents:25,  color:'#d4af37', w:50, h:50, r:true  },
    { key:'dollar',  label:'$1 Bill', cents:100, color:'#4caf50', w:64, h:30, r:false },
  ];

  // Clock
  const clk = { h: 12, m: 0 };

  /* ─── Panel Open / Close ─────────────────────────── */
  function open() {
    document.getElementById('toolsPanel').classList.add('open');
    document.getElementById('toolsBackdrop').classList.add('show');
    renderTab(activeTab);
  }
  function close() {
    document.getElementById('toolsPanel').classList.remove('open');
    document.getElementById('toolsBackdrop').classList.remove('show');
  }

  /* ─── Tab Switching ──────────────────────────────── */
  function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tool-tab-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.tool-pane').forEach(p =>
      p.classList.toggle('active', p.id === 'tool-' + tab));
    renderTab(tab);
  }

  const RENDERERS = {
    base10: renderBase10, tenframe: renderTenFrame,
    numline: renderNumLine, chart100: renderChart100,
    counters: renderCounters, bonds: renderBonds,
    money: renderMoney, clock: renderClock,
  };
  function renderTab(tab) { if (RENDERERS[tab]) RENDERERS[tab](); }

  /* ─── BASE 10 BLOCKS ─────────────────────────────── */
  function renderBase10() {
    const total = b10.h * 100 + b10.t * 10 + b10.o;
    const pane = document.getElementById('tool-base10');
    pane.innerHTML = `
      <div class="b10-workspace" id="b10ws"></div>
      <div class="b10-equation">
        <span class="b10eq h">${b10.h}&times;100</span> +
        <span class="b10eq t">${b10.t}&times;10</span> +
        <span class="b10eq o">${b10.o}&times;1</span>
        = <strong class="b10-total">${total}</strong>
      </div>
      <div class="b10-controls">
        ${[['h','Hundreds','b10c-h'],['t','Tens','b10c-t'],['o','Ones','b10c-o']].map(([k,label,cls]) => `
          <div class="b10-col">
            <div class="b10-swatch ${cls}"></div>
            <div class="b10-col-label">${label}</div>
            <div class="b10-stepper">
              <button class="stp minus" onclick="Tools.b10Step('${k}',-1)">−</button>
              <span class="stp-val">${b10[k]}</span>
              <button class="stp plus"  onclick="Tools.b10Step('${k}',1)">+</button>
            </div>
          </div>`).join('')}
      </div>
      <button class="tool-clear-btn" onclick="Tools.b10Clear()">🗑 Clear All</button>`;

    // Build visual workspace
    const ws = document.getElementById('b10ws');
    if (!ws) return;
    for (let i = 0; i < b10.h; i++) {
      const flat = document.createElement('div');
      flat.className = 'b10v-flat';
      flat.title = '100';
      for (let r = 0; r < 10; r++) {
        const row = document.createElement('div');
        row.className = 'b10v-row';
        for (let c = 0; c < 10; c++) {
          row.appendChild(Object.assign(document.createElement('div'), { className: 'b10v-cell' }));
        }
        flat.appendChild(row);
      }
      ws.appendChild(flat);
    }
    for (let i = 0; i < b10.t; i++) {
      const rod = document.createElement('div');
      rod.className = 'b10v-rod';
      rod.title = '10';
      for (let r = 0; r < 10; r++) {
        rod.appendChild(Object.assign(document.createElement('div'), { className: 'b10v-rod-cell' }));
      }
      ws.appendChild(rod);
    }
    for (let i = 0; i < b10.o; i++) {
      ws.appendChild(Object.assign(document.createElement('div'), { className: 'b10v-unit', title: '1' }));
    }
    if (!b10.h && !b10.t && !b10.o) {
      ws.innerHTML = '<span class="tool-hint-empty">Tap + to add blocks</span>';
    }
  }

  function b10Step(k, d) { b10[k] = Math.max(0, Math.min(9, b10[k] + d)); renderBase10(); }
  function b10Clear()    { b10.h = b10.t = b10.o = 0; renderBase10(); }

  /* ─── TEN FRAME ──────────────────────────────────── */
  function renderTenFrame() {
    const count = tf.cells.slice(0, tf.size).filter(Boolean).length;
    const frames = tf.size === 10 ? 1 : 2;

    let frameHTML = '';
    for (let f = 0; f < frames; f++) {
      frameHTML += '<div class="tf-tool-frame">';
      for (let row = 0; row < 2; row++) {
        frameHTML += '<div class="tf-tool-row">';
        for (let col = 0; col < 5; col++) {
          const idx = f * 10 + row * 5 + col;
          frameHTML += `<button class="tf-tool-cell${tf.cells[idx] ? ' filled' : ''}" onclick="Tools.tfToggle(${idx})" aria-label="Cell ${idx+1}"></button>`;
        }
        frameHTML += '</div>';
      }
      frameHTML += '</div>';
    }

    document.getElementById('tool-tenframe').innerHTML = `
      <p class="tool-hint">Tap circles to fill or empty them</p>
      <div class="tf-double-toggle">
        <button class="tf-range-btn${tf.size===10?' active':''}" onclick="Tools.tfSetSize(10)">Single (0–10)</button>
        <button class="tf-range-btn${tf.size===20?' active':''}" onclick="Tools.tfSetSize(20)">Double (0–20)</button>
      </div>
      ${frameHTML}
      <div class="tf-count-row">
        Filled: <strong class="tf-filled">${count}</strong> &nbsp;|&nbsp; Empty: <strong>${tf.size - count}</strong>
      </div>
      <button class="tool-clear-btn" onclick="Tools.tfClear()">🗑 Clear</button>`;
  }

  function tfToggle(i)   { tf.cells[i] = !tf.cells[i]; renderTenFrame(); }
  function tfClear()     { tf.cells = Array(20).fill(false); renderTenFrame(); }
  function tfSetSize(n)  { tf.size = n; tf.cells = Array(20).fill(false); renderTenFrame(); }

  /* ─── NUMBER LINE ─────────────────────────────────── */
  function renderNumLine() {
    const W = 320, H = 88, mx = 16, lineY = 52;
    const stepW = (W - mx * 2) / nl.max;
    let ticks = '';
    const skipMod = nl.max === 100 ? 10 : 1;

    for (let i = 0; i <= nl.max; i++) {
      if (i % skipMod !== 0) continue;
      const x = mx + i * stepW;
      const marked = nl.marks.has(i);
      if (marked) {
        ticks += `<circle cx="${x}" cy="${lineY}" r="12" fill="#FF6B35" style="cursor:pointer" onclick="Tools.nlToggle(${i})"/>`;
        ticks += `<text x="${x}" y="${lineY+4.5}" text-anchor="middle" font-size="9" fill="white" font-family="Nunito" font-weight="800" pointer-events="none">${i}</text>`;
      } else {
        const fs = nl.max <= 20 ? 10 : 9;
        ticks += `<line x1="${x}" y1="${lineY-7}" x2="${x}" y2="${lineY+7}" stroke="#888" stroke-width="1.5"/>`;
        ticks += `<rect x="${x-11}" y="${lineY-14}" width="22" height="30" fill="transparent" style="cursor:pointer" onclick="Tools.nlToggle(${i})"/>`;
        ticks += `<text x="${x}" y="${lineY+22}" text-anchor="middle" font-size="${fs}" fill="#444" font-family="Nunito" style="cursor:pointer;user-select:none">${i}</text>`;
      }
    }

    const markedArr = [...nl.marks].sort((a, b) => a - b);
    const svg = `<svg viewBox="0 0 ${W} ${H}" class="nl-tool-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="${mx}" y1="${lineY}" x2="${W-mx+6}" y2="${lineY}" stroke="#333" stroke-width="2.5"/>
      <polygon points="${W-mx+6},${lineY} ${W-mx},${lineY-5} ${W-mx},${lineY+5}" fill="#333"/>
      ${ticks}
    </svg>`;

    document.getElementById('tool-numline').innerHTML = `
      <p class="tool-hint">Tap a number to mark it</p>
      <div class="nl-range-row">
        ${[10, 20, 100].map(m =>
          `<button class="nl-rng-btn${nl.max===m?' active':''}" onclick="Tools.nlSetMax(${m})">0–${m}</button>`
        ).join('')}
      </div>
      <div class="nl-scroll-wrap">${svg}</div>
      <div class="nl-marked-row">${markedArr.length
        ? 'Marked: <strong>' + markedArr.join(', ') + '</strong>'
        : '<span class="tool-hint-empty">Tap numbers to mark them</span>'}</div>
      <button class="tool-clear-btn" onclick="Tools.nlClear()">🗑 Clear</button>`;
  }

  function nlToggle(n)  { nl.marks.has(n) ? nl.marks.delete(n) : nl.marks.add(n); renderNumLine(); }
  function nlSetMax(m)  { nl.max = m; nl.marks.clear(); renderNumLine(); }
  function nlClear()    { nl.marks.clear(); renderNumLine(); }

  /* ─── 100 CHART ──────────────────────────────────── */
  function renderChart100() {
    let cells = '';
    for (let i = 1; i <= 100; i++) {
      cells += `<button class="chart-cell${chart.hl.has(i) ? ' hl' : ''}" onclick="Tools.chartToggle(${i})">${i}</button>`;
    }
    document.getElementById('tool-chart100').innerHTML = `
      <p class="tool-hint">Tap numbers to highlight • use Skip Count to see patterns</p>
      <div class="chart-skip-row">
        ${[2, 5, 10].map(n =>
          `<button class="chart-skip-btn" onclick="Tools.chartSkip(${n})">By ${n}s</button>`
        ).join('')}
      </div>
      <div class="chart-grid">${cells}</div>
      <button class="tool-clear-btn" onclick="Tools.chartClear()">🗑 Clear</button>`;
  }

  function chartToggle(n) { chart.hl.has(n) ? chart.hl.delete(n) : chart.hl.add(n); renderChart100(); }
  function chartSkip(n)   { chart.hl.clear(); for (let i = n; i <= 100; i += n) chart.hl.add(i); renderChart100(); }
  function chartClear()   { chart.hl.clear(); renderChart100(); }

  /* ─── COUNTERS ───────────────────────────────────── */
  function renderCounters() {
    const colorBtns = CTR_COLORS.map(c =>
      `<button class="ctr-color-btn${ctr.color === c ? ' active' : ''}" style="background:${c}" onclick="Tools.ctrSetColor('${c}')" aria-label="${c}"></button>`
    ).join('');
    const dots = ctr.items.map(item =>
      `<div class="ctr-dot" style="background:${item.color}" onclick="Tools.ctrRemove(${item.id})" title="Tap to remove"></div>`
    ).join('');

    // Count by color
    const byCols = {};
    ctr.items.forEach(i => { byCols[i.color] = (byCols[i.color] || 0) + 1; });
    const colorSummary = Object.entries(byCols)
      .map(([c, n]) => `<span style="color:${c};font-weight:800">&bull;${n}</span>`)
      .join(' ');

    document.getElementById('tool-counters').innerHTML = `
      <p class="tool-hint">Pick a color → Add • Tap a counter to remove it</p>
      <div class="ctr-color-row">${colorBtns}</div>
      <button class="ctr-add-btn" onclick="Tools.ctrAdd()">＋ Add Counter</button>
      <div class="ctr-workspace">${dots || '<span class="tool-hint-empty">No counters yet</span>'}</div>
      <div class="ctr-total">Total: <strong>${ctr.items.length}</strong> &nbsp; ${colorSummary}</div>
      <button class="tool-clear-btn" onclick="Tools.ctrClear()">🗑 Clear All</button>`;
  }

  function ctrSetColor(c)  { ctr.color = c; renderCounters(); }
  function ctrAdd()        { ctr.items.push({ id: ctr.nextId++, color: ctr.color }); renderCounters(); }
  function ctrRemove(id)   { ctr.items = ctr.items.filter(i => i.id !== id); renderCounters(); }
  function ctrClear()      { ctr.items = []; ctr.nextId = 0; renderCounters(); }

  /* ─── NUMBER BONDS ───────────────────────────────── */
  function renderBonds() {
    const sum = bonds.part1 + bonds.part2;
    const balanced = bonds.whole > 0 && sum === bonds.whole;
    const statusClass = bonds.whole === 0 ? '' : balanced ? 'correct' : 'incorrect';
    const statusMsg   = bonds.whole === 0 ? '' : balanced
      ? `✓ ${bonds.part1} + ${bonds.part2} = ${bonds.whole}`
      : `${bonds.part1} + ${bonds.part2} = ${sum} ≠ ${bonds.whole}`;

    const circle = (key, label, colorClass) => `
      <div class="bonds-part-wrap">
        <div class="bonds-circle ${colorClass}">
          <button class="bonds-step" onclick="Tools.bondsStep('${key}',-1)">−</button>
          <span class="bonds-num">${bonds[key]}</span>
          <button class="bonds-step" onclick="Tools.bondsStep('${key}',1)">+</button>
        </div>
        <div class="bonds-label">${label}</div>
      </div>`;

    document.getElementById('tool-bonds').innerHTML = `
      <p class="tool-hint">Use + / − to fill in the number bond</p>
      <div class="bonds-diagram">
        ${circle('whole','Whole','whole-circle')}
        <div class="bonds-lines">
          <div class="bonds-line left-line"></div>
          <div class="bonds-line right-line"></div>
        </div>
        <div class="bonds-parts-row">
          ${circle('part1','Part 1','part-circle')}
          ${circle('part2','Part 2','part-circle')}
        </div>
      </div>
      <div class="bonds-check ${statusClass}">${statusMsg}</div>
      <button class="tool-clear-btn" onclick="Tools.bondsClear()">🗑 Clear</button>`;
  }

  function bondsStep(k, d) { bonds[k] = Math.max(0, Math.min(99, bonds[k] + d)); renderBonds(); }
  function bondsClear()    { bonds.whole = bonds.part1 = bonds.part2 = 0; renderBonds(); }

  /* ─── PLAY MONEY (US) ────────────────────────────── */
  function renderMoney() {
    const totalCents = money.penny*1 + money.nickel*5 + money.dime*10 + money.quarter*25 + money.dollar*100;
    const dollars = Math.floor(totalCents / 100);
    const cents   = totalCents % 100;
    const totalStr = dollars > 0
      ? `$${dollars}.${cents.toString().padStart(2,'0')}`
      : `${cents}¢`;

    const rows = COINS.map(coin => {
      const previewStyle = coin.r
        ? `width:${coin.w}px;height:${coin.h}px;border-radius:50%;background:${coin.color};flex-shrink:0;display:flex;align-items:center;justify-content:center;color:white;font-size:0.62rem;font-weight:900;box-shadow:inset 0 -2px 4px rgba(0,0,0,0.25),0 2px 4px rgba(0,0,0,0.2)`
        : `width:${coin.w}px;height:${coin.h}px;border-radius:6px;background:${coin.color};flex-shrink:0;display:flex;align-items:center;justify-content:center;color:white;font-size:0.75rem;font-weight:900;box-shadow:0 2px 6px rgba(0,0,0,0.2)`;
      const label = coin.r ? `${coin.cents}¢` : '$1';
      return `
        <div class="money-row">
          <div style="${previewStyle}">${label}</div>
          <div class="money-coin-info">
            <div class="money-coin-name">${coin.label}</div>
            <div class="money-coin-val">${coin.cents === 100 ? '100¢ = $1.00' : `${coin.cents}¢`}</div>
          </div>
          <div class="money-stepper">
            <button class="stp minus" onclick="Tools.moneyStep('${coin.key}',-1)">−</button>
            <span class="stp-val">${money[coin.key]}</span>
            <button class="stp plus"  onclick="Tools.moneyStep('${coin.key}',1)">+</button>
          </div>
        </div>`;
    }).join('');

    document.getElementById('tool-money').innerHTML = `
      <p class="tool-hint">Add coins and bills to count your money</p>
      <div class="money-total-display">💰 Total: <strong>${totalStr}</strong></div>
      <div class="money-rows">${rows}</div>
      <button class="tool-clear-btn" onclick="Tools.moneyClear()">🗑 Clear</button>`;
  }

  function moneyStep(k, d) { money[k] = Math.max(0, money[k] + d); renderMoney(); }
  function moneyClear()    { COINS.forEach(c => money[c.key] = 0); renderMoney(); }

  /* ─── ANALOG CLOCK ───────────────────────────────── */
  function renderClock() {
    const cx = 90, cy = 90, r = 80;
    const mAngle = (clk.m / 60) * 360 - 90;
    const hAngle = ((clk.h % 12) / 12) * 360 + (clk.m / 60) * 30 - 90;

    const toRad = d => d * Math.PI / 180;
    const mRad = toRad(mAngle), hRad = toRad(hAngle);
    const mTip = { x: cx + 64 * Math.cos(mRad), y: cy + 64 * Math.sin(mRad) };
    const hTip = { x: cx + 46 * Math.cos(hRad), y: cy + 46 * Math.sin(hRad) };

    let nums = '', ticks = '';
    for (let i = 1; i <= 12; i++) {
      const a = toRad((i / 12) * 360 - 90);
      nums += `<text x="${cx + 66*Math.cos(a)}" y="${cy + 66*Math.sin(a) + 5}" text-anchor="middle" font-size="12" font-family="Fredoka One,cursive" fill="#1a1a2e">${i}</text>`;
    }
    for (let i = 0; i < 60; i++) {
      const a = toRad((i / 60) * 360 - 90);
      const r1 = i % 5 === 0 ? 72 : 77;
      ticks += `<line x1="${cx+r1*Math.cos(a)}" y1="${cy+r1*Math.sin(a)}" x2="${cx+80*Math.cos(a)}" y2="${cy+80*Math.sin(a)}" stroke="${i%5===0?'#555':'#ccc'}" stroke-width="${i%5===0?2:1}"/>`;
    }

    const timeStr = `${clk.h}:${clk.m.toString().padStart(2, '0')}`;

    const svg = `<svg viewBox="0 0 180 180" class="clock-svg" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="white" stroke="#dde3ff" stroke-width="4"/>
      ${ticks}${nums}
      <line x1="${cx}" y1="${cy}" x2="${hTip.x}" y2="${hTip.y}" stroke="#1a1a2e" stroke-width="5" stroke-linecap="round"/>
      <line x1="${cx}" y1="${cy}" x2="${mTip.x}" y2="${mTip.y}" stroke="#FF6B35" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="5" fill="#1a1a2e"/>
    </svg>`;

    const presets = ['1:00','2:30','6:00','9:00','12:00','12:30'].map(t => {
      const [h, m] = t.split(':').map(Number);
      return `<button class="clock-preset-btn" onclick="Tools.clockSet(${h},${m})">${t}</button>`;
    }).join('');

    document.getElementById('tool-clock').innerHTML = `
      <div class="clock-wrap">${svg}</div>
      <div class="clock-time-display">${timeStr}</div>
      <div class="clock-controls">
        <div class="clock-col">
          <div class="clock-col-label">Hour</div>
          <div class="clock-stepper">
            <button class="stp minus" onclick="Tools.clockStep('h',-1)">−</button>
            <span class="stp-val">${clk.h}</span>
            <button class="stp plus"  onclick="Tools.clockStep('h',1)">+</button>
          </div>
        </div>
        <div class="clock-col">
          <div class="clock-col-label">Minutes</div>
          <div class="clock-stepper">
            <button class="stp minus" onclick="Tools.clockStep('m',-5)">−5</button>
            <span class="stp-val">${clk.m.toString().padStart(2,'0')}</span>
            <button class="stp plus"  onclick="Tools.clockStep('m',5)">+5</button>
          </div>
        </div>
      </div>
      <div class="clock-presets">${presets}</div>`;
  }

  function clockStep(k, d) {
    if (k === 'h') clk.h = ((clk.h - 1 + d + 12) % 12) + 1;
    if (k === 'm') clk.m = ((clk.m + d) + 60) % 60;
    renderClock();
  }
  function clockSet(h, m) { clk.h = h; clk.m = m; renderClock(); }

  /* ─── Init ───────────────────────────────────────── */
  function init() {
    const btn      = document.getElementById('toolsBtn');
    const closeBtn = document.getElementById('toolsClose');
    const backdrop = document.getElementById('toolsBackdrop');
    if (btn)      btn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) backdrop.addEventListener('click', close);
    document.querySelectorAll('.tool-tab-btn').forEach(b =>
      b.addEventListener('click', () => switchTab(b.dataset.tab)));

    // Scroll arrow for tab strip
    const tabList   = document.getElementById('toolsTabList');
    const arrow     = document.getElementById('toolsScrollArrow');
    if (tabList && arrow) {
      function updateArrow() {
        const atEnd = tabList.scrollLeft + tabList.clientWidth >= tabList.scrollWidth - 4;
        arrow.classList.toggle('hidden', atEnd);
      }
      arrow.addEventListener('click', () => {
        tabList.scrollBy({ left: 130, behavior: 'smooth' });
      });
      tabList.addEventListener('scroll', updateArrow);
      updateArrow();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ─── Public API (called via inline onclick) ─────── */
  return {
    b10Step, b10Clear,
    tfToggle, tfClear, tfSetSize,
    nlToggle, nlSetMax, nlClear,
    chartToggle, chartSkip, chartClear,
    ctrSetColor, ctrAdd, ctrRemove, ctrClear,
    bondsStep, bondsClear,
    moneyStep, moneyClear,
    clockStep, clockSet,
  };
})();
