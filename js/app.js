// ══════ SETTINGS ══════
let settings={dark:false,fontSize:'1',dailyGoal:20,autoAdvance:true};
function loadSettings(){try{const s=localStorage.getItem('gcse_settings');if(s)settings=JSON.parse(s)}catch(e){}}
function saveSettings(){try{localStorage.setItem('gcse_settings',JSON.stringify(settings))}catch(e){}}
function applySettings(){
  document.documentElement.setAttribute('data-theme',settings.dark?'dark':'');
  document.documentElement.style.setProperty('--font-scale',settings.fontSize);
  const td=document.getElementById('toggle-dark');if(td)td.classList.toggle('on',settings.dark);
  document.getElementById('font-size-select').value=settings.fontSize;
  document.getElementById('daily-goal-select').value=settings.dailyGoal;
  document.getElementById('toggle-autoadvance').classList.toggle('on',settings.autoAdvance);
  const nb=document.getElementById('nav-dark-btn');if(nb)nb.textContent=settings.dark?'☀️':'🌙';
}
function toggleSettings(){document.getElementById('settings-overlay').classList.toggle('open');document.getElementById('settings-panel').classList.toggle('open')}
function toggleDark(){settings.dark=!settings.dark;saveSettings();applySettings()}
function navGo(target){
  if(target==='home'){
    document.getElementById('tool-view').classList.remove('active');
    document.getElementById('subject-view').classList.remove('active');
    document.getElementById('notes-view').classList.remove('active');
    document.getElementById('home-screen').style.display='';
    renderStreak();renderQOTD();
    window.scrollTo(0,0);
    updateNavTabs('home');
  } else if(target==='subjects'){
    document.querySelector('.subject-section').scrollIntoView({behavior:'smooth'});
    updateNavTabs('subjects');
  }
}
function updateNavTabs(active){
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>{if(t.textContent.toLowerCase().includes(active))t.classList.add('active')});
}
function setFontSize(v){settings.fontSize=v;saveSettings();applySettings()}
function setDailyGoal(v){settings.dailyGoal=parseInt(v);saveSettings()}
function toggleAutoAdvance(){settings.autoAdvance=!settings.autoAdvance;saveSettings();applySettings()}
function resetAllProgress(){
  // Dynamically collect all storage prefixes from TEXTS
  const prefixes=Object.values(TEXTS).map(t=>t.storagePrefix);
  prefixes.forEach(p=>{['_mem','_custom','_sr','_fav'].forEach(s=>localStorage.removeItem(p+s))});
  // Also clear science quiz scores and other data
  ['bio_quiz_scores','chem_quiz_scores','phys_quiz_scores','gcse_streak','gcse_pomo','gcse_settings'].forEach(k=>localStorage.removeItem(k));
  alert('All progress reset.');location.reload();
}
loadSettings();applySettings();

// ══════ TECHNIQUE & THEME MAPS ══════
const DC={metaphor:{bg:'#DBEAFE',c:'#1E40AF'},simile:{bg:'#D1FAE5',c:'#065F46'},soliloquy:{bg:'#FCE7F3',c:'#9D174D'},aside:{bg:'#FED7AA',c:'#9A3412'},imagery:{bg:'#D9F99D',c:'#3F6212'},alliteration:{bg:'#E0E7FF',c:'#4338CA'},repetition:{bg:'#FEF3C7',c:'#92400E'},rhetorical_question:{bg:'#FEE2E2',c:'#991B1B'},exclamation:{bg:'#FFEDD5',c:'#9A3412'},hamartia:{bg:'#EDE9FE',c:'#5B21B6'},dramatic_irony:{bg:'#CCFBF1',c:'#115E59'},imperative:{bg:'#ECFCCB',c:'#3F6212'},antithesis:{bg:'#DBEAFE',c:'#1E40AF'},hubris:{bg:'#FEE2E2',c:'#991B1B'},motif:{bg:'#FEF3C7',c:'#92400E'},hyperbole:{bg:'#FFEDD5',c:'#9A3412'},apostrophe:{bg:'#FCE7F3',c:'#9D174D'},biblical_allusion:{bg:'#D9F99D',c:'#3F6212'},structural_irony:{bg:'#DBEAFE',c:'#1E40AF'},paradox:{bg:'#F5D0FE',c:'#86198F'},parallelism:{bg:'#FEF3C7',c:'#92400E'},personification:{bg:'#CCFBF1',c:'#115E59'},nihilism:{bg:'#FEE2E2',c:'#991B1B'},pathos:{bg:'#FFEDD5',c:'#9A3412'},anagnorisis:{bg:'#EDE9FE',c:'#5B21B6'},assonance:{bg:'#DBEAFE',c:'#1E40AF'},symbolism:{bg:'#F5D0FE',c:'#86198F'},foreshadowing:{bg:'#FCE7F3',c:'#9D174D'},stage_directions:{bg:'#E0E7FF',c:'#4338CA'},euphemism:{bg:'#FED7AA',c:'#9A3412'},listing:{bg:'#ECFCCB',c:'#3F6212'},allegory:{bg:'#EDE9FE',c:'#5B21B6'},pathetic_fallacy:{bg:'#D1FAE5',c:'#065F46'},anaphora:{bg:'#DBEAFE',c:'#1E40AF'},tricolon:{bg:'#FEF3C7',c:'#92400E'}};
const techNames={metaphor:'metaphor',simile:'simile',soliloquy:'soliloquy',aside:'aside',imagery:'imagery',alliteration:'alliteration',repetition:'repetition',rhetorical_question:'rhetorical question',exclamation:'exclamation',hamartia:'hamartia',dramatic_irony:'dramatic irony',imperative:'imperative',antithesis:'antithesis',hubris:'hubris',motif:'motif',hyperbole:'hyperbole',apostrophe:'apostrophe',biblical_allusion:'biblical allusion',structural_irony:'structural irony',paradox:'paradox',parallelism:'parallelism',personification:'personification',nihilism:'nihilism',pathos:'pathos',anagnorisis:'anagnorisis',assonance:'assonance',symbolism:'symbolism',foreshadowing:'foreshadowing',stage_directions:'stage directions',euphemism:'euphemism',listing:'listing',allegory:'allegory',pathetic_fallacy:'pathetic fallacy',anaphora:'anaphora',tricolon:'tricolon'};
function highlightTechniques(text){const entries=Object.entries(techNames).sort((a,b)=>b[1].length-a[1].length);let r=text;for(const[key,name]of entries){const col=DC[key]||{bg:'#F3F4F6',c:'#4B5563'};const re=new RegExp(`(?<![\\w-])(${name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})(?![\\w-])`,'gi');r=r.replace(re,m=>`<span class="tech-hl" style="background:${col.bg};color:${col.c};">${m}</span>`)}return r}

// ══════ APP STATE ══════
// Grouped into logical objects to reduce global clutter.
// - "app" holds the current text/subject context
// - "cards" holds flashcard browsing state
// - "filters" holds active filter selections
// - "quiz" holds quiz/test mode state
// - "exam" holds exam simulation state
// - "editor" holds custom quote editor state
// - "sr" holds spaced repetition data

const app = {
  currentSubject: null,
  currentTextId: null,
  currentText: null,       // was "T" — the active TEXTS entry
  allQuotes: [],           // was "all" — full quote list including custom
  bestQuotes: [],          // was "best" — curated best quotes
  builtInCount: 0,         // number of non-custom quotes
  memorised: {},
  customQuotes: [],
  focusMode: false
};

const cards = {
  mode: 'all',
  deck: [],                // currently visible subset of quotes
  index: 0,                // was "idx"
  isFlipped: false
};

const filters = {
  acts: [],
  themes: [],
  techniques: []
};

const quiz = {
  deck: [],
  index: 0,
  correct: 0,
  total: 0,
  answered: false,
  results: [],
  mode: 'normal',          // 'normal' | 'adaptive' | 'theme'
  theme: null
};

const editor = {
  editingIndex: -1,
  selectedThemes: [],
  selectedTechniques: []
};

const sr = {
  data: {},
  rated: false              // lock: one rating per card view
};

let favourites = {};

const exam = {
  deck: [],
  index: 0,
  correct: 0,
  total: 0,
  answered: false,
  timer: null,
  timeLeft: 0
};

let streakData = { days: [], current: 0, best: 0 };

// Shorthand accessors — avoids "app.currentText" everywhere in hot paths
function currentText() { return app.currentText; }

