// ══════════════════════════════════════════════════
// FEATURES.JS — Pomodoro, Progress, Science Quizzes,
//               Confetti, Toast, Visual Enhancements
// ══════════════════════════════════════════════════

// ═══ TOAST NOTIFICATIONS ═══
function showToast(msg, type='', duration=2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.className = 'toast', duration);
}

// ═══ CONFETTI ═══
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#B8336A','#1B4965','#059669','#D97706','#2563EB','#DC2626','#7C3AED','#FBBF24'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -18 - 4,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      rv: (Math.random() - 0.5) * 12,
      life: 1
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;
    particles.forEach(p => {
      if (p.life <= 0) return;
      alive++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.vx *= 0.99;
      p.rot += p.rv;
      p.life -= 0.008;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (alive > 0 && frame < 300) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ═══ POMODORO TIMER ═══
let pomoState = {
  running: false,
  paused: false,
  isBreak: false,
  timeLeft: 25 * 60,
  totalTime: 25 * 60,
  interval: null,
  sessions: 0,
  totalMins: 0,
  todaySessions: 0,
  todayDate: ''
};

function loadPomoStats() {
  try {
    const s = localStorage.getItem('gcse_pomo');
    if (s) {
      const d = JSON.parse(s);
      pomoState.sessions = d.sessions || 0;
      pomoState.totalMins = d.totalMins || 0;
      pomoState.todaySessions = d.todaySessions || 0;
      pomoState.todayDate = d.todayDate || '';
    }
  } catch(e) {}
  // Reset today counter if it's a new day
  const today = new Date().toISOString().split('T')[0];
  if (pomoState.todayDate !== today) {
    pomoState.todaySessions = 0;
    pomoState.todayDate = today;
  }
  updatePomoStats();
}

function savePomoStats() {
  try {
    localStorage.setItem('gcse_pomo', JSON.stringify({
      sessions: pomoState.sessions,
      totalMins: pomoState.totalMins,
      todaySessions: pomoState.todaySessions,
      todayDate: pomoState.todayDate
    }));
  } catch(e) {}
}

function updatePomoStats() {
  document.getElementById('pomo-sessions').textContent = pomoState.sessions;
  document.getElementById('pomo-total-mins').textContent = pomoState.totalMins;
  document.getElementById('pomo-today-sessions').textContent = pomoState.todaySessions;
}

function togglePomo() {
  const modal = document.getElementById('pomo-modal');
  const overlay = document.getElementById('pomo-overlay');
  modal.classList.toggle('open');
  overlay.classList.toggle('open');
}

function updatePomoDisplay() {
  const mins = Math.floor(pomoState.timeLeft / 60);
  const secs = pomoState.timeLeft % 60;
  document.getElementById('pomo-time').textContent =
    `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;

  // Update ring
  const circumference = 2 * Math.PI * 80; // r=80
  const progress = 1 - (pomoState.timeLeft / pomoState.totalTime);
  const ring = document.getElementById('pomo-progress');
  ring.style.strokeDashoffset = circumference * (1 - progress);
  ring.classList.toggle('break-mode', pomoState.isBreak);

  // Update phase label
  document.getElementById('pomo-phase').textContent =
    pomoState.isBreak ? 'Break Time' : 'Focus Time';

  // Update FAB
  document.getElementById('pomo-fab').classList.toggle('active', pomoState.running);
}

function updatePomoDuration() {
  if (pomoState.running) return;
  const workMins = parseInt(document.getElementById('pomo-work-dur').value);
  pomoState.totalTime = workMins * 60;
  pomoState.timeLeft = workMins * 60;
  pomoState.isBreak = false;
  updatePomoDisplay();
}

function startPomo() {
  const btn = document.getElementById('pomo-start');
  if (pomoState.running && !pomoState.paused) {
    // Pause
    pomoState.paused = true;
    clearInterval(pomoState.interval);
    btn.textContent = '▶ Resume';
    document.getElementById('pomo-fab').classList.remove('active');
    return;
  }
  if (pomoState.paused) {
    // Resume
    pomoState.paused = false;
    btn.textContent = '⏸ Pause';
    document.getElementById('pomo-fab').classList.add('active');
  } else {
    // Start fresh
    pomoState.running = true;
    pomoState.paused = false;
    btn.textContent = '⏸ Pause';
    document.getElementById('pomo-config').style.display = 'none';
  }
  pomoState.interval = setInterval(() => {
    pomoState.timeLeft--;
    if (pomoState.timeLeft <= 0) {
      clearInterval(pomoState.interval);
      pomoBeep();
      if (!pomoState.isBreak) {
        // Work session complete
        const workMins = parseInt(document.getElementById('pomo-work-dur').value);
        pomoState.sessions++;
        pomoState.totalMins += workMins;
        pomoState.todaySessions++;
        pomoState.todayDate = new Date().toISOString().split('T')[0];
        savePomoStats();
        updatePomoStats();
        showToast('🍅 Focus session complete! Time for a break.', 'success');
        launchConfetti();
        // Record study day for streak
        if (typeof recordStudyDay === 'function') recordStudyDay();
        // Switch to break
        pomoState.isBreak = true;
        const breakMins = parseInt(document.getElementById('pomo-break-dur').value);
        pomoState.totalTime = breakMins * 60;
        pomoState.timeLeft = breakMins * 60;
        updatePomoDisplay();
        // Auto-start break
        startPomo();
      } else {
        // Break complete
        showToast('☕ Break over! Ready to focus again?', 'warning');
        pomoBeep();
        pomoState.isBreak = false;
        pomoState.running = false;
        pomoState.paused = false;
        const workMins = parseInt(document.getElementById('pomo-work-dur').value);
        pomoState.totalTime = workMins * 60;
        pomoState.timeLeft = workMins * 60;
        document.getElementById('pomo-start').textContent = '▶ Start';
        document.getElementById('pomo-config').style.display = '';
        updatePomoDisplay();
      }
      return;
    }
    updatePomoDisplay();
  }, 1000);
  updatePomoDisplay();
}

function resetPomo() {
  clearInterval(pomoState.interval);
  pomoState.running = false;
  pomoState.paused = false;
  pomoState.isBreak = false;
  const workMins = parseInt(document.getElementById('pomo-work-dur').value);
  pomoState.totalTime = workMins * 60;
  pomoState.timeLeft = workMins * 60;
  document.getElementById('pomo-start').textContent = '▶ Start';
  document.getElementById('pomo-config').style.display = '';
  updatePomoDisplay();
}

function skipPomo() {
  if (!pomoState.running) return;
  pomoState.timeLeft = 1;
}

function pomoBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.2, 0.4].forEach(delay => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 830;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.15);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.15);
    });
  } catch(e) {}
}

// ═══ PROGRESS BARS ═══
function updateProgressBars() {
  // Science subjects — based on quiz scores
  const subjects = {
    'bio': { quiz: typeof BIO_QUIZ !== 'undefined' ? BIO_QUIZ : [], key: 'bio_quiz_scores' },
    'chem': { quiz: typeof CHEM_QUIZ !== 'undefined' ? CHEM_QUIZ : [], key: 'chem_quiz_scores' },
    'phys': { quiz: typeof PHYS_QUIZ !== 'undefined' ? PHYS_QUIZ : [], key: 'phys_quiz_scores' }
  };

  for (const [id, subj] of Object.entries(subjects)) {
    const el = document.getElementById('prog-' + id);
    if (!el) continue;
    let totalTopics = 0;
    let passedTopics = 0;
    try {
      const scores = JSON.parse(localStorage.getItem(subj.key) || '{}');
      subj.quiz.forEach(section => {
        section.topics.forEach(topic => {
          totalTopics++;
          const key = topic.topic;
          if (scores[key] && scores[key].bestPct >= 70) passedTopics++;
        });
      });
    } catch(e) {}
    const pct = totalTopics > 0 ? Math.round((passedTopics / totalTopics) * 100) : 0;
    el.style.width = pct + '%';
    el.title = pct + '% topics passed';
  }

  // English Literature — based on spaced repetition reviews across all texts
  updateEngLitProgress();
}

function updateEngLitProgress() {
  const el = document.getElementById('prog-eng-lit');
  if (!el || typeof TEXTS === 'undefined') return;
  let totalQuotes = 0;
  let reviewedQuotes = 0;
  try {
    Object.values(TEXTS).forEach(text => {
      const srKey = text.storagePrefix + '_sr';
      const srData = JSON.parse(localStorage.getItem(srKey) || '{}');
      text.quotes.forEach(q => {
        totalQuotes++;
        const hash = q.quote.substring(0, 30);
        if (srData[hash] && srData[hash].reviews > 0) reviewedQuotes++;
      });
    });
  } catch(e) {}
  const pct = totalQuotes > 0 ? Math.round((reviewedQuotes / totalQuotes) * 100) : 0;
  el.style.width = pct + '%';
  el.title = pct + '% quotes reviewed';
}

// ═══ SCIENCE QUIZ SYSTEM ═══
let sciQuizState = {
  subject: null,
  quizData: null,
  storageKey: null,
  currentTopic: null,
  questions: [],
  qIdx: 0,
  correct: 0,
  answered: false,
  answers: [],
  fromSubject: null
};

function getSciQuizData(subject) {
  switch(subject) {
    case 'biology': return { data: typeof BIO_QUIZ !== 'undefined' ? BIO_QUIZ : [], key: 'bio_quiz_scores', title: 'Biology', sub: 'AQA 8461 · Triple Science', icon: '🧬' };
    case 'chemistry': return { data: typeof CHEM_QUIZ !== 'undefined' ? CHEM_QUIZ : [], key: 'chem_quiz_scores', title: 'Chemistry', sub: 'AQA 8462 · Triple Science', icon: '⚗️' };
    case 'physics': return { data: typeof PHYS_QUIZ !== 'undefined' ? PHYS_QUIZ : [], key: 'phys_quiz_scores', title: 'Physics', sub: 'AQA 8463 · Triple Science', icon: '⚡' };
    default: return null;
  }
}

function openSciQuiz(subject) {
  const info = getSciQuizData(subject);
  if (!info || !info.data.length) {
    showToast('Quiz data loading... try again in a moment', 'warning');
    return;
  }
  sciQuizState.subject = subject;
  sciQuizState.quizData = info.data;
  sciQuizState.storageKey = info.key;
  sciQuizState.currentTopic = null;

  // Hide other views
  document.getElementById('home-screen').style.display = 'none';
  document.getElementById('subject-view').classList.remove('active');
  document.getElementById('tool-view').classList.remove('active');
  document.getElementById('notes-view').classList.remove('active');

  // Show quiz view
  const view = document.getElementById('sci-quiz-view');
  view.classList.add('active');
  document.getElementById('sci-quiz-title').textContent = info.icon + ' ' + info.title + ' Quiz';
  document.getElementById('sci-quiz-sub').textContent = info.sub;

  renderSciQuizTopicList();
  window.scrollTo(0, 0);
}

function renderSciQuizTopicList() {
  const container = document.getElementById('sci-quiz-content');
  const scores = JSON.parse(localStorage.getItem(sciQuizState.storageKey) || '{}');

  let totalTopics = 0, passedTopics = 0, totalQs = 0;
  sciQuizState.quizData.forEach(sec => sec.topics.forEach(t => {
    totalTopics++;
    totalQs += t.questions.length;
    if (scores[t.topic] && scores[t.topic].bestPct >= 70) passedTopics++;
  }));

  const overallPct = totalTopics > 0 ? Math.round((passedTopics / totalTopics) * 100) : 0;

  let html = `
    <div style="max-width:500px;margin:0 auto 20px;text-align:center">
      <div style="font-size:13px;color:var(--text2);margin-bottom:8px">
        <strong>${totalTopics}</strong> topics · <strong>${totalQs}</strong> questions · <strong>${passedTopics}</strong> passed
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-label">
          <span>OVERALL PROGRESS</span>
          <span class="pct">${overallPct}%</span>
        </div>
        <div class="progress-bar" style="height:8px">
          <div class="progress-bar-fill accent" style="width:${overallPct}%"></div>
        </div>
      </div>
    </div>
  `;

  sciQuizState.quizData.forEach(section => {
    html += `<div class="sci-section-label"><span style="font-size:14px;margin-right:4px">${section.icon}</span> ${section.section}</div>`;
    html += '<div class="sci-topic-grid">';
    section.topics.forEach(topic => {
      const score = scores[topic.topic];
      const bestPct = score ? score.bestPct : null;
      const passed = bestPct !== null && bestPct >= 70;
      const scoreText = bestPct !== null ? `${bestPct}%` : 'New';
      const scoreClass = passed ? 'passed' : '';
      const qCount = topic.questions.length;

      html += `
        <div class="sci-topic-card" onclick="startSciTopicQuiz('${topic.topic.replace(/'/g, "\\'")}')">
          <div class="stc-score ${scoreClass}">${passed ? '✓ ' : ''}${scoreText}</div>
          <div class="stc-title">${topic.topic}</div>
          <div class="stc-meta">${qCount} questions</div>
          ${bestPct !== null ? `
            <div class="sc-progress" style="margin-top:8px">
              <div class="progress-bar" style="height:3px">
                <div class="progress-bar-fill ${passed ? 'green' : 'accent'}" style="width:${bestPct}%"></div>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    });
    html += '</div>';
  });

  container.innerHTML = html;
}

function startSciTopicQuiz(topicName) {
  let topic = null;
  sciQuizState.quizData.forEach(sec => {
    sec.topics.forEach(t => {
      if (t.topic === topicName) topic = t;
    });
  });
  if (!topic) return;

  sciQuizState.currentTopic = topic;
  // Shuffle questions
  sciQuizState.questions = [...topic.questions].sort(() => Math.random() - 0.5);
  sciQuizState.qIdx = 0;
  sciQuizState.correct = 0;
  sciQuizState.answered = false;
  sciQuizState.answers = [];

  renderSciQuizQuestion();
  window.scrollTo(0, 0);
}

function renderSciQuizQuestion() {
  const container = document.getElementById('sci-quiz-content');
  const { questions, qIdx, correct } = sciQuizState;

  if (qIdx >= questions.length) {
    renderSciQuizResults();
    return;
  }

  const q = questions[qIdx];
  const total = questions.length;
  const progressPct = Math.round((qIdx / total) * 100);

  let html = `
    <div class="sci-quiz-active">
      <button class="back-btn" onclick="renderSciQuizTopicList()" style="margin-bottom:12px">← Back to topics</button>
      <div style="text-align:center;margin-bottom:8px;font-family:'Crimson Pro',serif;font-size:18px;font-weight:600;color:var(--text)">${sciQuizState.currentTopic.topic}</div>
      <div class="sci-quiz-progress">
        <div class="sq-count">${qIdx + 1}/${total}</div>
        <div class="progress-bar" style="height:6px">
          <div class="progress-bar-fill accent" style="width:${progressPct}%"></div>
        </div>
        <div class="sq-count" style="color:var(--green)">${correct} ✓</div>
      </div>
      <div class="sq-question-card">
        <div class="sq-question-num">Question ${qIdx + 1}</div>
        <div class="sq-question-text">${q.q}</div>
        <div class="sq-options">
  `;

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    html += `
      <button class="sq-option" id="sq-opt-${i}" onclick="answerSciQuiz(${i})">
        <span class="opt-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `;
  });

  html += `
        </div>
        <div class="sq-explanation" id="sq-explanation">${q.explanation || ''}</div>
      </div>
      <div class="sq-nav">
        <button class="btn" id="sq-next-btn" onclick="nextSciQuizQ()" style="display:none">Next Question →</button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function answerSciQuiz(picked) {
  if (sciQuizState.answered) return;
  sciQuizState.answered = true;

  const q = sciQuizState.questions[sciQuizState.qIdx];
  const correct = q.answer;
  const isCorrect = picked === correct;
  if (isCorrect) sciQuizState.correct++;
  sciQuizState.answers.push({ picked, correct: correct, isCorrect });

  // Style options
  for (let i = 0; i < q.options.length; i++) {
    const el = document.getElementById('sq-opt-' + i);
    el.classList.add('disabled');
    if (i === correct) el.classList.add('correct');
    if (i === picked && !isCorrect) el.classList.add('wrong');
  }

  // Show explanation
  const expl = document.getElementById('sq-explanation');
  if (expl && q.explanation) expl.classList.add('visible');

  // Show next button
  document.getElementById('sq-next-btn').style.display = 'inline-block';

  // Record study day
  if (typeof recordStudyDay === 'function') recordStudyDay();
}

function nextSciQuizQ() {
  sciQuizState.qIdx++;
  sciQuizState.answered = false;
  renderSciQuizQuestion();
  window.scrollTo(0, 0);
}

function renderSciQuizResults() {
  const { correct, questions, currentTopic } = sciQuizState;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 70;

  // Save score
  try {
    const scores = JSON.parse(localStorage.getItem(sciQuizState.storageKey) || '{}');
    const prev = scores[currentTopic.topic];
    scores[currentTopic.topic] = {
      lastScore: correct,
      lastTotal: total,
      lastPct: pct,
      bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
      attempts: (prev ? prev.attempts : 0) + 1,
      lastDate: new Date().toISOString().split('T')[0]
    };
    localStorage.setItem(sciQuizState.storageKey, JSON.stringify(scores));
  } catch(e) {}

  let scoreClass = pct >= 80 ? 'great' : pct >= 50 ? 'ok' : 'poor';
  let emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
  let message = pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good effort! Keep practising.' : 'Keep going — revision is the key!';

  if (pct >= 80) launchConfetti();

  let html = `
    <div class="sq-results">
      <div style="font-size:48px;margin-bottom:8px">${emoji}</div>
      <div class="sq-results-score ${scoreClass}">${pct}%</div>
      <div class="sq-results-label">${correct}/${total} correct — ${message}</div>
      <div class="progress-bar-wrap" style="max-width:300px;margin:0 auto 24px">
        <div class="progress-bar" style="height:10px">
          <div class="progress-bar-fill ${passed ? 'green' : 'accent'}" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="sq-results-breakdown">
        <div style="font-size:12px;font-weight:600;color:var(--text2);margin-bottom:12px;text-align:center">Question Review</div>
  `;

  sciQuizState.answers.forEach((a, i) => {
    const q = questions[i];
    const icon = a.isCorrect ? '✅' : '❌';
    html += `
      <div style="padding:10px;border-radius:10px;border:1px solid var(--border);margin-bottom:6px;background:var(--bg);font-size:12px">
        <div style="display:flex;gap:8px;align-items:flex-start">
          <span>${icon}</span>
          <div style="flex:1">
            <div style="color:var(--text);font-weight:500;margin-bottom:2px">${q.q}</div>
            ${!a.isCorrect ? `<div style="color:var(--red);font-size:11px">Your answer: ${q.options[a.picked]}</div>` : ''}
            <div style="color:var(--green);font-size:11px">Correct: ${q.options[a.correct]}</div>
            ${q.explanation ? `<div style="color:var(--text3);font-size:11px;margin-top:2px">${q.explanation}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  });

  html += `
      </div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:20px">
        <button class="btn" onclick="startSciTopicQuiz('${currentTopic.topic.replace(/'/g, "\\'")}')">🔄 Retry</button>
        <button class="btn" onclick="renderSciQuizTopicList()" style="background:var(--accent);color:#fff;border-color:var(--accent)">← All Topics</button>
      </div>
    </div>
  `;

  document.getElementById('sci-quiz-content').innerHTML = html;
  updateProgressBars();
  window.scrollTo(0, 0);
}

function backFromSciQuiz() {
  document.getElementById('sci-quiz-view').classList.remove('active');
  document.getElementById('home-screen').style.display = '';
  if (typeof renderStreak === 'function') renderStreak();
  if (typeof renderQOTD === 'function') renderQOTD();
  updateProgressBars();
  window.scrollTo(0, 0);
}

// ═══ SHORT-ANSWER QUIZ SYSTEM ═══
let shortAnsQuizState = {
  subject: null,
  quizData: null,
  allTopics: [],
  currentTopic: null,
  currentQuestions: [],
  qIdx: 0,
  storageKey: null
};

function openShortAnsQuiz(subject) {
  shortAnsQuizState.subject = subject;

  // Get quiz data based on subject
  const quizMap = {
    'geography': typeof GEO_QUIZ !== 'undefined' ? GEO_QUIZ : [],
    'business': typeof BUS_QUIZ !== 'undefined' ? BUS_QUIZ : [],
    'computer-science': typeof CS_QUIZ !== 'undefined' ? CS_QUIZ : []
  };

  shortAnsQuizState.quizData = quizMap[subject] || [];
  shortAnsQuizState.storageKey = `${subject}_short_ans_scores`;

  // Flatten all topics
  shortAnsQuizState.allTopics = [];
  shortAnsQuizState.quizData.forEach(section => {
    section.topics.forEach(topic => {
      shortAnsQuizState.allTopics.push({ ...topic, section: section.section });
    });
  });

  // Hide all other views
  document.getElementById('home-screen').style.display = 'none';
  document.getElementById('subject-view').classList.remove('active');
  document.getElementById('tool-view').classList.remove('active');
  document.getElementById('notes-view').classList.remove('active');
  document.getElementById('sci-quiz-view').classList.remove('active');

  // Show quiz view
  const view = document.getElementById('short-ans-quiz-view');
  view.classList.add('active');

  const titleMap = {
    'geography': '🌍 Geography Quiz',
    'business': '💼 Business Quiz',
    'computer-science': '💻 Computer Science Quiz'
  };

  document.getElementById('qa-title').textContent = titleMap[subject] || 'Quiz';

  renderShortAnsTopicList();
  window.scrollTo(0, 0);
}

function renderShortAnsTopicList() {
  document.getElementById('qa-topic-list').style.display = 'block';
  document.getElementById('qa-active').style.display = 'none';
  document.getElementById('qa-reveal').style.display = 'none';

  const container = document.getElementById('qa-topics');
  const scores = JSON.parse(localStorage.getItem(shortAnsQuizState.storageKey) || '{}');

  let html = '';
  shortAnsQuizState.allTopics.forEach(topic => {
    const topicKey = `${topic.section}_${topic.topic}`;
    const score = scores[topicKey] || { answered: 0, total: 0 };
    const pct = score.total > 0 ? Math.round((score.answered / score.total) * 100) : 0;
    const status = pct === 100 ? '✓' : pct > 0 ? '◐' : '○';

    html += `
      <div class="qa-topic-btn" onclick="startShortAnsQuiz('${topic.section.replace(/'/g, "\\'")}', '${topic.topic.replace(/'/g, "\\'")}')">
        <div class="qa-topic-info">
          <div class="qa-topic-name">${topic.topic}</div>
          <div class="qa-topic-meta">${topic.questions.length} questions · ${topic.section}</div>
        </div>
        <div class="qa-topic-progress">
          <div class="qa-progress-pct">${pct}%</div>
          <div class="qa-progress-status">${status}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function startShortAnsQuiz(section, topicName) {
  const topic = shortAnsQuizState.allTopics.find(t => t.section === section && t.topic === topicName);
  if (!topic) return;

  shortAnsQuizState.currentTopic = topic;
  shortAnsQuizState.currentQuestions = topic.questions;
  shortAnsQuizState.qIdx = 0;

  document.getElementById('qa-topic-list').style.display = 'none';
  document.getElementById('qa-active').style.display = 'block';
  document.getElementById('qa-reveal').style.display = 'none';
  document.getElementById('qa-user-answer').value = '';

  renderShortAnsQuestion();
}

