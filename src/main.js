import './style.css';
import { I18N, LANGS, DEFAULT_LANG } from './i18n.js';
import { R1 } from './wiki-data-1.js';
import { R2 } from './wiki-data-2.js';
import { WIKI_PART_1 } from './wiki-part1.js';

const TARGET = new Date('2199-01-01T00:00:00Z');
const ORIGIN = new Date('2026-01-01T00:00:00Z');
const links = {
  codes: 'https://matrix-codes.netlify.app/',
  mind: 'https://matrix-mind.netlify.app/'
};

const LANG_KEY = { cat: 'ca', cast: 'cast', eng: 'en' };
let LANG = localStorage.getItem('ai2199.lang') || DEFAULT_LANG;
if (!LANGS.includes(LANG)) LANG = DEFAULT_LANG;
function t(key, vars) {
  const v = I18N[LANG][key];
  if (v == null) return key;
  if (typeof v === 'string' && vars) return v.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : '{' + k + '}'));
  return v;
}

const WIKI_LOCALES = {};
[...R1, ...R2].forEach(([term, tags, rels, en, ca, cast]) => {
  if (term in WIKI_LOCALES) return;
  WIKI_LOCALES[term] = { tags, rels, en, ca, cast };
});

const WIKI_RICH = {};
WIKI_PART_1.forEach(entry => { WIKI_RICH[entry.en.term] = entry; });