// ══════ STORAGE ══════
function loadStorage(){try{const s=localStorage.getItem(app.currentText.storagePrefix+'_mem');if(s)app.memorised=JSON.parse(s)}catch(e){}try{const s=localStorage.getItem(app.currentText.storagePrefix+'_custom');if(s)app.customQuotes=JSON.parse(s)}catch(e){}try{const s=localStorage.getItem(app.currentText.storagePrefix+'_sr');if(s)sr.data=JSON.parse(s)}catch(e){}try{const s=localStorage.getItem(app.currentText.storagePrefix+'_fav');if(s)favourites=JSON.parse(s)}catch(e){}}
function saveMem(){try{localStorage.setItem(app.currentText.storagePrefix+'_mem',JSON.stringify(app.memorised))}catch(e){}}
function saveCustom(){try{localStorage.setItem(app.currentText.storagePrefix+'_custom',JSON.stringify(app.customQuotes))}catch(e){}}
function saveSR(){try{localStorage.setItem(app.currentText.storagePrefix+'_sr',JSON.stringify(sr.data))}catch(e){}}
function saveFav(){try{localStorage.setItem(app.currentText.storagePrefix+'_fav',JSON.stringify(favourites))}catch(e){}}
function loadStreak(){try{const s=localStorage.getItem('gcse_streak');if(s)streakData=JSON.parse(s)}catch(e){}}
function saveStreak(){try{localStorage.setItem('gcse_streak',JSON.stringify(streakData))}catch(e){}}

// ══════ STREAK ══════
function getToday(){return new Date().toISOString().split('T')[0]}
function recordStudyDay(){loadStreak();const today=getToday();if(!streakData.days.includes(today)){streakData.days.push(today);let streak=1;const sorted=[...streakData.days].sort().reverse();for(let i=1;i<sorted.length;i++){const prev=new Date(sorted[i-1]);prev.setDate(prev.getDate()-1);if(sorted[i]===prev.toISOString().split('T')[0])streak++;else break}streakData.current=streak;if(streak>streakData.best)streakData.best=streak;saveStreak()}renderStreak()}
function renderStreak(){loadStreak();const bar=document.getElementById('streak-bar');const today=new Date();const days=['M','T','W','T','F','S','S'];const dow=today.getDay();const mo=(dow===0?-6:1-dow);let dots='';for(let i=0;i<7;i++){const d=new Date(today);d.setDate(today.getDate()+mo+i);const ds=d.toISOString().split('T')[0];dots+=`<div class="streak-dot${streakData.days.includes(ds)?' active':''}${ds===getToday()?' today':''}">${days[i]}</div>`}bar.innerHTML=`<div class="streak-fire">🔥</div><div class="streak-info"><div class="streak-count">${streakData.current} day${streakData.current!==1?'s':''}</div><div class="streak-label">Current streak · Best: ${streakData.best}</div></div><div class="streak-dots">${dots}</div>`;const ss=document.getElementById('stat-streak');if(ss)ss.textContent=streakData.current;renderHomeStats()}
function getStudiedToday(){try{const s=localStorage.getItem('gcse_today');if(s){const d=JSON.parse(s);if(d.date===getToday())return d.count}}catch(e){}return 0}
function trackCardStudied(){try{const count=getStudiedToday()+1;localStorage.setItem('gcse_today',JSON.stringify({date:getToday(),count}))}catch(e){}}
function getDueTodayAll(){const today=getToday();let due=0;try{Object.values(TEXTS).forEach(t=>{try{const s=localStorage.getItem(t.storagePrefix+'_sr');if(s){const data=JSON.parse(s);due+=Object.values(data).filter(d=>d.nextReview<=today).length}}catch(e){}})}catch(e){}return due}
function renderHomeStats(){const ss=document.getElementById('stat-studied');const sd=document.getElementById('stat-due');if(ss)ss.textContent=getStudiedToday();if(sd)sd.textContent=getDueTodayAll()}

// ══════ SPACED REPETITION ══════
function quoteHash(q){return q.quote.substring(0,30)}
function getSR(card){const h=quoteHash(card);if(!sr.data[h])sr.data[h]={interval:1,ef:2.5,nextReview:getToday(),lastRating:-1,reviews:0};return sr.data[h]}
function updateModeCounters(){const due=getDueCards().length;const weak=getWeakCards().length;const fav=getFavCards().length;document.getElementById('btn-due').textContent=`🔄 DUE (${due})`;document.getElementById('btn-weak').textContent=`⚠️ WEAK (${weak})`;document.getElementById('btn-fav').textContent=`⭐ FAVS (${fav})`}
function rateDifficulty(quality){if(sr.rated)return;sr.rated=true;const qMap=[1,5];const q=qMap[quality];const card=cards.deck[cards.index];const cardSR=getSR(card);cardSR.reviews++;const oldEF=cardSR.ef;cardSR.ef=Math.max(1.3,oldEF+(0.1-(5-q)*(0.08+(5-q)*0.02)));if(q<3)cardSR.interval=1;else if(cardSR.reviews===1)cardSR.interval=1;else if(cardSR.reviews===2)cardSR.interval=6;else cardSR.interval=Math.round(cardSR.interval*cardSR.ef);cardSR.lastRating=quality;const next=new Date();next.setDate(next.getDate()+cardSR.interval);cardSR.nextReview=next.toISOString().split('T')[0];saveSR();trackCardStudied();recordStudyDay();updateModeCounters();updateCardRatingTag();
// Visual feedback pulse
const btns=document.querySelectorAll('.sr-btn');btns.forEach(b=>{b.style.opacity='0.4';b.style.pointerEvents='none'});btns[quality].style.opacity='1';btns[quality].style.transform='scale(1.05)';setTimeout(()=>{btns.forEach(b=>{b.style.opacity='';b.style.pointerEvents='';b.style.transform=''})},400);
if(settings.autoAdvance){setTimeout(()=>{if(cards.index<cards.deck.length-1){cards.index++;cards.isFlipped=false;sr.rated=false;navCard()}else{render()}updateSRHints()},350)}else{render();updateSRHints()}}
function updateSRHints(){updateCardRatingTag()}
function updateCardRatingTag(){const tag=document.getElementById('card-rating-tag');if(!tag||!cards.deck.length)return;const cardSR=getSR(cards.deck[cards.index]);tag.className='card-rating-tag';if(cardSR.lastRating===1){tag.classList.add('remembered');tag.textContent='✓ Remembered'}else if(cardSR.lastRating===0){tag.classList.add('needs-learning');tag.textContent='✗ Need to learn'}}
function getDueCards(){const today=getToday();return app.allQuotes.filter(c=>{const sr=getSR(c);return sr.nextReview<=today})}
function getWeakCards(){return app.allQuotes.filter(c=>{const sr=getSR(c);return sr.lastRating===0||sr.ef<2.0})}

// ══════ NAVIGATION ══════
function openSubject(id){app.currentSubject=id;const S=SUBJECTS[id];
if(id==='sciences'){document.getElementById('sv-title').textContent='Sciences';document.getElementById('sv-sub').textContent='AQA Triple Science';const grid=document.getElementById('sv-text-grid');grid.innerHTML='';const scienceSubjects=[{id:'biology',icon:'🧬',title:'Biology',desc:'AQA 8461 · Cell biology to Ecology',sub:'7 units, 23 topics'},{id:'chemistry',icon:'⚗️',title:'Chemistry',desc:'AQA 8462 · Atomic structure to Resources',sub:'8 units, 17 topics'},{id:'physics',icon:'⚡',title:'Physics',desc:'AQA 8463 · Energy to Space',sub:'8 units, 15 topics'}];scienceSubjects.forEach(sci=>{grid.innerHTML+=`<div class="text-card sci-${sci.id}" onclick="openSubject('${sci.id}')"><span class="card-badge badge-ready">Ready</span><span class="card-icon">${sci.icon}</span><div class="card-title">${sci.title}</div><div class="card-desc">${sci.desc}</div><div class="card-stats"><span class="card-stat">${sci.sub}</span></div></div>`});document.getElementById('home-screen').style.display='none';document.getElementById('tool-view').classList.remove('active');document.getElementById('notes-view').classList.remove('active');document.getElementById('subject-view').classList.add('active');window.scrollTo(0,0);return}
if(S.type==='notes'){openNotesView(id,S);return}
document.getElementById('sv-title').textContent=S.title;document.getElementById('sv-sub').textContent=S.sub;const grid=document.getElementById('sv-text-grid');grid.innerHTML='';S.texts.forEach(tid=>{const tc=S.textCards[tid];grid.innerHTML+=`<div class="text-card ${tc.cls}" onclick="openTool('${tid}')"><span class="card-badge badge-ready">Ready</span><span class="card-icon">${tc.icon}</span><div class="card-title">${tc.title}</div><div class="card-desc">${tc.desc}</div><div class="card-stats">${tc.stats.map(s=>`<span class="card-stat">${s}</span>`).join('')}</div></div>`});if(S.extra)S.extra.forEach(e=>{grid.innerHTML+=`<div class="text-card ${e.cls}${e.disabled?' disabled':''}"><span class="card-badge ${e.disabled?'badge-soon':'badge-ready'}">${e.disabled?'Coming soon':'Ready'}</span><span class="card-icon">${e.icon}</span><div class="card-title">${e.title}</div><div class="card-desc">${e.desc}</div></div>`});document.getElementById('home-screen').style.display='none';document.getElementById('tool-view').classList.remove('active');document.getElementById('notes-view').classList.remove('active');document.getElementById('subject-view').classList.add('active');window.scrollTo(0,0)}
function backToHome(){document.getElementById('subject-view').classList.remove('active');document.getElementById('tool-view').classList.remove('active');document.getElementById('notes-view').classList.remove('active');document.getElementById('home-screen').style.display='';if(exam.timer){clearInterval(exam.timer);exam.timer=null}stopTTS();renderStreak();renderQOTD();updateNavTabs('home');window.scrollTo(0,0)}
function backToSubject(){document.getElementById('tool-view').classList.remove('active');document.getElementById('subject-view').classList.add('active');if(exam.timer){clearInterval(exam.timer);exam.timer=null}window.scrollTo(0,0)}