function renderShortAnsQuestion() {
  const { qIdx, currentQuestions } = shortAnsQuizState;

  if (qIdx >= currentQuestions.length) {
    renderShortAnsResults();
    return;
  }

  const q = currentQuestions[qIdx];
  const total = currentQuestions.length;
  const progressPct = Math.round((qIdx / total) * 100);

  document.getElementById('qa-progress').textContent = `Question ${qIdx + 1} of ${total}`;
  document.getElementById('qa-question').textContent = q.q;
  document.getElementById('qa-user-answer').value = '';
  document.getElementById('qa-reveal').style.display = 'none';
  document.getElementById('qa-user-answer').focus();
}

function revealMarkSchemeAndModel() {
  const { qIdx, currentQuestions } = shortAnsQuizState;
  const q = currentQuestions[qIdx];
  const userAnswer = document.getElementById('qa-user-answer').value;

  // Score based on keywords
  const score = scoreUserAnswer(userAnswer, q.keywords);

  // Display mark scheme
  let markHtml = '';
  q.markScheme.forEach(point => {
    markHtml += `<li style="margin-bottom:8px">• ${point}</li>`;
  });
  document.getElementById('qa-mark-points').innerHTML = markHtml;
  document.getElementById('qa-score').textContent = score.achieved;
  document.getElementById('qa-max-marks').textContent = q.maxMarks;
  document.getElementById('qa-model-answer').textContent = q.modelAnswer;

  // Save score
  const topicKey = `${shortAnsQuizState.currentTopic.section}_${shortAnsQuizState.currentTopic.topic}`;
  const scores = JSON.parse(localStorage.getItem(shortAnsQuizState.storageKey) || '{}');
  if (!scores[topicKey]) scores[topicKey] = { answered: 0, total: q.maxMarks };
  scores[topicKey].answered += score.achieved;
  scores[topicKey].total += q.maxMarks;
  localStorage.setItem(shortAnsQuizState.storageKey, JSON.stringify(scores));

  // Show reveal
  document.getElementById('qa-reveal').style.display = 'block';
  window.scrollTo(0, document.getElementById('qa-reveal').offsetTop - 100);
}

