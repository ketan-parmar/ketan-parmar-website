import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Smartphone, 
  Award, 
  Users, 
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Globe,
  Database,
  Layers,
  Terminal,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { PROJECTS, EXPERIENCE, SKILLS, EDUCATION, EXPERTISE, Project } from './data/portfolio';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-neutral-500 max-w-2xl text-base sm:text-lg md:text-xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLimit = 120;
  const isLongDescription = project.description.length > descriptionLimit;
  const displayDescription = isExpanded || !isLongDescription 
    ? project.description 
    : `${project.description.substring(0, descriptionLimit)}...`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card rounded-[32px] overflow-hidden flex flex-col h-full transition-all hover:shadow-xl hover:shadow-indigo-500/5"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-4 bg-neutral-100 rounded-2xl">
            {project.category === 'Fintech' && <Database className="w-6 h-6 text-indigo-600" />}
            {project.category === 'Enterprise' && <Layers className="w-6 h-6 text-blue-600" />}
            {project.category === 'Social' && <Users className="w-6 h-6 text-emerald-600" />}
            {project.category === 'Creative' && <Sparkles className="w-6 h-6 text-rose-600" />}
            {project.category === 'Utility' && <Terminal className="w-6 h-6 text-neutral-600" />}
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-neutral-400" />
            </a>
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <div className="mb-6">
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
            {displayDescription}
          </p>
          {isLongDescription && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-600 text-xs font-bold mt-2 hover:underline focus:outline-none"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-neutral-50 border border-neutral-100 text-neutral-500 text-[10px] font-bold uppercase tracking-wider rounded-lg">
              {t}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-neutral-100">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-3">Key Impact</p>
          <p className="text-sm font-semibold text-neutral-800 leading-snug">{project.impact || 'Delivered high-performance mobile solution'}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.remove();
        }, 600); // Wait for transition to finish
      }, 500);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories = ['All', 'Enterprise', 'Fintech', 'Social', 'Creative'];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-neutral-200/50 py-3' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter"
          >
            KETAN<span className="text-neutral-400">PARMAR</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Projects', 'Experience', 'Skills', 'Impact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-semibold text-neutral-500 hover:text-black transition-all hover:tracking-widest"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/5"
            >
              Get in Touch
            </a>
          </div>

          <button className="md:hidden p-2 bg-neutral-100 rounded-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-24 pb-12 px-8 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {['Projects', 'Experience', 'Skills', 'Impact', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-black tracking-tighter hover:text-indigo-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-10 shadow-sm border border-indigo-100/50">
                <Smartphone className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                Senior iOS Engineer
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-10 text-balance">
                Building the future of <span className="text-neutral-400 italic font-serif">mobile</span> experiences.
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-neutral-500 max-w-4xl mb-10 sm:mb-16 leading-relaxed font-medium">
                Senior iOS Engineer with 10+ years of experience building high-performance applications for fintech, banking, and global enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                <a href="#projects" className="px-8 py-4 sm:px-10 sm:py-5 bg-black text-white font-bold rounded-2xl sm:rounded-[24px] hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/10 hover:scale-105 active:scale-95">
                  View Projects <ChevronRight className="w-5 h-5" />
                </a>
                <div className="flex items-center justify-center gap-8 px-2">
                  <a href="https://github.com/ketan-parmar" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black transition-all hover:scale-110">
                    <Github className="w-7 h-7" />
                  </a>
                  <a href="https://www.linkedin.com/in/ketan-parmar-4b779984/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black transition-all hover:scale-110">
                    <Linkedin className="w-7 h-7" />
                  </a>
                  <a href="mailto:ketan.engineer14@gmail.com" className="text-neutral-400 hover:text-black transition-all hover:scale-110">
                    <Mail className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 opacity-30 blur-[120px]">
            <div className="w-[600px] h-[600px] bg-indigo-200 rounded-full mix-blend-multiply animate-pulse" />
          </div>
          <div className="absolute bottom-0 left-0 -z-10 opacity-20 blur-[120px]">
            <div className="w-[400px] h-[400px] bg-rose-200 rounded-full mix-blend-multiply animate-pulse delay-700" />
          </div>
        </section>

        {/* Stats Section */}
        <section id="impact" className="section-padding bg-neutral-950 text-white rounded-[40px] sm:rounded-[60px] mx-4 md:mx-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-8 sm:gap-12 mb-20 sm:mb-32">
              {[
                { label: 'Years Experience', value: '10+' },
                { label: 'App Store Rank', value: '#1' },
                { label: 'Fintech Downloads', value: '2M+' },
                { label: 'Stack Overflow Reputation', value: '27K+' },
                { label: 'Apple Editor’s Note', value: 'Award' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-black mb-2 sm:mb-4 tracking-tighter">{stat.value}</p>
                  <p className="text-neutral-500 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 md:p-20 bg-white/5 rounded-[40px] sm:rounded-[60px] border border-white/10 flex flex-col lg:flex-row items-center gap-10 sm:gap-16 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 blur-[80px] sm:blur-[100px] rounded-full -mr-32 sm:-mr-48 -mt-32 sm:-mt-48 transition-all group-hover:bg-orange-500/20" />
              
              <div className="flex-1 relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-orange-500/20 text-orange-500 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-6 sm:mb-8">
                  Community Impact
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 tracking-tight leading-tight">Top 2% Global Contributor on Stack Overflow</h3>
                <p className="text-neutral-400 text-base sm:text-lg md:text-2xl leading-relaxed font-medium">
                  Helping over 2.1M+ developers worldwide through architectural solutions and technical insights. Ranked among the top contributors globally for iOS and Swift development.
                </p>
              </div>
              <div className="flex-shrink-0 relative z-10">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-orange-500 rounded-[32px] sm:rounded-[48px] flex items-center justify-center shadow-[0_0_80px_rgba(249,115,22,0.4)] rotate-6 group-hover:rotate-12 transition-transform duration-500">
                  <MessageSquare className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
              <SectionHeader 
                title="Featured Work" 
                subtitle="A selection of high-impact mobile applications I've architected and delivered for global clients."
              />
              
              <div className="flex flex-wrap gap-3 mb-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-black text-white shadow-xl shadow-black/10 scale-105' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-padding bg-neutral-950 text-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Core Expertise" 
              subtitle="Deep technical knowledge across the entire mobile development lifecycle."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {EXPERTISE.map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-colors group"
                >
                  <CheckCircle2 className="w-8 h-8 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
                  <p className="text-xl font-bold leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Technical Stack" 
              subtitle="Specialized in building scalable, high-performance mobile architectures using modern technologies."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Languages', icon: <Code2 />, items: SKILLS.languages },
                { title: 'Frameworks', icon: <Globe />, items: SKILLS.frameworks },
                { title: 'AI & Tools', icon: <Cpu />, items: [...SKILLS.ai, ...SKILLS.tools.slice(0, 3)] }
              ].map((group, i) => (
                <motion.div 
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-white rounded-[40px] border border-neutral-200 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-neutral-100 rounded-3xl flex items-center justify-center mb-8 text-black">
                    {group.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-8 tracking-tight">{group.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map(item => (
                      <span key={item} className="px-5 py-2.5 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold text-neutral-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Professional Journey" 
              subtitle="Over a decade of experience leading mobile engineering teams and delivering production-grade solutions."
            />
            
            <div className="space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative pl-10 md:pl-16 pb-16 border-l-4 border-neutral-100 last:pb-0"
                >
                  <div className="absolute left-[-14px] top-0 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-black transition-all duration-300 group-hover:scale-125" />
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h4 className="text-3xl font-black tracking-tight mb-2">{exp.role}</h4>
                      {exp.companyLink ? (
                        <a 
                          href={exp.companyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-2 group/link"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="text-xl font-bold text-indigo-600">{exp.company}</p>
                      )}
                    </div>
                    <div className="md:text-right">
                      <p className="text-sm font-black text-neutral-400 uppercase tracking-[0.2em] mb-1">{exp.period}</p>
                      <p className="text-xs font-bold text-neutral-400">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-4 text-neutral-500 text-lg leading-relaxed font-medium">
                        <div className="w-6 h-6 flex-shrink-0 text-neutral-300 mt-1">
                          <ChevronRight className="w-full h-full" />
                        </div>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-padding bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Education" 
              subtitle="Academic background in Computer Engineering and Network Securities."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-white rounded-[40px] border border-neutral-200 flex gap-8 items-start"
                >
                  <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] mb-2">{edu.period}</p>
                    <h4 className="text-2xl font-black mb-2 tracking-tight">{edu.degree}</h4>
                    <p className="text-lg font-bold text-neutral-600 mb-1">{edu.field}</p>
                    <p className="text-neutral-400 font-medium">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-neutral-950 text-white rounded-t-[40px] sm:rounded-t-[80px] mx-2">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 sm:mb-12 leading-[0.9] sm:leading-[0.85]">Let's build something <span className="text-neutral-500 italic font-serif">extraordinary</span>.</h2>
              <p className="text-lg sm:text-2xl md:text-3xl text-neutral-400 max-w-3xl mx-auto mb-12 sm:mb-20 font-medium leading-relaxed">
                Currently open to new opportunities, architectural consultations, and leading high-impact mobile teams.
              </p>
              
              <a 
                href="mailto:ketan.engineer14@gmail.com" 
                className="inline-flex items-center gap-3 sm:gap-6 px-5 py-4 sm:px-16 sm:py-8 bg-white text-black text-sm sm:text-2xl md:text-3xl font-black rounded-2xl sm:rounded-[40px] hover:bg-neutral-200 transition-all mb-20 sm:mb-32 hover:scale-105 active:scale-95 shadow-[0_0_100px_rgba(255,255,255,0.1)] max-w-full overflow-hidden"
              >
                <Mail className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" /> 
                <span className="truncate">ketan.engineer14@gmail.com</span>
              </a>
              
              <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-8 sm:gap-12 border-t border-white/10 pt-16 sm:pt-24">
                {[
                  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ketan-parmar-4b779984/', icon: <Linkedin /> },
                  { label: 'GitHub', link: 'https://github.com/ketan-parmar', icon: <Github /> },
                  { label: 'Stack Overflow', link: 'https://stackoverflow.com/users/6163022/ketan-parmar?tab=profile', icon: <MessageSquare /> },
                  { label: 'Resume', link: 'https://ketan-parmar.github.io/documents/resume.pdf', icon: <Award /> },
                  { label: 'Portfolio', link: 'https://ketan-parmar.github.io/documents/portfolio.pdf', icon: <BookOpen /> }
                ].map((social) => (
                  <a 
                    key={social.label} 
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-6 group"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all group-hover:scale-110 group-hover:-rotate-6">
                      {social.icon}
                    </div>
                    <span className="text-sm font-bold text-neutral-500 group-hover:text-white transition-colors tracking-widest uppercase">{social.label}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-40 text-neutral-600 text-sm flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                <p className="font-medium tracking-wide">© 2026 Ketan Parmar. All rights reserved.</p>
                <p className="font-medium tracking-wide">Built with React, Tailwind & Motion</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 p-5 bg-black text-white rounded-full shadow-2xl hover:bg-neutral-800 transition-all hover:scale-110 active:scale-90"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}


