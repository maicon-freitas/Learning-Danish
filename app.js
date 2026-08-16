const modules = [
  {
    icon: "01",
    title: "Survival Phrases",
    summary: "Phrases for greetings, introductions and asking for help when you do not understand.",
    items: [
      "Hej! — Hello!",
      "Jeg hedder Maicon. — My name is Maicon.",
      "Jeg forstår ikke. — I do not understand.",
      "Kan du gentage? — Can you repeat?",
      "Kan du tale langsommere? — Can you speak more slowly?"
    ],
    tags: ["greetings", "help", "first contact"]
  },
  {
    icon: "02",
    title: "Pronouns",
    summary: "Subject, object and possessive forms for building complete sentences.",
    items: [
      "jeg / mig / min, mit, mine — I / me / my",
      "du / dig / din, dit, dine — you / you / your",
      "han / ham / hans — he / him / his",
      "hun / hende / hendes — she / her / her",
      "vi / os / vores — we / us / our"
    ],
    tags: ["grammar", "possessives", "I vs i"]
  },
  {
    icon: "03",
    title: "Family and People",
    summary: "Vocabulary for talking about family, home and personal relationships.",
    items: [
      "familie — family",
      "mor / far — mother / father",
      "bror / søster — brother / sister",
      "barn — child",
      "Jeg har en bror. — I have a brother."
    ],
    tags: ["family", "people", "real life"]
  },
  {
    icon: "04",
    title: "Numbers and Time",
    summary: "Numbers, ordinals, weekdays, months, weather and seasons.",
    items: [
      "en, to, tre, fire, fem — one to five",
      "første, anden, tredje — first, second, third",
      "mandag, tirsdag, onsdag — Monday, Tuesday, Wednesday",
      "Hvordan er vejret? — How is the weather?",
      "Det regner. — It is raining."
    ],
    tags: ["numbers", "calendar", "weather"]
  },
  {
    icon: "05",
    title: "Food and Restaurants",
    summary: "How to ask for food, drinks, the menu, recommendations and the bill.",
    items: [
      "vand, kaffe, te, øl — water, coffee, tea, beer",
      "brød, ost, æg, fisk — bread, cheese, egg, fish",
      "Menukort, tak. — Menu, please.",
      "Jeg vil gerne have en kaffe. — I would like a coffee.",
      "Regningen, tak. — The bill, please."
    ],
    tags: ["restaurant", "food", "ordering"]
  },
  {
    icon: "06",
    title: "City and Transport",
    summary: "Useful questions for streets, stations, downtown, buses, trains, planes and taxis.",
    items: [
      "Hvor er stationen? — Where is the station?",
      "Hvordan kommer jeg til centrum? — How do I get to the center?",
      "Til venstre. — To the left.",
      "Til højre. — To the right.",
      "Kan jeg få en kvittering? — Can I get a receipt?"
    ],
    tags: ["directions", "transport", "city"]
  },
  {
    icon: "07",
    title: "School and Social Life",
    summary: "Phrases for class, homework, questions and basic conversation.",
    items: [
      "Jeg lærer dansk. — I am learning Danish.",
      "Hvad har vi for lektier? — What homework do we have?",
      "Hvornår begynder timen? — When does the class start?",
      "Kan du hjælpe mig? — Can you help me?",
      "Ja, selvfølgelig. — Yes, of course."
    ],
    tags: ["school", "class", "social"]
  },
  {
    icon: "08",
    title: "Adjectives and Opposites",
    summary: "Words for describing people, things, prices, weather and states.",
    items: [
      "stor / lille — big / small",
      "god / dårlig — good / bad",
      "ny / gammel — new / old",
      "dyr / billig — expensive / cheap",
      "Jeg er træt. — I am tired."
    ],
    tags: ["adjectives", "opposites", "description"]
  },
  {
    icon: "09",
    title: "Essential Verbs",
    summary: "Present tense and the big advantage: Danish verbs usually do not change by person.",
    items: [
      "at være / er — to be / am, is, are",
      "at have / har — to have / have, has",
      "at tale / taler — to speak / speak, speaks",
      "at bo / bor — to live / live, lives",
      "Jeg taler dansk. — I speak Danish."
    ],
    tags: ["verbs", "present tense", "sentences"]
  },
  {
    icon: "10",
    title: "Past Tense",
    summary: "Verbs with -de, -te and irregular forms that should be memorized as sets.",
    items: [
      "tale / taler / talte — speak / speaks / spoke",
      "bo / bor / boede — live / lives / lived",
      "skrive / skriver / skrev — write / writes / wrote",
      "drikke / drikker / drak — drink / drinks / drank",
      "spise / spiser / spiste — eat / eats / ate"
    ],
    tags: ["past tense", "verbs", "irregular"]
  },
  {
    icon: "11",
    title: "Modal Verbs",
    summary: "Kan, vil, skal and må: ability, wanting, obligation and permission.",
    items: [
      "Jeg kan tale dansk. — I can speak Danish.",
      "Jeg vil gerne have kaffe. — I would like coffee.",
      "Jeg skal i skole. — I have to go / I am going to school.",
      "Må jeg komme ind? — May I come in?",
      "After a modal verb: use the main verb without at."
    ],
    tags: ["kan", "vil", "skal", "må"]
  },
  {
    icon: "12",
    title: "Connectors and Subordinate Clauses",
    summary: "How to connect ideas with og, men, fordi, hvis, om and at.",
    items: [
      "og — and",
      "men — but",
      "fordi — because",
      "hvis — if, for conditions",
      "om — whether / if, for doubt or indirect questions"
    ],
    tags: ["connectors", "hvis", "om", "at"]
  },
  {
    icon: "13",
    title: "Shopping and Hotels",
    summary: "Phrases for buying, trying things on, booking rooms and solving problems.",
    items: [
      "Jeg vil gerne købe... — I would like to buy...",
      "Hvad koster den? — How much does it cost?",
      "Kan jeg prøve den? — Can I try it on?",
      "Jeg vil gerne reservere et værelse. — I would like to book a room.",
      "Bruseren virker ikke. — The shower does not work."
    ],
    tags: ["shopping", "hotel", "problems"]
  },
  {
    icon: "14",
    title: "Important Traps",
    summary: "Common beginner mistakes that can slow you down.",
    items: [
      "Godnat is normally used when saying good night before sleeping.",
      "Capital I = you plural; lowercase i = in / at / into.",
      "kan = can / be able to; må = may / permission.",
      "hvis = condition; om = uncertainty or indirect question.",
      "Learn blocks of language, not word-by-word translations."
    ],
    tags: ["mistakes", "tips", "cheat sheet"]
  },
  {
    icon: "15",
    title: "Question Words",
    summary: "The words you need to start a conversation, understand answers and ask for details.",
    items: [
      "hvad — what",
      "hvem — who",
      "hvor — where",
      "hvornår — when",
      "hvorfor / hvordan / hvor meget — why / how / how much",
      "Hvilken bus tager vi? — Which bus are we taking?"
    ],
    tags: ["questions", "conversation", "h-words"]
  },
  {
    icon: "16",
    title: "Daily Action Verbs",
    summary: "High-frequency verbs for your routine: moving around, studying, working and meeting people.",
    items: [
      "at gå / går / gik — go, walk / went",
      "at komme / kommer / kom — come / came",
      "at lave / laver / lavede — make, do / made",
      "at arbejde / arbejder / arbejdede — work / worked",
      "at lære / lærer / lærte — learn / learned",
      "at møde / møder / mødte — meet / met"
    ],
    tags: ["verbs", "routine", "past tense"]
  },
  {
    icon: "17",
    title: "Home, Routine and Feelings",
    summary: "Talk about what you do every day, where you are going and how you feel.",
    items: [
      "Jeg står op klokken syv. — I get up at seven o'clock.",
      "Jeg tager på arbejde. — I go to work.",
      "Jeg laver mad. — I cook / make food.",
      "Jeg er glad, men lidt træt. — I am happy, but a little tired.",
      "Hvad laver du i weekenden? — What are you doing at the weekend?"
    ],
    tags: ["routine", "home", "feelings"]
  },
  {
    icon: "18",
    title: "Feelings and Personal Connections",
    summary: "Warm, everyday phrases for sharing affection, compliments, doubts and appreciation.",
    items: [
      "Jeg elsker dig. — I love you.",
      "Du er smuk. — You are beautiful.",
      "Jeg ved ikke. — I do not know.",
      "Jeg savner dig. — I miss you.",
      "Du betyder meget for mig. — You mean a lot to me.",
      "Jeg er glad for dig. — I am fond of you / I am happy about you.",
      "at elske / elsker / elskede — love / loves / loved",
      "at savne / savner / savnede — miss / misses / missed",
      "at vide / ved / vidste — know / knows / knew"
    ],
    tags: ["feelings", "relationships", "everyday Danish"]
  }
];

