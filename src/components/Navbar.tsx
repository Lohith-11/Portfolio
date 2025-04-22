import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Trainings', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
            >
              <span className="text-[#64ffda] mr-1">&lt;</span>
              Lohith Reddy
              <span className="text-[#64ffda] ml-1">/&gt;</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#64ffda] ${
                    activeSection === link.href.substring(1) 
                      ? 'text-[#64ffda]' 
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-300"
              >
                Resume
              </a> */}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-[#64ffda] focus:outline-none"
              aria-expanded="false"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-[#112240] shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-[#64ffda] ${
                activeSection === link.href.substring(1) 
                  ? 'text-[#64ffda]' 
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#64ffda] hover:text-[#64ffda] border border-[#64ffda] rounded mt-4 text-center"
          >
            Resume
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;