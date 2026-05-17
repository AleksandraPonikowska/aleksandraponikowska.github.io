import React from 'react';
import { ExternalLink } from 'lucide-react';
//import { features } from 'process';


const projects = [
  /*
  {
    title: "Themis Children Dashboard",
    desc: "CASSINI Hackathon leader. Built an end-to-end data pipeline & XGBRegressor (R2: 89%) for spatial data.",
    tags: ["Python", "XGBoost", "Copernicus API"],
    category: "data",
    featured: true,
    link: "https://github.com/twoj-profil/projekt",
    img: "https://taikai.azureedge.net/rOumV7J0BjrPTIrFIOQeqZPk1fRNPyC7qxFfOHo_MiM/rs:fit:1920:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9iNzg1YTkxMC0zY2M1LTExZjEtODQxOC1lZGE0MDJkY2JlMmJHcmFmaWthX2Jlel9uYXp3eS5wbmc"
  },
  */
  {
    title: "Space Water Solutions (CASSINI Hackathon)",
    desc: "Built an end-to-end data pipeline & XGBRegressor (R2: 89%) for spatial data.",
    tags: ["Python", "XGBoost", "Copernicus API"],
    category: "data",
    featured: true,
    link: "https://taikai.network/cassinihackathons/hackathons/space-for-water/projects/cmo65wsie05jwm5h3b9carom2/idea",
    img: "/hack.png"
  },
  {
    title: "Phishing URL Detector",
    desc: "ML classifier (87% accuracy) beating human baseline (67%). Custom feature engineering & optimization.",
    tags: ["ML", "Python", "Data Analysis"],
    category: "data",
    featured: true,
    link: "https://github.com/domgwarda/ml-project",
    img: "phish2.png"
  },
  /*
  {
    title: "Database System (MIT-based)",
    desc: "Implemented storage, buffering, relational algebra, and ACID transactions based on MIT 6.5830.",
    tags: ["Go", "Database Design", "ACID","Teamwork"],
    category: "games",
    featured: false,
    link: "",
    img: "https://img.itch.zone/aW1nLzIxMTA4MTA5LnBuZw==/315x250%23c/GWz117.png"
  },*/
  {
    title: "Local multiplayer bomberman",
    desc: "Local multiplayer 2.5D bomberman with customizable maps.",
    tags: ["Unity", "C#", "Game Design"],
    category: "games",
    featured: true,
    link: "https://kitkuu.itch.io/bomberman",
    img: "https://img.itch.zone/aW1nLzIzNTM0NzQ5LnBuZw==/315x250%23c/%2Bzskp%2B.png"
  },
  /*
  {
    title: "Interactive binsearch ",
    desc: "Implemented storage, buffering, relational algebra, and ACID transactions based on MIT 6.5830.",
    tags: ["Java", "Database Design", "ACID"],
    category: "games",
    featured: false,
    link: "https://github.com/twoj-profil/projekt",
    img: "https://img.itch.zone/aW1nLzIxMTA4MTA5LnBuZw==/315x250%23c/GWz117.png"
  },
  */
  {
    title: "Hellish resolution 3",
    desc: "A logic-driven 2D game inspired by the Resolution Principle in Mathematical Logic.",
    tags: ["Python", "Pygame", "Logic", "Teamwork"],
    category: "games",
    featured: false,
    link: "https://github.com/II-23/projekt-piekielna-rezolucja",
    img: "piekielna.png"
  },
  {
    title: "Vash Jump",
    desc: "Happy Jump but with Vash. Wow, he even has a gun!",
    tags: ["Unity", "C#", "2D Physics"],
    category: "games",
    featured: false,
    link: "https://kitkuu.itch.io/vash-jump",
    img: "vash.png"
  },
  {
    title: "Burgir master",
    desc: "A word-puzzle game built for Object-Oriented Programming course. Serve your cat customers by typing words based on requested syllables.",    
    tags: ["Ruby", "Ruby2D", "OOP", "Game Logic"],
    category: "games",
    featured: false,
    link: "https://github.com/AleksandraPonikowska/burgir-master",
    img: "burgir.png"
  },
  /*
  {
    title: "Routify",
    desc: "Implemented storage, buffering, relational algebra, and ACID transactions based on MIT 6.5830.",
    tags: ["Java", "Database Design", "ACID"],
    category: "games",
    featured: false,
    link: "https://github.com/twoj-profil/projekt",
    img: "https://img.itch.zone/aW1nLzIxMTA4MTA5LnBuZw==/315x250%23c/GWz117.png"
  },
  */
 /*
  {
    title: "Chrome site blocker ",
    desc: "Implemented storage, buffering, relational algebra, and ACID transactions based on MIT 6.5830.",
    tags: ["Java", "Database Design", "ACID"],
    category: "games",
    featured: false,
    link: "https://github.com/twoj-profil/projekt",
    img: "https://img.itch.zone/aW1nLzIxMTA4MTA5LnBuZw==/315x250%23c/GWz117.png"
  },
  */
 /*
  {
    title: "Glorpification",
    desc: "Implemented storage, buffering, relational algebra, and ACID transactions based on MIT 6.5830.",
    tags: ["Java", "Database Design", "ACID"],
    category: "games",
    featured: false,
    link: "https://github.com/twoj-profil/projekt",
    img: "https://img.itch.zone/aW1nLzIxMTA4MTA5LnBuZw==/315x250%23c/GWz117.png"
  },
  */
];





