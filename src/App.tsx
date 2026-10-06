import { useState, FormEvent, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import { translations } from "./translations";
import { 
  Github, 
  Mail, 
  Smartphone, 
  Code2, 
  Layers, 
  ExternalLink, 
  Globe,
  Terminal,
  Cpu,
  Send,
  Twitter,
  Linkedin,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Command,
  MessageSquare,
  User,
  Briefcase,
  Zap,
  Award,
  FileText,
  AlertCircle,
  Languages,
  Menu,
  X,
  Sun,
  Moon,
  Layout,
  Database
} from "lucide-react";

const projects = [
  {
    title: "News App",
    description: "A comprehensive news platform featuring real-time updates, user authentication, personalized categories, and a bookmarking system.",
    tech: ["Flutter", "Firebase", "REST API", "Bloc"],
    link: "#",
    image: "news1.png",
    images: [
      "news1.png",
      "news2.png",
      "news3.png",
      "news4..png",
      "news5..png",
      "news6..png",
      "news7.png",
      "news8.png",
      "news10.png",
      "news11.png",
      "iPhone 13 mini - 18.png",
      "Bottom Sheet.png",
      "Bottom Sheet (2).png"
    ],
    icon: <Globe className="w-5 h-5" />,
    featured: true
  },
  {
    title: "Tasky App",
    description: "A powerful productivity tool designed to help you organize your daily life with smart scheduling and cloud sync.",
    tech: ["Flutter", "Firebase", "Provider", "Local Auth"],
    link: "#",
    image: "task1.png",
    images: [
      "task1.png",
      "task2.png",
      "task3.png",
      "task5.png",
      "task6.png",
      "task7.png"
    ],
    icon: <Layers className="w-5 h-5" />,
    featured: true
  }
];

const skills = [
  { name: "Flutter", icon: <Smartphone className="w-5 h-5" />, color: "text-sky-400" },
  { name: "Dart", icon: <Code2 className="w-5 h-5" />, color: "text-blue-400" },
  { name: "Firebase", icon: <Layers className="w-5 h-5" />, color: "text-orange-400" },
  { name: "State Mgmt", icon: <Cpu className="w-5 h-5" />, color: "text-purple-400" },
  { name: "REST APIs", icon: <Globe className="w-5 h-5" />, color: "text-emerald-400" },
  { name: "UI/UX", icon: <Layout className="w-5 h-5" />, color: "text-pink-400" },
  { name: "Storage", icon: <Database className="w-5 h-5" />, color: "text-amber-400" },
  { name: "Git", icon: <Terminal className="w-5 h-5" />, color: "text-slate-400" },
];

const certificates = [
  {
    key: "flutter_guide",
    date: "2024",
    link: "https://drive.google.com/file/d/1URttcvlyyHk5X5gl5YnlWL7FewwBvD37/view?usp=drivesdk",
    icon: <Award className="w-5 h-5 text-sky-400" />
  },
  {
    key: "advanced_flutter",
    date: "2024",
    link: "https://drive.google.com/file/d/1U3eVGi5pGXBliYzte7VPrVEhPL3ZhYJy/view?usp=drivesdk",
    icon: <Award className="w-5 h-5 text-emerald-400" />
  },
  {
    key: "course_completion",
    date: "2026",
    link: "https://drive.google.com/file/d/1nELJNDNkxID375dKH63kt3qojpuc0u0P/view?usp=drivesdk",
    icon: <Award className="w-5 h-5 text-amber-400" />
  }
];

const ProjectCarousel = ({ images, title, lang }: { images: string[], title: string, lang: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      next();
    } else if (info.offset.x > swipeThreshold) {
      prev();
    }
  };

  return (
    <div className="absolute inset-0 group/carousel overflow-hidden touch-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: lang === 'ar' ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: lang === 'ar' ? 100 : -100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex justify-center items-center p-4 md:p-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <motion.div 
            whileHover={{ 
              y: -20, 
              scale: 1.02,
              rotateX: 2,
              boxShadow: "0 40px 80px -20px rgba(0, 173, 181, 0.4)"
            }}
            className="relative w-full max-w-[280px] md:max-w-[320px] h-[95%] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-slate-900/95 bg-black transition-all duration-500 ease-out pointer-events-none"
          >
            {/* Dynamic Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-10" />
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900/95 rounded-b-xl z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-white/10 rounded-full" />
            </div>

            <img 
              src={images[currentIndex]} 
              alt={`${title} screen ${currentIndex}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - More subtle and high-end */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30 hidden md:flex">
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 173, 181, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
          className="p-4 rounded-full glass text-white pointer-events-auto opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 173, 181, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
          className="p-4 rounded-full glass text-white pointer-events-auto opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
        </motion.button>
      </div>

      {/* Indicators - Pill style */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/20 backdrop-blur-md p-2 rounded-full border border-white/5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(i); }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex 
                ? "bg-[#00ADB5] w-6 shadow-[0_0_12px_rgba(0,173,181,0.6)]" 
                : "bg-white/20 w-1.5 hover:bg-white/40"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<{ isSpam: boolean; suggestion: string } | null>(null);
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    root.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    // Theme toggle disabled
    // setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.contact.errors.name_req;
    } else if (formData.name.length < 2) {
      newErrors.name = t.contact.errors.name_min;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.errors.email_req;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t.contact.errors.email_inv;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.errors.msg_req;
    } else if (formData.message.length < 10) {
      newErrors.message = t.contact.errors.msg_min;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormState('submitting');
    setAiFeedback(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this contact form message from ${formData.name} (${formData.email}): "${formData.message}". 
        Determine if it is spam. Also, generate a short, professional suggested response that I (Jamel Ayash, Flutter Developer) could send back.
        Return the result in JSON format with keys "isSpam" (boolean) and "suggestion" (string).`,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text || '{"isSpam": false, "suggestion": ""}');
      setAiFeedback(result);
      
      if (result.isSpam) {
        // We could stop here, but let's show success for demo and just flag it
        console.warn("Message flagged as spam by AI");
      }
    } catch (error) {
      console.error("Gemini AI error:", error);
      // Fallback if AI fails
      setAiFeedback({ isSpam: false, suggestion: "Thanks for your message! I'll get back to you soon." });
    }

    setFormState('success');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setTimeout(() => setFormState('idle'), 15000); // Longer timeout to read AI feedback
  };

  return (
    <div className={`min-h-screen selection:bg-[#00ADB5]/30 ${lang === 'ar' ? 'font-arabic' : 'font-sans'} overflow-x-hidden transition-colors duration-300 light:bg-slate-50 light:text-slate-900`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ADB5] via-blue-400 to-emerald-400 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00ADB5]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-teal-500/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1 + Math.random() * 0.2
            }}
            animate={{ 
              y: [null, Math.random() * 100 + "%"],
              x: [null, Math.random() * 100 + "%"],
            }}
            transition={{ 
              duration: 20 + Math.random() * 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-[#00ADB5] rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 w-[90%] max-w-fit">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hidden lg:flex items-center gap-1 p-1.5 rounded-full glass shadow-2xl shadow-black/20"
        >
          {["Home", "About", "Skills", "Projects", "Certificates", "Experience", "Contact"].map((item) => (
            <a 
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.toLowerCase() 
                  ? "bg-[#00ADB5] text-white shadow-lg shadow-[#00ADB5]/20" 
                  : "text-slate-400 hover:text-[#00ADB5] hover:bg-white/5"
              }`}
            >
              {item === "Home" ? t.nav.home : 
               item === "About" ? t.nav.about : 
               item === "Skills" ? t.skills.title : 
               item === "Projects" ? t.nav.projects : 
               item === "Certificates" ? t.nav.certificates : 
               item === "Experience" ? t.nav.experience : 
               t.nav.contact}
            </a>
          ))}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-3 rounded-full glass shadow-xl text-slate-400 hover:text-[#00ADB5] transition-all"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={() => {}} // Disabled
            className="p-3 rounded-full glass border border-white/5 shadow-xl text-slate-400 cursor-default transition-all group"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform" /> : <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform" />}
          </motion.button>

          {/* Language Switcher Component */}
          <motion.button
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 shadow-xl text-slate-400 hover:text-[#00ADB5] transition-all group"
          >
            <Languages className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className={`text-[10px] font-bold uppercase tracking-widest ${lang === 'ar' ? 'font-sans' : 'font-arabic'}`}>
              {lang === 'en' ? 'العربية' : 'English'}
            </span>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl lg:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-4">
              {["Home", "About", "Skills", "Projects", "Certificates", "Experience", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`px-6 py-4 rounded-2xl text-xl font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? "bg-[#00ADB5] text-white shadow-lg shadow-[#00ADB5]/20" 
                      : "text-slate-400 hover:text-[#00ADB5] bg-white/5"
                  }`}
                >
                  {item === "Home" ? t.nav.home : 
                   item === "About" ? t.nav.about : 
                   item === "Skills" ? t.skills.title : 
                   item === "Projects" ? t.nav.projects : 
                   item === "Certificates" ? t.nav.certificates : 
                   item === "Experience" ? t.nav.experience : 
                   t.nav.contact}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-24">
        {/* Hero Section - Bento Style */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 p-10 md:p-16 rounded-[3rem] glass flex flex-col justify-center space-y-10 shadow-2xl shadow-black/10 relative overflow-hidden group light:bg-white light:shadow-slate-200/50"
          >
            {/* Animated Background Element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00ADB5]/10 blur-[100px] rounded-full group-hover:bg-[#00ADB5]/20 transition-colors duration-1000" />
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] text-[10px] font-black tracking-[0.2em] uppercase">
              <Sparkles className="w-4 h-4" />
              {t.hero.role}
            </div>
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] text-white light:text-slate-900">
                {lang === 'en' ? (
                  <>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      IT
                    </motion.span> <br />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] via-blue-400 to-emerald-400"
                    >
                      Engineering
                    </motion.span>.
                  </>
                ) : (
                  <>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      هندسة
                    </motion.span> <br />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] via-blue-400 to-emerald-400"
                    >
                      تقنية المعلومات
                    </motion.span>.
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed light:text-slate-600">
                {t.hero.greeting} {t.hero.name}، {t.hero.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-5 pt-6">
              <motion.a 
                whileHover={{ scale: 1.05, x: lang === 'ar' ? -5 : 5 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#00ADB5] text-white font-black text-lg hover:shadow-[0_20px_40px_-10px_rgba(0,173,181,0.5)] transition-all"
              >
                {t.hero.cta_projects}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-2 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-800/40 border border-white/10 text-white font-black text-lg backdrop-blur-md transition-all light:bg-slate-100 light:border-slate-200 light:text-slate-700"
              >
                {t.hero.cta_contact}
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,173,181,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1EJ-oxDFcWfevubDUTjldMsypab_GFk23/view?usp=drivesdk" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg backdrop-blur-md transition-all hover:border-[#00ADB5]/50 group light:bg-slate-100 light:border-slate-200 light:text-slate-700"
              >
                <FileText className="w-5 h-5 text-[#00ADB5]" />
                {t.hero.cta_cv}
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2 p-8 rounded-[3rem] glass overflow-hidden font-mono text-xs space-y-4 group shadow-2xl relative light:bg-white light:shadow-slate-200/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
              </div>
              <div className="space-y-2 text-slate-400">
                <div className="flex gap-2"><span className="text-emerald-400">➜</span> <span className="text-slate-200">~</span> <span className="text-sky-400">whoami</span></div>
                <div className="pl-4 text-slate-500 italic">
                  {lang === 'en' ? '"Passionate about clean code and pixel-perfect UI."' : '"شغوف بالكود النظيف وواجهات المستخدم المثالية."'}
                </div>
                <div className="flex gap-2 mt-4"><span className="text-emerald-400">➜</span> <span className="text-slate-200">~</span> <span className="text-sky-400">skills.list()</span></div>
                <div className="pl-4 space-y-1">
                  {['Flutter', 'Dart', 'Firebase', 'State Management', 'RESTful APIs', 'Localization', 'Responsive UI', 'Shared Preferences', 'Git'].map(s => (
                    <div key={s} className="text-slate-300">{s}</div>
                  ))}
                </div>
              </div>
              {/* Decorative scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full animate-scanline pointer-events-none" />
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="p-8 rounded-[3rem] bg-gradient-to-br from-[#00ADB5]/20 to-blue-500/10 border border-[#00ADB5]/20 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-3 shadow-xl light:bg-[#00ADB5]/5"
            >
              <div className="text-5xl font-display font-black text-[#00ADB5] drop-shadow-[0_0_15px_rgba(0,173,181,0.3)]">2+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] light:text-slate-500">{lang === 'en' ? 'Years Exp' : 'سنوات خبرة'}</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="p-8 rounded-[3rem] bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-3 shadow-xl light:bg-emerald-500/5"
            >
              <div className="text-4xl font-display font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">4+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] light:text-slate-500">{lang === 'en' ? 'Apps Built' : 'تطبيق تم بناؤه'}</div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="col-span-2 p-8 rounded-[3rem] glass flex items-center gap-6 overflow-hidden shadow-2xl relative group light:bg-white light:shadow-slate-200/50"
            >
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-white/10 shadow-inner group-hover:bg-[#00ADB5]/20 transition-colors light:bg-slate-100">
                <Zap className="w-8 h-8 text-[#00ADB5] animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1 light:text-slate-400">{t.hero.status}</div>
                <div className="text-lg font-bold truncate text-white light:text-slate-900">{t.hero.status_value}</div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-emerald-500/20 animate-ping" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* About & Skills Bento */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-10 md:p-14 rounded-[3rem] glass space-y-8 shadow-2xl relative overflow-hidden group light:bg-white light:shadow-slate-200/50"
          >
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-1000" />
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#00ADB5]/10 border border-[#00ADB5]/20">
                <User className="w-6 h-6 text-[#00ADB5]" />
              </div>
              <h2 className="text-3xl font-display font-black text-white tracking-tight light:text-slate-900">{t.about.title}</h2>
            </div>
            
            <div className="space-y-6 relative">
              <p className="text-xl text-slate-400 font-light leading-relaxed light:text-slate-600">
                {t.about.content}
              </p>
              <div className="flex flex-wrap gap-3">
                {t.about.tags.map((tag, i) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-5 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-black text-[#00ADB5] uppercase tracking-widest hover:bg-[#00ADB5]/10 hover:border-[#00ADB5]/30 transition-all cursor-default light:bg-slate-50 light:border-slate-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            id="skills"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 p-10 md:p-14 rounded-[3rem] glass space-y-10 shadow-2xl relative overflow-hidden group light:bg-white light:shadow-slate-200/50"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-1000" />
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-display font-black text-white tracking-tight light:text-slate-900">{t.skills.title}</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 relative">
              {skills.map((skill, i) => (
                <motion.div 
                  key={skill.name} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                  className="flex flex-col gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#00ADB5]/40 transition-all group/skill cursor-default light:bg-slate-50 light:border-slate-200"
                >
                  <div className={`${skill.color} p-3 rounded-xl bg-white/5 w-fit group-hover/skill:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm font-black text-slate-300 uppercase tracking-widest light:text-slate-700">
                    {t.skills.items[skill.name as keyof typeof t.skills.items] || skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] text-[10px] font-black tracking-[0.3em] uppercase">
                <Briefcase className="w-4 h-4" />
                {lang === 'en' ? 'Portfolio' : 'الأعمال'}
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter light:text-slate-900">{t.projects.title}</h2>
            </div>
            <p className="text-slate-400 font-light max-w-md text-lg light:text-slate-500">
              {lang === 'en' 
                ? 'A collection of mobile experiences crafted with precision and performance in mind.' 
                : 'مجموعة من تجارب الهاتف المحمول المصممة بدقة مع مراعاة الأداء.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, idx) => {
              const projectKey = project.title === "News App" ? "news" : "todo";
              const translatedProject = t.projects.items[projectKey as keyof typeof t.projects.items];
              const hasMultipleImages = project.images && project.images.length > 0;
              
              return (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col rounded-[4rem] glass overflow-hidden shadow-2xl hover:shadow-[#00ADB5]/10 transition-all duration-700 light:bg-white light:shadow-slate-200/50"
                >
                  {/* Image Section */}
                  <div className="relative h-[550px] md:h-[750px] overflow-hidden">
                    {hasMultipleImages ? (
                      <ProjectCarousel images={project.images!} title={translatedProject.title} lang={lang} />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={translatedProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                    )}
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                  </div>

                  {/* Content Section */}
                  <div className="p-10 md:p-14 space-y-8 relative z-10 bg-gradient-to-b from-transparent to-slate-950/50 light:to-slate-50/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5]">
                            {project.icon}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight light:text-slate-900">
                            {translatedProject.title}
                          </h3>
                        </div>
                        <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl light:text-slate-600">
                          {translatedProject.description}
                        </p>
                      </div>
                      
                      <motion.a 
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link}
                        className="p-5 rounded-3xl bg-white/5 border border-white/10 text-white hover:bg-[#00ADB5] hover:text-white transition-all light:bg-slate-100 light:border-slate-200 light:text-slate-700"
                      >
                        <ArrowUpRight className="w-8 h-8" />
                      </motion.a>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-5 py-2 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest light:bg-slate-50 light:border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] text-[10px] font-black tracking-[0.3em] uppercase">
                <Briefcase className="w-4 h-4" />
                {lang === 'en' ? 'Journey' : 'المسيرة'}
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter light:text-slate-900">{t.experience.title}</h2>
            </div>
          </div>

          <div className="space-y-8">
            {t.experience.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-10 md:p-14 rounded-[3rem] glass flex flex-col md:flex-row gap-10 md:items-center shadow-2xl relative overflow-hidden group light:bg-white light:shadow-slate-200/50"
              >
                <div className="md:w-48">
                  <div className="text-4xl font-display font-black text-[#00ADB5] mb-2">{item.year}</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{lang === 'en' ? 'Timeline' : 'الفترة الزمنية'}</div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-3xl font-display font-black text-white tracking-tight light:text-slate-900">{item.title}</h3>
                    <p className="text-xl text-[#00ADB5] font-bold">{item.company}</p>
                  </div>
                  <p className="text-lg text-slate-400 font-light leading-relaxed light:text-slate-600 max-w-2xl">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase className="w-32 h-32 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] text-[10px] font-black tracking-[0.3em] uppercase">
                <Award className="w-4 h-4" />
                {lang === 'en' ? 'Recognition' : 'الشهادات'}
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter light:text-slate-900">{t.certificates.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, idx) => (
              <motion.a
                key={cert.key}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-10 md:p-14 rounded-[3rem] glass border border-white/5 hover:border-[#00ADB5]/30 transition-all group shadow-2xl relative overflow-hidden light:bg-white light:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between relative z-10">
                  <div className="space-y-6">
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/10 w-fit group-hover:bg-[#00ADB5]/20 transition-colors">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight light:text-slate-900 group-hover:text-[#00ADB5] transition-colors">
                        {t.certificates.items[cert.key as keyof typeof t.certificates.items].title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-lg text-[#00ADB5] font-bold">{cert.date}</p>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <p className="text-slate-400 font-medium">{t.certificates.items[cert.key as keyof typeof t.certificates.items].issuer}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>

                {/* Decorative background text */}
                <div className="absolute -bottom-10 -right-10 text-9xl font-display font-black text-white/5 pointer-events-none select-none">
                  {idx + 1}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact Bento */}
        <section id="contact" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] text-[10px] font-black tracking-[0.3em] uppercase">
                <MessageSquare className="w-4 h-4" />
                {lang === 'en' ? 'Connect' : 'تواصل معي'}
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter light:text-slate-900">{t.contact.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 p-10 md:p-14 rounded-[3rem] glass border border-white/5 space-y-10 shadow-2xl light:bg-white light:shadow-slate-200/50"
            >
              <div className="space-y-6">
                <p className="text-xl text-slate-400 font-light leading-relaxed light:text-slate-600">
                  {t.contact.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-6 h-6" />, label: t.contact.labels.email, value: "jamelayash8@gmail.com", link: "mailto:jamelayash8@gmail.com", color: "text-sky-400" },
                  { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "github.com/jamelayash", link: "https://github.com", color: "text-slate-400" },
                  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "linkedin.com/in/jamelayash", link: "https://linkedin.com", color: "text-[#0077b5]" },
                  { icon: <Smartphone className="w-6 h-6" />, label: "WhatsApp", value: "+963 936 375 337", link: "https://wa.me/963936375337", color: "text-emerald-500" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#00ADB5]/30 hover:bg-white/10 transition-all group shadow-sm light:bg-slate-50 light:border-slate-100 light:hover:bg-slate-100"
                  >
                    <div className={`p-4 rounded-2xl bg-slate-950 border border-white/5 ${social.color} shadow-inner light:bg-white light:border-slate-200`}>
                      {social.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] light:text-slate-400 mb-1">{social.label}</div>
                      <div className="text-lg font-bold text-slate-200 truncate group-hover:text-white transition-colors light:text-slate-700 light:group-hover:text-[#00ADB5]">{social.value}</div>
                    </div>
                    <ArrowUpRight className={`w-6 h-6 text-slate-600 group-hover:text-white transition-colors light:text-slate-300 light:group-hover:text-[#00ADB5] ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 p-10 md:p-14 rounded-[3rem] glass border border-white/5 relative overflow-hidden shadow-2xl light:bg-white light:shadow-slate-200/50"
            >
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-8"
                  >
                    <div className="p-8 rounded-full bg-emerald-500/10 text-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="w-20 h-20" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-4xl font-display font-black text-white tracking-tight light:text-slate-900">{t.contact.success_title}</h4>
                      <p className="text-xl text-slate-400 font-light light:text-slate-600 max-w-md mx-auto">{t.contact.success_desc}</p>
                    </div>

                    {aiFeedback && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-md p-8 rounded-[2rem] bg-slate-800/50 border border-[#00ADB5]/20 text-left space-y-4 light:bg-slate-50 light:border-slate-200"
                      >
                        <div className="flex items-center gap-2 text-[#00ADB5] text-[10px] font-black uppercase tracking-[0.2em]">
                          <Sparkles className="w-4 h-4" />
                          {t.contact.ai_analysis}
                        </div>
                        {aiFeedback.isSpam ? (
                          <div className="flex items-center gap-3 text-rose-500 text-lg font-bold">
                            <AlertCircle className="w-6 h-6" />
                            {t.contact.ai_spam}
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{t.contact.ai_response}</div>
                            <p className="text-lg text-slate-300 italic font-light light:text-slate-600 leading-relaxed">"{aiFeedback.suggestion}"</p>
                          </div>
                        )}
                      </motion.div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                      <button 
                        onClick={() => setFormState('idle')}
                        className="flex-1 py-4 rounded-2xl bg-[#00ADB5] text-white font-black uppercase tracking-widest hover:bg-[#008187] transition-all shadow-lg shadow-[#00ADB5]/20"
                      >
                        {t.contact.send_another}
                      </button>
                      <button 
                        onClick={() => {
                          setFormData({ name: '', email: '', message: '' });
                          setFormState('idle');
                        }}
                        className="flex-1 py-4 rounded-2xl border border-white/10 text-slate-400 font-black uppercase tracking-widest hover:bg-white/5 transition-all light:border-slate-200 light:text-slate-500 light:hover:bg-slate-100"
                      >
                        {t.contact.clear_form}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">{t.contact.labels.name}</label>
                        <motion.div
                          animate={errors.name ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                          transition={{ duration: 0.4 }}
                        >
                          <input 
                            type="text" 
                            id="name"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({...formData, name: e.target.value});
                              if (errors.name) setErrors({...errors, name: undefined});
                            }}
                            placeholder={t.contact.placeholders.name}
                            className={`w-full px-6 py-5 rounded-3xl bg-white/5 border ${errors.name ? 'border-rose-500 ring-4 ring-rose-500/10' : 'border-white/5'} text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 transition-all shadow-inner light:bg-slate-50 light:border-slate-200 light:text-slate-900 light:placeholder:text-slate-400`}
                          />
                        </motion.div>
                        {errors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] text-rose-500 font-black flex items-center gap-2 ml-2 uppercase tracking-wider"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </motion.p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">{t.contact.labels.email}</label>
                        <motion.div
                          animate={errors.email ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                          transition={{ duration: 0.4 }}
                        >
                          <input 
                            type="email" 
                            id="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({...formData, email: e.target.value});
                              if (errors.email) setErrors({...errors, email: undefined});
                            }}
                            placeholder={t.contact.placeholders.email}
                            className={`w-full px-6 py-5 rounded-3xl bg-white/5 border ${errors.email ? 'border-rose-500 ring-4 ring-rose-500/10' : 'border-white/5'} text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 transition-all shadow-inner light:bg-slate-50 light:border-slate-200 light:text-slate-900 light:placeholder:text-slate-400`}
                          />
                        </motion.div>
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] text-rose-500 font-black flex items-center gap-2 ml-2 uppercase tracking-wider"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="message" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">{t.contact.labels.message}</label>
                      <motion.div
                        animate={errors.message ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                        transition={{ duration: 0.4 }}
                      >
                        <textarea 
                          id="message"
                          rows={6}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({...formData, message: e.target.value});
                            if (errors.message) setErrors({...errors, message: undefined});
                          }}
                          placeholder={t.contact.placeholders.message}
                          className={`w-full px-6 py-5 rounded-3xl bg-white/5 border ${errors.message ? 'border-rose-500 ring-4 ring-rose-500/10' : 'border-white/5'} text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 transition-all resize-none shadow-inner light:bg-slate-50 light:border-slate-200 light:text-slate-900 light:placeholder:text-slate-400`}
                        />
                      </motion.div>
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[10px] text-rose-500 font-black flex items-center gap-2 ml-2 uppercase tracking-wider"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </motion.p>
                      )}
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState === 'submitting'}
                      type="submit"
                      className="w-full py-6 rounded-3xl bg-white text-slate-950 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#00ADB5] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-2xl shadow-white/5 light:bg-slate-900 light:text-white light:hover:bg-[#00ADB5] light:shadow-slate-200/50"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          {t.contact.processing}
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          {t.contact.button}
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] light:border-slate-200 light:text-slate-400">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-display font-black text-white light:text-slate-900 tracking-tighter">
              JAMEL<span className="text-[#00ADB5]">.</span>AYASH
            </div>
            <p>{t.footer.copy}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <a href="#" className="hover:text-[#00ADB5] transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-[#00ADB5] transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-[#00ADB5] transition-colors">{t.footer.cookies}</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