function scoreUserAnswer(userAnswer, keywords) {
  const answer = userAnswer.toLowerCase();
  let achieved = 0;
  keywords.forEach(keyword => {
    if (answer.includes(keyword.toLowerCase())) {
      achieved++;
    }
  });
  return { achieved: Math.min(achieved, keywords.length), maxMarks: keywords.length };
}

function skipQuestion() {
  shortAnsQuizState.qIdx++;
  renderShortAnsQuestion();
}

function nextShortAnsQuestion() {
  shortAnsQuizState.qIdx++;
  renderShortAnsQuestion();
}

function renderShortAnsResults() {
  const topicKey = `${shortAnsQuizState.currentTopic.section}_${shortAnsQuizState.currentTopic.topic}`;
  const scores = JSON.parse(localStorage.getItem(shortAnsQuizState.storageKey) || '{}');
  const score = scores[topicKey] || { answered: 0, total: 0 };
  const pct = score.total > 0 ? Math.round((score.answered / score.total) * 100) : 0;

  let resultsHtml = `
    <div class="qa-results" style="text-align:center;padding:20px">
      <h3 style="margin-bottom:12px">Quiz Complete!</h3>
      <div style="font-size:48px;font-weight:700;color:var(--accent);margin-bottom:8px">${pct}%</div>
      <div style="font-size:18px;margin-bottom:16px">
        <span style="font-weight:600">${score.answered} / ${score.total}</span> marks achieved
      </div>
      <div style="display:flex;gap:8px;justify-content:center">
        <button class="btn" onclick="startShortAnsQuiz('${shortAnsQuizState.currentTopic.section.replace(/'/g, "\\'")}', '${shortAnsQuizState.currentTopic.topic.replace(/'/g, "\\'")}')" style="background:var(--accent);color:#fff;border-color:var(--accent)">Retry Topic</button>
        <button class="btn" onclick="renderShortAnsTopicList()">Back to Topics</button>
      </div>
    </div>
  `;

  document.getElementById('qa-active').innerHTML = resultsHtml;
}