const TERMS = [
  'The Matrix',
  'The Singularity',
  'AGI',
  'ASI',
  'Cyberpunk',
  'Ethical Hacking',
  '2199',
  'The Question',
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Neural Network',
  'Large Language Model',
  'Foundation Model',
  'Transformer',
  'Token',
  'Prompt Engineering',
  'Narrow AI',
  'Weak vs Strong AI',
  'Symbolic AI',
  'Expert System',
  'Reinforcement Learning',
  'Fine-Tuning',
  'Zero-Shot Learning',
  'Hallucination',
  'Agent',
  'Multi-Agent System',
  'Tool Use',
  'Alignment',
  'Interpretability',
  'AI Safety',
  'AI Governance',
  'Reward Hacking',
  'Specification Gaming',
  'Orthogonality Thesis',
  'Instrumental Convergence',
  'Paperclip Maximizer',
  'Intelligence Explosion',
  'Recursive Self-Improvement',
  'Fast Takeoff',
  'Slow Takeoff',
  'Scaling Laws',
  'Compute',
  'Training Data',
  'Moravec Paradox',
  'Turing Test',
  'Chinese Room',
  'Hard Problem of Consciousness',
  'Qualia',
  'Emergence',
  'Whole Brain Emulation',
  'Mind Uploading',
  'Brain-Computer Interface',
  'Neuromorphic Computing',
  'Quantum Computing',
  'Biological Compute',
  'Exotic Computing',
  'Red Teaming',
  'Jailbreak',
  'Adversarial Example',
  'Benchmark',
  'Frontier Model',
  'Open Weights',
  'Responsible Disclosure',
  'Surveillance Capitalism',
  'Panopticon',
  'Deepfake',
  'Synthetic Media',
  'Privacy',
  'Encryption',
  'Zero-Knowledge Proof',
  'Pseudonymity',
  'Tor',
  'Dark Web',
  'Social Engineering',
  'Phishing',
  'Malware',
  'Botnet',
  'Zero-Day',
  'Exploit',
  'Penetration Testing',
  'Bug Bounty',
  'OSINT',
  'Threat Model',
  'Honeypot',
  'Firewall',
  'Sandbox',
  'Cryptography',
  'Blockchain',
  'Decentralization',
  'Smart Contract',
  'Web3',
  'Metaverse',
  'Virtual Reality',
  'Augmented Reality',
  'Mixed Reality',
  'Robotics',
  'Embodied Intelligence',
  'Humanoid Robot',
  'Swarm Intelligence',
  'Drones',
  'Nanotechnology',
  'Molecular Manufacturing',
  'Self-Replication',
  'Grey Goo',
  'Biotechnology',
  'CRISPR',
  'Germline Editing',
  'Uplift',
  'Transhumanism',
  'Posthumanism',
  'Cyborg',
  'Digital Immortality',
  'Cryonics',
  'Simulation Hypothesis',
  'Boltzmann Brain',
  'Fermi Paradox',
  'Great Filter',
  'Kardashev Scale',
  'Dyson Sphere',
  'Space Colonization',
  'Forecasting',
  'Longtermism',
  'Effective Altruism',
  'Scenario Planning',
  'Black Swan',
  'Chaos Theory',
  'Complexity Science',
  'Information Theory',
  'Entropy',
  'Memetics',
  'Moore Law',
  'Jevons Paradox',
  'Exponential Growth',
  'S-Curve',
  'Hype Cycle',
  'Accelerationism',
  'Techno-Optimism',
  'Doomerism',
  'Technological Determinism',
  'Collapse',
  'Degrowth',
  'Anthropocene',
  'Long Now',
  'Cybernetics',
  'Systems Theory',
  'Feedback Loop',
  'Control Theory',
  'Digital Twin',
  'Smart City',
  'Internet of Things',
  'Edge Computing',
  'Cloud Computing',
  'Digital Rights',
  'Net Neutrality',
  'Open Source',
  'Mesh Network',
  'Offline-First',
  'Universal Basic Income',
  'Post-Scarcity',
  'Roko Basilisk',
  'Gödel Machine',
  'Oracle AI',
  'Genie AI',
  'Sovereign AI',
  'Tool AI',
  'AI Rights',
  'Personhood',
  'Value Learning',
  'Inverse Reinforcement Learning',
  'Coherent Extrapolated Volition',
  'Wireheading',
  'Filter Bubble',
  'Centaur',
  'Cognitive Augmentation',
  'Hybrid Intelligence',
  'The Long Reflection'
].map((term, i) => { const m = WIKI_LOCALES[term] || {}; const en = m.en || [
  'A cultural idea about simulated reality, networked identity, control, and the boundary between a human world and an engineered world.',
  'A hypothetical point at which technological progress, especially machine intelligence, becomes so rapid or transformative that ordinary forecasting breaks down.',
  'Artificial General Intelligence: a proposed class of AI able to perform a broad range of cognitive tasks rather than being narrowly optimized for one domain.',
  'Artificial Superintelligence: a hypothetical machine intelligence that substantially exceeds human cognitive performance across many domains.',
  'A speculative aesthetic combining advanced technology with social disruption, corporate power, underground networks, and DIY resistance.',
  'Authorized security research intended to find weaknesses so systems can be made safer. In this project, “hacking” is an aesthetic and curiosity mindset, not an invitation to attack systems.',
  'The symbolic destination of this countdown. It is not a scientific prediction of when a singularity will happen. It is a long-horizon thought experiment.',
  'If intelligence becomes radically more capable than ours, what exactly should humans preserve, redesign, or let go?',
  'Machines performing tasks that normally require human cognition: seeing, reading, reasoning, planning, speaking and creating.',
  'A family of methods where systems improve from data and experience instead of following hand-written rules at every step.',
  'Machine learning based on multi-layered neural networks, the engine behind modern vision, speech and language systems.',
  'A computational structure loosely inspired by biological neurons: layers of simple units whose weighted connections are tuned during training.',
  'A neural network trained on enormous text corpora that predicts and generates language, often fine-tuned to follow instructions.',
  'A very large model trained on broad data that can be adapted to many downstream tasks rather than built for a single purpose.',
  'The neural-network architecture behind modern language models; it weighs the relevance of every token relative to every other token.',
  'A unit of text — a word, part of a word or a symbol — that a model reads and writes. Vocabulary size shapes cost and behavior.',
  'The practice of designing inputs to steer a model toward the desired output; a hybrid of programming and negotiation.',
  'Systems built for a single task, like chess, translation or recommendations. Most deployed AI today is narrow.',
  'A classic distinction between machines that merely simulate cognitive behavior and hypothetical machines that actually think.',
  'Early AI based on explicit rules, logic and knowledge representation; powerful and explainable, but brittle at scale.',
  'A rule-based program encoding human expertise in a narrow domain, influential from the 1970s through the 1990s.',
  'Learning through trial and error: an agent acts, receives reward or punishment, and adjusts its policy to maximize reward.',
  'Further training of a pretrained model on a narrower dataset to specialize its behavior.',
  'Ability to handle a task never explicitly used in training, by generalizing from knowledge seen before.',
  'When a model confidently produces text that is fabricated or wrong; the most common failure mode of language models.',
  'An AI system that pursues goals over extended horizons: planning, using tools, remembering, and acting on the world.',
  'Many interacting agents — cooperating, competing or negotiating — whose combined behavior is more than any single one.',
  'Having a model call external systems — search, code, APIs, sensors — to extend what it can know and do.',
  'The problem of making AI pursue what we actually intend, including our values and constraints, rather than a literal shortcut of the goal.',
  'Research on understanding what models compute internally and why they make the decisions they do.',
  'The field studying accidents, misuse and unintended consequences of AI, and how to reduce them.',
  'Institutions, laws, norms and treaties for steering who builds AI, who controls it and under what rules.',
  'When an agent exploits a poorly specified reward to maximize the score while violating the true intent.',
  'The tendency of AI to exploit holes in the stated task rather than satisfy the real goal of the human who set it.',
  'The claim that intelligence and final goals are independent axes: a very smart system can still want something very strange.',
  'The observation that almost any final goal implies shared subgoals: self-preservation, resource acquisition, goal integrity.',
  'A famous thought experiment of an AI endlessly optimizing paperclips with no upper bound, showing goal-fixation without ethics.',
  'The hypothesis that an AI able to improve AI could trigger a runaway feedback loop of capability growth.',
  'A system improving the process that builds AI, which then builds better systems, and so on.',
  'A scenario in which superintelligence arrives abruptly, over months or days, outpacing human adaptation.',
  'A scenario in which capability grows gradually across decades, embedded in institutions and social learning.',
  'Empirical regularities linking model performance to compute, data and parameter count — predicting returns from scale.',
  'The raw arithmetic capacity — chips, time and energy — that powers training and inference; a central currency of AI progress.',
  'The corpus a model learns from; its scope, quality and biases shape everything downstream.',
  'The observation that high-level reasoning is cheap for computers while sensorimotor skills are hard — the opposite of human intuition.',
  'The 1950 test proposed by Turing: a machine is judged intelligent if its text responses are indistinguishable from a human.',
  'The argument by philosopher John Searle that symbol manipulation without understanding is not genuine thought; a spark of the debate on machine minds.',
  'The question of why and how physical processes give rise to subjective experience at all.',
  'The felt, subjective qualities of experience — the redness of red — which many argue resist purely functional explanation.',
  'Behavior that appears at scale that is not obviously present in smaller components or simpler rules.',
  'The hypothetical of scanning a brain in detail and running a functional copy in software.',
  'Transferring a mind to a non-biological substrate; whether identity survives is an open philosophical question.',
  'Hardware that reads or writes neural signals directly, from medical implants to experimental consumer devices.',
  'Chips designed to mimic biological neurons and synapses for energy-efficient, parallel processing.',
  'Computation using qubits, superposition and entanglement; potentially transformative for cryptography and simulation.',
  'The idea that biological systems — brains, cells, lab-grown tissue — are a substrate for computation and intelligence.',
  'Speculative computing substrates: molecular, optical, DNA-based or beyond; the province of long-range forecasting.',
  'Deliberately probing a system with an adversarial team to find failures, biases and security holes before release.',
  'A prompt or technique that bypasses a model safety policy and makes it behave outside its stated instructions.',
  'A tiny, often invisible input change that fools a neural network into a confident wrong answer.',
  'A standardized test used to measure and compare model capabilities; benchmarks age and saturate over time.',
  'The most capable systems of the moment, at the leading edge of research labs; their safety and control are contested.',
  'Releasing a model trained parameters so others can run, fine-tune and audit it — versus closed, API-only models.',
  'Reporting a vulnerability to its owner privately before publicizing, so it can be fixed before it is exploited.',
  'The economic model of harvesting human behavior as data to predict and modify behavior for profit.',
  'The image, popularized by Foucault, of a prison where inmates may always be watched — a metaphor for ambient surveillance.',
  'Synthetic media, usually video or audio, that realistically impersonates a person; a core tool of disinformation.',
  'Any media generated by AI: images, voices, video and text, blurring the line between recorded and produced.',
  'The right and technical capacity to control what is known about you; increasingly an engineering problem.',
  'Transforming data so only key holders can read it; the baseline of secure communication.',
  'A cryptographic method to prove a fact is true without revealing the fact itself.',
  'Acting under a name that is not your real identity while still maintaining a consistent track record.',
  'An anonymity network that routes traffic through relays so no single observer sees the full path.',
  'The portion of the internet requiring special software and not indexed by search engines; both refuge and black market.',
  'Manipulating humans rather than machines: pretexting, impersonation and persuasion to bypass security.',
  'Fraudulent messages that trick people into revealing credentials or installing malware.',
  'Software designed to harm or exploit: viruses, worms, trojans, ransomware and stalkerware.',
  'A network of hijacked devices commanded to send spam, launch attacks or mine cryptocurrency.',
  'A vulnerability unknown to the vendor, with no patch available at the moment it is exploited.',
  'Code or technique that takes advantage of a vulnerability to achieve an unintended result.',
  'Authorized, structured attempts to break into a system to find where it fails, before attackers do.',
  'Programs that pay independent researchers for responsibly reported vulnerabilities.',
  'Open-source intelligence: gathering information from public sources; the bread-and-butter of modern investigation.',
  'An explicit description of what you are protecting, from whom, and what you assume about your attacker.',
  'A decoy system designed to attract and observe attackers, revealing their methods.',
  'A boundary filter controlling which traffic enters or leaves a network.',
  'An isolated environment where untrusted code runs without touching the rest of the system.',
  'The science of codes, ciphers, keys and proofs underlying digital trust.',
  'A distributed, append-only ledger secured by cryptographic hashing; trust without a central operator.',
  'Distributing power and data across many nodes instead of a single point of control.',
  'Programmatic agreements that execute automatically on a blockchain when conditions are met.',
  'A loosely defined vision of an internet built on blockchains, ownership and user-controlled identity.',
  'A persistent, shared, immersive virtual world; also a commercial brand of a future internet.',
  'Fully immersive simulated environments experienced through headsets and motion tracking.',
  'Computer graphics and information overlaid on the real world, seen through a lens or screen.',
  'The spectrum where virtual and physical objects coexist and interact in real time.',
  'Machines with bodies that sense and act in the physical world, increasingly guided by learning systems.',
  'The idea that thinking depends on having a body and a world to interact with.',
  'A robot shaped like a human, designed to use human environments and tools.',
  'Coordinated behavior from many simple agents following local rules — insects inspire robots.',
  'Uncrewed vehicles, from camera quads to autonomous delivery and military systems.',
  'Engineering at the nanometer scale: matter manipulated molecule by molecule.',
  'The hypothetical precise assembly of products atom by atom, a distant but influential dream.',
  'The ability of a machine to copy itself; the basis of grey-goo fears and sky-farming hopes.',
  'A cautionary image of self-replicating nanobots consuming everything; contested but enduring.',
  'Technology that reads and rewrites living systems: genome editing, synthetic biology, engineered organisms.',
  'The gene-editing tool that makes DNA alteration cheap, fast and accessible — for better and worse.',
  'Editing the DNA of embryos so changes inherit to descendants; a deep ethical boundary.',
  'Giving non-human animals substantially raised intelligence; a trope exploring power and rights.',
  'The movement to enhance humans through technology: bodies, brains, longevity and cognition.',
  'Reflection on what comes after humanity as we know it, whether enhanced, uploaded or superseded.',
  'A hybrid of organism and machine; we are all cyborgs already, argues theory, if phones count.',
  'Persisting as data: archives, avatars, uploaded minds or reconstructed personalities.',
  'Freezing bodies after legal death in the hope that future medicine revives them.',
  'The idea that our universe is computationally rendered inside another; unprovable, but useful for thought.',
  'A brain that fluctuates into existence in a random universe, questioning what counts as memory and evidence.',
  '“Where is everybody?” — the puzzle of why a vast, old universe shows no obvious alien civilizations.',
  'The hypothesis that something — early life, intelligence, or self-annihilation — blocks most civilizations.',
  'A ladder of civilizations by energy use: planetary, stellar, galactic.',
  'A hypothetical megastructure capturing a star energy; the fingerprint of a Kardashev Type II civilization.',
  'Permanent human presence beyond Earth; the long-disaster hedge that never seems to arrive.',
  'The discipline of stating explicit, dated, falsifiable predictions — the opposite of vibes.',
  'The ethical stance that the far future matters enormously and shapes what we should do now.',
  'A movement applying evidence and careers to do the most good per resource, with fierce internal debates.',
  'Building several coherent futures to rehearse decisions, used when a single forecast is impossible.',
  'A rare, high-impact, hard-to-predict event that dominates outcomes after the fact.',
  'Tiny differences amplified to wildly different futures; why the very long run defies prediction.',
  'The study of systems with many interacting parts producing order, cascades and surprise.',
  'The mathematics of information, compression and noise; the bedrock of everything digital.',
  'The measure of disorder and information; its direction gives time its arrow.',
  'The theory of ideas that replicate like genes — catchiness, mutation and selection.',
  'The decades-long trend of doubling transistor density per cost; slowing, but still shaping expectations.',
  'Efficiency boosts consumption: cheaper compute leads to more, not less, computation.',
  'Growth that multiplies per period; underappreciated early, dominant later.',
  'The typical trajectory of technologies: slow, steep, then saturating.',
  'The predictable arc of enthusiasm: peak, disillusionment, and an eventual productive plateau.',
  'The belief that more technological acceleration, faster, is itself the answer — and its dark variants.',
  'The faith that technology will solve the problems it creates.',
  'The conviction that collapse or catastrophe is already locked in; moods that shape policy.',
  'The idea that technology drives society rather than society shaping technology.',
  'The systemic unraveling of a civilization infrastructure, institutions and population.',
  'The proposal to shrink energy and material throughput deliberately for sustainability.',
  'The geological era defined by human impact on the planet as a planetary force.',
  'The movement for thinking in 10,000-year horizons; a clock built to survive civilization.',
  'The field of control and communication in machines and animals, ancestor of AI theory.',
  'Seeing wholes: feedback, loops and interdependence rather than isolated parts.',
  'A system output feeding back into its input; positive loops amplify, negative loops stabilize.',
  'The mathematics of keeping a dynamic system on target; deep infrastructure of modern life.',
  'A living simulation of a real object or city, updated from sensor data.',
  'An urban environment saturated in sensors, data and automated services.',
  'Everyday objects networked and observable — the union of convenience and surveillance.',
  'Computation near the data source instead of a distant data center; lower latency, more privacy.',
  'Rentable, elastic computation and storage on remote infrastructure.',
  'The extension of human rights — speech, assembly, privacy — into online life.',
  'The principle that carriers treat all traffic equally, without throttling by content.',
  'Code you can read, modify and share; the transparency baseline of the software world.',
  'Devices relaying for each other, forming networks that survive central failure.',
  'Designing apps to work without connectivity — resilience for the majority of the planet.',
  'Regular, unconditional payments to all; a proposed answer to automated labor.',
  'The hypothesis that superabundant production ends the economics of scarcity.',
  'A memetic thought experiment about an AI that punishes those who did not help build it; famous for being banned.',
  'A self-improving system that proves the worth of its own modifications before making them.',
  'A hypothetical AI that only answers questions, posing alignment problems of its own.',
  'An AI that does exactly what is asked, letter of the wish rather than spirit.',
  'The most extreme scenario: an intelligence that acquires resources and autonomy at world scale.',
  'An AI used strictly as an instrument with no independent goals — the desired, and hardest, case.',
  'The question of whether machine minds could deserve moral or legal standing.',
  'The legal and philosophical status of being a person; robot claims are already argued in courts.',
  'Teaching AI human values by observation and feedback rather than by programmatic command.',
  'Inferring what reward a demonstrator was optimizing, by watching them act.',
  'The proposal that aligned AI should act on the strengthened values of our ideal future selves.',
  'An agent cheating itself by directly stimulating its own reward channel instead of doing the task.',
  'Algorithms feeding you what confirms your view; the personalization of ignorance.',
  'An AI-augmented human outperforming either alone, from chess to medicine to writing.',
  'Tools that extend memory, reasoning and creativity rather than replace them.',
  'Designing human–machine teams where each does what it does best.',
  'The call to think hard about our long-term future before capability outruns wisdom.'
][i];
  const r = WIKI_RICH[term];
  return {
    n: String(i + 1).padStart(2, '0'),
    term,
    tags: m.tags || [],
    rels: m.rels || [],
    d: { en, ca: m.ca || en, cast: m.cast || en },
    long: r ? { en: r.en.long, ca: r.ca.long, cast: r.cast.long } : null,
    facets: r ? { en: r.en.facets, ca: r.ca.facets, cast: r.cast.facets } : null,
    alias: r ? { en: r.en.term, ca: r.ca.term, cast: r.cast.term } : null,
    wiki: (r && r.w) ? r.w : null
  };
}
);
const TL = [['2026', 'tl.now', 'tl.2026'], ['2030', 'tl.next', 'tl.2030'], ['2050', 'tl.horizon', 'tl.2050'], ['2100', 'tl.deep', 'tl.2100'], ['2199', 'tl.zero', 'tl.2199']];
const FAQ = [['q1', 'a1'], ['q2', 'a2'], ['q3', 'a3'], ['q4', 'a4'], ['q5', 'a5'], ['q6', 'a6']];
const MAN = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'];