function openTool(id){console.log('BASE', id, app.currentText, TEXTS[id], app.allQuotes);app.currentTextId=id;app.currentText=TEXTS[id];app.memorised={};app.customQuotes=[];sr.data={};loadStorage();const base=Array.isArray(app.currentText?.quotes)?app.currentText.quotes:Object.values(app.currentText?.quotes||{}).flat().filter(Boolean);const custom=Array.isArray(app.customQuotes)?app.customQuotes:[];app.allQuotes=[...(base||[]),...(app.customQuotes||[])];app.builtInCount=base.length;cards.deck=app.allQuotes.length?app.allQuotes:[];;cards.index=0;cards.isFlipped=false;app.bestQuotes=(app.currentText.bestIdx||[]).map(i=>base[i]).filter(Boolean);filters.acts=[];filters.themes=[];filters.techniques=[];document.getElementById('tool-title').textContent=app.currentText.title;document.getElementById('tool-sub').textContent=app.currentText.subtitle;document.getElementById('unit-label').textContent=app.currentText.unitLabel.toUpperCase();document.getElementById('ef-unit-label').textContent=app.currentText.unitLabel;const sel=document.getElementById('ef-act');sel.innerHTML='';app.currentText.units.forEach(u=>{const o=document.createElement('option');o.value=u;o.textContent=u;sel.appendChild(o)});document.querySelectorAll('#tool-view .tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('tab-flashcards').classList.add('active');document.querySelectorAll('#tool-view .tab-bar .tab-btn').forEach((b,i)=>b.classList.toggle('active',i===0));['btn-all','btn-best','btn-due','btn-weak','btn-fav','btn-cloze'].forEach(id=>document.getElementById(id).classList.remove('active'));document.getElementById('btn-all').classList.add('active');document.getElementById('search-input').value='';document.getElementById('home-screen').style.display='none';document.getElementById('subject-view').classList.remove('active');document.getElementById('notes-view').classList.remove('active');document.getElementById('tool-view').classList.add('active');document.getElementById('tool-back-btn').textContent=`← ${SUBJECTS[app.currentSubject].title}`;buildFilterChips();render();updateSRHints();updateModeCounters();window.scrollTo(0,0)}
function switchTab(t,btn){document.querySelectorAll('#tool-view .tab-content').forEach(e=>e.classList.remove('active'));document.querySelectorAll('#tool-view .tab-bar .tab-btn').forEach(b=>b.classList.remove('active'));document.getElementById('tab-'+t).classList.add('active');btn.classList.add('active');if(t==='test')startTest();if(t==='tracker')renderTracker();if(t==='essay')buildEssayThemes();if(t==='editor')renderEditor();if(t==='dashboard')renderDashboard();if(t==='exam'){if(exam.timer)clearInterval(exam.timer);document.getElementById('exam-setup').style.display='';document.getElementById('exam-active').style.display='none';document.getElementById('exam-results').style.display='none'}}

// ══════ FLASHCARDS ══════
function getSource(){if(cards.mode==='best')return app.bestQuotes;if(cards.mode==='due')return getDueCards();if(cards.mode==='weak')return getWeakCards();if(cards.mode==='fav')return getFavCards();if(cards.mode==='cloze')return app.allQuotes;return app.allQuotes}
function getFavCards(){return app.allQuotes.filter(c=>favourites[quoteHash(c)])}
function toggleFav(){if(!cards.deck.length)return;const h=quoteHash(cards.deck[cards.index]);favourites[h]=!favourites[h];if(!favourites[h])delete favourites[h];saveFav();updateFavBtn();updateModeCounters()}
function updateFavBtn(){if(!cards.deck.length)return;const h=quoteHash(cards.deck[cards.index]);const btn=document.getElementById('fav-btn');const isFav=!!favourites[h];btn.textContent=isFav?'★':'☆';btn.classList.toggle('faved',isFav)}
function pills(arr,cMap){return arr.map(x=>{const c=cMap[x]||{bg:'#F3F4F6',c:'#4B5563'};return`<span class="pill" style="background:${c.bg};color:${c.c};">${x.replace(/_/g,' ')}</span>`}).join('')}
function render(){if(!cards.deck.length){document.getElementById('quote-text').textContent='No quotes match.';document.getElementById('front-badge').style.display='none';document.getElementById('front-devices').innerHTML='';document.getElementById('progress').textContent='0 / 0';document.getElementById('prev-btn').disabled=true;document.getElementById('next-btn').disabled=true;document.getElementById('count-badge').textContent='Try removing a filter';document.getElementById('card').classList.remove('flipped');return}if(cards.index>=cards.deck.length)cards.index=cards.deck.length-1;document.getElementById('front-badge').style.display='inline-block';const c=cards.deck[cards.index];const bs=`background:${app.currentText.unitBg[c.act]};color:${app.currentText.unitText[c.act]};`;document.getElementById('front-badge').style.cssText=bs;document.getElementById('front-badge').textContent=app.currentText.unitLabel.toUpperCase()+' '+c.act;
// Cloze mode: blank key words
if(cards.mode==='cloze'){const words=c.quote.split(' ');const blanked=words.map((w,i)=>{if(w.length>3&&i%3===1)return`<span class="cloze-blank" onclick="event.stopPropagation();this.classList.add('revealed')">${w}</span>`;return w}).join(' ');document.getElementById('quote-text').innerHTML='\u201C'+blanked+'\u201D'}else{document.getElementById('quote-text').textContent='\u201C'+c.quote+'\u201D'}
document.getElementById('front-devices').innerHTML=pills(c.devices,DC);document.getElementById('back-badge').style.cssText=bs;document.getElementById('back-badge').textContent=app.currentText.unitLabel.toUpperCase()+' '+c.act;document.getElementById('back-speaker').textContent=c.speaker;document.getElementById('back-themes').innerHTML=pills(c.themes,app.currentText.themes);document.getElementById('back-word').innerHTML=highlightTechniques(c.analysis);document.getElementById('back-context').textContent=c.context;document.getElementById('progress').textContent=(cards.index+1)+' / '+cards.deck.length;document.getElementById('prev-btn').disabled=cards.index===0;document.getElementById('next-btn').disabled=cards.index===cards.deck.length-1;document.getElementById('card').classList.toggle('flipped',cards.isFlipped);document.getElementById('count-badge').textContent=cards.deck.length+' quotes';updateSRHints();updateFavBtn();updateCardRatingTag()}
function flip(){cards.isFlipped=!cards.isFlipped;render()}
function stopTTS(){try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(e){}ttsActive=false;const b=document.getElementById('tts-btn');if(b)b.classList.remove('speaking')}
function navCard(){
  const card=document.getElementById('card');
  card.style.transition='none';
  card.style.transformStyle='flat';
  card.classList.remove('flipped');
  void card.offsetHeight;
  render();
  card.style.transformStyle='preserve-3d';
  void card.offsetHeight;
  requestAnimationFrame(()=>{card.style.transition=''});
}
function next(){if(cards.index<cards.deck.length-1){cards.index++;cards.isFlipped=false;sr.rated=false;stopTTS();navCard()}}
function prev(){if(cards.index>0){cards.index--;cards.isFlipped=false;sr.rated=false;stopTTS();navCard()}}
function shuffle(){for(let i=cards.deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards.deck[i],cards.deck[j]]=[cards.deck[j],cards.deck[i]]}cards.index=0;cards.isFlipped=false;sr.rated=false;stopTTS();navCard()}
function searchQuotes(){
  const q=document.getElementById('search-input').value.toLowerCase().trim();
  if(!q){applyFilters();return}

  let src=getSource();
  if(filters.acts.length)src=src.filter(c=>filters.acts.includes(c.act));
  if(filters.themes.length)src=src.filter(c=>c.themes.some(t=>filters.themes.includes(t)));
  if(filters.techniques.length)src=src.filter(c=>c.devices.some(d=>filters.techniques.includes(d)));

  cards.deck=src.filter(c=>
    c.quote.toLowerCase().includes(q) ||
    c.speaker.toLowerCase().includes(q) ||
    c.analysis.toLowerCase().includes(q) ||
    c.themes.some(t=>t.includes(q))
  );

  cards.index=0;
  cards.isFlipped=false;
  render();
}
function toggleFilterBlock(id){document.getElementById('chips-'+id).classList.toggle('collapsed');document.getElementById('arrow-'+id).classList.toggle('open')}
function buildFilterChips(){const src=getSource();const themeCounts={},deviceCounts={};src.forEach(c=>{(c.themes||[]).forEach(t=>{themeCounts[t]=(themeCounts[t]||0)+1});(c.devices||[]).forEach(d=>{deviceCounts[d]=(deviceCounts[d]||0)+1})});const ad=document.getElementById('chips-acts');ad.innerHTML='';app.currentText.units.forEach(a=>{const b=document.createElement('button');b.className='fchip act-chip'+(filters.acts.includes(a)?' selected':'');b.textContent=app.currentText.unitLabel+' '+a;if(filters.acts.includes(a)){b.style.background=app.currentText.unitBg[a];b.style.color=app.currentText.unitText[a];b.style.borderColor=app.currentText.unitText[a]}else{b.style.borderColor='';b.style.color='';b.style.background=''}b.onclick=()=>{if(filters.acts.includes(a))filters.acts=filters.acts.filter(x=>x!==a);else filters.acts.push(a);applyFilters()};ad.appendChild(b)});const td=document.getElementById('chips-themes');td.innerHTML='';[...new Set(src.flatMap(c=>c.themes))].sort().forEach(t=>{if((themeCounts[t]||0)===0)return;const col=app.currentText.themes[t]||{bg:'#F3F4F6',c:'#4B5563'};const b=document.createElement('button');b.className='fchip'+(filters.themes.includes(t)?' selected':'');b.textContent=t.replace(/_/g,' ')+' ('+themeCounts[t]+')';if(filters.themes.includes(t)){b.style.background=col.bg;b.style.color=col.c;b.style.borderColor=col.c}b.onclick=()=>{if(filters.themes.includes(t))filters.themes=filters.themes.filter(x=>x!==t);else filters.themes.push(t);applyFilters()};td.appendChild(b)});const xd=document.getElementById('chips-techs');xd.innerHTML='';[...new Set(src.flatMap(c=>c.devices))].sort().forEach(d=>{if((deviceCounts[d]||0)===0)return;const col=DC[d]||{bg:'#F3F4F6',c:'#4B5563'};const b=document.createElement('button');b.className='fchip'+(filters.techniques.includes(d)?' selected':'');b.textContent=(techNames[d]||d)+' ('+deviceCounts[d]+')';if(filters.techniques.includes(d)){b.style.background=col.bg;b.style.color=col.c;b.style.borderColor=col.c}b.onclick=()=>{if(filters.techniques.includes(d))filters.techniques=filters.techniques.filter(x=>x!==d);else filters.techniques.push(d);applyFilters()};xd.appendChild(b)})}
function applyFilters(){document.getElementById('clear-btn').classList.toggle('visible',filters.acts.length||filters.themes.length||filters.techniques.length);let src=getSource();if(filters.acts.length)src=src.filter(c=>filters.acts.includes(c.act));if(filters.themes.length)src=src.filter(c=>c.themes.some(t=>filters.themes.includes(t)));if(filters.techniques.length)src=src.filter(c=>c.devices.some(d=>filters.techniques.includes(d)));cards.deck=[...src];cards.index=0;cards.isFlipped=false;buildFilterChips();render()}
function clearFilters(){filters.acts=[];filters.themes=[];filters.techniques=[];document.getElementById('search-input').value='';applyFilters()}
function setMode(m){cards.mode=m;['btn-all','btn-best','btn-due','btn-weak','btn-fav','btn-cloze'].forEach(id=>document.getElementById(id).classList.remove('active'));document.getElementById('btn-'+m).classList.add('active');clearFilters()}

// ══════ QUIZ ══════
function setQuizMode(m){quiz.mode=m;['quiz-mode-normal','quiz-mode-adaptive','quiz-mode-theme'].forEach(id=>document.getElementById(id).classList.remove('active'));document.getElementById('quiz-mode-'+m).classList.add('active');document.getElementById('quiz-theme-picker').style.display=m==='theme'?'block':'none';if(m==='theme'){const p=document.getElementById('quiz-theme-picker');p.innerHTML='';[...new Set(app.allQuotes.flatMap(c=>c.themes))].sort().forEach(t=>{const b=document.createElement('button');b.className='fchip';b.textContent=t.replace(/_/g,' ');b.onclick=()=>{quiz.theme=t;startTest()};p.appendChild(b)})}else{quiz.theme=null;startTest()}}
function startTest(){quiz.results=[];let pool=[...app.allQuotes];if(quiz.mode==='adaptive'){const weak=pool.filter(c=>{const sr=getSR(c);return sr.lastRating===0||sr.reviews===0||sr.ef<2.0});const rest=pool.filter(c=>!weak.includes(c));pool=[...weak.sort(()=>Math.random()-.5),...rest.sort(()=>Math.random()-.5)]}else if(quiz.mode==='theme'&&quiz.theme){pool=pool.filter(c=>c.themes.includes(quiz.theme))}quiz.deck=pool.sort(()=>Math.random()-.5);quiz.index=0;quiz.correct=0;quiz.total=0;quiz.answered=false;document.getElementById('test-breakdown').style.display='none';renderTestQ()}
function renderTestQ(){if(quiz.index>=quiz.deck.length){const pct=quiz.total?Math.round(quiz.correct/quiz.total*100):0;document.getElementById('test-prompt').textContent='Test complete!';document.getElementById('test-score').textContent=`${quiz.correct}/${quiz.total} correct (${pct}%)`;document.getElementById('test-hint').textContent=pct>=90?'Outstanding! 🎉':pct>=80?'Excellent work! 🔥':pct>=60?'Good — keep practising':'Focus on the quotes you got wrong';document.getElementById('test-options').innerHTML='<button class="btn" onclick="startTest()" style="margin-top:8px">🔄 RESTART</button>';document.getElementById('test-reveal').style.display='none';document.getElementById('test-next').style.display='none';if(pct>=80)launchConfetti();renderQuizBreakdown();return}quiz.answered=false;const c=quiz.deck[quiz.index];document.getElementById('test-score').textContent=quiz.total?`Score: ${quiz.correct}/${quiz.total}`:'';const types=['speaker','act','theme'];const type=types[Math.floor(Math.random()*types.length)];let prompt='',options=[],ci=0;if(type==='speaker'){prompt=`Who says: \u201C${c.quote}\u201D?`;const sp=[...new Set(app.allQuotes.map(x=>x.speaker))];const wrong=sp.filter(s=>s!==c.speaker).sort(()=>Math.random()-.5).slice(0,3);options=[c.speaker,...wrong].sort(()=>Math.random()-.5);ci=options.indexOf(c.speaker)}else if(type==='act'){prompt=`Which ${app.currentText.unitLabel.toLowerCase()}: \u201C${c.quote}\u201D?`;options=app.currentText.units.map(u=>app.currentText.unitLabel+' '+u);ci=app.currentText.units.indexOf(c.act)}else{prompt=`Which theme fits: \u201C${c.quote}\u201D?`;const at=[...new Set(app.allQuotes.flatMap(x=>x.themes))];const ct=c.themes[Math.floor(Math.random()*c.themes.length)];const wrong=at.filter(t=>!c.themes.includes(t)).sort(()=>Math.random()-.5).slice(0,3);options=[ct,...wrong].sort(()=>Math.random()-.5).map(t=>t.replace(/_/g,' '));ci=options.indexOf(ct.replace(/_/g,' '))}document.getElementById('test-hint').textContent=`Question ${quiz.index+1} of ${quiz.deck.length}`;document.getElementById('test-prompt').innerHTML=`<span style="font-family:'Crimson Pro',serif;font-style:italic;font-size:16px">${prompt}</span>`;const od=document.getElementById('test-options');od.innerHTML='';options.forEach((o,i)=>{const b=document.createElement('button');b.className='test-opt';b.textContent=o;b.onclick=()=>answerTest(i,ci,c);od.appendChild(b)});document.getElementById('test-reveal').style.display='none';document.getElementById('test-next').style.display='none'}
function answerTest(picked,correct,card){if(quiz.answered)return;quiz.answered=true;quiz.total++;const ok=picked===correct;if(ok)quiz.correct++;quiz.results.push({card,correct:ok,themes:card.themes});const opts=document.querySelectorAll('#tab-test .test-opt');opts.forEach((o,i)=>{o.classList.add('disabled');if(i===correct)o.classList.add('correct');if(i===picked&&!ok)o.classList.add('wrong')});document.getElementById('test-score').textContent=`Score: ${quiz.correct}/${quiz.total}`;const rev=document.getElementById('test-reveal');rev.style.display='block';rev.innerHTML=`<p style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">${card.speaker} — ${app.currentText.unitLabel} ${card.act}</p><p class="quote-text" style="font-size:14px">\u201C${card.quote}\u201D</p><div style="margin-top:4px">${pills(card.themes,app.currentText.themes)} ${pills(card.devices,DC)}</div>`;document.getElementById('test-next').style.display='inline-block';recordStudyDay()}
function nextTestQ(){quiz.index++;renderTestQ()}
function renderQuizBreakdown(){if(!quiz.results.length)return;const bd=document.getElementById('test-breakdown');bd.style.display='block';const ts={};quiz.results.forEach(r=>{r.themes.forEach(t=>{if(!ts[t])ts[t]={correct:0,total:0};ts[t].total++;if(r.correct)ts[t].correct++})});let h='<h4>Breakdown by Theme</h4>';Object.entries(ts).sort((a,b)=>(a[1].correct/a[1].total)-(b[1].correct/b[1].total)).forEach(([t,s])=>{const p=Math.round(s.correct/s.total*100);const c=p>=80?'var(--green)':p>=50?'var(--yellow)':'var(--red)';h+=`<div class="breakdown-row"><span style="width:90px;font-weight:600;text-transform:capitalize;color:var(--text2)">${t.replace(/_/g,' ')}</span><div class="breakdown-bar"><div class="breakdown-fill" style="width:${p}%;background:${c}"></div></div><span style="width:50px;text-align:right;font-weight:700;color:${c}">${p}%</span></div>`});const missed=quiz.results.filter(r=>!r.correct);if(missed.length){h+=`<h4 style="margin-top:14px">Quotes to Review (${missed.length})</h4>`;missed.forEach(r=>{h+=`<div style="padding:6px 10px;border-radius:8px;background:var(--red-bg);margin-bottom:4px;font-size:12px;color:var(--red)"><em>\u201C${r.card.quote}\u201D</em> — ${r.card.speaker}</div>`})}bd.innerHTML=h}

// ══════ DASHBOARD ══════
function renderDashboard(){const d=document.getElementById('dash-content');const memCount=app.allQuotes.filter((_,i)=>app.memorised[i]).length;const due=getDueCards().length;const weak=getWeakCards().length;const reviewed=app.allQuotes.filter(c=>getSR(c).reviews>0).length;const ts={};[...new Set(app.allQuotes.flatMap(c=>c.themes))].forEach(t=>{const cards=app.allQuotes.filter(c=>c.themes.includes(t));const m=cards.filter(c=>{const sr=getSR(c);return sr.lastRating>=1&&sr.ef>=2.0});ts[t]={total:cards.length,mastered:m.length,pct:Math.round(m.length/cards.length*100)}});let h=`<div class="dash-grid"><div class="dash-card"><div class="dash-val">${reviewed}</div><div class="dash-label">Cards Reviewed</div></div><div class="dash-card"><div class="dash-val">${due}</div><div class="dash-label">Due Today</div></div><div class="dash-card"><div class="dash-val">${memCount}</div><div class="dash-label">Memorised</div></div><div class="dash-card"><div class="dash-val">${weak}</div><div class="dash-label">Weak Cards</div></div></div>`;const op=app.allQuotes.length?Math.round(reviewed/app.allQuotes.length*100):0;h+=`<div style="margin-bottom:16px"><div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Overall Progress</div><div class="tracker-bar" style="height:10px"><div class="tracker-fill" style="width:${op}%"></div></div><div style="font-size:11px;color:var(--text3);margin-top:4px;text-align:center">${op}% reviewed</div></div>`;h+=`<div style="margin-bottom:16px"><div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Theme Mastery</div>`;Object.entries(ts).sort((a,b)=>a[1].pct-b[1].pct).forEach(([t,s])=>{const c=s.pct>=80?'var(--green)':s.pct>=50?'var(--yellow)':'var(--red)';h+=`<div class="mastery-row"><span class="mastery-label">${t.replace(/_/g,' ')}</span><div class="mastery-bar"><div class="mastery-fill" style="width:${s.pct}%;background:${c}"></div></div><span class="mastery-pct" style="color:${c}">${s.pct}%</span></div>`});h+=`</div>`;d.innerHTML=h}

// ══════ ESSAY BUILDER ══════
function buildEssayThemes(){const g=document.getElementById('essay-theme-grid');g.innerHTML='';[...new Set(app.allQuotes.flatMap(c=>c.themes))].sort().forEach(t=>{const col=app.currentText.themes[t]||{bg:'#F3F4F6',c:'#4B5563'};const b=document.createElement('button');b.className='essay-theme-btn';b.textContent=t.replace(/_/g,' ');b.style.cssText=`border-color:${col.c};color:${col.c}`;b.onclick=()=>{document.querySelectorAll('.essay-theme-btn').forEach(x=>{x.classList.remove('active');x.style.background=''});b.classList.add('active');b.style.background=col.bg;buildEssayPlan(t)};g.appendChild(b)})}
function buildEssayPlan(theme){const quotes=app.allQuotes.filter(c=>c.themes.includes(theme)).sort((a,b)=>a.act-b.act);const out=document.getElementById('essay-output');if(!quotes.length){out.innerHTML='<p style="text-align:center;color:var(--text3)">No quotes.</p>';return}const picked=[];app.currentText.units.forEach(a=>{const f=quotes.filter(q=>q.act===a);if(f.length)picked.push(f[0])});const final=picked.slice(0,4);if(final.length<3&&quotes.length>=3){const extra=quotes.filter(q=>!final.includes(q));while(final.length<3&&extra.length)final.push(extra.shift())}const labels=['Opening paragraph \u2014 introduce the theme','Development \u2014 show how the theme evolves','Turning point \u2014 key shift','Conclusion \u2014 writer\u2019s message'];let h=`<div class="essay-plan"><h3>Essay Plan: ${theme.replace(/_/g,' ').replace(/\b\w/g,l=>l.toUpperCase())}</h3>`;final.forEach((q,i)=>{h+=`<div class="essay-para"><div class="essay-para-label">${labels[i]||'Supporting'}</div><div class="essay-para-quote">\u201C${q.quote}\u201D <span style="font-style:normal;font-size:11px;color:var(--text3)">\u2014 ${q.speaker}, ${app.currentText.unitLabel} ${q.act}</span></div><div class="essay-para-point"><strong>Analyse:</strong> ${q.analysis.split('.').slice(0,2).join('.')}.</div><div style="margin-top:4px">${pills(q.devices,DC)}</div></div>`});h+=`<div style="padding:10px 16px;border-radius:10px;background:var(--bg2);margin-top:8px;font-size:12px;color:var(--text2);line-height:1.5"><strong style="color:var(--accent)">Tip:</strong> ${app.currentText.essayTip}</div></div>`;out.innerHTML=h}

// ══════ ESSAY CHECKER (/30 marks) ══════
function checkEssay(){const text=document.getElementById('checker-input').value;if(!text.trim()){document.getElementById('checker-results').innerHTML='<p style="text-align:center;color:var(--text3);margin-top:12px">Write something first!</p>';return}const a=analyseEssay(text);const s=scoreEssay(a);const fb=generateFeedback(a,s);renderCheckerResults(a,s,fb);recordStudyDay()}
function analyseEssay(text){const words=text.split(/\s+/).filter(w=>w.length>0);const qm=text.match(/[\u201C\u201D"]/g)||[];const quotes=Math.floor(qm.length/2);const allTN=Object.values(techNames);const techniques=allTN.filter(t=>new RegExp(t,'gi').test(text)).length;const contextHits=app.currentText.contextWords.filter(w=>new RegExp(w,'gi').test(text)).length;const analysisVerbs=(text.match(/\b(suggest|impl(?:y|ies)|convey|highlight|emphasise|present|demonstrate|reveal|illustrate|portray|symbolise|reflect|expose|reinforce|foreshadow|mirror|represent|indicate|connot(?:e|es|ation))\b/gi)||[]).length;const writerRef=(text.match(/\b(shakespeare|priestley|dickens)\b/gi)||[]).length;const altInterp=/\b(alternatively|however|on the other hand|conversely|another reading|could also|some may argue|equally|contrastingly|yet|in contrast)\b/i.test(text);const paragraphs=text.split(/\n\s*\n/).filter(p=>p.trim().length>20).length||1;const embeddedQuotes=(text.match(/[\u201C"][^"\u201D\u201C]{1,40}[\u201D"]/g)||[]).length;return{wordCount:words.length,quotes,embeddedQuotes,techniques,contextHits,analysisVerbs,writerRef,altInterp,paragraphs}}
function scoreEssay(a){
  // AO1: /12 — knowledge, references, argument structure
  let AO1=0;
  if(a.quotes>=4)AO1+=5;else if(a.quotes>=2)AO1+=3;else if(a.quotes>=1)AO1+=2;
  if(a.embeddedQuotes>=3)AO1+=3;else if(a.embeddedQuotes>=1)AO1+=2;
  if(a.paragraphs>=3)AO1+=2;else if(a.paragraphs>=2)AO1+=1;
  if(a.wordCount>=300)AO1+=2;else if(a.wordCount>=200)AO1+=1;
  AO1=Math.min(12,AO1);
  // AO2: /12 — analysis of language, form, structure
  let AO2=0;
  if(a.techniques>=4)AO2+=5;else if(a.techniques>=2)AO2+=3;else if(a.techniques>=1)AO2+=1;
  if(a.analysisVerbs>=5)AO2+=3;else if(a.analysisVerbs>=3)AO2+=2;else if(a.analysisVerbs>=1)AO2+=1;
  if(a.altInterp)AO2+=2;
  if(a.writerRef>=2)AO2+=2;else if(a.writerRef>=1)AO2+=1;
  AO2=Math.min(12,AO2);
  // AO3: /6 — context
  let AO3=0;
  if(a.contextHits>=4)AO3+=5;else if(a.contextHits>=2)AO3+=3;else if(a.contextHits>=1)AO3+=2;
  if(a.writerRef>=1)AO3+=1;
  AO3=Math.min(6,AO3);
  const total=AO1+AO2+AO3;const pct=Math.round(total/30*100);
  let grade;if(pct>=85)grade=9;else if(pct>=75)grade=8;else if(pct>=65)grade=7;else if(pct>=55)grade=6;else if(pct>=45)grade=5;else if(pct>=35)grade=4;else grade=3;
  return{AO1,AO2,AO3,total,maxTotal:30,pct,grade}}
