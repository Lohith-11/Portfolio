import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Github as GitHub, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      ref={ref}
    >
      <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-4 flex items-center after:content-[''] after:h-[1px] after:flex-grow after:ml-6 after:bg-slate-300 dark:after:bg-slate-700">
          <span className="text-[#64ffda] font-mono mr-2">06.</span> Get In Touch
        </h2>
        
        <p className="text-center text-lg text-slate-700 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#112240] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] dark:bg-slate-800 dark:text-white transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] dark:bg-slate-800 dark:text-white transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] dark:bg-slate-800 dark:text-white transition-colors duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-md text-white transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-[#64ffda] hover:bg-[#64ffda]/90 text-[#0a192f]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md text-center">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full mr-4">
                    <Mail className="text-[#64ffda]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-slate-900 dark:text-white">Email</h4>
                    <a 
                      href="mailto:lohithr011@gmail.com" 
                      className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
                    >
                      lohithr011@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full mr-4">
                    <GitHub className="text-[#64ffda]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-slate-900 dark:text-white">GitHub</h4>
                    <a 
                      href="https://github.com/Lohith-11" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
                    >
                      github.com/Lohith-11
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full mr-4">
                    <Linkedin className="text-[#64ffda]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-slate-900 dark:text-white">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/lohithreddy11" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-400 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors duration-300"
                    >
                      linkedin.com/in/lohithreddy11
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Current Location
              </h4>
              <p className="text-slate-700 dark:text-slate-400 mb-2">
                Hyderabad, Telangana 500018
              </p>
              <p className="text-slate-700 dark:text-slate-400">
                Open to remote opportunities and relocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;