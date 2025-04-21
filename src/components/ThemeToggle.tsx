import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button 
      onClick={toggleTheme}
      className="fixed z-50 bottom-6 right-6 p-3 rounded-full bg-white dark:bg-[#112240] shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="text-slate-900" size={20} />
      ) : (
        <Sun className="text-[#64ffda]" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;