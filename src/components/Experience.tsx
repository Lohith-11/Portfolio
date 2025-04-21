import { useInView } from '../hooks/useInView';

const experiences = [
  {
    title: 'Cloud Computing',
    company: 'NPTEL',
    period: 'Jul 2024 – Oct 2024',
    location: 'Remote',
    description: [
      'Gained in-depth knowledge of cloud architecture, virtualization, and deployment models (IaaS, PaaS, SaaS).',
      'Explored cloud platforms such as AWS and Google Cloud to learn about storage, computing, and security services.',
      'Created and deployed a scalable cloud-based application utilizing serverless computing and containerization.'
    ]
  },
  {
    title: 'Data Structures and Algorithms',
    company: 'Board Infinity',
    period: 'Jun 2024 – Jul 2024',
    location: 'Remote',
    description: [
      'Mastered 10+ fundamental data structures which includs arrays, linked lists, stacks, queues, trees, and graphs.',
      'Designed and optimized 50+ algorithms to tackle real-world problems emphasizing time and space complexity using C++.',
      'Built a Library Management System handling 1,000+ book records and 500+ user transactions to integrate search, issue, and return functionalities for efficient data retrieval and management.'
    ]
  }
];

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      ref={ref}
    >
      <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-12 flex items-center after:content-[''] after:h-[1px] after:flex-grow after:ml-6 after:bg-slate-300 dark:after:bg-slate-700">
          <span className="text-[#64ffda] font-mono mr-2">02.</span> Trainings
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-800"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Date bubble */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#64ffda] z-10 flex items-center justify-center">
                  <span className="text-[#0a192f] font-bold">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <div className="bg-white dark:bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center mb-4 gap-2 md:gap-0">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                      <span className="hidden md:inline mx-2 text-[#64ffda]">@</span>
                      <span className="text-[#64ffda] font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="mb-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-3">
                      <span>{exp.period}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                      <span>{exp.location}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#64ffda] mr-2">▹</span>
                          <span className="text-slate-700 dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;