const patterns = [
  ["Jeg er + adjective.", "Jeg er træt.", "I am tired."],
  ["Jeg har + noun.", "Jeg har en hund.", "I have a dog."],
  ["Jeg vil gerne have + thing.", "Jeg vil gerne have kaffe.", "I would like coffee."],
  ["Jeg kan + verb.", "Jeg kan tale dansk.", "I can speak Danish."],
  ["Jeg skal + verb/place.", "Jeg skal i skole.", "I have to go / I am going to school."],
  ["Må jeg + verb?", "Må jeg komme ind?", "May I come in?"],
  ["Hvor er + place/thing?", "Hvor er stationen?", "Where is the station?"],
  ["Hvad er + thing?", "Hvad er det?", "What is that?"],
  ["Hvad koster + thing?", "Hvad koster den?", "How much does it cost?"],
  ["Jeg forstår ikke + ...", "Jeg forstår ikke.", "I do not understand."],
  ["Kan du + verb?", "Kan du gentage?", "Can you repeat?"],
  ["Jeg håber, at + sentence.", "Jeg håber, at det går godt.", "I hope everything goes well."],
  ["Hvem er + person?", "Hvem er din lærer?", "Who is your teacher?"],
  ["Hvornår + verb + subject?", "Hvornår kommer bussen?", "When does the bus arrive?"],
  ["Hvorfor + verb + subject?", "Hvorfor lærer du dansk?", "Why are you learning Danish?"],
  ["Hvordan + verb + subject?", "Hvordan kommer jeg til centrum?", "How do I get to the centre?"],
  ["Jeg + present verb + time.", "Jeg arbejder i dag.", "I work today."],
  ["I går + past tense.", "I går lavede jeg mad.", "Yesterday I cooked."],
  ["Jeg synes, at + sentence.", "Jeg synes, at dansk er svært.", "I think Danish is difficult."],
  ["Jeg elsker + person.", "Jeg elsker dig.", "I love you."],
  ["Du er + adjective.", "Du er smuk.", "You are beautiful."]
];