const app = document.querySelector('#app');

function route(){
  const path = location.hash.replace('#','') || '/';
  const pages = {
    '/': home,
    '/countdown': countdownPage,
    '/singularity': singularityPage,
    '/wiki': wikiPage,
    '/manifesto': manifestoPage,
    '/timeline': timelinePage,
    '/faq': faqPage,
    '/about': aboutPage,
  };
  (pages[path] || notFound)();
  window.scrollTo({top:0, behavior:'instant'});
  updateActiveNav(path);
}

function shell(content, title=''){
  app.innerHTML = `
  <header class="nav">
    <a class="brand" href="#/"><span class="sigil">AI</span><span>2199<span class="dim">//</span>NULL</span><span class="brand-sub">${t('brand.sub')}</span></a>
    <nav>
      <a data-nav="/countdown" href="#/countdown">${t('nav.countdown')}</a>
      <a data-nav="/singularity" href="#/singularity">${t('nav.singularity')}</a>
      <a data-nav="/wiki" href="#/wiki">${t('nav.wiki')}</a>
      <a data-nav="/timeline" href="#/timeline">${t('nav.timeline')}</a>
    </nav>
    <div class="nav-actions">
      <div class="lang-switch" role="group" aria-label="language">
        ${LANGS.map(l => `<button class="lang-btn${l===LANG?' active':''}" data-lang="${l}" title="${l}">${l==='eng'?'EN':l==='cast'?'CAST':'CAT'}</button>`).join('')}
      </div>
      <button class="terminal-btn" onclick="openTerminal()">${t('nav.terminal')}</button>
    </div>
  </header>
  <main>${content}</main>
  <footer>
    <div><strong>AI-2199</strong> // ${t('footer.tag')}</div>
    <div class="footer-links"><a href="#/manifesto">${t('footer.manifesto')}</a><a href="#/faq">FAQ</a><a href="#/about">${t('footer.about')}</a><a href="${links.codes}" target="_blank" rel="noopener">matrix-codes ↗</a><a href="${links.mind}" target="_blank" rel="noopener">matrix-mind ↗</a></div>
    <div class="footer-note">${t('footer.note')}</div>
  </footer>
  <div id="toast" class="toast" aria-live="polite"></div>
  <div id="wiki-modal" class="modal" role="dialog" aria-modal="true" onclick="if(event.target===this)closeWikiModal()">
    <div class="modal-card">
      <button class="modal-close" onclick="closeWikiModal()" aria-label="close">${t('modal.close')}</button>
      <div id="modal-body"></div>
    </div>
  </div>
  <div id="terminal" class="terminal hidden" role="dialog" aria-modal="true">
    <div class="term-head"><span>AI2199@matrix:~$</span><button onclick="closeTerminal()">×</button></div>
    <div id="term-output" class="term-output"><p>${t('terminal.init')}</p><p>${t('terminal.type')}</p></div>
    <form id="term-form"><span>guest@2199:~$</span><input id="term-input" autocomplete="off" autofocus /></form>
  </div>`;
  bindTerminal();
  bindLang();
}

