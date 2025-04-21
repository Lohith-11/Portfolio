import { useState, useEffect } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full max-w-4xl">
        <div className={`transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-[#64ffda] mb-5 font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Mareddy Lohith Reddy
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-700 dark:text-slate-300">
            I build things for the web.
          </h2>
          <p className="text-lg mb-8 max-w-xl text-slate-700 dark:text-slate-400 leading-relaxed">
            I'm a Computer Science and Engineering student with expertise in full-stack development,
            focusing on creating exceptional digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/20 transition-colors duration-300 flex items-center"
            >
              View My Work <ArrowRight className="ml-2" size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-6">
            <a 
              href="https://github.com/Lohith-11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/lohithreddy11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:lohithr011@gmail.com" 
              className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-slate-600 dark:text-slate-400"
          >
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;