const flashcards = [
  ["Survival", "Hej!", "Hello!"],
  ["Survival", "Undskyld mig.", "Excuse me / sorry."],
  ["Survival", "Jeg forstår ikke.", "I do not understand."],
  ["Help", "Kan du gentage?", "Can you repeat?"],
  ["Help", "Kan du tale langsommere?", "Can you speak more slowly?"],
  ["Introduction", "Hvad hedder du?", "What is your name?"],
  ["Introduction", "Jeg kommer fra Brasilien.", "I come from Brazil."],
  ["Restaurant", "Menukort, tak.", "Menu, please."],
  ["Restaurant", "Regningen, tak.", "The bill, please."],
  ["City", "Hvor er stationen?", "Where is the station?"],
  ["City", "Til venstre.", "To the left."],
  ["City", "Til højre.", "To the right."],
  ["School", "Hvad har vi for lektier?", "What homework do we have?"],
  ["Modal", "Jeg kan tale dansk.", "I can speak Danish."],
  ["Modal", "Må jeg komme ind?", "May I come in?"],
  ["Past tense", "Jeg spiste pizza.", "I ate pizza."],
  ["Weather", "Det regner.", "It is raining."],
  ["Shopping", "Hvad koster det?", "How much does it cost?"],
  ["Hotel", "Bruseren virker ikke.", "The shower does not work."],
  ["Connector", "Hvis det regner, tager vi en bus.", "If it rains, we take a bus."],
  ["Question word", "Hvem er det?", "Who is that?"],
  ["Question word", "Hvornår åbner butikken?", "When does the shop open?"],
  ["Question word", "Hvorfor er du træt?", "Why are you tired?"],
  ["Question word", "Hvordan går det?", "How is it going?"],
  ["Question word", "Hvor meget koster det?", "How much does it cost?"],
  ["Verb", "Jeg går hjem nu.", "I am going home now."],
  ["Verb", "Jeg kommer fra Brasilien.", "I come from Brazil."],
  ["Verb", "Vi laver mad sammen.", "We cook together."],
  ["Routine", "Jeg står op klokken syv.", "I get up at seven o'clock."],
  ["Feeling", "Jeg er glad i dag.", "I am happy today."],
  ["Feelings", "Jeg elsker dig.", "I love you."],
  ["Feelings", "Du er smuk.", "You are beautiful."],
  ["Feelings", "Jeg ved ikke.", "I do not know."],
  ["Feelings", "Jeg savner dig.", "I miss you."],
  ["Feelings", "Du betyder meget for mig.", "You mean a lot to me."]
];