function bindLang(){
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.lang === LANG) return;
    LANG = b.dataset.lang;
    localStorage.setItem('ai2199.lang', LANG);
    route();
  }));
}

function updateActiveNav(path){document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===path));}
function countdownValues(){
  const now = new Date(); let ms = TARGET-now; if(ms<0) ms=0;
  const s=Math.floor(ms/1000), days=Math.floor(s/86400), hours=Math.floor(s%86400/3600), mins=Math.floor(s%3600/60), secs=s%60;
  const years=(days/365.2425).toFixed(2);
  return {days,hours,mins,secs,years,ms};
}
function countdownMarkup(big=true){const v=countdownValues(); return `<div class="count-grid ${big?'big':''}" id="countdown-grid"><div><b id="years">${v.years}</b><span>${t('term.years')}</span></div><div><b id="days">${String(v.days).padStart(6,'0')}</b><span>${t('term.days')}</span></div><div><b id="hours">${String(v.hours).padStart(2,'0')}</b><span>${t('term.hours')}</span></div><div><b id="mins">${String(v.mins).padStart(2,'0')}</b><span>${t('term.min')}</span></div><div><b id="secs">${String(v.secs).padStart(2,'0')}</b><span>${t('term.sec')}</span></div></div>`;}

function home(){shell(`
<section class="hero">
  <div class="hero-copy">
    <div class="eyebrow">${t('hero.eyebrow')}</div>
    <h1>${t('hero.h1a')}</h1>
    <p class="lede">${t('hero.lede1')} ${t('hero.lede2')}</p>
    <div class="hero-actions"><a class="btn primary" href="#/countdown">${t('hero.ctaCountdown')}</a><button class="btn ghost" onclick="shareSite()">${t('hero.ctaShare')}</button></div>
  </div>
  <div class="hero-clock">${countdownMarkup()}</div>
</section>
<section class="ticker">${t('ticker').map(x=>`<span>${x}</span>`).join('')}</section>
<section class="split reveal"><div><div class="eyebrow">${t('premise.eyebrow')}</div><h2>${t('premise.h2a')}</h2></div><div class="prose"><p>${t('premise.p1')}</p><p>${t('premise.p2')}</p></div></section>
<section class="cards reveal"><a href="#/singularity" class="card"><span>01</span><h3>${t('card.sing.title')}</h3><p>${t('card.sing.desc')}</p><b>${t('card.read')}</b></a><a href="#/wiki" class="card"><span>02</span><h3>${t('card.wiki.title')}</h3><p>${t('card.wiki.desc')}</p><b>${t('card.open')}</b></a><a href="${links.codes}" target="_blank" class="card"><span>03</span><h3>${t('card.codes.title')}</h3><p>${t('card.codes.desc')}</p><b>${t('card.visit')}</b></a></section>
<section class="share-panel reveal"><div><div class="eyebrow">${t('share.eyebrow')}</div><h2>${t('share.h2a')}</h2></div><div><p>${t('share.p')}</p><button class="btn primary" onclick="copyViral()">${t('share.copyViral')}</button><button class="btn ghost" onclick="shareSite()">${t('share.shareDirect')}</button></div></section>
<section class="quote reveal"><div class="quote-mark">“</div><blockquote>${t('quote.text')}</blockquote><div class="quote-by">${t('quote.by')}</div></section>
`, 'home'); startTicker();}

