import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'PHP', 'Java'],
    color: 'bg-blue-500'
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Redux', 'EJS', 'Bootstrap', 'Tailwind CSS', 'Material UI'],
    color: 'bg-purple-500'
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSockets'],
    color: 'bg-green-500'
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    color: 'bg-yellow-500'
  },
  {
    title: 'DevOps Tools',
    skills: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions, Jenkins)'],
    color: 'bg-red-500'
  },
  {
    title: 'Additional Skills',
    skills: ['Data Structures & Algorithms (DSA)', 'API Development', 'Performance Optimization'],
    color: 'bg-teal-500'
  }
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      ref={ref}
    >
      <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-12 flex items-center after:content-[''] after:h-[1px] after:flex-grow after:ml-6 after:bg-slate-300 dark:after:bg-slate-700">
          <span className="text-[#64ffda] font-mono mr-2">04.</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-[#112240] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${category.color} h-2`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            Technical Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skill Bars */}
            {[
              { name: 'Frontend Development', percentage: 90 },
              { name: 'Backend Development', percentage: 85 },
              { name: 'Database Management', percentage: 80 },
              { name: 'Problem Solving', percentage: 95 },
              { name: 'Algorithm Design', percentage: 85 },
              { name: 'System Architecture', percentage: 75 }
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-sm text-[#64ffda] font-mono">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#64ffda] rounded-full origin-left transition-transform duration-1000 ease-out"
                    style={{ transform: inView ? `scaleX(${skill.percentage / 100})` : 'scaleX(0)' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;