function generateFeedback(a,s){const fb=[];if(a.quotes>=3)fb.push({type:'strength',text:'Good use of embedded quotations.'});if(a.techniques>=3)fb.push({type:'strength',text:'Strong identification of language techniques.'});if(a.contextHits>=2)fb.push({type:'strength',text:'Context is integrated effectively.'});if(a.altInterp)fb.push({type:'strength',text:'Alternative interpretation included — high-level skill.'});if(a.analysisVerbs>=3)fb.push({type:'strength',text:'Good use of analytical verbs.'});if(a.writerRef>=2)fb.push({type:'strength',text:'Writer referenced by name — shows authorial intent awareness.'});if(a.quotes<2)fb.push({type:'target',text:'Use more short, embedded quotes to support your points.'});if(a.techniques<2)fb.push({type:'target',text:'Name specific techniques (metaphor, alliteration, dramatic irony, etc.).'});if(a.contextHits===0)fb.push({type:'target',text:`Add relevant context (${app.currentText.contextLabel}).`});if(!a.altInterp)fb.push({type:'target',text:'Add an alternative interpretation (e.g. "Alternatively…").'});if(a.analysisVerbs<3)fb.push({type:'target',text:'Use more analytical verbs: suggests, implies, conveys, highlights.'});if(a.writerRef===0)fb.push({type:'target',text:`Reference the writer by name: "${app.currentText.authorVerb}…"`});if(a.wordCount<150)fb.push({type:'target',text:'Aim for at least 250-300 words.'});if(a.paragraphs<2)fb.push({type:'target',text:'Use PEEL paragraphs: Point, Evidence, Explain, Link.'});return fb}
function renderCheckerResults(a,s,fb){const d=document.getElementById('checker-results');const gc=s.grade>=7?'var(--green)':s.grade>=5?'var(--yellow)':'var(--red)';d.innerHTML=`<div class="checker-results"><div class="grade-display"><div class="grade-num" style="color:${gc}">Grade ${s.grade}</div><div class="grade-label">Estimated · ${s.total}/30 marks (${s.pct}%)</div></div><div class="ao-grid"><div class="ao-card" style="border-color:var(--blue)"><h4 style="color:var(--blue)">AO1</h4><div class="ao-score" style="color:var(--blue)">${s.AO1}</div><div class="ao-max">/ 12</div><div style="font-size:10px;color:var(--text3);margin-top:2px">Knowledge</div></div><div class="ao-card" style="border-color:var(--accent)"><h4 style="color:var(--accent)">AO2</h4><div class="ao-score" style="color:var(--accent)">${s.AO2}</div><div class="ao-max">/ 12</div><div style="font-size:10px;color:var(--text3);margin-top:2px">Analysis</div></div><div class="ao-card" style="border-color:var(--green)"><h4 style="color:var(--green)">AO3</h4><div class="ao-score" style="color:var(--green)">${s.AO3}</div><div class="ao-max">/ 6</div><div style="font-size:10px;color:var(--text3);margin-top:2px">Context</div></div></div><div style="font-size:11px;color:var(--text3);margin-bottom:8px;display:flex;flex-wrap:wrap;gap:8px"><span>📝 ${a.wordCount} words</span><span>💬 ${a.quotes} quotes</span><span>🔬 ${a.techniques} techniques</span><span>📚 ${a.contextHits} context refs</span></div><ul class="feedback-list">${fb.map(f=>`<li class="feedback-item ${f.type}"><span class="feedback-icon">${f.type==='strength'?'✅':'🎯'}</span>${f.text}</li>`).join('')}</ul></div>`}

