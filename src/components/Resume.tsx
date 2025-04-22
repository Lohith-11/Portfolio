import React from 'react';
import { useInView } from '../hooks/useInView';
import resume from '../assests/resume.jpg';
import resumedownload from '../assests/resume.pdf';

const Resume: React.FC = () => {
  const { ref } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="resume" className="flex flex-col items-center mt-10 px-4" ref={ref}>
      <h2 className="text-3xl font-semibold mb-6 text-center">My Resume</h2>

      {/* Resume Image */}
      <img
        src={resume}
        alt="Resume"
        className="w-full max-w-4xl rounded-lg shadow-lg border border-gray-300"
      />

      {/* Download Button */}
      <a
        href={resumedownload}
        download
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
