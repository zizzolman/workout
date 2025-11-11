// Data structure
const exerciseData = {
  petto: {
    icon: '💪',
    name: 'Petto',
    exercises: [
      { nome: 'Panca Piana con Manubri', attrezzatura: 'Manubri, Panca', serie_ripetizioni: '3x8-10', note: 'Scapole addotte, gomiti 45°, ROM completo' },
      { nome: 'Panca Inclinata 30° con Manubri', attrezzatura: 'Manubri, Panca', serie_ripetizioni: '3x8-10', note: 'Per petto alto, scapole basse, sedere vicino schienale' },
      { nome: 'Croci con Kettlebell su Panca', attrezzatura: 'Kettlebell, Panca', serie_ripetizioni: '3x10-12', note: 'Movimento controllato, focus su pettorali' },
      { nome: 'Push Up', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x12-15', note: 'Corpo in linea retta, core contratto' },
      { nome: 'Floor Press con Kettlebell', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x8-10', note: 'Da terra, con ponte per glutei' }
    ]
  },
  spalle: {
    icon: '🏋️',
    name: 'Spalle',
    exercises: [
      { nome: 'Shoulder Press con Manubri', attrezzatura: 'Manubri', serie_ripetizioni: '3x8-10', note: 'Core contratto, spalle basse' },
      { nome: 'Push Press', attrezzatura: 'Manubri/Kettlebell', serie_ripetizioni: '3x10-12', note: 'Slancio gambe + pressa sopra testa' },
      { nome: 'Overhead Press Seduto con Kettlebell', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x10', note: 'Da seduto, massimo controllo core' },
      { nome: 'Alzate Laterali con Manubri', attrezzatura: 'Manubri', serie_ripetizioni: '3x10-12', note: 'Gomiti leggermente piegati, braccio parallelo' },
      { nome: 'Thruster', attrezzatura: 'Manubri/Kettlebell', serie_ripetizioni: '3x12', note: 'Squat + pressa in un movimento' }
    ]
  },
  schiena: {
    icon: '🦾',
    name: 'Schiena',
    exercises: [
      { nome: 'Rematore con Manubrio', attrezzatura: 'Manubri', serie_ripetizioni: '3x10/lato', note: 'Schiena piatta, tirare gomito verso anca' },
      { nome: 'Rematore con Kettlebell (One Arm Row)', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x8-10/lato', note: 'In affondo, corpo parallelo al suolo' },
      { nome: 'Deadlift con Kettlebell', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x10', note: 'Schiena dritta, forza dalle cosce' },
      { nome: 'Renegade Row', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x10 alternate', note: 'Plank + rematore, anti-rotazione' },
      { nome: 'Pull-up', attrezzatura: 'Sbarra', serie_ripetizioni: '3x max', note: 'Scapole addotte, mento sopra sbarra' }
    ]
  },
  gambe: {
    icon: '🦵',
    name: 'Gambe',
    exercises: [
      { nome: 'Air Squat', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x15', note: 'Profondità completa, ginocchia in linea piedi' },
      { nome: 'Goblet Squat con Kettlebell', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x12-15', note: 'Kettlebell al petto, bilanciamento peso' },
      { nome: 'Front Squat', attrezzatura: 'Manubri/Kettlebell', serie_ripetizioni: '3x8-10', note: 'Carico frontale, core attivo' },
      { nome: 'Squat con Kettlebell sulle Spalle', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x10', note: 'Kettlebell in rack position' },
      { nome: 'Stacco Gambe Tese (Deadlift)', attrezzatura: 'Kettlebell/Manubri', serie_ripetizioni: '3x10', note: 'Glutei e femorali, schiena dritta' },
      { nome: 'Affondo Laterale con Kettlebell', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x10/lato', note: 'Piano frontale, stabilità core' },
      { nome: 'Box Jump', attrezzatura: 'Box/Plyo box', serie_ripetizioni: '3x10', note: 'Salto esplosivo, atterraggio controllato' }
    ]
  },
  core: {
    icon: '🎯',
    name: 'Core',
    exercises: [
      { nome: 'Plank', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x30-60sec', note: 'Corpo allineato, core contratto' },
      { nome: 'Russian Twist con Kettlebell', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x15/lato', note: 'Piedi sollevati, controllo rotazione' },
      { nome: 'Kettlebell Crunch', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x15', note: 'Kettlebell sopra petto, crunch controllato' },
      { nome: 'Windmill', attrezzatura: 'Kettlebell', serie_ripetizioni: '2x3/lato', note: 'Obliqui, controllo del tronco' },
      { nome: 'Turkish Get Up', attrezzatura: 'Kettlebell', serie_ripetizioni: '2x3/lato', note: 'Forza, mobilità, coordinazione' },
      { nome: 'Mountain Climbers', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x20', note: 'Velocità controllata, core stabile' },
      { nome: 'Sit-up', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x15-20', note: 'Mani dietro nuca, angolo 45°' }
    ]
  },
  bicipiti: {
    icon: '💪',
    name: 'Bicipiti',
    exercises: [
      { nome: 'Curl con Manubri', attrezzatura: 'Manubri', serie_ripetizioni: '3x12', note: 'Gomiti fissi, movimento controllato' },
      { nome: 'Hammer Curl', attrezzatura: 'Manubri', serie_ripetizioni: '3x12', note: 'Presa neutra, focus brachiale' },
      { nome: 'Bicep Curl con Kettlebell', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x10', note: 'Presa salda, controllo eccentrico' }
    ]
  },
  tricipiti: {
    icon: '💪',
    name: 'Tricipiti',
    exercises: [
      { nome: 'Dips dietro la Schiena', attrezzatura: 'Panca/Sedia', serie_ripetizioni: '3x12', note: 'Gomiti stretti, discesa controllata' },
      { nome: 'French Press con Manubrio', attrezzatura: 'Manubri', serie_ripetizioni: '3x12', note: 'Gomiti fermi, estensione completa' },
      { nome: 'Overhead Tricep Extension', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x10', note: 'Controllo nella fase eccentrica' }
    ]
  },
  metabolico: {
    icon: '🔥',
    name: 'Metabolico',
    exercises: [
      { nome: 'Burpees', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x10-15', note: 'Movimento esplosivo, respirazione controllata' },
      { nome: 'Kettlebell Swing', attrezzatura: 'Kettlebell', serie_ripetizioni: '3x15-20', note: 'Spinta dai fianchi, non dalle braccia' },
      { nome: 'Jumping Jacks', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x30', note: 'Riscaldamento, mobilità articolare' }
    ]
  },
  fullbody: {
    icon: '🏃',
    name: 'Full Body',
    exercises: [
      { nome: 'Thruster', attrezzatura: 'Manubri/Kettlebell', serie_ripetizioni: '3x12', note: 'Squat + pressa in un movimento' },
      { nome: 'Turkish Get Up', attrezzatura: 'Kettlebell', serie_ripetizioni: '2x3/lato', note: 'Forza, mobilità, coordinazione' },
      { nome: 'Burpees', attrezzatura: 'Corpo libero', serie_ripetizioni: '3x10-15', note: 'Movimento esplosivo completo' }
    ]
  }
};

const workoutSchede = [
  {
    nome: 'PUSH DAY',
    focus: 'Petto, Spalle, Tricipiti',
    numEsercizi: 7,
    riscaldamento: '10 min: mobilità spalle, rotazioni braccia, jumping jacks',
    esercizi: [
      '1. Panca Piana con Manubri - 4x8-10 (riposo 90sec)',
      '2. Push Press - 3x10 (riposo 60sec)',
      '3. Panca Inclinata 30° con Manubri - 3x10 (riposo 90sec)',
      '4. Shoulder Press con Manubri - 3x10 (riposo 60sec)',
      '5. Dips dietro la Schiena - 3x12 (riposo 45sec)',
      '6. French Press con Manubrio - 3x12 (riposo 45sec)',
      '7. Push Up - 3x max (riposo 30sec)'
    ],
    defaticamento: '5-8 min: stretching petto, spalle, tricipiti'
  },
  {
    nome: 'PULL DAY',
    focus: 'Schiena, Bicipiti',
    numEsercizi: 7,
    riscaldamento: '10 min: mobilità scapole, cat-cow, band pull apart',
    esercizi: [
      '1. Deadlift con Kettlebell - 4x10 (riposo 90sec)',
      '2. Pull-up (o assistiti) - 4x max (riposo 90sec)',
      '3. Rematore con Manubrio - 3x10/lato (riposo 60sec)',
      '4. Renegade Row - 3x10 alternate (riposo 60sec)',
      '5. Curl con Manubri - 3x12 (riposo 45sec)',
      '6. Hammer Curl - 3x12 (riposo 45sec)',
      '7. Bicep Curl con Kettlebell - 3x10 (riposo 30sec)'
    ],
    defaticamento: '5-8 min: stretching dorsali, bicipiti, avambracci'
  },
  {
    nome: 'LEG DAY',
    focus: 'Gambe, Glutei, Core',
    numEsercizi: 7,
    riscaldamento: '10 min: mobilità anche, squat a corpo libero, affondi dinamici',
    esercizi: [
      '1. Goblet Squat con Kettlebell - 4x12 (riposo 90sec)',
      '2. Stacco Gambe Tese - 4x10 (riposo 90sec)',
      '3. Front Squat - 3x10 (riposo 60sec)',
      '4. Affondo Laterale con Kettlebell - 3x10/lato (riposo 60sec)',
      '5. Box Jump - 3x8 (riposo 60sec)',
      '6. Plank - 3x45-60sec (riposo 30sec)',
      '7. Russian Twist con Kettlebell - 3x20 totali (riposo 30sec)'
    ],
    defaticamento: '5-8 min: stretching gambe, glutei, flessori anca'
  },
  {
    nome: 'FULL BODY',
    focus: 'Tutto il Corpo',
    numEsercizi: 6,
    riscaldamento: '10 min: mobilità generale, jumping jacks, inchworms',
    esercizi: [
      '1. Thruster - 4x10 (riposo 90sec)',
      '2. Deadlift con Kettlebell - 3x10 (riposo 60sec)',
      '3. Push Press - 3x10 (riposo 60sec)',
      '4. Renegade Row - 3x10 alternate (riposo 60sec)',
      '5. Goblet Squat - 3x12 (riposo 45sec)',
      '6. Turkish Get Up - 2x3/lato (riposo 90sec)'
    ],
    defaticamento: '8 min: stretching completo corpo'
  },
  {
    nome: 'UPPER BODY',
    focus: 'Parte Superiore',
    numEsercizi: 6,
    riscaldamento: '10 min: mobilità spalle e scapole, rotazioni',
    esercizi: [
      '1. Panca Piana con Manubri - 4x8 (riposo 90sec)',
      '2. Rematore con Manubrio - 4x10/lato (riposo 60sec)',
      '3. Shoulder Press - 3x10 (riposo 60sec)',
      '4. Pull-up - 3x max (riposo 90sec)',
      '5. Curl con Manubri - 3x12 (riposo 45sec)',
      '6. Dips - 3x12 (riposo 45sec)'
    ],
    defaticamento: '5-8 min: stretching upper body'
  },
  {
    nome: 'METCON',
    focus: 'Metabolico/Conditioning',
    numEsercizi: 5,
    riscaldamento: '10 min: cardio leggero, mobilità dinamica',
    esercizi: [
      '1. Burpees - 5 rounds x 10 (riposo 30sec)',
      '2. Kettlebell Swing - 5 rounds x 20 (riposo 30sec)',
      '3. Box Jump - 5 rounds x 10 (riposo 30sec)',
      '4. Mountain Climbers - 5 rounds x 20 (riposo 30sec)',
      '5. Air Squat - 5 rounds x 15 (riposo 30sec)'
    ],
    defaticamento: '10 min: cool down, stretching, respirazione'
  },
  {
    nome: 'CORE BLAST',
    focus: 'Core &amp; Addominali',
    numEsercizi: 6,
    riscaldamento: '5 min: cat-cow, bird dog, dead bug',
    esercizi: [
      '1. Plank - 4x60sec (riposo 30sec)',
      '2. Russian Twist - 4x20 totali (riposo 30sec)',
      '3. Sit-up - 4x15 (riposo 30sec)',
      '4. Mountain Climbers - 4x20 (riposo 30sec)',
      '5. Windmill - 3x5/lato (riposo 45sec)',
      '6. Turkish Get Up - 3x3/lato (riposo 60sec)'
    ],
    defaticamento: '5 min: stretching core e schiena'
  },
  {
    nome: 'PRINCIPIANTI',
    focus: 'Base per Iniziare',
    numEsercizi: 5,
    riscaldamento: '10 min: camminata, mobilità articolare completa',
    esercizi: [
      '1. Air Squat - 3x10 (riposo 60sec)',
      '2. Push Up (anche su ginocchia) - 3x8 (riposo 60sec)',
      '3. Rematore con Manubrio leggero - 3x10/lato (riposo 45sec)',
      '4. Plank - 3x20-30sec (riposo 45sec)',
      '5. Goblet Squat leggero - 3x10 (riposo 60sec)'
    ],
    defaticamento: '10 min: stretching completo e rilassamento'
  }
];

const programData = {
  fase1: {
    nome: 'ADATTAMENTO',
    settimane: '1-4',
    descrizione: 'Tecnica base, carichi leggeri 5-10kg',
    color: '#1FB8CD',
    weeks: [
      { num: 1, focus: 'Apprendimento movimenti base', lunedi: 'Full Body - Focus tecnica', mercoledi: 'Upper Body leggero', venerdi: 'Leg Day base', note: 'Carichi 5-8kg' },
      { num: 2, focus: 'Consolidamento tecnica', lunedi: 'Push Day leggero', mercoledi: 'Pull Day base', venerdi: 'Full Body', note: 'Aumentare ripetizioni' },
      { num: 3, focus: 'Incremento volume', lunedi: 'Leg Day', mercoledi: 'Upper Body', venerdi: 'METCON leggero', note: 'Carichi 8-10kg' },
      { num: 4, focus: 'Test adattamento', lunedi: 'Full Body completo', mercoledi: 'Core Blast', venerdi: 'Push/Pull combo', note: 'Valutazione progressi' }
    ]
  },
  fase2: {
    nome: 'SVILUPPO',
    settimane: '5-8',
    descrizione: 'Aumento volume e intensità, 12-16kg',
    color: '#FFC185',
    weeks: [
      { num: 5, focus: 'Aumento intensità', lunedi: 'Push Day intenso', mercoledi: 'Leg Day pesante', venerdi: 'Pull Day', note: 'Carichi 12-14kg' },
      { num: 6, focus: 'Volume training', lunedi: 'Full Body + METCON', mercoledi: 'Upper Body intenso', venerdi: 'Leg Day + Core', note: 'Più serie' },
      { num: 7, focus: 'Potenza', lunedi: 'METCON pesante', mercoledi: 'Push/Pull superset', venerdi: 'Full Body power', note: 'Carichi 14-16kg' },
      { num: 8, focus: 'Deload settimana', lunedi: 'Tecnica leggera', mercoledi: 'Mobilità + Core', venerdi: 'Full Body recovery', note: 'Ridurre carico 30%' }
    ]
  },
  fase3: {
    nome: 'INTENSIFICAZIONE',
    settimane: '9-12',
    descrizione: 'Peak performance, 16-24kg',
    color: '#B4413C',
    weeks: [
      { num: 9, focus: 'Peak strength', lunedi: 'Heavy Push Day', mercoledi: 'Heavy Pull Day', venerdi: 'Heavy Leg Day', note: 'Carichi 16-20kg' },
      { num: 10, focus: 'Max performance', lunedi: 'Full Body max', mercoledi: 'METCON intenso', venerdi: 'Upper Body heavy', note: 'Carichi massimi' },
      { num: 11, focus: 'Test 1RM', lunedi: 'Test forza push', mercoledi: 'Test forza pull', venerdi: 'Test gambe', note: 'Registrare massimali' },
      { num: 12, focus: 'Recovery attivo', lunedi: 'Mobilità completa', mercoledi: 'Core &amp; stretching', venerdi: 'Full Body leggero', note: 'Recupero e pianificazione' }
    ]
  }
};

const videoData = {
  petto: [
    { titolo: 'Panca Piana con Manubri', link: 'https://youtube.com' },
    { titolo: 'Panca Inclinata 30°', link: 'https://youtube.com' },
    { titolo: 'Push Up Perfetti', link: 'https://youtube.com' }
  ],
  spalle: [
    { titolo: 'Shoulder Press con Manubri', link: 'https://youtube.com' },
    { titolo: 'Push Press Tecnica', link: 'https://youtube.com' },
    { titolo: 'Alzate Laterali', link: 'https://youtube.com' }
  ],
  schiena: [
    { titolo: 'Rematore con Manubrio', link: 'https://youtube.com' },
    { titolo: 'Deadlift Tecnica', link: 'https://youtube.com' },
    { titolo: 'Pull-up Progressione', link: 'https://youtube.com' }
  ],
  gambe: [
    { titolo: 'Goblet Squat', link: 'https://youtube.com' },
    { titolo: 'Box Jump Sicuro', link: 'https://youtube.com' },
    { titolo: 'Squat Profondità', link: 'https://youtube.com' }
  ],
  core: [
    { titolo: 'Turkish Get Up Completo', link: 'https://youtube.com' },
    { titolo: 'Plank Variazioni', link: 'https://youtube.com' },
    { titolo: 'Russian Twist', link: 'https://youtube.com' }
  ],
  braccia: [
    { titolo: 'Curl Bicipiti Tecnica', link: 'https://youtube.com' },
    { titolo: 'Dips Tricipiti', link: 'https://youtube.com' }
  ],
  fullbody: [
    { titolo: 'Thruster Completo', link: 'https://youtube.com' },
    { titolo: 'Burpees Perfetti', link: 'https://youtube.com' }
  ],
  metabolico: [
    { titolo: 'Kettlebell Swing', link: 'https://youtube.com' },
    { titolo: 'METCON Workout', link: 'https://youtube.com' }
  ]
};

// State management
let expandedMuscles = {};
let expandedExercises = {};
let expandedWorkouts = {};
let expandedWeeks = {};
let timerInterval = null;
let timerSeconds = 60;

// Initialize app
function init() {
  renderMuscleCards();
  renderWorkoutCards();
  renderProgramTimeline();
  renderVideoCategories();
  populateExerciseSelects();
}

// Navigation
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(sectionId).classList.add('active');
  event.target.classList.add('active');
}

// Render muscle cards
function renderMuscleCards() {
  const grid = document.getElementById('muscleGrid');
  grid.innerHTML = '';
  
  Object.keys(exerciseData).forEach(muscleKey => {
    const muscle = exerciseData[muscleKey];
    const card = document.createElement('div');
    card.className = 'muscle-card';
    card.innerHTML = `
      <div class="muscle-card-header">
        <div>
          <div class="muscle-card-title">${muscle.name}</div>
          <div class="exercise-count">${muscle.exercises.length} esercizi</div>
        </div>
        <div class="muscle-icon">${muscle.icon}</div>
      </div>
      <div class="exercise-list" id="exercises-${muscleKey}" style="display: none;"></div>
    `;
    
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.exercise-item')) {
        toggleMuscleExpand(muscleKey);
      }
    });
    
    grid.appendChild(card);
  });
}

function toggleMuscleExpand(muscleKey) {
  const exerciseList = document.getElementById(`exercises-${muscleKey}`);
  
  if (expandedMuscles[muscleKey]) {
    exerciseList.style.display = 'none';
    expandedMuscles[muscleKey] = false;
  } else {
    exerciseList.style.display = 'block';
    expandedMuscles[muscleKey] = true;
    renderExercises(muscleKey);
  }
}

function renderExercises(muscleKey) {
  const exerciseList = document.getElementById(`exercises-${muscleKey}`);
  const muscle = exerciseData[muscleKey];
  
  exerciseList.innerHTML = muscle.exercises.map((ex, idx) => `
    <div class="exercise-item" onclick="toggleExerciseDetails('${muscleKey}', ${idx})">
      <div class="exercise-name">${ex.nome}</div>
      <div class="exercise-details" id="exercise-${muscleKey}-${idx}" style="display: none;">
        <div class="exercise-detail-row">
          <span class="exercise-detail-label">Attrezzatura:</span>
          <span class="exercise-detail-value">${ex.attrezzatura}</span>
        </div>
        <div class="exercise-detail-row">
          <span class="exercise-detail-label">Serie/Ripetizioni:</span>
          <span class="exercise-detail-value">${ex.serie_ripetizioni}</span>
        </div>
        <div class="exercise-detail-row">
          <span class="exercise-detail-label">Note:</span>
          <span class="exercise-detail-value">${ex.note}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleExerciseDetails(muscleKey, idx) {
  const details = document.getElementById(`exercise-${muscleKey}-${idx}`);
  const key = `${muscleKey}-${idx}`;
  
  if (expandedExercises[key]) {
    details.style.display = 'none';
    expandedExercises[key] = false;
  } else {
    details.style.display = 'block';
    expandedExercises[key] = true;
  }
}

// Filter exercises
function filterExercises() {
  const searchTerm = document.getElementById('exerciseSearch').value.toLowerCase();
  const equipmentFilter = document.getElementById('equipmentFilter').value;
  
  Object.keys(exerciseData).forEach(muscleKey => {
    const muscle = exerciseData[muscleKey];
    let hasVisibleExercises = false;
    
    muscle.exercises.forEach((ex, idx) => {
      const matchesSearch = ex.nome.toLowerCase().includes(searchTerm);
      const matchesEquipment = !equipmentFilter || ex.attrezzatura.includes(equipmentFilter);
      
      if (matchesSearch && matchesEquipment) {
        hasVisibleExercises = true;
      }
    });
    
    const card = document.querySelector(`#exercises-${muscleKey}`)?.parentElement;
    if (card) {
      card.style.display = hasVisibleExercises || (!searchTerm && !equipmentFilter) ? 'block' : 'none';
    }
  });
}

// Render workout cards
function renderWorkoutCards() {
  const grid = document.getElementById('workoutGrid');
  grid.innerHTML = workoutSchede.map((workout, idx) => `
    <div class="workout-card" onclick="toggleWorkoutExpand(${idx})">
      <div class="workout-card-title">${workout.nome}</div>
      <div class="workout-card-focus">${workout.focus}</div>
      <div class="exercise-count">${workout.numEsercizi} esercizi</div>
      <div class="workout-exercises" id="workout-${idx}" style="display: none;">
        <div class="workout-section">
          <div class="workout-section-title">Riscaldamento</div>
          <div class="workout-section-content">${workout.riscaldamento}</div>
        </div>
        <div class="workout-section">
          <div class="workout-section-title">Esercizi</div>
          <ul class="workout-exercise-list">
            ${workout.esercizi.map(ex => `<li>${ex}</li>`).join('')}
          </ul>
        </div>
        <div class="workout-section">
          <div class="workout-section-title">Defaticamento</div>
          <div class="workout-section-content">${workout.defaticamento}</div>
        </div>
        <button class="btn-print" onclick="printWorkoutCard(${idx}); event.stopPropagation();">Stampa Scheda</button>
      </div>
    </div>
  `).join('');
}

function toggleWorkoutExpand(idx) {
  const details = document.getElementById(`workout-${idx}`);
  
  if (expandedWorkouts[idx]) {
    details.style.display = 'none';
    expandedWorkouts[idx] = false;
  } else {
    details.style.display = 'block';
    expandedWorkouts[idx] = true;
  }
}

function printWorkoutCard(idx) {
  const workout = workoutSchede[idx];
  const printContent = `
    <h1>${workout.nome}</h1>
    <h2>${workout.focus}</h2>
    <h3>Riscaldamento</h3>
    <p>${workout.riscaldamento}</p>
    <h3>Esercizi</h3>
    <ul>${workout.esercizi.map(ex => `<li>${ex}</li>`).join('')}</ul>
    <h3>Defaticamento</h3>
    <p>${workout.defaticamento}</p>
  `;
  
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>${workout.nome}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #1a3a52; }
          h2 { color: #FF6B35; }
          ul { line-height: 1.8; }
        </style>
      </head>
      <body>${printContent}</body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

// Render program timeline
function renderProgramTimeline() {
  const timeline = document.getElementById('programTimeline');
  timeline.innerHTML = '';
  
  Object.keys(programData).forEach(phaseKey => {
    const phase = programData[phaseKey];
    const phaseSection = document.createElement('div');
    phaseSection.className = 'phase-section';
    
    phaseSection.innerHTML = `
      <div class="phase-header">
        <div class="phase-badge" style="background: ${phase.color};">${phase.settimane}</div>
        <div>
          <div class="phase-title">${phase.nome}</div>
          <div class="phase-desc">${phase.descrizione}</div>
        </div>
      </div>
      <div class="phase-weeks">
        ${phase.weeks.map(week => `
          <div class="week-item" onclick="toggleWeekExpand('${phaseKey}', ${week.num})">
            <div class="week-header">Settimana ${week.num} - ${week.focus}</div>
            <div class="week-details" id="week-${phaseKey}-${week.num}" style="display: none;">
              <div class="week-day">
                <div class="week-day-title">Lunedì</div>
                <div class="week-day-content">${week.lunedi}</div>
              </div>
              <div class="week-day">
                <div class="week-day-title">Mercoledì</div>
                <div class="week-day-content">${week.mercoledi}</div>
              </div>
              <div class="week-day">
                <div class="week-day-title">Venerdì</div>
                <div class="week-day-content">${week.venerdi}</div>
              </div>
              <div class="week-day">
                <div class="week-day-title">Note</div>
                <div class="week-day-content">${week.note}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    timeline.appendChild(phaseSection);
  });
}

function toggleWeekExpand(phaseKey, weekNum) {
  const details = document.getElementById(`week-${phaseKey}-${weekNum}`);
  const key = `${phaseKey}-${weekNum}`;
  
  if (expandedWeeks[key]) {
    details.style.display = 'none';
    expandedWeeks[key] = false;
  } else {
    details.style.display = 'block';
    expandedWeeks[key] = true;
  }
}

// Custom workout builder
function populateExerciseSelects() {
  const allExercises = [];
  Object.keys(exerciseData).forEach(muscleKey => {
    exerciseData[muscleKey].exercises.forEach(ex => {
      allExercises.push({ name: ex.nome, muscle: exerciseData[muscleKey].name });
    });
  });
  
  const selects = document.querySelectorAll('.exercise-select');
  selects.forEach(select => {
    select.innerHTML = '<option value="">Seleziona...</option>' +
      allExercises.map(ex => `<option value="${ex.name}">${ex.name} (${ex.muscle})</option>`).join('');
  });
}

function addExerciseRow() {
  const builder = document.getElementById('exerciseBuilder');
  const newRow = document.createElement('div');
  newRow.className = 'exercise-row';
  newRow.innerHTML = `
    <div class="form-group">
      <label class="form-label">Esercizio</label>
      <select class="form-select exercise-select">
        <option value="">Seleziona...</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Serie</label>
      <input type="number" class="form-input exercise-sets" value="3" min="1">
    </div>
    <div class="form-group">
      <label class="form-label">Ripetizioni</label>
      <input type="number" class="form-input exercise-reps" value="10" min="1">
    </div>
    <div class="form-group">
      <label class="form-label">&nbsp;</label>
      <button class="btn btn-danger btn-small" onclick="removeExerciseRow(this)">Rimuovi</button>
    </div>
  `;
  builder.appendChild(newRow);
  populateExerciseSelects();
}

function removeExerciseRow(btn) {
  const builder = document.getElementById('exerciseBuilder');
  if (builder.children.length > 1) {
    btn.closest('.exercise-row').remove();
  }
}

function generateWorkout() {
  const workoutName = document.getElementById('workoutName').value || 'Il Mio Workout';
  const rows = document.querySelectorAll('.exercise-row');
  const exercises = [];
  
  rows.forEach((row, idx) => {
    const exerciseName = row.querySelector('.exercise-select').value;
    const sets = row.querySelector('.exercise-sets').value;
    const reps = row.querySelector('.exercise-reps').value;
    
    if (exerciseName) {
      exercises.push(`${idx + 1}. ${exerciseName} - ${sets}x${reps}`);
    }
  });
  
  if (exercises.length === 0) {
    alert('Aggiungi almeno un esercizio!');
    return;
  }
  
  const generatedWorkout = document.getElementById('generatedWorkout');
  const generatedTitle = document.getElementById('generatedTitle');
  const generatedContent = document.getElementById('generatedContent');
  
  generatedTitle.textContent = workoutName;
  generatedContent.innerHTML = `
    <div class="workout-section">
      <div class="workout-section-title">Esercizi (${exercises.length})</div>
      <ul class="workout-exercise-list">
        ${exercises.map(ex => `<li>${ex}</li>`).join('')}
      </ul>
    </div>
  `;
  
  generatedWorkout.classList.remove('hidden');
  generatedWorkout.scrollIntoView({ behavior: 'smooth' });
}

function printWorkout() {
  const workoutName = document.getElementById('generatedTitle').textContent;
  const content = document.getElementById('generatedContent').innerHTML;
  
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>${workoutName}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #1a3a52; }
          ul { line-height: 1.8; }
        </style>
      </head>
      <body>
        <h1>${workoutName}</h1>
        ${content}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

// Timer
function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  timerSeconds = parseInt(document.getElementById('timerSeconds').value) || 60;
  let remaining = timerSeconds;
  
  updateTimerDisplay(remaining);
  
  timerInterval = setInterval(() => {
    remaining--;
    updateTimerDisplay(remaining);
    
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert('Tempo scaduto!');
    }
  }, 1000);
}

function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerSeconds = parseInt(document.getElementById('timerSeconds').value) || 60;
  updateTimerDisplay(timerSeconds);
}

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  document.getElementById('timerDisplay').textContent = 
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// 1RM Calculator
function calculate1RM() {
  const weight = parseFloat(document.getElementById('weight').value);
  const reps = parseInt(document.getElementById('reps').value);
  
  if (!weight || !reps || reps < 1) {
    alert('Inserisci peso e ripetizioni validi');
    return;
  }
  
  // Epley formula: 1RM = weight × (1 + reps/30)
  const oneRM = weight * (1 + reps / 30);
  
  document.getElementById('rmValue').textContent = `${oneRM.toFixed(1)} kg`;
  document.getElementById('rmResult').classList.remove('hidden');
}

// Render video categories
function renderVideoCategories() {
  const videoContent = document.getElementById('videoContent');
  
  const categories = {
    'Petto': videoData.petto,
    'Spalle': videoData.spalle,
    'Schiena': videoData.schiena,
    'Gambe': videoData.gambe,
    'Core': videoData.core,
    'Braccia': videoData.braccia,
    'Full Body': videoData.fullbody,
    'Metabolico': videoData.metabolico
  };
  
  videoContent.innerHTML = Object.keys(categories).map(catName => `
    <div class="video-category">
      <h3 class="video-category-title">${catName}</h3>
      <div class="video-grid">
        ${categories[catName].map(video => `
          <div class="video-card">
            <div class="video-title">${video.titolo}</div>
            <a href="${video.link}" target="_blank" class="video-link">Guarda su YouTube</a>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Initialize on load
init();