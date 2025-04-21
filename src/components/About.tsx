import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      ref={ref}
    >
      <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-8 flex items-center after:content-[''] after:h-[1px] after:flex-grow after:ml-6 after:bg-slate-300 dark:after:bg-slate-700">
          <span className="text-[#64ffda] font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-400 mb-4 leading-relaxed">
              Hello! I'm Mareddy Lohith Reddy, currently pursuing my Bachelor's degree in Computer Science and Engineering at Lovely Professional University. I'm passionate about creating software that solves real-world problems and delivers exceptional user experiences.
            </p>

            <p className="text-base md:text-lg text-slate-700 dark:text-slate-400 mb-4 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to constantly learn and improve. Through coursework, personal projects, and continuous learning, I've developed strong fundamentals in software development with a focus on web technologies.
            </p>

            <p className="text-base md:text-lg text-slate-700 dark:text-slate-400 mb-6 leading-relaxed">
              I've worked on various projects ranging from full-stack web applications to exploring cloud computing solutions. I enjoy the challenge of creating scalable, maintainable code and am always eager to expand my technical expertise.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white">Location</h3>
              <p className="text-slate-700 dark:text-slate-400">Hyderabad, Telangana 500018</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white">Connect with me</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/Lohith-11" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300 flex items-center"
                  >
                    <span className="bg-slate-200 dark:bg-slate-800 h-6 w-6 rounded-full flex items-center justify-center mr-2">G</span>
                    github.com/Lohith-11
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/lohithreddy11" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300 flex items-center"
                  >
                    <span className="bg-slate-200 dark:bg-slate-800 h-6 w-6 rounded-full flex items-center justify-center mr-2">LI</span>
                    linkedin.com/in/lohithreddy11
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:lohithr011@gmail.com" 
                    className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300 flex items-center"
                  >
                    <span className="bg-slate-200 dark:bg-slate-800 h-6 w-6 rounded-full flex items-center justify-center mr-2">E</span>
                    lohithr011@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="relative rounded-md overflow-hidden border-2 border-[#64ffda] z-10">
                <img 
                  src="https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#64ffda] rounded-md z-0 transition-all duration-300 group-hover:top-2 group-hover:right-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;