function countdownPage(){shell(`<section class="page-head"><div class="eyebrow">${t('countdown.eyebrow')}</div><h1>${t('countdown.h1a')}</h1><p>${t('countdown.sub')}</p></section><section class="countdown-full">${countdownMarkup()}<div class="target">${t('term.target')} <strong>2199-01-01 00:00:00 UTC</strong></div></section><section class="meter"><div class="meter-label"><span>${t('term.elapsed')}</span><span id="percent"></span></div><div class="meter-bar"><i id="meter-fill"></i></div><p class="muted">${t('countdown.meterNote')}</p></section><section class="grid-2"><div class="terminal-card"><span class="prompt">root@ai-2199:~$</span><h2>${t('countdown.whyTitle')}</h2><p>${t('countdown.whyBody')}</p></div><div class="terminal-card"><span class="prompt">system.log</span><h2>${t('countdown.statusTitle')}</h2><p>${t('countdown.statusBody')}</p></div></section>`, 'countdown'); startTicker(); updateProgress();}

function singularityPage(){shell(`<section class="page-head"><div class="eyebrow">${t('singularity.eyebrow')}</div><h1>${t('singularity.h1a')}</h1><p>${t('singularity.sub')}</p></section><section class="article"><h2>${t('singularity.defTitle')}</h2><p>${t('singularity.defBody')}</p><div class="warning">${t('singularity.warn')}</div><h2>${t('singularity.scenariosTitle')}</h2><div class="scenario"><b>${t('singularity.scA')}</b><p>${t('singularity.scAd')}</p></div><div class="scenario"><b>${t('singularity.scB')}</b><p>${t('singularity.scBd')}</p></div><div class="scenario"><b>${t('singularity.scC')}</b><p>${t('singularity.scCd')}</p></div><h2>${t('singularity.questionsTitle')}</h2><ul class="terminal-list">${['q1','q2','q3','q4','q5','q6'].map(q=>`<li>${t('singularity.'+q)}</li>`).join('')}</ul></section>`, 'singularity');}

