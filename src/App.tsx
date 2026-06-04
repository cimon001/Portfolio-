import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, CheckCircle2, Cpu, Globe2, LayoutTemplate, Zap } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Lenis from 'lenis';

// Project Data
const projects = [
  {
    id: 1,
    title: "NEW_COLLECTION (Website)",
    category: "Premium fashion e-commerce website with modern UI.",
    image: "/new-collection-web.png",
    link: "#"
  },
  {
    id: 2,
    title: "NEW_COLLECTION (Admin)",
    category: "Product management features and full stack dashboard.",
    image: "/new-collection-admin.png",
    link: "#"
  },
  {
    id: 3,
    title: "FLOWER POT WEBSITE",
    category: "Beautiful and attractive design.",
    image: "/tera-cota.png", // Using tera cota as visual placeholder from their images
    link: "#"
  },
  {
    id: 4,
    title: "ARCHITECTURE STUDIO",
    category: "Modern architecture and interior design agency website.",
    image: "/architecture.png", 
    link: "#"
  },
  {
    id: 5,
    title: "Root & Canopy",
    category: "Nature and botanical aesthetics design.",
    image: "/root-canopy.png", 
    link: "#"
  }
];

// Services Data
const services = [
  { title: "Website Development", desc: "Modern, responsive, and fast-loading websites.", icon: Globe2 },
  { title: "Landing Page Design", desc: "High-converting landing pages for businesses and startups.", icon: LayoutTemplate },
  { title: "AI Integration", desc: "AI chatbots, AI assistants, and AI-powered web features.", icon: Cpu },
  { title: "Website Redesign", desc: "Transform outdated websites into modern digital experiences.", icon: Zap },
];

// Skills Data
const skills = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Git & GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Responsive Design", icon: LayoutTemplate },
  { name: "AI Tools (ChatGPT, Gemini)", icon: Cpu },
  { name: "UI/UX Design", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
];

// Features
const features = [
  "Clean and Modern Design", "Mobile Friendly Websites", "Fast Performance", "AI-Powered Solutions", "Continuous Support"
];

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovered(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[var(--primary)] pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovered ? 1.5 : 1,
        backgroundColor: isHovered ? "var(--primary)" : "transparent"
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full px-8 md:px-24 py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
      <div className="font-semibold tracking-tight text-xl">Cimon.</div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
      </div>
      <a href="#contact" className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">
        Hire Me
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 md:px-24 pt-32 lg:pt-20 gap-12">
      <div className="w-full lg:w-3/5 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            Hello, I'm <span className="text-foreground font-medium">Cimon</span>. <br/>
            Welcome to my portfolio.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-tight mb-6">
            AI Web Developer <br />
            <span className="text-muted-foreground font-medium text-4xl md:text-5xl lg:text-[4rem]">| Frontend Developer</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground mt-6 text-balance"
        >
          <p className="mb-4 font-medium text-foreground">Helping Businesses Build Modern Websites with AI</p>
          I create responsive, high-performance websites and AI-powered web solutions that help businesses establish a strong online presence and improve user experience.
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Magnetic>
            <a href="#contact" className="px-8 py-4 bg-[var(--primary)] text-white rounded-full font-medium text-center hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20 block">
              Hire Me
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#projects" className="px-8 py-4 border border-border rounded-full font-medium text-center hover:bg-muted transition-colors block">
              View Projects
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src="/cimon.png" 
            alt="Cimon" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-8 md:px-24 py-32 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h2 className="text-sm font-medium tracking-widest uppercase mb-8 text-muted-foreground">About Me</h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8 text-balance">
          I am a Web Developer specializing in modern frontend development, AI-assisted web solutions, and responsive website design.
        </h3>
        <p className="text-lg text-muted-foreground text-balance">
          I focus on creating clean, professional, and user-friendly digital experiences. I enjoy turning ideas into real products using modern technologies and AI tools.
        </p>
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-8 md:px-24 py-32">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium tracking-widest uppercase mb-16 text-muted-foreground"
      >
        My Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-muted/30 hover:bg-muted transition-colors"
          >
            <service.icon className="w-10 h-10 mb-6 text-foreground" />
            <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="px-8 md:px-24 py-32 bg-foreground text-background">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium tracking-widest uppercase mb-16 opacity-70"
      >
        Skills & Technologies
      </motion.h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="flex items-center gap-3 px-6 py-4 rounded-full border border-background/20 text-lg bg-background/5 hover:bg-background/10 transition-colors cursor-pointer shadow-sm hover:shadow-md"
          >
            {skill.img ? (
              <img src={skill.img} alt={skill.name} className="w-6 h-6 object-contain" />
            ) : skill.icon ? (
              <skill.icon className="w-6 h-6" />
            ) : null}
            <span className="font-medium tracking-tight">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className="group mb-32 relative cursor-pointer"
    >
      <div className="overflow-hidden rounded-2xl bg-muted aspect-video relative">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight mb-2">{project.title}</h2>
          <p className="text-muted-foreground text-balance">{project.category}</p>
        </div>
        <div className="w-12 h-12 rounded-full border border-border flex shrink-0 items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}

function Work() {
  return (
    <section id="projects" className="px-8 md:px-24 py-32">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-sm font-medium tracking-widest uppercase mb-16 text-muted-foreground"
      >
        Featured Projects
      </motion.h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function WhyWorkWithMe() {
  return (
    <section className="px-8 md:px-24 py-32 bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
            Why Work With Me?
          </h2>
          <p className="text-muted-foreground text-lg">
            I combine technical excellence with design sensibility and modern AI tooling to deliver unparalleled results for your business.
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 text-xl font-medium"
            >
              <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="flex flex-col border-t border-border">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-8 md:px-24 pt-32 pb-24"
      >
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
          Let's Build Something<br />Amazing Together 🚀
        </h2>
      </motion.div>

      <div className="bg-black text-white px-8 md:px-24 py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl">
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 opacity-70">Email</h4>
            <a href="mailto:cimonsharma95@gmail.com" className="text-lg font-medium hover:text-[var(--primary)] transition-colors">
              cimonsharma95@gmail.com
            </a>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 opacity-70">Phone</h4>
            <a href="tel:+918837894309" className="text-lg font-medium hover:text-[var(--primary)] transition-colors">
              +91 8837894309
            </a>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 opacity-70">Location</h4>
            <p className="text-lg font-medium">Nawanshar, Punjab</p>
          </div>
        </div>
        
        <div className="flex gap-8">
          <a href="https://github.com/cimon001" target="_blank" rel="noreferrer" className="text-lg font-medium hover:opacity-70 transition-opacity">GitHub</a>
          <a href="https://www.linkedin.com/in/cimon001-5613892a7" target="_blank" rel="noreferrer" className="text-lg font-medium hover:opacity-70 transition-opacity">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="antialiased selection:bg-foreground selection:text-background">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Work />
        <WhyWorkWithMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