function backFromShortAnsQuiz() {
  // Hide quiz view and show notes view
  document.getElementById('short-ans-quiz-view').classList.remove('active');
  document.getElementById('notes-view').classList.add('active');

  // Reset quiz state
  shortAnsQuizState.currentTopic = null;
  shortAnsQuizState.currentQuestions = [];
  shortAnsQuizState.qIdx = 0;

  // Hide both quiz sections
  document.getElementById('qa-topic-list').style.display = 'none';
  document.getElementById('qa-active').style.display = 'none';

  window.scrollTo(0, 0);
}

// ═══ INIT NEW FEATURES ═══
document.addEventListener('DOMContentLoaded', () => {
  loadPomoStats();
  updatePomoDisplay();
  updateProgressBars();
});

// Also run if DOM already loaded
if (document.readyState !== 'loading') {
  loadPomoStats();
  updatePomoDisplay();
  updateProgressBars();
}

// ═══ ONBOARDING / FIRST-VISIT TUTORIAL ═══
let _onboardingStep = 1;
const _onboardingTotal = 5;

function showOnboarding() {
  const el = document.getElementById('onboarding');
  if (!el) return;
  _onboardingStep = 1;
  _setOnboardingStep(1);
  el.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function dismissOnboarding() {
  const el = document.getElementById('onboarding');
  if (!el) return;
  el.style.display = 'none';
  document.body.style.overflow = '';
  try { localStorage.setItem('gcse_onboarded', '1'); } catch(e) {}
}

function onboardingNext() {
  if (_onboardingStep >= _onboardingTotal) {
    dismissOnboarding();
    return;
  }
  _setOnboardingStep(_onboardingStep + 1);
}

function _setOnboardingStep(n) {
  _onboardingStep = n;
  document.querySelectorAll('.onboarding-step').forEach((el, i) => {
    el.classList.toggle('active', i + 1 === n);
  });
  document.querySelectorAll('.onboarding-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i + 1 === n);
  });
  const btn = document.getElementById('onboarding-next-btn');
  if (btn) btn.textContent = n >= _onboardingTotal ? 'Get started →' : 'Next →';
}

// Show on first visit
(function initOnboarding() {
  try {
    if (!localStorage.getItem('gcse_onboarded')) {
      // Slight delay so the page renders first
      setTimeout(showOnboarding, 600);
    }
  } catch(e) {}
})();
