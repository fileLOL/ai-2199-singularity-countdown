import './style.css';
import { R1 } from './wiki-data-1.js';
import { R2 } from './wiki-data-2.js';

const TARGET = new Date('2199-01-01T00:00:00Z');
const ORIGIN = new Date('2026-01-01T00:00:00Z');
const links = {
  codes: 'https://matrix-codes.netlify.app/',
  mind: 'https://matrix-mind.netlify.app/'
};

const WIKI_LOCALES = {};
[...R1, ...R2].forEach(([term, tags, rels, en, ca, cast]) => {
  if (term in WIKI_LOCALES) return;
  WIKI_LOCALES[term] = { tags, rels, en, ca, cast };
});

const wiki = [
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
].map((t, i) => { const m = WIKI_LOCALES[t] || {}; const en = m.en || [
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
][i]; return [String(i + 1).padStart(2, '0'), t, m.tags || [], m.rels || [], { en, ca: m.ca || en, cast: m.cast || en }]; }
);

const milestones = [
  ['2026', 'NOW', 'The clock starts here. AI is already a general-purpose interface to knowledge, code and creation.'],
  ['2030', 'NEXT', 'Near-term scenario space: stronger agents, robotics, scientific automation and increasingly autonomous software.'],
  ['2050', 'HORIZON', 'A deliberately uncertain horizon: machine intelligence, energy, biology and robotics could reshape institutions.'],
  ['2100', 'DEEP FUTURE', 'Forecasting becomes fragile. The point is not certainty; it is to keep asking what values survive technological change.'],
  ['2199', 'ZERO', 'The countdown reaches its symbolic endpoint. The real experiment is what humanity did with the time before it.']
];

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
    <a class="brand" href="#/"><span class="sigil">AI</span><span>2199<span class="dim">//</span>NULL</span></a>
    <nav>
      <a data-nav="/countdown" href="#/countdown">COUNTDOWN</a>
      <a data-nav="/singularity" href="#/singularity">SINGULARITY</a>
      <a data-nav="/wiki" href="#/wiki">WIKI</a>
      <a data-nav="/timeline" href="#/timeline">TIMELINE</a>
    </nav>
    <button class="terminal-btn" onclick="openTerminal()">[ TERMINAL ]</button>
  </header>
  <main>${content}</main>
  <footer>
    <div><strong>AI-2199</strong> // A long-horizon thought experiment</div>
    <div class="footer-links"><a href="#/manifesto">Manifesto</a><a href="#/faq">FAQ</a><a href="#/about">About</a><a href="${links.codes}" target="_blank" rel="noopener">matrix-codes ↗</a><a href="${links.mind}" target="_blank" rel="noopener">matrix-mind ↗</a></div>
    <div class="footer-note">No prophecy. No certainty. Just a clock.</div>
  </footer>
  <div id="toast" class="toast" aria-live="polite"></div>
  <div id="terminal" class="terminal hidden" role="dialog" aria-modal="true">
    <div class="term-head"><span>AI2199@matrix:~$</span><button onclick="closeTerminal()">×</button></div>
    <div id="term-output" class="term-output"><p>AI-2199 secure shell initialized.</p><p>Type <b>help</b> for commands.</p></div>
    <form id="term-form"><span>guest@2199:~$</span><input id="term-input" autocomplete="off" autofocus /></form>
  </div>`;
  bindTerminal();
}

function updateActiveNav(path){document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===path));}
function countdownValues(){
  const now = new Date(); let ms = TARGET-now; if(ms<0) ms=0;
  const s=Math.floor(ms/1000), days=Math.floor(s/86400), hours=Math.floor(s%86400/3600), mins=Math.floor(s%3600/60), secs=s%60;
  const years=(days/365.2425).toFixed(2);
  return {days,hours,mins,secs,years,ms};
}
function countdownMarkup(big=true){const v=countdownValues(); return `<div class="count-grid ${big?'big':''}" id="countdown-grid"><div><b id="years">${v.years}</b><span>YEARS</span></div><div><b id="days">${String(v.days).padStart(6,'0')}</b><span>DAYS</span></div><div><b id="hours">${String(v.hours).padStart(2,'0')}</b><span>HOURS</span></div><div><b id="mins">${String(v.mins).padStart(2,'0')}</b><span>MIN</span></div><div><b id="secs">${String(v.secs).padStart(2,'0')}</b><span>SEC</span></div></div>`;}

function home(){shell(`
<section class="hero">
  <div class="hero-copy">
    <div class="eyebrow">[ LONG HORIZON PROTOCOL // ONLINE ]</div>
    <h1>THE CLOCK IS<br><span>ALREADY RUNNING.</span></h1>
    <p class="lede">A countdown to <strong>01.01.2199</strong> — the symbolic horizon for a question that may define this century: <em>what happens when machine intelligence stops being merely a tool?</em></p>
    <div class="hero-actions"><a class="btn primary" href="#/countdown">ENTER THE COUNTDOWN →</a><button class="btn ghost" onclick="shareSite()">↗ SHARE THE CLOCK</button></div>
  </div>
  <div class="hero-clock">${countdownMarkup()}</div>
</section>
<section class="ticker"><span>2199</span><span>AGI</span><span>ASI?</span><span>HUMANITY</span><span>ETHICS</span><span>MATRIX</span><span>2199</span></section>
<section class="split reveal"><div><div class="eyebrow">01 // THE PREMISE</div><h2>Not a prediction.<br><span>A pressure test.</span></h2></div><div class="prose"><p>Nobody knows if a technological singularity will happen, what form it would take, or whether “singularity” is even the right word. This site turns that uncertainty into a visual object: <strong>a clock pointed at 2199.</strong></p><p>The date is intentionally distant. It gives us room to think about intelligence, autonomy, power, creativity, safety, identity and the future without pretending we can forecast the next 173 years.</p></div></section>
<section class="cards reveal"><a href="#/singularity" class="card"><span>01</span><h3>What is the singularity?</h3><p>Definitions, scenarios and the arguments around recursive improvement.</p><b>READ FILE →</b></a><a href="#/wiki" class="card"><span>02</span><h3>Matrix Wiki</h3><p>Decode the language: AGI, ASI, cyberpunk, simulation, agents and more.</p><b>OPEN WIKI →</b></a><a href="${links.codes}" target="_blank" class="card"><span>03</span><h3>Matrix Codes</h3><p>A connected project for code, experiments and the ethical hacker mindset.</p><b>VISIT PROJECT →</b></a></section>
<section class="share-panel reveal"><div><div class="eyebrow">THE VIRAL LOOP</div><h2>Send someone<br><span>173 years into the future.</span></h2></div><div><p>Copy a message with the live countdown. The recipient opens the same clock, then shares it again.</p><button class="btn primary" onclick="copyViral()">COPY VIRAL MESSAGE</button><button class="btn ghost" onclick="shareSite()">SHARE DIRECTLY</button></div></section>
<section class="quote reveal"><div class="quote-mark">“</div><blockquote>The future is not a date. It is everything we decide before the date arrives.</blockquote><div class="quote-by">AI-2199 // ORIGINAL TEXT</div></section>
`, 'home'); startTicker();}

function countdownPage(){shell(`<section class="page-head"><div class="eyebrow">02 // COUNTDOWN PROTOCOL</div><h1>ZERO HOUR:<br><span>01 JAN 2199</span></h1><p>One fixed date. A constantly moving present.</p></section><section class="countdown-full">${countdownMarkup()}<div class="target">TARGET TIMESTAMP <strong>2199-01-01 00:00:00 UTC</strong></div></section><section class="meter"><div class="meter-label"><span>TIME ELAPSED SINCE 2026</span><span id="percent"></span></div><div class="meter-bar"><i id="meter-fill"></i></div><p class="muted">The progress bar is deliberately symbolic: it measures the fraction of the 2026→2199 interval that has elapsed.</p></section><section class="grid-2"><div class="terminal-card"><span class="prompt">root@ai-2199:~$</span><h2>WHY 2199?</h2><p>Because a distant deadline changes the question. Instead of “what happens next year?”, we can ask “what kind of civilization could exist at the other end of this century?”</p></div><div class="terminal-card"><span class="prompt">system.log</span><h2>STATUS</h2><p><b class="green">ONLINE</b> — clock synchronized locally. No server-side countdown is required. Your browser calculates the remaining time.</p></div></section>`, 'countdown'); startTicker(); updateProgress();}

function singularityPage(){shell(`<section class="page-head"><div class="eyebrow">03 // SINGULARITY FILE</div><h1>WHEN INTELLIGENCE<br><span>CHANGES THE CURVE.</span></h1><p>What people mean when they say “AI singularity” — and what they don't know.</p></section><section class="article"><h2>Working definition</h2><p>The technological singularity is a hypothetical future point at which technological progress, particularly machine intelligence, accelerates so dramatically that established methods of forecasting become unreliable.</p><div class="warning"><b>UNKNOWN ≠ INEVITABLE</b><br>There is no agreed scientific date for a singularity. Different researchers use the term differently, and some reject the concept entirely.</div><h2>Three scenario families</h2><div class="scenario"><b>A // Gradual acceleration</b><p>AI capability improves quickly but remains embedded in institutions, markets, regulation and human decision-making.</p></div><div class="scenario"><b>B // Agentic acceleration</b><p>AI systems become capable of carrying out longer sequences of work, using tools, coordinating with other systems and contributing to research.</p></div><div class="scenario"><b>C // Recursive intelligence</b><p>A hypothetical regime in which systems materially improve the process of building better AI, creating a positive feedback loop. The speed and consequences of such a loop are uncertain.</p></div><h2>The human questions</h2><ul class="terminal-list"><li>Who controls increasingly capable systems?</li><li>What values should remain stable under technological change?</li><li>How do we preserve human agency?</li><li>What does “work” mean if cognitive labor becomes cheap?</li><li>How should security and openness be balanced?</li><li>What happens to identity when synthetic minds are everywhere?</li></ul></section>`, 'singularity');}

let WQ = '', WT = '', WL = 'en';
const TAG_LABELS = {
  all: { en: 'ALL', ca: 'TOTES', cast: 'TODAS' },
  ia: { en: 'INTELLIGENCE', ca: 'INTEL·LIGÈNCIA', cast: 'INTELIGENCIA' },
  seg: { en: 'SECURITY', ca: 'SEGURETAT', cast: 'SEGURIDAD' },
  fut: { en: 'FUTURE', ca: 'FUTUR', cast: 'FUTURO' },
  fil: { en: 'PHILOSOPHY', ca: 'FILOSOFIA', cast: 'FILOSOFÍA' },
  bio: { en: 'LIFE', ca: 'VIDA', cast: 'VIDA' },
  cul: { en: 'CULTURE', ca: 'CULTURA', cast: 'CULTURA' },
  rel: { en: 'RELATED:', ca: 'RELACIONATS:', cast: 'RELACIONADOS:' }
};
function wikiPage(){shell(`<section class="page-head"><div class="eyebrow">04 // MATRIX WIKI</div><h1>DECODE<br><span>THE FUTURE.</span></h1><p>An extensive field guide to the vocabulary behind AI-2199 — <b id="wiki-count">${wiki.length}</b>/${wiki.length} entries and counting.</p></section><div class="wiki-controls"><input id="wiki-q" class="wiki-search" placeholder="SEARCH A TERM…" autocomplete="off" /><div class="wiki-filters">${['all','ia','seg','fut','fil','bio','cul'].map(t=>`<button class="wiki-filter${t==='all'?' active':''}" data-tag="${t}">${TAG_LABELS[t][WL]}</button>`).join('')}</div><div class="wiki-langs">${['en','ca','cast'].map(l=>`<button class="wiki-lang${l===WL?' active':''}" data-lang="${l}">${l==='ca'?'CAT':l==='cast'?'CAST':'EN'}</button>`).join('')}</div></div><section id="wiki-grid" class="wiki-grid"></section><section class="external"><div><div class="eyebrow">CONNECTED NODE</div><h2>matrix-codes.netlify.app</h2><p>Code, experiments and the hacker side of the project.</p></div><a class="btn primary" href="${links.codes}" target="_blank" rel="noopener">OPEN MATRIX CODES ↗</a></section><section class="external second"><div><div class="eyebrow">ORIGIN PROJECT</div><h2>matrix-mind.netlify.app</h2><p>AI-2199 is presented as a project of Matrix Mind.</p></div><a class="btn ghost" href="${links.mind}" target="_blank" rel="noopener">OPEN MATRIX MIND ↗</a></section>`, 'wiki');
  const grid = document.getElementById('wiki-grid');
  const q = document.getElementById('wiki-q');
  q.addEventListener('input', () => { WQ = q.value; renderWiki(); });
  grid.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (chip) { WQ = chip.dataset.t; WT = ''; q.value = WQ; syncWikiFilters(); renderWiki(); }
  });
  document.querySelectorAll('.wiki-filter').forEach(b => b.addEventListener('click', () => { WT = b.dataset.tag === 'all' ? '' : b.dataset.tag; syncWikiFilters(); renderWiki(); }));
  document.querySelectorAll('.wiki-lang').forEach(b => b.addEventListener('click', () => {
    WL = b.dataset.lang;
    document.querySelectorAll('.wiki-lang').forEach(x => x.classList.toggle('active', x === b));
    document.querySelectorAll('.wiki-filter').forEach(x => x.textContent = TAG_LABELS[x.dataset.tag][WL]);
    renderWiki();
  }));
  renderWiki();
}
function syncWikiFilters(){ document.querySelectorAll('.wiki-filter').forEach(b => b.classList.toggle('active', (WT === '' ? 'all' : WT) === b.dataset.tag)); }
function renderWiki(){
  const grid = document.getElementById('wiki-grid'); if (!grid) return;
  const raw = WQ.trim().toLowerCase();
  const rows = wiki.filter(([n, t, tags, rels, d]) => {
    if (raw && ![n, t, ...rels, d.en, d.ca, d.cast].join(' ').toLowerCase().includes(raw)) return false;
    if (WT && !tags.includes(WT)) return false;
    return true;
  });
  grid.innerHTML = rows.map(([n, t, tags, rels, d]) => `<article class="wiki-item"><span>${n}</span><div class="wiki-tags">${tags.map(x => `<i class="ptag ${x}">${TAG_LABELS[x][WL]}</i>`).join('')}</div><h2>${t}</h2><p>${d[WL]}</p>${rels.length ? `<p class="wiki-rel">${TAG_LABELS.rel[WL]} ${rels.map(r => `<button class="chip" data-t="${r}">${r}</button>`).join(' ')}</p>` : ''}</article>`).join('') || `<p class="wiki-empty">NO RESULTS</p>`;
  const c = document.getElementById('wiki-count'); if (c) c.textContent = rows.length;
}