const quiz = [
  ["How do you say “My name is Maicon”?", "Jeg hedder Maicon."],
  ["How do you ask “Where do you come from?”", "Hvor kommer du fra?"],
  ["How do you say “I do not understand”?", "Jeg forstår ikke."],
  ["How do you ask “How much does it cost?”", "Hvad koster det?"],
  ["How do you say “I would like a coffee”?", "Jeg vil gerne have en kaffe."],
  ["How do you say “I live in Denmark”?", "Jeg bor i Danmark."],
  ["How do you say “Can you repeat?”", "Kan du gentage?"],
  ["What is the difference between hvis and om?", "hvis = condition; om = doubt / indirect question."],
  ["What is the past tense of spise?", "spiste"],
  ["Complete: Jeg ___ tale dansk. (can / am able to)", "kan"],
  ["How do you ask “Who is that?”", "Hvem er det?"],
  ["How do you ask “When does the class start?”", "Hvornår begynder timen?"],
  ["How do you ask “Why are you learning Danish?”", "Hvorfor lærer du dansk?"],
  ["How do you say “How are you getting to the centre?”", "Hvordan kommer du til centrum?"],
  ["Complete: I går ___ jeg mad. (made)", "lavede"],
  ["What is the Danish word for “where”?", "hvor"]
];

const checklist = [
  "10 min: review 10–15 flashcards and answer before you flip each card.",
  "10 min: choose one module and learn only 5 words or 2 phrases.",
  "10 min: practise one verb in present and past; write 3 sentences.",
  "10 min: use one question word to ask and answer 3 questions aloud.",
  "10 min: create 5 personal sentences with the sentence builder and listen to them.",
  "10 min: answer 2 quiz questions; note one mistake and one useful sentence."
];

