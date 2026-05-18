import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react';

const contact = {
  name: 'Vishal Charran',
  email: 'VishalRomelCharran@gmail.com',
  phone: '+1 (347) 574-8900',
  location: 'Queens, NY',
  github: 'https://github.com/VishalRomel',
  portfolio: 'https://vishalromel.github.io/MyPortfolio/',
  linkedin: 'https://www.linkedin.com/in/vishal-romel-c-36b1221bb/',
};

const roleCards = [
  {
    id: 'software',
    title: 'Software & AI',
    subtitle: 'SWE, AI Engineer, Frontend, Backend',
    icon: Code2,
    available: true,
  },
  {
    id: 'business',
    title: 'Business & Growth',
    subtitle: 'Sales Engineering, E-commerce, Paid Ads, Strategy',
    icon: BarChart3,
    available: true,
  },
  {
    id: 'design',
    title: 'Design & Creative',
    subtitle: 'Photoshop, Branding, UI/UX, Visual Content',
    icon: PenTool,
    available: false,
  },
  {
    id: 'teaching',
    title: 'Teaching & Tutoring',
    subtitle: 'CS Tutoring, Workshops, Mentorship',
    icon: GraduationCap,
    available: false,
  },
];

const profiles = {
  software: {
    eyebrow: 'Software & AI portfolio',
    headline: 'I build AI systems, full-stack products, and mobile apps with measurable lift.',
    intro:
      'I am a Computer Science graduate with production-minded experience across RAG systems, React, mobile apps, databases, cloud deployment, and team-led AI products.',
    resume: '/resumes/vishal-charran-coding-resume.pdf',
    resumeLabel: 'Download coding resume',
    accentIcon: BrainCircuit,
    fit: ['AI Engineer', 'Software Engineer', 'Full-stack Engineer', 'Frontend / Mobile'],
    metrics: [
      { label: 'RAG consistency', value: '98%', detail: 'Up from 80% after vector/RAG system work.' },
      { label: 'IVF search lift', value: '30%', detail: 'Improved embedding and chunking performance.' },
      { label: 'Student reach', value: '1,900+', detail: 'Club website launched for Code for All QC.' },
      { label: 'Hackathon result', value: 'Best AI', detail: 'CUNY Hackathon 2024 career coach project.' },
    ],
    snapshot: [
      'I build custom RAG systems with vector databases, embeddings, chunking tests, and AI response evaluation.',
      'I ship across web, backend, and mobile using React, React Native, Flask, Node, Java, Swift, Kotlin, SQL, MongoDB, Firebase, AWS, and Vercel.',
      'I am comfortable leading interns and cross-functional teams through Agile delivery, testing, debugging, and executive-ready demos.',
    ],
    experience: [
      {
        company: 'Research Foundation',
        role: 'Machine Learning Engineer',
        date: 'Jul 2024 - Sep 2024',
        icon: BrainCircuit,
        bullets: [
          'Optimized embeddings, chunking, and vector representations, producing a 30% improvement in IVF results.',
          'Engineered a custom RAG system with a vector database, improving response consistency from 80% to 98%.',
          'Led a Discord bot project using context-aware RAG results and earned IBM recognition for enterprise marketplace potential.',
        ],
      },
      {
        company: 'Queens College Tech Incubator',
        role: 'Software Engineer Intern',
        date: 'Oct 2022 - Jul 2023',
        icon: Cpu,
        bullets: [
          'Led interns building an AI chatbot that increased user engagement by 35% and cut support response time by 40%.',
          'Improved search accuracy so users found relevant information 50% faster.',
          'Used unit testing and debugging workflows to raise software efficiency by 30% across devices.',
        ],
      },
      {
        company: 'Code for All QC',
        role: 'Software Developer and Tutor',
        date: 'Sep 2022 - Jul 2024',
        icon: Users,
        bullets: [
          'Built and launched the official club website for 1,900+ members with React and Tailwind CSS.',
          'Tutored CS students in one-on-one and group settings, helping students outperform class GPA averages.',
        ],
      },
    ],
    projects: [
      {
        title: 'AI Exercise/Meal Prep Mobile App',
        stack: 'Java, OpenAI API, SQL, Android Studio',
        image: '/portfolio-images/fitness-app.webp',
        description:
          'AI-powered fitness and meal planning app that generates personalized weekly plans from user goals, preferences, and progress data.',
        highlights: ['OpenAI API', 'Personalized plans', 'SQL profiles', 'Android build'],
      },
      {
        title: 'Artificial Intelligence Career Coach',
        stack: 'Python, Flask, React, Milvus',
        image: '/portfolio-images/code-bg.webp',
        description:
          'Hackathon-winning AI tool that analyzes resumes, GitHub, and LinkedIn data against job postings to recommend stronger job matches.',
        highlights: ['Best AI Project', 'Vector search', 'Resume generator', '1,000 listings ranked'],
      },
      {
        title: 'Stock Trading Website',
        stack: 'JavaScript, Alpha Vantage API, Firebase',
        image: '/portfolio-images/stock-trading.webp',
        description:
          'Interactive stock market simulator with real-time stock data, cloud portfolios, Firebase auth, and performance tracking.',
        highlights: ['Realtime data', 'Firebase auth', 'Portfolio tracking', 'Trading simulator'],
      },
      {
        title: 'Automated Class Enrollment System',
        stack: 'Python, Selenium, AWS, Email automation',
        image: '/portfolio-images/class-bot.webp',
        description:
          'Cloud-hosted automation that monitored class availability, enrolled users when seats opened, and sent confirmation emails.',
        highlights: ['Selenium bot', 'AWS monitoring', 'Email alerts', 'Real-time checks'],
      },
    ],
    skills: [
      {
        label: 'Languages',
        items: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Swift', 'Kotlin'],
      },
      {
        label: 'Frameworks',
        items: ['React', 'React Native', 'Next.js', 'Node.js', 'Express', 'Flask', 'Django', 'Spring Boot'],
      },
      {
        label: 'AI / Data',
        items: ['OpenAI API', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Milvus', 'NumPy', 'Vector DBs'],
      },
      {
        label: 'Cloud / Tools',
        items: ['AWS', 'Vercel', 'Docker', 'GitHub', 'Firebase', 'Jest', 'Cypress', 'XCTest'],
      },
    ],
  },
  business: {
    eyebrow: 'Business & Growth portfolio',
    headline: 'I connect technical selling, e-commerce growth, and product storytelling.',
    intro:
      'I combine software depth with customer discovery, executive presentation, DTC growth, paid ads, and conversion-focused web strategy.',
    resume: '/resumes/vishal-charran-sales-engineer-resume.pdf',
    resumeLabel: 'Download sales engineer resume',
    accentIcon: BriefcaseBusiness,
    fit: ['Sales Engineer', 'Solutions Consultant', 'Technical Account roles', 'Growth / E-commerce'],
    metrics: [
      { label: 'E-commerce sales', value: '$100K+', detail: 'Built and scaled ComfyWon DTC sales.' },
      { label: 'Paid ad spend', value: '$25K+', detail: 'Managed Meta campaigns and creative testing.' },
      { label: 'Web clients closed', value: '10+', detail: 'Sold and delivered conversion-focused sites.' },
      { label: 'Lead conversion lift', value: '40-70%', detail: 'Improved client website flow and CTAs.' },
    ],
    snapshot: [
      'I can sell technical products because I can also build them and explain them in customer language.',
      'I have experience in discovery, positioning, paid ads, UGC creative, conversion messaging, and executive presentations.',
      'I work best where customer pain, product capability, and measurable business outcomes need to connect.',
    ],
    experience: [
      {
        company: 'ComfyWon / ShopComfyWon.com',
        role: 'Founder, E-commerce & Technical Solutions Lead',
        date: 'Sep 2025 - May 2026',
        icon: LineChart,
        bullets: [
          'Built and scaled a DTC brand to $100K+ in sales and 1,000+ products sold through positioning, paid ads, and conversion messaging.',
          'Managed $25K+ across Meta campaigns, UGC video, image ads, keyword campaigns, and product-angle experiments.',
          'Built ShopComfyWon.com with React and Python, focusing on customer experience and high-conversion website flow.',
        ],
      },
      {
        company: 'Research Foundation',
        role: 'Software Team Lead Intern',
        date: 'Jul 2024 - Sep 2024',
        icon: ShieldCheck,
        bullets: [
          'Led discovery, solution design, development, testing, and presentations for an AI/RAG system.',
          'Presented technical progress and business value to managers, showing AI consistency improvement from 80% to 98%.',
          'Communicated project value to executives, contributing to IBM recognition for enterprise marketplace adoption potential.',
        ],
      },
      {
        company: 'Freelance Web Solutions Consultant',
        role: 'Web Developer & Sales Consultant',
        date: 'Dec 2024 - Jul 2025',
        icon: Target,
        bullets: [
          'Increased client lead conversions by 40-70% with stronger calls-to-action, website flow, and conversion-focused design.',
          'Recommended digital growth strategies tied to estimated client revenue increases of 20-45% post-launch.',
          'Improved customer engagement by 50%+ with mobile optimization, lead capture, and trust-focused messaging.',
        ],
      },
    ],
    projects: [
      {
        title: 'ComfyWon DTC Growth System',
        stack: 'React, Python, Meta Ads, UGC, CRO',
        image: '/portfolio-images/code-bg.webp',
        description:
          'Built the technical and growth engine for an e-commerce wellness product brand, from site experience to paid acquisition testing.',
        highlights: ['$100K+ sales', '1,000+ units sold', '$25K+ ad spend', 'Creative testing'],
      },
      {
        title: 'AI Career Coach Pitch',
        stack: 'Product pitch, SaaS positioning, AI demo, customer value',
        image: '/portfolio-images/fitness-app.webp',
        description:
          'Translated a complex AI matching engine into a clear business use case for engineers and researchers from Google, Bloomberg, and JPMorgan.',
        highlights: ['Best AI Project', 'Executive demo', 'Competitive positioning', 'Discovery story'],
      },
      {
        title: 'Client Website Conversion Builds',
        stack: 'Sales discovery, UX, lead capture, analytics',
        image: '/portfolio-images/stock-trading.webp',
        description:
          'Sold, designed, and delivered websites that turned vague business goals into cleaner lead funnels and stronger trust signals.',
        highlights: ['10+ clients', '40-70% lift', '20-45% revenue impact', 'Mobile optimization'],
      },
    ],
    skills: [
      {
        label: 'Sales Motion',
        items: ['Technical discovery', 'Product demos', 'Executive presentation', 'Objection handling'],
      },
      {
        label: 'Growth',
        items: ['Meta Ads', 'UGC testing', 'Positioning', 'CRO', 'Customer research'],
      },
      {
        label: 'Technical',
        items: ['React', 'Python', 'AI/RAG systems', 'Cloud concepts', 'Data analytics'],
      },
      {
        label: 'Tools',
        items: ['CRM software', 'Salesforce', 'Microsoft Office', 'Analytics dashboards'],
      },
    ],
  },
  design: {
    eyebrow: 'Design & Creative path',
    headline: 'I am shaping this path around visual identity, UI polish, and content systems.',
    intro:
      'I am staging this section while I gather the creative case studies, visuals, and process notes that should live here.',
    resume: null,
    resumeLabel: '',
    accentIcon: PenTool,
    fit: ['UI/UX', 'Branding', 'Content design', 'Visual systems'],
    metrics: [
      { label: 'Status', value: 'Next', detail: 'I will add case studies and visuals here.' },
      { label: 'Focus', value: 'UI/UX', detail: 'My design process, assets, and brand work.' },
      { label: 'Assets', value: 'TBD', detail: 'I will replace these placeholders with real projects.' },
      { label: 'Goal', value: 'Proof', detail: 'I want this section to show taste, process, and output.' },
    ],
    snapshot: [
      'I plan to use this section for Photoshop, branding, UI/UX, visual content, and polished creative systems.',
      'I will add before/after visuals, process notes, and business goals for each creative project.',
    ],
    experience: [],
    projects: [],
    skills: [
      { label: 'Planned', items: ['Photoshop', 'Branding', 'UI/UX', 'Social content', 'Visual direction'] },
    ],
  },
  teaching: {
    eyebrow: 'Teaching & Tutoring path',
    headline: 'I use teaching, tutoring, and mentorship to make technical ideas easier to act on.',
    intro:
      'I am keeping this path available while I collect the detailed teaching portfolio, workshop materials, and student outcomes.',
    resume: null,
    resumeLabel: '',
    accentIcon: GraduationCap,
    fit: ['CS Tutor', 'Mentor', 'Workshop host', 'Student support'],
    metrics: [
      { label: 'Members served', value: '1,900+', detail: 'Code for All QC community website and events.' },
      { label: 'Topics', value: 'APIs+', detail: 'AI, security, careers, and project development.' },
      { label: 'Approach', value: 'Clear', detail: 'I break down complex concepts into practical steps.' },
      { label: 'Status', value: 'Later', detail: 'I will add more proof and testimonials here.' },
    ],
    snapshot: [
      'I plan to add tutoring wins, workshop materials, student testimonials, and CS concept demos.',
      'My Code for All experience gives this path a strong base, and I will expand it into a full section later.',
    ],
    experience: [],
    projects: [],
    skills: [{ label: 'Teaching', items: ['CS tutoring', 'Workshops', 'Mentorship', 'APIs', 'AI basics'] }],
  },
};

function App() {
  const [activeRole, setActiveRole] = useState('software');
  const activeProfile = profiles[activeRole];

  const activeCard = useMemo(
    () => roleCards.find((role) => role.id === activeRole) ?? roleCards[0],
    [activeRole],
  );

  const selectRole = (id, scroll = true) => {
    setActiveRole(id);
    if (scroll) {
      window.setTimeout(() => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 40);
    }
  };

  return (
    <div id="top" className="site-shell">
      <NeuralBackground />
      <Header />
      <UpdateNotice />

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} /> One person. Four hiring paths.
            </p>
            <h1 id="hero-title">
              <span>Vishal</span> Charran
            </h1>
            <p className="hero-subtitle">
              I organized my software, business, design, and teaching work so you can jump straight
              to the path that matches the role.
            </p>
          </div>

          <div className="desktop-map" aria-label="Role selector">
            <ConnectorLines />
            <ProfileHub activeCard={activeCard} onChoose={() => selectRole(activeRole)} />
            {roleCards.map((role, index) => (
              <RoleCard
                key={role.id}
                role={role}
                index={index}
                active={activeRole === role.id}
                className={`map-card map-card-${index + 1}`}
                onSelect={() => selectRole(role.id)}
              />
            ))}
          </div>

          <div className="mobile-path" aria-label="Mobile role selector">
            <ProfileHub activeCard={activeCard} onChoose={() => selectRole(activeRole)} compact />
            <div className="mobile-card-grid">
              {roleCards.map((role, index) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  index={index}
                  active={activeRole === role.id}
                  onSelect={() => selectRole(role.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="quick-strip" aria-label="Contact summary">
          <div>
            <MapPin size={18} />
            Queens, NY
          </div>
          <a href={`mailto:${contact.email}`}>
            <Mail size={18} />
            Email
          </a>
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>
            <Phone size={18} />
            Call
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            <FaGithub size={18} />
            GitHub
          </a>
        </section>

        <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-title">
          <div className="section-heading">
            <p className="eyebrow">
              <activeProfile.accentIcon size={16} />
              {activeProfile.eyebrow}
            </p>
            <h2 id="portfolio-title">{activeProfile.headline}</h2>
            <p>{activeProfile.intro}</p>
          </div>

          <div className="role-tabs" aria-label="Portfolio paths">
            {roleCards.map((role) => (
              <button
                type="button"
                key={role.id}
                className={activeRole === role.id ? 'active' : ''}
                onClick={() => selectRole(role.id, false)}
              >
                <role.icon size={18} />
                {role.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              className="role-detail"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: 'easeOut' }}
            >
              <RoleDetail profile={activeProfile} />
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

function UpdateNotice() {
  return (
    <aside className="update-notice" aria-label="Portfolio update notice">
      <Sparkles size={16} />
      <p>
        Major portfolio update in progress. Please be advised: this is an active rebuild, not the
        finished product yet.
      </p>
    </aside>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Vishal Charran home">
        <span className="brand-mark">VC</span>
        <span>Vishal Charran</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#portfolio">Portfolio</a>
        <a href={`mailto:${contact.email}`}>Contact</a>
        <a className="icon-link" href={contact.linkedin} aria-label="LinkedIn">
          <FaLinkedinIn size={18} />
        </a>
      </nav>
    </header>
  );
}

function NeuralBackground() {
  return (
    <div className="background-system" aria-hidden="true">
      <div className="grid-plane" />
      <div className="static-signals" />
      <div className="static-dots" />
    </div>
  );
}

function ConnectorLines() {
  return (
    <div className="connectors" aria-hidden="true">
      <span className="connector connector-left-top" />
      <span className="connector connector-left-bottom" />
      <span className="connector connector-right-top" />
      <span className="connector connector-right-bottom" />
    </div>
  );
}

function ProfileHub({ activeCard, onChoose, compact = false }) {
  return (
    <motion.div
      className={`profile-hub ${compact ? 'compact' : ''}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="avatar-ring">
        <img
          src="/images/vishal-face-card.jpg"
          alt="Portrait of Vishal Charran"
        />
      </div>
      <h2>
        <span>Vishal</span> Charran
      </h2>
      <p>I organized my software, business, design, and teaching work around the opportunity you have in mind.</p>
      <button type="button" className="primary-action" onClick={onChoose}>
        View {activeCard.title}
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}

function RoleCard({ role, active, onSelect, className = '', index }) {
  const Icon = role.icon;

  return (
    <motion.button
      type="button"
      className={`role-card ${className} ${active ? 'active' : ''}`}
      aria-label={`Open ${role.title} portfolio path`}
      onClick={onSelect}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 * index, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="role-icon">
        <Icon size={42} />
      </span>
      <span className="role-title">{role.title}</span>
      <span className="role-subtitle">{role.subtitle}</span>
      <span className="role-arrow" aria-hidden="true">
        <ArrowRight size={24} />
      </span>
      {!role.available && <span className="soon-pill">Later</span>}
    </motion.button>
  );
}

function RoleDetail({ profile }) {
  const AccentIcon = profile.accentIcon;
  const hasProjects = profile.projects.length > 0;

  return (
    <>
      <div className="proof-grid">
        <div className="proof-card lead-card">
          <div className="lead-icon">
            <AccentIcon size={36} />
          </div>
          <h3>Quick read</h3>
          <ul>
            {profile.snapshot.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="fit-tags">
            {profile.fit.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="lead-actions">
            {profile.resume && (
              <a className="primary-action" href={profile.resume} target="_blank" rel="noreferrer">
                <Download size={18} />
                {profile.resumeLabel}
              </a>
            )}
            <a className="ghost-action" href={`mailto:${contact.email}`}>
              <Mail size={18} />
              Contact me
            </a>
          </div>
        </div>

        <div className="metric-grid">
          {profile.metrics.map((metric) => (
            <motion.div
              className="metric-card"
              key={metric.label}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {profile.experience.length > 0 && (
        <section className="evidence-section">
          <div className="section-kicker">
            <BriefcaseBusiness size={20} />
            Experience evidence
          </div>
          <div className="timeline">
            {profile.experience.map((job) => {
              const JobIcon = job.icon;
              return (
                <article className="timeline-item" key={`${job.company}-${job.role}`}>
                  <div className="timeline-icon">
                    <JobIcon size={22} />
                  </div>
                  <div>
                    <div className="timeline-topline">
                      <h3>{job.role}</h3>
                      <span>{job.date}</span>
                    </div>
                    <p className="company">{job.company}</p>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="evidence-section">
        <div className="section-kicker">
          <Rocket size={20} />
          Featured proof
        </div>
        {hasProjects ? (
          <div className="project-grid">
            {profile.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt="" />
                </div>
                <div className="project-body">
                  <p>{project.stack}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                  <div className="project-tags">
                    {project.highlights.map((item) => (
                      <small key={item}>{item}</small>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="placeholder-panel">
            <Trophy size={34} />
            <h3>Ready for real case studies</h3>
            <p>
              I have the section styled and ready for the final projects, screenshots,
              testimonials, and measurable outcomes.
            </p>
          </div>
        )}
      </section>

      <section className="lower-grid">
        <div className="skills-panel">
          <div className="section-kicker">
            <Database size={20} />
            Skills matrix
          </div>
          <div className="skill-columns">
            {profile.skills.map((group) => (
              <div key={group.label}>
                <h3>{group.label}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-panel">
          <div className="section-kicker">
            <BookOpen size={20} />
            Education
          </div>
          <h3>CUNY - Queens College</h3>
          <p>Bachelor in Computer Science, graduated May 2025.</p>
          <div className="course-list">
            {[
              'Data Structures',
              'Software Engineering',
              'Database Systems',
              'Algorithms',
              'OOP in C++ & Java',
              'Computer Architecture',
            ].map((course) => (
              <span key={course}>{course}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-panel">
        <div>
          <p className="eyebrow">
            <Sparkles size={16} />
            Work with me
          </p>
          <h2>Need a focused version for a specific job description?</h2>
          <p>
            Send me the role and I can tune this portfolio around the exact responsibilities,
            keywords, proof points, and projects that matter most for that opportunity.
          </p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`}>
            <Mail size={18} />
            {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            <FaGithub size={18} />
            GitHub projects
          </a>
          <a href={contact.portfolio} target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Previous portfolio
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