// ══════ EXAM MODE ══════
function startExam(){const qc=document.getElementById('exam-q-count').value;const tl=parseInt(document.getElementById('exam-time').value);exam.deck=[...app.allQuotes].sort(()=>Math.random()-.5);if(qc!=='all')exam.deck=exam.deck.slice(0,parseInt(qc));exam.index=0;exam.correct=0;exam.total=0;exam.answered=false;document.getElementById('exam-setup').style.display='none';document.getElementById('exam-active').style.display='block';document.getElementById('exam-results').style.display='none';if(exam.timer)clearInterval(exam.timer);if(tl>0){exam.timeLeft=tl*60;updateExamTimer();exam.timer=setInterval(()=>{exam.timeLeft--;updateExamTimer();if(exam.timeLeft<=0){clearInterval(exam.timer);finishExam()}},1000)}else{document.getElementById('exam-timer').textContent='No limit'}renderExamQ()}
function updateExamTimer(){const m=Math.floor(exam.timeLeft/60),s=exam.timeLeft%60;document.getElementById('exam-timer').textContent=`${m}:${s.toString().padStart(2,'0')}`;document.getElementById('exam-timer').style.color=exam.timeLeft<=60?'var(--red)':'var(--accent)'}
function renderExamQ(){if(exam.index>=exam.deck.length){finishExam();return}exam.answered=false;const c=exam.deck[exam.index];document.getElementById('exam-score').textContent=exam.total?`${exam.correct}/${exam.total}`:'';document.getElementById('exam-hint').textContent=`${exam.index+1} / ${exam.deck.length}`;const types=['speaker','act','theme'];const type=types[Math.floor(Math.random()*types.length)];let prompt=`\u201C${c.quote}\u201D`,options=[],ci=0;if(type==='speaker'){const sp=[...new Set(app.allQuotes.map(x=>x.speaker))];const wrong=sp.filter(s=>s!==c.speaker).sort(()=>Math.random()-.5).slice(0,3);options=[c.speaker,...wrong].sort(()=>Math.random()-.5);ci=options.indexOf(c.speaker)}else if(type==='act'){options=app.currentText.units.map(u=>app.currentText.unitLabel+' '+u);ci=app.currentText.units.indexOf(c.act)}else{const at=[...new Set(app.allQuotes.flatMap(x=>x.themes))];const ct=c.themes[Math.floor(Math.random()*c.themes.length)];const wrong=at.filter(t=>!c.themes.includes(t)).sort(()=>Math.random()-.5).slice(0,3);options=[ct,...wrong].sort(()=>Math.random()-.5).map(t=>t.replace(/_/g,' '));ci=options.indexOf(ct.replace(/_/g,' '))}document.getElementById('exam-prompt').innerHTML=`<span style="font-family:'Crimson Pro',serif;font-style:italic;font-size:15px">${prompt}</span>`;const od=document.getElementById('exam-options');od.innerHTML='';options.forEach((o,i)=>{const b=document.createElement('button');b.className='test-opt';b.textContent=o;b.onclick=()=>answerExam(i,ci);od.appendChild(b)});document.getElementById('exam-next').style.display='none'}
function answerExam(p,c){if(exam.answered)return;exam.answered=true;exam.total++;if(p===c)exam.correct++;const opts=document.querySelectorAll('#exam-options .test-opt');opts.forEach((o,i)=>{o.classList.add('disabled');if(i===c)o.classList.add('correct');if(i===p&&i!==c)o.classList.add('wrong')});document.getElementById('exam-score').textContent=`${exam.correct}/${exam.total}`;document.getElementById('exam-next').style.display='inline-block'}
function nextExamQ(){exam.index++;renderExamQ()}
function finishExam(){if(exam.timer){clearInterval(exam.timer);exam.timer=null}document.getElementById('exam-active').style.display='none';const pct=exam.total?Math.round(exam.correct/exam.total*100):0;let grade;if(pct>=90)grade=9;else if(pct>=80)grade=8;else if(pct>=70)grade=7;else if(pct>=60)grade=6;else if(pct>=50)grade=5;else if(pct>=40)grade=4;else grade=3;if(pct>=80)launchConfetti();document.getElementById('exam-results').style.display='block';document.getElementById('exam-results').innerHTML=`<div class="exam-setup"><h3>Exam Complete</h3><div class="grade-display"><div class="grade-num" style="color:${pct>=70?'var(--green)':pct>=50?'var(--yellow)':'var(--red)'}">${pct}%</div><div class="grade-label">Estimated Grade ${grade} · ${exam.correct}/${exam.total}</div></div><button class="btn" onclick="document.getElementById('exam-results').style.display='none';document.getElementById('exam-setup').style.display=''" style="width:100%;margin-top:12px">TRY AGAIN</button></div>`;recordStudyDay()}