const cheatSheet = [
  ["Tak!", "Thank you!"],
  ["Selv tak.", "You are welcome."],
  ["Ja / nej / måske", "Yes / no / maybe"],
  ["Hvad betyder det?", "What does that mean?"],
  ["Hvor bor du?", "Where do you live?"],
  ["Jeg bor i Danmark.", "I live in Denmark."],
  ["Hvordan går det?", "How is it going?"],
  ["Det går godt.", "It is going well."],
  ["Jeg vil gerne have...", "I would like..."],
  ["Jeg leder efter...", "I am looking for..."],
  ["Må jeg...?", "May I...?"],
  ["Jeg skal...", "I have to / I am going to..."],
  ["Hvem er det?", "Who is that?"],
  ["Hvilken...?", "Which...?"],
  ["Hvornår...?", "When...?"],
  ["Hvorfor...?", "Why...?"],
  ["Hvordan...?", "How...?"],
  ["Hvor meget?", "How much?"],
  ["Jeg går hjem.", "I am going home."],
  ["Jeg arbejder i dag.", "I work today."],
  ["Jeg laver mad.", "I cook / make food."],
  ["Jeg synes, at...", "I think that..."],
  ["Jeg elsker dig.", "I love you."],
  ["Du er smuk.", "You are beautiful."],
  ["Jeg ved ikke.", "I do not know."],
  ["Jeg savner dig.", "I miss you."],
  ["Du betyder meget for mig.", "You mean a lot to me."]
];

const moduleGrid = document.querySelector("#moduleGrid");
const patternList = document.querySelector("#patternList");
const searchInput = document.querySelector("#searchInput");
const cheatGrid = document.querySelector("#cheatSheet");
const checklistBox = document.querySelector("#dailyChecklist");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const dailyPrompt = document.querySelector("#dailyPrompt");
const dailyChecklistKey = "danish-checklist";
const dailyChecklistDateKey = "danish-checklist-date";

function audioButton(text) {
  return `<button class="audio-button" type="button" data-speak data-speech="${text.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}" aria-label="Ouvir em dinamarquês" title="Ouvir em dinamarquês">🔊</button>`;
}

