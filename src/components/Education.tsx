import { useInView } from '../hooks/useInView';
import { Award, BookOpen } from 'lucide-react';

const education = [
  {
    school: 'Lovely Professional University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'Since Aug 2022',
    location: 'Jalandhar, Punjab',
    grade: 'CGPA: 7.6'
  },
  {
    school: 'Sri Chaitanya Junior Kalasala',
    degree: 'Intermediate',
    period: 'Sep 2020 – May 2022',
    location: 'Hyderabad, Telangana',
    grade: 'Percentage: 95.60%'
  },
  {
    school: 'Sri Chaitanya Techo Curriculum',
    degree: 'Secondary Education',
    period: 'Jun 2019 – Jun 2020',
    location: 'Hyderabad, Telangana',
    grade: 'CGPA: 10'
  }
];

const certificates = [
  {
    title: 'The Complete Full-Stack Web Development Boot Camp',
    issuer: 'Udemy',
    date: 'Feb 2025',
    link: 'https://www.udemy.com/certificate/UC-fb232dc8-6d5d-47f9-bfcc-4c00a06df8b4/'
  },
  {
    title: 'Server side JavaScript with Node JS',
    issuer: 'Coursera',
    date: 'May 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/BHFD3BPPQUDN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    title: 'Become a Full-stack Web Developer',
    issuer: 'LinkedIn',
    date: 'Feb 2023',
    link: 'https://www.linkedin.com/learning/certificates/a7c98912f3281f6e324673609045ffbb8b68147461ae4b32034a165242d2c691'
  }
];

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="education" 
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      ref={ref}
    >
      <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-12 flex items-center after:content-[''] after:h-[1px] after:flex-grow after:ml-6 after:bg-slate-300 dark:after:bg-slate-700">
          <span className="text-[#64ffda] font-mono mr-2">05.</span> Education & Certificates
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              <BookOpen className="mr-2 text-[#64ffda]" size={24} /> 
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#64ffda]"
                >
                  <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {edu.school}
                  </h4>
                  <p className="text-[#64ffda] font-medium mb-3">
                    {edu.degree}
                  </p>
                  
                  <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-400 mb-2 gap-3">
                    <span>{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                    <span>{edu.location}</span>
                  </div>
                  
                  <p className="text-sm font-medium bg-slate-100 dark:bg-slate-800 inline-block px-2 py-1 rounded">
                    {edu.grade}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certificates */}
          <div>
            <h3 className="flex items-center text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              <Award className="mr-2 text-[#64ffda]" size={24} /> 
              Certificates
            </h3>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-[#112240] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:transform hover:scale-105 transition-transform"
                >
                  <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {cert.title}
                  </h4>
                  
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-slate-600 dark:text-slate-400">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      {cert.date}
                    </p>
                  </div>
                  
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:underline text-sm inline-flex items-center"
                  >
                    View Certificate 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;