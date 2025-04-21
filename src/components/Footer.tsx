import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0a192f] py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start">
              <span className="text-[#64ffda] mr-1">&lt;</span>
              Lohith Reddy
              <span className="text-[#64ffda] ml-1">/&gt;</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Creating digital experiences with precision and passion.
            </p>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a 
              href="https://github.com/Lohith-11" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-slate-600 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/lohithreddy11" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="text-slate-600 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:lohithr011@gmail.com" 
              aria-label="Email"
              className="text-slate-600 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {currentYear} Mareddy Lohith Reddy. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;