function danishItem(text) {
  const [danish, translation] = text.split(" — ");
  return `<span class="danish-with-audio"><span class="danish-text">${danish}</span>${audioButton(danish)}${translation ? `<span class="translation"> — ${translation}</span>` : ""}</span>`;
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startNewDayIfNeeded() {
  const today = getLocalDateKey();
  if (localStorage.getItem(dailyChecklistDateKey) === today) return false;

  localStorage.removeItem(dailyChecklistKey);
  localStorage.setItem(dailyChecklistDateKey, today);
  return true;
}

function renderModules() {
  moduleGrid.innerHTML = modules.map((module) => `
    <article class="module-card" data-search="${[module.title, module.summary, module.items.join(" "), module.tags.join(" ")].join(" ").toLowerCase()}">
      <div class="module-top">
        <span class="module-icon">${module.icon}</span>
        <div class="tag-list">${module.tags.slice(0, 2).map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
      <h3>${module.title}</h3>
      <p>${module.summary}</p>
      <ul>${module.items.map((item) => `<li>${danishItem(item)}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderPatterns() {
  patternList.innerHTML = patterns.map(([rule, example, meaning]) => `
    <li>
      <div>
        <span class="danish-with-audio"><strong class="danish-text">${rule}</strong>${audioButton(rule)}</span>
        <span>${meaning}</span>
      </div>
      <span class="danish-with-audio"><strong class="danish-text">${example}</strong>${audioButton(example)}</span>
    </li>
  `).join("");
}

function renderCheatSheet() {
  cheatGrid.innerHTML = cheatSheet.map(([dk, en]) => `
    <article class="cheat-item">
      <span class="danish-with-audio"><strong class="danish-text">${dk}</strong>${audioButton(dk)}</span>
      <span>${en}</span>
    </article>
  `).join("");
}

function renderChecklist() {
  startNewDayIfNeeded();
  const saved = JSON.parse(localStorage.getItem(dailyChecklistKey) || "[]");
  checklistBox.innerHTML = checklist.map((item, index) => `
    <label>
      <input type="checkbox" data-check="${index}" ${saved.includes(index) ? "checked" : ""} />
      <span>${item}</span>
    </label>
  `).join("");
  updateProgress();
}

function updateProgress() {
  if (startNewDayIfNeeded()) {
    renderChecklist();
    return;
  }

  const checked = [...document.querySelectorAll("[data-check]:checked")].map((input) => Number(input.dataset.check));
  const percentage = Math.round((checked.length / checklist.length) * 100);
  localStorage.setItem(dailyChecklistKey, JSON.stringify(checked));
  progressText.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
  dailyPrompt.textContent = percentage === 100
    ? "Você concluiu o estudo de hoje. Amanhã, volte para iniciar uma nova lição com conteúdo novo."
    : "Conclua os blocos de hoje para finalizar sua sessão de estudo.";
}

function scheduleDailyReset() {
  const now = new Date();
  const nextDay = new Date(now);
  nextDay.setHours(24, 0, 1, 0);

  setTimeout(() => {
    renderChecklist();
    scheduleDailyReset();
  }, nextDay - now);
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  document.querySelectorAll(".module-card").forEach((card) => {
    card.classList.toggle("hidden", term && !card.dataset.search.includes(term));
  });
});

checklistBox.addEventListener("change", updateProgress);

let cardIndex = 0;
let flipped = false;
const flashcard = document.querySelector("#flashcard");
const flashTag = document.querySelector("#flashTag");
const flashFront = document.querySelector("#flashFront");
const flashBack = document.querySelector("#flashBack");

function renderCard() {
  const [tag, front, back] = flashcards[cardIndex];
  flashTag.textContent = tag;
  flashFront.textContent = front;
  flashBack.textContent = back;
  document.querySelector("#speakCardInline").dataset.speech = front;
  flashcard.classList.toggle("flipped", flipped);
}

function moveCard(direction) {
  cardIndex = (cardIndex + direction + flashcards.length) % flashcards.length;
  flipped = false;
  renderCard();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "da-DK";
  utterance.rate = 0.88;
  speechSynthesis.speak(utterance);
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-speak]");
  if (!button) return;
  const text = button.dataset.speech || button.closest(".danish-with-audio")?.querySelector(".danish-text")?.textContent;
  if (text) speak(text);
});

function addStaticAudioButtons() {
  document.querySelectorAll(".verb-table td:not(:last-child)").forEach((cell) => {
    cell.insertAdjacentHTML("beforeend", audioButton(cell.textContent.trim()));
  });

  document.querySelectorAll(".adjective-grid article").forEach((card) => {
    const adjective = card.querySelector("strong");
    const opposite = card.querySelector("em");
    adjective.insertAdjacentHTML("afterend", audioButton(adjective.textContent));
    opposite.insertAdjacentHTML("afterend", audioButton(opposite.textContent.replace("↔", "").split(" — ")[0].trim()));
  });

  document.querySelectorAll(".adjective-examples strong").forEach((example) => {
    example.classList.add("danish-with-audio", "danish-text");
    example.insertAdjacentHTML("afterend", audioButton(example.textContent));
  });

  document.querySelectorAll(".verb-section .section-heading strong, .verb-section .section-heading em").forEach((expression) => {
    expression.classList.add("danish-with-audio");
    expression.insertAdjacentHTML("afterend", audioButton(expression.textContent));
  });

  const verbNote = document.querySelector(".verb-note");
  verbNote.insertAdjacentHTML("beforeend", audioButton("Jeg spiser nu. Jeg spiste i går. Jeg vil spise i morgen."));
}

document.querySelector("#flipCard").addEventListener("click", () => {
  flipped = !flipped;
  renderCard();
});
flashcard.addEventListener("click", (event) => {
  if (event.target.closest("[data-speak]")) return;
  flipped = !flipped;
  renderCard();
});
flashcard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipped = !flipped;
    renderCard();
  }
});
document.querySelector("#prevCard").addEventListener("click", () => moveCard(-1));
document.querySelector("#nextCard").addEventListener("click", () => moveCard(1));
document.querySelector("#speakCard").addEventListener("click", () => speak(flashcards[cardIndex][1]));