const App = () => {

  const [activeFilter, setActiveFilter] = React.useState(() => {
  const params = new URLSearchParams(window.location.search);
  return params.get('filter') || 'featured';
});

const handleFilterChange = (filter: string) => {
  let nextFilter: string;

  if (activeFilter === filter) {
    nextFilter = 'featured';
  } else {
    nextFilter = filter;
  }

  setActiveFilter(nextFilter);
  const params = new URLSearchParams(window.location.search);
  if (filter === 'featured') {
    params.delete('filter');
  } else {
    params.set('filter', filter);
  }
  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
};

const filteredProjects = projects.filter(p => {
  if (activeFilter === 'featured') return p.featured;
  if (activeFilter === 'all') return true;
  return p.category === activeFilter;
});

  return (
    
    <div className="
      min-h-screen w-full
      bg-[#FBF8F9] 
      bg-[linear-gradient(to_right,#FBEAED_2px,transparent_2px),linear-gradient(to_bottom,#FBEAED_2px,transparent_2px)] 
      bg-[size:40px_40px]
    ">
      
      <div className="max-w-5xl mx-auto px-8 py-12">

      <nav className="flex justify-end gap-8 mb-20 font-medium text-xl ">
        <a href="#projects" className="hover:text-red-800 transition">projects</a>
        <a href="#skills" className="hover:text-red-800 transition">skills</a>
        <a href="#education" className="hover:text-red-800 transition">education</a>
        <a href="#experience" className="hover:text-red-800 transition">experience</a>
      </nav>

      <header className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold mb-2 px-2">hi, i'm</h2>
          <h1 className="text-7xl font-black text-red-800 leading-none mb-4">
            Aleksandra<br />Ponikowska
          </h1>
          <p className="text-stone-400 text-xl font-bold px-1">
Computer Science student at UWr        </p>
        </div>
        
        <div className="relative flex ">
          <div className="w-64 h-64 bg-red-800 rounded-full flex items-center justify-center overflow-hidden">
             <img src="/ola.png" alt="Avatar" className="w-full mt-8 scale-140 object-cover absolute" />
          </div>
        </div>
      </header>

      
      

      <section id="projects" className="mb-32">
        <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-extrabold text-red-800">projects</h2>
        <div className="flex gap-3">
              {['data', 'games', 'all'].map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilterChange(f)}
                  className={`px-4 py-1 rounded-xl border-2  font-bold text-sm transition-all active:shadow-none ${
                    activeFilter === f ? 'bg-red-800 text-white border-red-800' : 'bg-white text-black border-stone-300'
                  }`}
                >
                  {f === 'featured' ? '★ featured' : `${f}`}
                </button>
              ))}
            </div></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group">
              <div className="border-2 border-black rounded-3xl overflow-hidden mb-4 bg-white transition-transform group-hover:-translate-y-1">
                <img src={project.img} alt={project.title} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold underline decoration-2">{project.title}</h3>
                <a 
    href={project.link} 
    target="_blank" 
    rel="noopener noreferrer" 
  >
                <ExternalLink size={20} className="cursor-pointer hover:text-red-700" />
              </a></div>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-400 text-white rounded-full text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-32">
  <h2 className="text-4xl font-extrabold text-red-800 mb-12">skills</h2>
  
  <div className="space-y-10">
    <div>
      <h3 className="text-sm uppercase tracking-widest text-gray-400 font-black">Data & Math</h3>
      <p className="text-xl font-bold text-gray-800 leading-relaxed">
        SQL (PostgreSQL) <span className="text-pencil-red mx-1">·</span> PyTorch <span className="text-pencil-red mx-1">·</span> Pandas <span className="text-pencil-red mx-1">·</span> NumPy <span className="text-pencil-red mx-1">·</span> Matplotlib <span className="text-pencil-red mx-1">·</span> Grafana <span className="text-pencil-red mx-1">·</span> Statistics & Probability
      </p>
    </div>

    <div>
      <h3 className="text-sm uppercase tracking-widest text-gray-400 font-black">Languages</h3>
      <p className="text-xl font-bold text-gray-800 leading-relaxed">
        Python <span className="text-pencil-red mx-1">·</span> Java <span className="text-pencil-red mx-1">·</span> C++ <span className="text-pencil-red mx-1">·</span> JavaScript
      </p>
    </div>

    <div>
      <h3 className="text-sm uppercase tracking-widest text-gray-400 font-black">Development & Tools</h3>
      <p className="text-xl font-bold text-gray-800 leading-relaxed">
        React <span className="text-pencil-red mx-1">·</span> Tailwind CSS <span className="text-pencil-red mx-1">·</span> Unity Engine <span className="text-pencil-red mx-1">·</span> Docker <span className="text-pencil-red mx-1">·</span> Linux <span className="text-pencil-red mx-1">·</span> Git
      </p>
    </div>

    <div>
      <h3 className="text-sm uppercase tracking-widest text-gray-400 font-black">Languages & Other</h3>
      <p className="text-xl font-bold text-gray-800 leading-relaxed">
        English (C1) <span className="text-pencil-red mx-1">·</span> Polish (Native) <span className="text-pencil-red mx-1">·</span> Algorithms Teaching
      </p>
    </div>
  </div>
</section>



<section id="education" className="scroll-mt-20 mb-32">
    <h2 className="text-4xl font-extrabold text-red-800 mb-12">education</h2>

  <div className="space-y-12">
    <div>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
        <h3 className="text-3xl font-black text-gray-800">University of Wrocław</h3>
        <span className="text-gray-400 font-black uppercase tracking-widest text-sm">
          Oct 2023 — March 2027 (Expected)
        </span>
      </div>

      <p className="text-xl font-bold text-gray-700">
        Bachelor of Science in Computer Science 
        <span className="text-pencil-red mx-2">·</span> 
        GPA: 4.41
      </p>

      </div></div>
</section>

<section id="experience" className="scroll-mt-20 mb-32">
    <h2 className="text-4xl font-extrabold text-red-800 mb-12">experience</h2>

  <div className="space-y-12">
    <div>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
        <h3 className="text-3xl font-black text-gray-800">Algorithms & CS Instructor</h3>
        <span className="text-gray-400 font-black uppercase tracking-widest text-sm">
          Sep 2025 — Present
        </span>
      </div>

      <p className="text-xl font-bold text-gray-700">
        University of Wrocław Patronage Program
        <span className="mx-2">·</span> 
        Wrocław, Poland
      </p>

      <div className="mt-6 space-y-3 text-lg">
        <div className="flex gap-3">
          <span className="font-black">→</span>
          <p className="font-semibold text-gray-700">
            Teaching programming logic, fundamental algorithms, and C++ to 20+ primary school students.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="font-black">→</span>
          <p className="font-semibold text-gray-700">
            Preparing and mentoring students for the Polish Junior Informatics Olympiad.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

   
    </div></div>
  );
};

export default App;