// ══════ TRACKER ══════
function renderTracker(){const g=document.getElementById('tracker-grid');g.innerHTML='';const mc=app.allQuotes.filter((_,i)=>app.memorised[i]).length;document.getElementById('tracker-stats').innerHTML=`<strong>${mc}</strong> / ${app.allQuotes.length} app.memorised<div class="tracker-bar"><div class="tracker-fill" style="width:${Math.round(mc/app.allQuotes.length*100)}%"></div></div>`;app.allQuotes.forEach((c,i)=>{const sr=getSR(c);const isDue=sr.nextReview<=getToday();const dl=sr.lastRating===0?'😰':sr.lastRating===1?'🤔':sr.lastRating===2?'😎':'';const d=document.createElement('div');d.className='tracker-card'+(app.memorised[i]?' app.memorised':'');d.innerHTML=`<div class="tracker-check">${app.memorised[i]?'✓':''}</div><div class="tracker-info"><div class="tracker-quote">\u201C${c.quote}\u201D</div><div class="tracker-meta">${c.speaker} · ${app.currentText.unitLabel} ${c.act}${dl?' · '+dl:''}${isDue?' · <span style="color:var(--yellow);font-weight:700">DUE</span>':''}</div></div>`;d.onclick=()=>{app.memorised[i]=!app.memorised[i];saveMem();renderTracker()};g.appendChild(d)})}