const quizBox = document.querySelector("#quizBox");
const quizResult = document.querySelector("#quizResult");

function hasDanishAnswer(answer) {
  return /[æøå]|^(jeg|hvor|hvad|kan|må|hvem|hvornår|hvordan|hvis|spiste|lavede|hvor)$/i.test(answer);
}

function renderQuiz() {
  quizBox.innerHTML = quiz.map(([question, answer], index) => `
    <div class="quiz-question">
      <label for="quiz-${index}">${index + 1}. ${question}</label>
      <input id="quiz-${index}" type="text" autocomplete="off" />
      <span class="quiz-answer">Answer: ${answer}${hasDanishAnswer(answer) ? audioButton(answer) : ""}</span>
    </div>
  `).join("");
  quizResult.textContent = "";
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[?.!,;]/g, "").trim();
}

document.querySelector("#checkQuiz").addEventListener("click", () => {
  let score = 0;
  document.querySelectorAll(".quiz-question").forEach((row, index) => {
    const input = row.querySelector("input");
    const expected = normalize(quiz[index][1]);
    const actual = normalize(input.value);
    row.classList.add("revealed");
    if (actual && (expected.includes(actual) || actual.includes(expected))) score += 1;
  });
  quizResult.textContent = `You got approximately ${score} out of ${quiz.length}. Adjust your answers and try again.`;
});

document.querySelector("#resetQuiz").addEventListener("click", renderQuiz);

const builderPattern = document.querySelector("#builderPattern");
const builderWord = document.querySelector("#builderWord");
const builderOutput = document.querySelector("#builderOutput");
const builderTemplates = [
  ["Jeg er + adjective", "Jeg er {x}."],
  ["Jeg har + noun", "Jeg har {x}."],
  ["Jeg vil gerne have + thing", "Jeg vil gerne have {x}."],
  ["Jeg kan + verb", "Jeg kan {x}."],
  ["Jeg skal + verb/place", "Jeg skal {x}."],
  ["Må jeg + verb?", "Må jeg {x}?"],
  ["Hvor er + place/thing?", "Hvor er {x}?"],
  ["Hvad koster + thing?", "Hvad koster {x}?"],
  ["Kan du + verb?", "Kan du {x}?"],
  ["Jeg håber, at + sentence", "Jeg håber, at {x}."],
  ["Hvem er + person?", "Hvem er {x}?"],
  ["Hvornår + verb + subject?", "Hvornår {x}?"],
  ["Hvorfor + verb + subject?", "Hvorfor {x}?"],
  ["Hvordan + verb + subject?", "Hvordan {x}?"],
  ["Jeg synes, at + sentence", "Jeg synes, at {x}."],
  ["Jeg elsker + person", "Jeg elsker {x}."],
  ["Du er + adjective", "Du er {x}."]
];

function renderBuilderOptions() {
  builderPattern.innerHTML = builderTemplates.map(([label], index) => `<option value="${index}">${label}</option>`).join("");
}

function updateBuilder() {
  const template = builderTemplates[Number(builderPattern.value)][1];
  const word = builderWord.value.trim() || "...";
  const sentence = template.replace("{x}", word);
  builderOutput.textContent = sentence;
  document.querySelector("#speakBuilderInline").dataset.speech = sentence;
}

builderPattern.addEventListener("change", updateBuilder);
builderWord.addEventListener("input", updateBuilder);
document.querySelector("#speakBuilder").addEventListener("click", () => speak(builderOutput.textContent));

renderModules();
renderPatterns();
renderCheatSheet();
renderChecklist();
scheduleDailyReset();
renderCard();
renderQuiz();
renderBuilderOptions();
updateBuilder();
addStaticAudioButtons();
