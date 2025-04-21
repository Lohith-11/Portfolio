import { useInView } from '../hooks/useInView';
import { ExternalLink, Github as GitHub } from 'lucide-react';

import gameverse from '../assests/GameVerse.png';
import echonest from '../assests/Echonest.png';

const projects = [
  {
    title: 'EchoNest Website',
    description: 'A full-stack travel listing platform, allowing users to explore, create, and oversee travel listings with secure authentication and responsive design.',
    image: echonest,
    tech: ['JavaScript', 'Express.js', 'Node.js', 'MongoDB', 'EJS', 'Passport.js', 'Bootstrap'],
    liveLink: 'https://echonest-rxal.onrender.com/listings',
    githubLink: 'https://github.com/Lohith-11/EchoNest',
    achievements: [
      'Developed a full-stack travel listing platform which allow users to explore, create, and oversee 250+ travel listings.',
      'Integrated secure user authentication using Passport.js and bcrypt to safeguard 1,200+ accounts and decrease unauthorized access by 90%.',
      'Managed and resolved 100+ weekly technical support tickets to improve customer response time by 40%.',
      'Enhanced user experience and mobile responsiveness using Bootstrap to achieve a 98% Lighthouse performance score.',
      'Deployed and maintained the application on Render which ensures 99.9% uptime and scalable performance.'
    ],
    date: 'Feb 2025'
  },
  {
    title: 'GameVerse Website',
    description: 'An engaging gaming platform featuring interactive mini-games with secure authentication and optimized performance.',
    image: gameverse,
    tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://gameverse-1.onrender.com/',
    githubLink: 'https://github.com/Lohith-11/GameVerse',
    achievements: [
      'Designed an engaging gaming platform featuring 10+ interactive mini-games which includes Tic-Tac-Toe, Snake, Rock-Paper-Scissors, Whack-A-Mole, and Guess the Word.',
      'Engineered a secure authentication system with form validation to protect 2,500+ user accounts and ensuring seamless user experience.',
      'Optimized performance using React.memo, useCallback, and useEffect to reduce component re-renders by 35% and maintain a stable 60 FPS frame rate.',
      'Integrated real-time multiplayer functionality using WebSockets which supports up to 50 concurrent players per session.'
    ],
    date: 'Nov 2024'
  }
];

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      ref={ref}
    >
      <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-12 flex items-center after:content-[''] after:h-[1px] after:flex-grow after:ml-6 after:bg-slate-300 dark:after:bg-slate-700">
          <span className="text-[#64ffda] font-mono mr-2">03.</span> Projects
        </h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-6 md:gap-8`}
            >
              {/* Adjusted Image Styling for Horizontal Images */}
              <div className="md:w-3/5 relative group">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-[#64ffda]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-md shadow-lg"
                  />
                </a>
              </div>
              {/* Project Image (Shown on alternating sides)
              <div className="md:w-3/5 relative group">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-[#64ffda]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-md shadow-lg"
                  />
                </a>
              </div> */}
              
              {/* Project Info */}
              <div className={`md:w-2/5 z-20 ${index % 2 === 0 ? 'md:-ml-8' : 'md:-mr-8'} bg-white dark:bg-[#112240] p-4 rounded-md shadow-xl self-center`}>
              {/* <div className={`md:w-2/5 z-20 ${index % 2 === 0 ? 'md:-ml-16' : 'md:-mr-16'} bg-white dark:bg-[#112240] p-6 rounded-md shadow-xl self-center`}> */}
                <div className="flex flex-col">
                  <p className="text-[#64ffda] font-mono mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#64ffda] mr-2">▹</span>
                          <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-2 flex items-center gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <GitHub size={20} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
                      aria-label="View Live Site"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;