// ══════ EDITOR ══════
function buildChips(){const tD=document.getElementById('ef-themes');tD.innerHTML='';Object.keys(app.currentText.themes).forEach(t=>{const b=document.createElement('button');b.className='ef-chip'+(editor.selectedThemes.includes(t)?' selected':'');b.textContent=t.replace(/_/g,' ');b.onclick=e=>{e.preventDefault();if(editor.selectedThemes.includes(t))editor.selectedThemes=editor.selectedThemes.filter(x=>x!==t);else editor.selectedThemes.push(t);buildChips()};tD.appendChild(b)});const dD=document.getElementById('ef-techniques');dD.innerHTML='';[...new Set(app.allQuotes.flatMap(c=>c.devices))].sort().forEach(d=>{const b=document.createElement('button');b.className='ef-chip'+(editor.selectedTechniques.includes(d)?' selected':'');b.textContent=techNames[d]||d;b.onclick=e=>{e.preventDefault();if(editor.selectedTechniques.includes(d))editor.selectedTechniques=editor.selectedTechniques.filter(x=>x!==d);else editor.selectedTechniques.push(d);buildChips()};dD.appendChild(b)})}
function showAddForm(){editor.editingIndex=-1;document.getElementById('ef-title').textContent='Add New Quote';document.getElementById('ef-submit').textContent='ADD QUOTE';document.getElementById('ef-quote').value='';document.getElementById('ef-speaker').value='';document.getElementById('ef-act').value=app.currentText.units[0];document.getElementById('ef-word').value='';document.getElementById('ef-context').value='';editor.selectedThemes=[];editor.selectedTechniques=[];buildChips();document.getElementById('editor-form-wrap').style.display='block';document.getElementById('add-new-btn').style.display='none';document.getElementById('ef-quote').focus()}
function showEditForm(i){editor.editingIndex=i;const c=app.customQuotes[i];document.getElementById('ef-title').textContent='Edit Quote';document.getElementById('ef-submit').textContent='SAVE CHANGES';document.getElementById('ef-quote').value=c.quote;document.getElementById('ef-speaker').value=c.speaker;document.getElementById('ef-act').value=c.act;document.getElementById('ef-word').value=c.analysis;document.getElementById('ef-context').value=c.context;editor.selectedThemes=[...c.themes];editor.selectedTechniques=[...c.devices];buildChips();document.getElementById('editor-form-wrap').style.display='block';document.getElementById('add-new-btn').style.display='none';document.getElementById('ef-quote').focus()}
function cancelEdit(){document.getElementById('editor-form-wrap').style.display='none';document.getElementById('add-new-btn').style.display='';editor.editingIndex=-1}
function saveQuote(){const q=document.getElementById('ef-quote').value.trim(),sp=document.getElementById('ef-speaker').value.trim(),act=parseInt(document.getElementById('ef-act').value),w=document.getElementById('ef-word').value.trim(),ctx=document.getElementById('ef-context').value.trim();if(!q){document.getElementById('ef-quote').style.borderColor='var(--red)';return}if(!sp){document.getElementById('ef-speaker').style.borderColor='var(--red)';return}const card={quote:q,act,speaker:sp,themes:[...editor.selectedThemes],devices:[...editor.selectedTechniques],analysis:w||'No analysis added.',context:ctx||'No context added.',custom:true};if(editor.editingIndex>=0)app.customQuotes[editor.editingIndex]=card;else app.customQuotes.push(card);saveCustom();rebuildAll();cancelEdit();renderEditor()}
function deleteQuote(i){app.customQuotes.splice(i,1);saveCustom();rebuildAll();renderEditor()}
function rebuildAll(){while(app.allQuotes.length>app.builtInCount)app.allQuotes.pop();app.customQuotes.forEach(c=>app.allQuotes.push(c));app.bestQuotes=app.currentText.bestIdx.filter(i=>i<app.allQuotes.length).map(i=>app.allQuotes[i]);cards.deck=[...getSource()];cards.index=0;cards.isFlipped=false;buildFilterChips()}
function renderEditor(){const l=document.getElementById('editor-list');l.innerHTML='';document.getElementById('editor-count').textContent=app.customQuotes.length;if(!app.customQuotes.length){l.innerHTML='<div class="editor-empty">No custom quotes yet.</div>';return}app.customQuotes.forEach((c,i)=>{const d=document.createElement('div');d.className='editor-item';const bs=`background:${app.currentText.unitBg[c.act]||'#F3F4F6'};color:${app.currentText.unitText[c.act]||'#4B5563'};`;d.innerHTML=`<div class="editor-item-body"><div class="editor-item-quote">\u201C${c.quote}\u201D</div><div class="editor-item-meta">${c.speaker} · <span class="editor-badge" style="${bs}">${app.currentText.unitLabel} ${c.act}</span></div></div><div class="editor-item-actions"><button class="editor-icon-btn" onclick="showEditForm(${i})" title="Edit">✎</button><button class="editor-icon-btn del" onclick="if(confirm('Delete?'))deleteQuote(${i})" title="Delete">✕</button></div>`;l.appendChild(d)})}
function exportAll(){const data={text:app.currentTextId,customQuotes:app.customQuotes,memorised:app.memorised,srData:sr.data,exportDate:new Date().toISOString()};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=app.currentTextId+'_backup.json';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url)}
function importData(e){const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=function(ev){try{const parsed=JSON.parse(ev.target.result);if(parsed.customQuotes&&Array.isArray(parsed.customQuotes)){const ex=new Set(app.customQuotes.map(c=>c.quote));parsed.customQuotes.forEach(c=>{if(!ex.has(c.quote))app.customQuotes.push(c)});saveCustom()}if(parsed.memorised&&typeof parsed.memorised==='object'){Object.assign(app.memorised,parsed.memorised);saveMem()}if(parsed.srData&&typeof parsed.srData==='object'){Object.assign(sr.data,parsed.srData);saveSR()}rebuildAll();renderEditor();alert('Import complete!')}catch(err){alert('Error reading file.')}};reader.readAsText(file);e.target.value=''}

