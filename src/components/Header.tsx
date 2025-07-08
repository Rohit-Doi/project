import React from 'react';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-[#435739] dark:text-white cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/yourusername" 
                className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yourname" 
                className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@yourname.com" 
                className="text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;