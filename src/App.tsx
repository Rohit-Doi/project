import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Download, MapPin } from 'lucide-react';
import ScrollAnimatedSection from './components/ScrollAnimatedSection';
import StaggeredAnimationContainer from './components/StaggeredAnimationContainer';
import ParallaxSection from './components/ParallaxSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-[#F2F4EC] dark:bg-gray-900 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2F4EC] via-[#D9DFCC] to-[#A7B194] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 opacity-90"></div>
        </ParallaxSection>
        
        <ScrollAnimatedSection animationType="fadeIn" className="relative z-10 text-center">
          <div className="mb-8">
            <ScrollAnimatedSection animationType="slideUp" delay={200}>
              <p className="text-lg md:text-xl text-[#6B7C61] dark:text-[#A7B194] mb-4">
                Hello, I'm
              </p>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animationType="scaleUp" delay={400}>
              <h1 className="text-5xl md:text-7xl font-bold text-[#435739] dark:text-white mb-6">
                Kamatam Rohit
              </h1>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animationType="slideUp" delay={600}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Student, Developer & AIML enthusiast creating smart and innovative projects.
              </p>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animationType="slideUp" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#projects"
                  className="inline-flex items-center px-8 py-4 bg-[#435739] text-white rounded-full hover:bg-[#6B7C61] transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-lg no-underline"
                >
                  View My Work
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#435739] text-[#435739] rounded-full hover:bg-[#435739] hover:text-white transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-lg no-underline"
                >
                  Get In Touch
                </a>
              </div>
              <StaggeredAnimationContainer className="flex justify-center space-x-6" staggerDelay={150}>
                <a 
                  href="https://github.com/Rohit-Doi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#8B5CF6] text-[#1f2937] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rohit-kamatam-b98443280" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#8B5CF6] text-[#1f2937] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:rohitkamatam123@gmail.com" 
                  className="p-2 hover:text-[#8B5CF6] text-[#1f2937] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </StaggeredAnimationContainer>
            </ScrollAnimatedSection>
          </div>
        </ScrollAnimatedSection>
      </section>

      {/* About Section */}
      <ScrollAnimatedSection>
        <section id="about" className="max-w-6xl mx-auto px-4 py-20">
          <ScrollAnimatedSection animationType="slideUp">
            <h2 className="text-4xl md:text-5xl font-bold text-[#435739] dark:text-white text-center mb-16">
              About Me
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Section */}
              <ScrollAnimatedSection animationType="slideLeft" delay={200}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A7B194] to-[#6B7C61] rounded-2xl transform rotate-3 opacity-20"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <img 
                      src="/rohit.jpg" 
                      alt="Rohit Doi - Profile" 
                      className="w-full h-80 object-cover rounded-xl"
                    />
                    <div className="absolute top-8 right-8 bg-[#435739] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Available for Work
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
              
              {/* Content Section */}
              <ScrollAnimatedSection animationType="slideRight" delay={400}>
                <div className="space-y-8">
                  <div>
                    <div className="inline-block bg-[#A7B194]/20 text-[#435739] dark:text-[#A7B194] px-4 py-2 rounded-full text-sm font-medium mb-4">
                      👋 Nice to meet you!
                    </div>
                    <h3 className="text-3xl font-bold text-[#435739] dark:text-white mb-6 leading-tight">
                      Passionate Student & Developer
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Enthusiastic and creative B.Tech AIML student with a strong foundation in artificial intelligence, machine learning, and software development.
                     Adept at problem-solving, collaborating in teams, and eager to contribute to impactful tech projects.              </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      A quick learner with a knack for multitasking, showcasing my ability to blend ML skills with creativity effectively.
                    </p>
                  </div>
                  
                  {/* Key highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="font-semibold text-[#435739] dark:text-white mb-1">Project Management</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Strong organizational skills for efficient task management</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                      <div className="text-2xl mb-2">🎨</div>
                      <h4 className="font-semibold text-[#435739] dark:text-white mb-1">Design Skills</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Created multiple designs using Figma</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center space-x-3 text-[#6B7C61] dark:text-[#A7B194] bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <MapPin className="h-5 w-5" />
                    <span className="font-medium">Based in Hyderabad, India</span>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://github.com/Rohit-Doi" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#435739] text-white rounded-xl hover:bg-[#6B7C61] transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/rohit-kamatam-b98443280" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#435739] text-white rounded-xl hover:bg-[#6B7C61] transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                    <a 
                      href="/resume.pdf" 
                      className="inline-flex items-center px-6 py-3 border-2 border-[#435739] text-[#435739] dark:text-[#A7B194] dark:border-[#A7B194] rounded-xl hover:bg-[#435739] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Resume
                    </a>
                  </div>
                </div>
              </ScrollAnimatedSection>
            </div>
          </ScrollAnimatedSection>
        </section>
      </ScrollAnimatedSection>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <ScrollAnimatedSection>
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
          <ScrollAnimatedSection animationType="slideUp">
            <h2 className="text-4xl md:text-5xl font-bold text-[#435739] dark:text-white text-center mb-16">
              Featured Projects
            </h2>
          </ScrollAnimatedSection>
          
          <StaggeredAnimationContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={200}>
            {[
              {
                title: "Hyper-personalised-Landing-Page-Generator",
                description: "A full-stack e-commerce platform with advanced personalization, built with Next.js (frontend) and Python (FastAPI) backend. Features include user-specific recommendations, cold start strategies, Google login, user clustering, and a modern UI.",
                tech: ["Next.js", "FastAPI", "Python", "Tailwind CSS"],
                image: "/eCommerce.jpg",
                github: "https://github.com/Rohit-Doi/HPLPG",
                demo: undefined
              },
              {
                title: "Emotion-Detection-using-Text-Facial-SHAP",
                description: "A multimodal emotion detection application using DistilBERT for text emotion classification and DeepFace for facial emotion detection, with SHAP-based explainability for text predictions. Supports eight emotions: anger, disgust, fear, joy, neutral, sadness, shame, and surprise.",
                tech: ["DistilBERT", "DeepFace", "SHAP", "Python"],
                image: "/emotion-recognition.webp",
                github: "https://github.com/Rohit-Doi/Emotion-Detection-using-Text-Facial-SHAP",
                demo: undefined
              },
              {
                title: "StudentSync",
                description: "StudentSync is a web application designed to help educational institutions manage student records efficiently. Built with Flask, it allows administrators to add, update, delete, and view student information, with user authentication to ensure secure access. The system uses SQLite as its database for storing student data.",
                tech: ["Flask", "SQLite", "Python", "HTML/CSS"],
                image: "/Student-Management-System..webp",
                github: "https://github.com/Rohit-Doi/Student-sync",
                demo: undefined
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
                <div className="h-48 bg-[#D9DFCC] dark:bg-gray-700 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#435739] dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-[#A7B194] dark:bg-[#6B7C61] text-white text-sm rounded-full hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#435739] dark:text-[#A7B194] hover:text-[#6B7C61] transition-all duration-200 hover:scale-105"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#435739] dark:text-[#A7B194] hover:text-[#6B7C61] transition-all duration-200 hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </StaggeredAnimationContainer>
        </section>
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-[#435739] text-white rounded-full hover:bg-[#6B7C61] transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-lg" disabled>
            View More
          </button>
        </div>
      </ScrollAnimatedSection>

      {/* Education Section */}
      <section id="education">
        <EducationSection />
      </section>

      {/* Achievements Section */}
      <ScrollAnimatedSection>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <ScrollAnimatedSection animationType="slideUp">
            <h2 className="text-4xl md:text-5xl font-bold text-[#435739] dark:text-white text-center mb-16">
              Certifications
            </h2>
          </ScrollAnimatedSection>
          
          <StaggeredAnimationContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={200}>
            {[
              {
                title: "Coursera : Deep Learning.ai Convolutional Neural Networks",
                organization: "Coursera",
                year: "",
                image: "/CNN.png",
                link: "https://www.coursera.org/account/accomplishments/verify/JUH2N0KPFV5W"
              },
              {
                title: "Google Cloud : Hack2skill- Gen AI Academy",
                organization: "Google Cloud / Hack2skill",
                year: "",
                image: "/hcktoskill.jpg",
                link: "https://certificate.hack2skill.com/user/GenAI5-28M/2025H2S04GENAI-A01040"
              },
              {
                title: "Infosys : Springboard - Introduction to Data Science",
                organization: "Infosys",
                year: "",
                image: "/data science.png",
                link: "https://verify.onwingspan.com"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
                <div className="h-48 bg-gradient-to-br from-[#A7B194] to-[#6B7C61] overflow-hidden relative">
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-70 object-contain opacity-80 group-hover:scale-105 transition-transform duration-500 p-4 bg-white dark:bg-gray-800"
                  />
                  {cert.year && (
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#435739] dark:text-[#A7B194] text-sm font-semibold">
                        {cert.year}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#435739] dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[#6B7C61] dark:text-[#A7B194] font-medium mb-4">
                    {cert.organization}
                  </p>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#435739] dark:text-[#A7B194] hover:text-[#6B7C61] transition-all duration-200 font-medium hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </StaggeredAnimationContainer>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-[#435739] text-white rounded-full hover:bg-[#6B7C61] transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-lg" disabled>
            View More
          </button>
        </div>
      </ScrollAnimatedSection>

      {/* Contact Section */}
      <ScrollAnimatedSection>
        <section id="contact" className="max-w-4xl mx-auto px-4 py-20">
          <ScrollAnimatedSection animationType="slideUp">
            <h2 className="text-4xl md:text-5xl font-bold text-[#435739] dark:text-white text-center mb-16">
              Let's Work Together
            </h2>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animationType="scaleUp" delay={200}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollAnimatedSection animationType="slideLeft" delay={400}>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#435739] dark:text-white mb-6">
                      Get in Touch
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href="mailto:rohitkamatam123@gmail.com"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-all duration-200 hover:scale-105"
                      >
                        <Mail className="h-5 w-5 mr-3" />
                        rohitkamatam123@gmail.com
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/rohit-kamatam-b98443280"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-all duration-200 hover:scale-105"
                      >
                        <Linkedin className="h-5 w-5 mr-3" />
                        LinkedIn Profile
                      </a>
                      <a 
                        href="https://github.com/Rohit-Doi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#435739] dark:hover:text-[#A7B194] transition-all duration-200 hover:scale-105"
                      >
                        <Github className="h-5 w-5 mr-3" />
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                </ScrollAnimatedSection>
                
                <ScrollAnimatedSection animationType="slideRight" delay={600}>
                  <div>
                    <form className="space-y-4">
                      <div>
                        <input 
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#A7B194] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:shadow-md focus:scale-105"
                        />
                      </div>
                      <div>
                        <input 
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#A7B194] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:shadow-md focus:scale-105"
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Your Message"
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#A7B194] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:shadow-md focus:scale-105"
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-[#435739] text-white py-3 px-6 rounded-lg hover:bg-[#6B7C61] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </ScrollAnimatedSection>
              </div>
            </div>
          </ScrollAnimatedSection>
        </section>
      </ScrollAnimatedSection>

      <Footer />
    </div>
  );
}

export default App;