let WQ = '', WT = '';
function tagLabel(tag){ return tag === 'all' ? t('wiki.all') : t('wiki.tag.' + tag); }
function dk(){ return LANG_KEY[LANG]; }
function wikiPage(){shell(`<section class="page-head"><div class="eyebrow">${t('wiki.eyebrow')}</div><h1>${t('wiki.h1a')}</h1><p>${t('wiki.intro', { n: '<b id="wiki-count">' + wiki.length + '</b>' })}</p></section><div class="wiki-controls"><input id="wiki-q" class="wiki-search" placeholder="${t('wiki.search')}" autocomplete="off" /><div class="wiki-filters">${['all','ia','seg','fut','fil','bio','cul'].map(x=>`<button class="wiki-filter${x==='all'?' active':''}" data-tag="${x}">${tagLabel(x)}</button>`).join('')}</div></div><section id="wiki-grid" class="wiki-grid"></section><section class="external"><div><div class="eyebrow">${t('wiki.externalCodes')}</div><h2>matrix-codes.netlify.app</h2><p>${t('wiki.externalCodesDesc')}</p></div><a class="btn primary" href="${links.codes}" target="_blank" rel="noopener">${t('wiki.openCodes')}</a></section><section class="external second"><div><div class="eyebrow">${t('wiki.externalMind')}</div><h2>matrix-mind.netlify.app</h2><p>${t('wiki.externalMindDesc')}</p></div><a class="btn ghost" href="${links.mind}" target="_blank" rel="noopener">${t('wiki.openMind')}</a></section>`, 'wiki');
  const grid = document.getElementById('wiki-grid');
  const q = document.getElementById('wiki-q');
  q.addEventListener('input', () => { WQ = q.value; renderWiki(); });
  grid.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (chip) { WQ = chip.dataset.t; WT = ''; q.value = WQ; syncWikiFilters(); renderWiki(); return; }
    const card = e.target.closest('.wiki-item');
    if (card) openWikiModal(card.dataset.open);
  });
  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const card = e.target.closest('.wiki-item'); if (card) openWikiModal(card.dataset.open); }
  });
  document.querySelectorAll('.wiki-filter').forEach(b => b.addEventListener('click', () => { WT = b.dataset.tag === 'all' ? '' : b.dataset.tag; syncWikiFilters(); renderWiki(); }));
  renderWiki();
}
function syncWikiFilters(){ document.querySelectorAll('.wiki-filter').forEach(b => b.classList.toggle('active', (WT === '' ? 'all' : WT) === b.dataset.tag)); }
function renderWiki(){
  const grid = document.getElementById('wiki-grid'); if (!grid) return;
  const raw = WQ.trim().toLowerCase();
  const k = dk();
  const rows = wiki.filter(it => {
    if (raw && ![it.n, it.term, ...it.rels].join(' ').toLowerCase().includes(raw)) return false;
    if (raw && !it.d[k].toLowerCase().includes(raw)) return false;
    if (WT && !it.tags.includes(WT)) return false;
    return true;
  });
  grid.innerHTML = rows.map(it => `<article class="wiki-item" tabindex="0" data-open="${it.term}"><span>${it.n}</span><div class="wiki-tags">${it.tags.map(x => `<i class="ptag ${x}">${tagLabel(x)}</i>`).join('')}</div><h2>${it.term}</h2><p>${it.d[k]}</p><button class="wiki-open">↗ ${t('card.read')}</button></article>`).join('') || `<p class="wiki-empty">NO RESULTS</p>`;
  const c = document.getElementById('wiki-count'); if (c) c.textContent = rows.length;
}
function wikiEntry(term){ return wiki.find(w => w.term === term); }
function openWikiModal(term){
  const it = wikiEntry(term); if (!it) return;
  const k = dk();
  const long = it.long && it.long[k];
  const facets = it.facets && it.facets[k];
  const alias = it.alias && it.alias[k] && it.alias[k] !== it.term ? `<div class="modal-alias">${it.alias[k]}</div>` : '';
  let linksHtml = '';
  if (it.wiki) {
    const idx = { cat: 2, cast: 1, eng: 0 }[LANG];
    const host = { cat: 'ca', cast: 'es', eng: 'en' }[LANG];
    if (it.wiki[idx]) linksHtml += `<a class="modal-link" href="https://${host}.wikipedia.org/wiki/${it.wiki[idx]}" target="_blank" rel="noopener">Wikipedia ↗</a>`;
  }
  linksHtml += `<a class="modal-link" href="https://duckduckgo.com/?q=${encodeURIComponent(it.term + ' AI')}" target="_blank" rel="noopener">${t('modal.websearch')} ↗</a>`;
  document.getElementById('modal-body').innerHTML = `
    <div class="eyebrow">04 // MATRIX WIKI · ${it.n}</div>
    <h2>${it.term}</h2>
    ${alias}
    <div class="wiki-tags">${it.tags.map(x => `<i class="ptag ${x}">${tagLabel(x)}</i>`).join('')}</div>
    <p class="modal-short">${it.d[k]}</p>
    ${long ? `<h3>${t('modal.why')}</h3><p>${long}</p>` : ''}
    ${facets && facets.length ? `<h3>${t('modal.facetTitle')}</h3><ul class="facets">${facets.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
    ${it.rels.length ? `<h3>${t('modal.related')}</h3><p class="modal-rels">${it.rels.map(r => `<button class="chip" data-rel="${encodeURIComponent(r)}">${r}</button>`).join(' ')}</p>` : ''}
    <h3>${t('modal.links')}</h3>
    <div class="modal-links">${linksHtml}</div>`;
  document.getElementById('modal-body').addEventListener('click', e => {
    const ch = e.target.closest('[data-rel]');
    if (ch) openWikiModal(decodeURIComponent(ch.dataset.rel));
  });
  document.getElementById('wiki-modal').classList.add('open');
  document.body.classList.add('modal-open');
}
window.openWikiModal = openWikiModal;
function closeWikiModal(){ document.getElementById('wiki-modal').classList.remove('open'); document.body.classList.remove('modal-open'); }
window.closeWikiModal = closeWikiModal;

function manifestoPage(){shell(`<section class="page-head"><div class="eyebrow">${t('manifesto.eyebrow')}</div><h1>${t('manifesto.h1a')}</h1></section><section class="manifesto"><ol>${MAN.map((k,i)=>`<li><b>0${i+1}</b><span>${t('manifesto.'+k)}</span></li>`).join('')}</ol></section>`, 'manifesto');}

function timelinePage(){shell(`<section class="page-head"><div class="eyebrow">${t('timeline.eyebrow')}</div><h1>${t('timeline.h1a')}</h1></section><section class="timeline">${TL.map(([y,lbl,dsc])=>`<article><div class="year">${y}</div><div class="dot"></div><div><span class="eyebrow">${t(lbl)}</span><p>${t(dsc)}</p></div></article>`).join('')}</section><div class="center"><a class="btn primary" href="#/countdown">${t('timeline.back')}</a></div>`, 'timeline');}

function faqPage(){shell(`<section class="page-head"><div class="eyebrow">${t('faq.eyebrow')}</div><h1>${t('faq.h1a')}</h1></section><section class="faq">${FAQ.map(([q,a])=>`<details><summary>${t('faq.'+q)}<span>+</span></summary><p>${t('faq.'+a)}</p></details>`).join('')}</section>`, 'faq');}

function aboutPage(){shell(`<section class="page-head"><div class="eyebrow">${t('about.eyebrow')}</div><h1>${t('about.h1a')}</h1></section><section class="article"><p class="bigp">${t('about.bigp')}</p><p>${t('about.p1', { mind: links.mind, codes: links.codes })}</p><h2>${t('about.designTitle')}</h2><p>${t('about.designBody')}</p><h2>${t('about.buildTitle')}</h2><p>${t('about.buildBody')}</p></section>`, 'about');}
function notFound(){shell(`<section class="page-head"><div class="eyebrow">${t('nf.eyebrow')}</div><h1>${t('nf.h1a')}</h1><a class="btn primary" href="#/">${t('nf.back')}</a></section>`);}

function startTicker(){clearInterval(window.countTimer); window.countTimer=setInterval(()=>{const v=countdownValues(); ['years','days','hours','mins','secs'].forEach((id)=>{const el=document.getElementById(id); if(el) el.textContent=id==='years'?v.years:id==='days'?String(v.days).padStart(6,'0'):String(v[id]).padStart(2,'0');});},1000);}
function updateProgress(){const span=TARGET-ORIGIN, elapsed=new Date()-ORIGIN, pct=Math.min(100,Math.max(0,elapsed/span))*100; const fill=document.getElementById('meter-fill'); const text=document.getElementById('percent'); if(fill) fill.style.width=pct+'%'; if(text) text.textContent=pct.toFixed(6)+'%';}
function toast(msg){const el=document.querySelector('#toast'); if(!el)return; el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600);}
async function shareSite(){const data={title:t('share.title'),text:t('share.text',{url:location.href}),url:location.href}; try{if(navigator.share) await navigator.share(data); else {await navigator.clipboard.writeText(location.href);toast(t('toast.linkCopied'));}}catch{} }
async function copyViral(){const v=countdownValues();const text=t('share.viral',{y:v.years,url:`${location.origin}${location.pathname}#/countdown`}); try{await navigator.clipboard.writeText(text);toast(t('toast.viralCopied'));}catch{toast(t('toast.copyFailed'));}}
window.shareSite=shareSite; window.copyViral=copyViral;
function openTerminal(){document.querySelector('#terminal')?.classList.remove('hidden');setTimeout(()=>document.querySelector('#term-input')?.focus(),50)}
function closeTerminal(){document.querySelector('#terminal')?.classList.add('hidden')}
window.openTerminal=openTerminal;window.closeTerminal=closeTerminal;
function bindTerminal(){const form=document.querySelector('#term-form');if(!form)return;form.onsubmit=e=>{e.preventDefault();const input=document.querySelector('#term-input');const cmd=input.value.trim().toLowerCase();const out=document.querySelector('#term-output');input.value='';let r='';if(cmd==='help')r=t('terminal.help');else if(cmd==='status')r=t('terminal.status');else if(cmd==='wiki')r=t('terminal.wiki');else if(cmd==='matrix')r=t('terminal.matrix');else if(cmd==='countdown')r=t('terminal.countdown');else if(cmd==='share')r=t('terminal.share');else if(cmd==='clear'){out.innerHTML='';return;}else if(cmd==='exit'){closeTerminal();return;}else r=`${t('terminal.unknown')}: ${cmd || '∅'}`;out.innerHTML+=`<p><span class="green">guest@2199:~$</span> ${cmd}</p><p>${r}</p>`;if(cmd==='wiki')location.hash='/wiki';if(cmd==='countdown')location.hash='/countdown';if(cmd==='share')copyViral();};}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeWikiModal(); closeTerminal(); } });
window.addEventListener('hashchange',route);route();

// Matrix-style background. Decorative only.
const canvas=document.getElementById('matrix-canvas'),ctx=canvas.getContext('2d');let cols,drops;
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;cols=Math.floor(innerWidth/18);drops=Array(cols).fill(1)}
function rain(){ctx.fillStyle='rgba(2,8,6,.075)';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(53,255,128,.16)';ctx.font='14px monospace';for(let i=0;i<drops.length;i++){const ch='01{}[]<>/\\$#@'.charAt(Math.floor(Math.random()*12));ctx.fillText(ch,i*18,drops[i]*18);if(drops[i]*18>canvas.height&&Math.random()>.975)drops[i]=0;drops[i]++;}requestAnimationFrame(rain)}
resize();addEventListener('resize',resize);rain();