function manifestoPage(){shell(`<section class="page-head"><div class="eyebrow">05 // MANIFESTO</div><h1>BUILD THE FUTURE.<br><span>QUESTION THE SYSTEM.</span></h1></section><section class="manifesto"><ol>${['Curiosity before certainty.','Capability without ethics is incomplete.','Security research should protect people.','Human agency matters even when machines become more capable.','Long-term thinking is a technology too.','A countdown is useful when it makes us act in the present.'].map((x,i)=>`<li><b>0${i+1}</b><span>${x}</span></li>`).join('')}</ol></section>`, 'manifesto');}

function timelinePage(){shell(`<section class="page-head"><div class="eyebrow">06 // TIMELINE</div><h1>173 YEARS.<br><span>ONE UNKNOWN.</span></h1></section><section class="timeline">${milestones.map(([y,t,d])=>`<article><div class="year">${y}</div><div class="dot"></div><div><span class="eyebrow">${t}</span><p>${d}</p></div></article>`).join('')}</section><div class="center"><a class="btn primary" href="#/countdown">RETURN TO CLOCK →</a></div>`, 'timeline');}

function faqPage(){shell(`<section class="page-head"><div class="eyebrow">07 // FAQ</div><h1>QUESTIONS<br><span>FROM THE TERMINAL.</span></h1></section><section class="faq">${[['Is 2199 a prediction?','No. It is a symbolic target date and a thought experiment. The countdown should not be interpreted as a scientific forecast.'],['Why talk about a “singularity”?','Because the term is useful for exploring a family of hypotheses about extremely rapid technological change. It remains contested and uncertain.'],['Who made AI-2199?','AI-2199 is a project of Matrix Mind. The site links to matrix-mind.netlify.app and the related Matrix Codes project.'],['Can I share the countdown?','Yes. Use the share button or copy the viral message. The page works without an account.'],['Does the site track me?','The front-end is designed to work without a database or login. If you add analytics later, update the privacy notice accordingly.'],['Can I fork it?','Yes. Treat the code as an experimental starting point and replace the branding/links if you create your own version.']].map(([q,a])=>`<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join('')}</section>`, 'faq');}

function aboutPage(){shell(`<section class="page-head"><div class="eyebrow">08 // ABOUT</div><h1>AI-2199<br><span>IS A SIGNAL.</span></h1></section><section class="article"><p class="bigp">A cinematic web experiment about the long future of machine intelligence.</p><p>Project of <a href="${links.mind}" target="_blank">Matrix Mind</a>. Connected to <a href="${links.codes}" target="_blank">Matrix Codes</a>.</p><h2>Design language</h2><p>Dark terminal surfaces, phosphor-green highlights, scanlines, monospaced typography, glitch accents and Matrix-inspired code rain. The visual language is intentionally fictional and cyberpunk; it does not represent a claim that reality is a simulation.</p><h2>Build notes</h2><p>Static front-end. The countdown runs in the browser. No backend is required. This makes it straightforward to deploy on Netlify, Vercel or GitHub Pages.</p></section>`, 'about');}
function notFound(){shell(`<section class="page-head"><div class="eyebrow">ERROR 404</div><h1>NODE NOT<br><span>FOUND.</span></h1><a class="btn primary" href="#/">RETURN HOME</a></section>`);}

function startTicker(){clearInterval(window.countTimer); window.countTimer=setInterval(()=>{const v=countdownValues(); ['years','days','hours','mins','secs'].forEach((id)=>{const el=document.getElementById(id); if(el) el.textContent=id==='years'?v.years:id==='days'?String(v.days).padStart(6,'0'):String(v[id]).padStart(2,'0');});},1000);}
function updateProgress(){const span=TARGET-ORIGIN, elapsed=new Date()-ORIGIN, pct=Math.min(100,Math.max(0,elapsed/span))*100; const fill=document.getElementById('meter-fill'); const text=document.getElementById('percent'); if(fill) fill.style.width=pct+'%'; if(text) text.textContent=pct.toFixed(6)+'%';}
function toast(msg){const t=document.querySelector('#toast'); if(!t)return; t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);}
async function shareSite(){const data={title:'AI-2199 — The Singularity Countdown',text:`The clock is running. See how much time remains until 01.01.2199 → ${location.href}`}; try{if(navigator.share) await navigator.share(data); else {await navigator.clipboard.writeText(location.href);toast('LINK COPIED TO CLIPBOARD');}}catch{} }
async function copyViral(){const v=countdownValues();const text=`There are ${v.years} years left until 01.01.2199. AI-2199 is counting down to the symbolic horizon of the singularity. How much time do we have? ${location.origin}${location.pathname}#/countdown`; try{await navigator.clipboard.writeText(text);toast('VIRAL MESSAGE COPIED');}catch{toast('COPY FAILED — SELECT THE LINK MANUALLY');}}
window.shareSite=shareSite; window.copyViral=copyViral;
function openTerminal(){document.querySelector('#terminal')?.classList.remove('hidden');setTimeout(()=>document.querySelector('#term-input')?.focus(),50)}
function closeTerminal(){document.querySelector('#terminal')?.classList.add('hidden')}
window.openTerminal=openTerminal;window.closeTerminal=closeTerminal;
function bindTerminal(){const form=document.querySelector('#term-form');if(!form)return;form.onsubmit=e=>{e.preventDefault();const input=document.querySelector('#term-input');const cmd=input.value.trim().toLowerCase();const out=document.querySelector('#term-output');input.value='';let r='';if(cmd==='help')r='commands: help · status · wiki · matrix · countdown · share · clear · exit';else if(cmd==='status')r='SYSTEM ONLINE // TARGET 2199-01-01 // ETHICAL MODE: ON';else if(cmd==='wiki')r='OPENING MATRIX WIKI…';else if(cmd==='matrix')r='FOLLOW THE GREEN NODE → matrix-codes.netlify.app';else if(cmd==='countdown')r='ROUTING TO COUNTDOWN…';else if(cmd==='share')r='COPYING SIGNAL…';else if(cmd==='clear'){out.innerHTML='';return;}else if(cmd==='exit'){closeTerminal();return;}else r=`unknown command: ${cmd || '∅'}`;out.innerHTML+=`<p><span class="green">guest@2199:~$</span> ${cmd}</p><p>${r}</p>`;if(cmd==='wiki')location.hash='/wiki';if(cmd==='countdown')location.hash='/countdown';if(cmd==='share')copyViral();};}
window.addEventListener('hashchange',route);route();

// Matrix-style background. Decorative only.
const canvas=document.getElementById('matrix-canvas'),ctx=canvas.getContext('2d');let cols,drops;
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;cols=Math.floor(innerWidth/18);drops=Array(cols).fill(1)}
function rain(){ctx.fillStyle='rgba(2,8,6,.075)';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(53,255,128,.16)';ctx.font='14px monospace';for(let i=0;i<drops.length;i++){const ch='01{}[]<>/\\$#@'.charAt(Math.floor(Math.random()*12));ctx.fillText(ch,i*18,drops[i]*18);if(drops[i]*18>canvas.height&&Math.random()>.975)drops[i]=0;drops[i]++;}requestAnimationFrame(rain)}
resize();addEventListener('resize',resize);rain();