// ══════ TEXT-TO-SPEECH ══════
let ttsActive=false;
function speakQuote(){if(!cards.deck.length||!window.speechSynthesis)return;const btn=document.getElementById('tts-btn');if(ttsActive){try{window.speechSynthesis.cancel()}catch(e){}btn.classList.remove('speaking');ttsActive=false;return}const c=cards.deck[cards.index];const text=c.quote+'. Said by '+c.speaker;const u=new SpeechSynthesisUtterance(text);u.rate=0.85;u.pitch=1;u.lang='en-GB';u.onend=()=>{btn.classList.remove('speaking');ttsActive=false};u.onerror=()=>{btn.classList.remove('speaking');ttsActive=false};btn.classList.add('speaking');ttsActive=true;window.speechSynthesis.speak(u)}

// ══════ FOCUS MODE ══════
function toggleFocus(){
  app.focusMode=!app.focusMode;
  document.body.classList.toggle('focus-mode',app.focusMode);
  document.getElementById('focus-toggle').classList.toggle('active',app.focusMode);
  if(typeof showToast==='function')showToast(app.focusMode?'Focus mode on — distractions hidden':'Focus mode off','',2000);
}

// ══════ QUOTE OF THE DAY ══════
function renderQOTD(){const allQuotes=[];Object.values(TEXTS).forEach(t=>allQuotes.push(...t.quotes.map(q=>({...q,text:t.title,authorVerb:t.authorVerb}))));const dayNum=Math.floor(Date.now()/86400000);const qotd=allQuotes[dayNum%allQuotes.length];const d=document.getElementById('qotd');d.innerHTML=`<div class="qotd-label">✨ Quote of the Day</div><div class="qotd-text">\u201C${qotd.quote}\u201D</div><div class="qotd-meta">${qotd.speaker} — ${qotd.text}</div>`}

// ══════ MATHS REVISION DATA ══════

// ══════ NOTES RENDERING ══════
let currentNotesData=null;
function openNotesView(id,S){
  currentNotesData=S.data;
  document.getElementById('home-screen').style.display='none';
  document.getElementById('subject-view').classList.remove('active');
  document.getElementById('notes-view').classList.add('active');
  document.getElementById('notes-title').textContent=S.title;
  document.getElementById('notes-sub').textContent=S.sub;
  document.getElementById('notes-back-btn').textContent='\u2190 All Subjects';
  document.getElementById('notes-search').value='';
  renderAllNotes(currentNotesData);
  window.scrollTo(0,0);
}
function backToSubjectFromNotes(){
  document.getElementById('notes-view').classList.remove('active');
  document.getElementById('home-screen').style.display='';
  renderStreak();renderQOTD();
  window.scrollTo(0,0);
}
function highlightSearch(text,query){
  if(!query)return text;
  const escaped=query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return text.replace(new RegExp(`(${escaped})`,'gi'),'<mark class="search-hl">$1</mark>');
}
function renderAllNotes(data,filter=''){
  const container=document.getElementById('notes-container');container.innerHTML='';
  const q=filter.toLowerCase().trim();
  data.forEach(section=>{
    const filteredTopics=section.topics.filter(t=>{
      if(!q)return true;
      return t.title.toLowerCase().includes(q)||t.ref.toLowerCase().includes(q)||
        (t.formulas&&t.formulas.some(f=>f.toLowerCase().includes(q)))||
        (t.points&&t.points.some(p=>p.toLowerCase().includes(q)))||
        (t.tip&&t.tip.toLowerCase().includes(q));
    });
    if(!filteredTopics.length)return;
    const secDiv=document.createElement('div');secDiv.style.marginBottom='20px';
    secDiv.innerHTML=`<div class="subject-label" style="margin-bottom:12px"><span style="font-size:14px;margin-right:4px">${section.icon}</span> ${section.section}</div>`;
    filteredTopics.forEach(topic=>{
      const topicDiv=document.createElement('div');topicDiv.className='note-topic';
      // Auto-open matched topics when searching
      if(q)topicDiv.classList.add('open');
      let bodyHtml='<div class="note-card">';
      bodyHtml+=`<div class="note-card-title">${highlightSearch(topic.title,q)} <span class="spec-ref">${topic.ref}</span></div>`;
      // Formulas
      if(topic.formulas&&topic.formulas.length){
        bodyHtml+='<div class="note-content" style="margin-bottom:10px">';
        topic.formulas.forEach(f=>{bodyHtml+=`<span class="note-formula">${highlightSearch(f,q)}</span> `});
        bodyHtml+='</div>';
      }
      // Key points
      if(topic.points&&topic.points.length){
        bodyHtml+='<ul class="note-keypoints">';
        topic.points.forEach(p=>{
          const formatted=p.replace(/^([^:]+):(.+)$/,'<strong>$1:</strong>$2');
          bodyHtml+=`<li>${highlightSearch(formatted,q)}</li>`;
        });
        bodyHtml+='</ul>';
      }
      // Example
      if(topic.example){
        bodyHtml+=`<div class="note-example"><strong>Example</strong>${highlightSearch(topic.example.replace(/\n/g,'<br>'),q)}</div>`;
      }
      // Tip
      if(topic.tip){
        bodyHtml+=`<div class="note-tip">💡 ${highlightSearch(topic.tip,q)}</div>`;
      }
      // Image
      if(topic.image){
        bodyHtml+=`<div class="note-image" style="margin-top:12px;text-align:center"><img src="${topic.image}" alt="${topic.title}" style="max-width:100%;height:auto;border:1px solid #ddd;border-radius:4px;padding:8px;background:#f9f9f9"></div>`;
      }
      bodyHtml+='</div>';
      topicDiv.innerHTML=`<div class="note-topic-head" onclick="this.parentElement.classList.toggle('open')"><span class="note-topic-icon">▶</span><span class="note-topic-title">${highlightSearch(topic.title,q)}</span><span class="note-topic-count">${topic.ref}</span></div><div class="note-topic-body">${bodyHtml}</div>`;
      secDiv.appendChild(topicDiv);
    });
    container.appendChild(secDiv);
  });
  if(!container.children.length){container.innerHTML='<p style="text-align:center;color:var(--text3);padding:2rem">No topics match your search.</p>'}
}
function filterNotes(){renderAllNotes(currentNotesData,document.getElementById('notes-search').value)}

// ══════ KEYBOARD SHORTCUTS ══════
document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')return;if(!app.currentTextId)return;const tab=document.querySelector('#tab-flashcards.active');if(!tab)return;switch(e.key){case ' ':case'Enter':e.preventDefault();flip();break;case'ArrowRight':e.preventDefault();next();break;case'ArrowLeft':e.preventDefault();prev();break;case'1':e.preventDefault();rateDifficulty(0);break;case'2':e.preventDefault();rateDifficulty(1);break;case'3':e.preventDefault();rateDifficulty(2);break;case's':e.preventDefault();shuffle();break;case'r':e.preventDefault();if(typeof speakQuote==='function')speakQuote();break}});

// ══════ INIT ══════
renderStreak();renderQOTD();


