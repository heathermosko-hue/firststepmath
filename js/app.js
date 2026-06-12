/* ============================================
   FirstStepMath – Home Page Logic
   ============================================ */

let currentGrade = 'prek';

function renderTopics(grade) {
  const gradeData = GRADE_INFO[grade];
  const grid      = document.getElementById('topicsGrid');
  const intro     = document.getElementById('gradeIntro');

  intro.textContent = gradeData.desc;
  grid.innerHTML    = '';

  gradeData.topics.forEach(topicKey => {
    const topic = QUESTIONS[grade][topicKey];
    const dots  = [1,2,3].map(i =>
      `<div class="dot${i <= topic.difficulty ? ' on' : ''}"></div>`
    ).join('');

    const card = document.createElement('a');
    card.className = `topic-card card-${grade}`;
    card.href      = `quiz.html?grade=${grade}&topic=${topicKey}`;
    card.innerHTML = `
      <div class="topic-card-top">${topic.icon}</div>
      <div class="topic-card-body">
        <div class="topic-card-title">${topic.title}</div>
        <div class="topic-card-meta">
          <span class="topic-standard">${topic.standard}</span>
          <div class="difficulty-dots">${dots}</div>
        </div>
        <div class="topic-card-meta">
          <span class="topic-card-count">${topic.questions.length} questions</span>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  requestAnimationFrame(() => {
    document.querySelectorAll('.topic-card').forEach((card, i) => {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.3s ${i*0.05}s, transform 0.3s ${i*0.05}s`;
      requestAnimationFrame(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });
}

/* Grade tab switching */
document.querySelectorAll('.grade-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.grade-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected','false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected','true');
    currentGrade = tab.dataset.grade;
    renderTopics(currentGrade);
  });
});

/* Hamburger */
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('mainNav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    const open = mainNav.style.display === 'flex';
    if (open) {
      mainNav.removeAttribute('style');
    } else {
      Object.assign(mainNav.style, {
        display:'flex', flexDirection:'column', position:'absolute',
        top:'68px', left:'0', right:'0', background:'#fff',
        padding:'16px 24px', boxShadow:'0 8px 20px rgba(0,0,0,0.1)', zIndex:'99'
      });
    }
  });
}

renderTopics('prek');
