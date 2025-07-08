import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import StaggeredAnimationContainer from './StaggeredAnimationContainer';

const EducationSection: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech",
      institution: "Malla Reddy College Engineering Technology, Hyderabad",
      duration: "2022-2027",
      description: "Currently pursuing Bachelor's degree in Computer science Engineering with focus on Artificial Intelligence and Machine Learning."
    },
    {
      degree: "Intermediate",
      institution: "Little Flower Junior College, Hyderabad",
      duration: "2020-2022",
      description: "Completed intermediate education with specialization in Mathematical Sciences."
    },
    {
      degree: "SSC",
      institution: "St. Mary's High School, Hyderabad",
      duration: "2019-2020",
      description: "Completed high school education with strong academic performance."
    }
  ];

  return (
    <ScrollAnimatedSection>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <ScrollAnimatedSection animationType="slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#435739] dark:text-white text-center mb-16">
            My Education
          </h2>
        </ScrollAnimatedSection>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#A7B194] to-[#6B7C61] rounded-full"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <ScrollAnimatedSection 
                key={idx} 
                animationType={idx % 2 === 0 ? 'slideLeft' : 'slideRight'}
                delay={idx * 200}
              >
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#435739] dark:bg-[#A7B194] rounded-full border-4 border-white dark:border-gray-900 z-10 hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Education card */}
                  <div className={`flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
                        {/* Date badge */}
                        <div className="flex items-center mb-4">
                          <div className="flex items-center space-x-2 px-3 py-1 bg-[#A7B194] dark:bg-[#6B7C61] text-white rounded-full text-sm group-hover:scale-105 transition-transform duration-300">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                        
                        {/* Education content */}
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl group-hover:scale-125 transition-transform duration-300">🎓</div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-[#435739] dark:text-white mb-1">
                                {edu.degree}
                              </h3>
                              <h4 className="text-lg font-medium text-[#6B7C61] dark:text-[#A7B194] mb-2">
                                {edu.institution}
                              </h4>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.institution}</span>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
        
        {/* Additional Education Info */}
        <ScrollAnimatedSection animationType="slideUp" delay={600}>
          <StaggeredAnimationContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={200}>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">🎯</div>
                <h3 className="text-lg font-semibold text-[#435739] dark:text-white mb-2">
                  Current Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Data Science & Analytics with Machine Learning specialization
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">📚</div>
                <h3 className="text-lg font-semibold text-[#435739] dark:text-white mb-2">
                  Key Subjects
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Statistics, Python, Machine Learning, Data Visualization
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">🏆</div>
                <h3 className="text-lg font-semibold text-[#435739] dark:text-white mb-2">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Consistent high performance across all educational levels
                </p>
              </div>
            </div>
          </StaggeredAnimationContainer>
        </ScrollAnimatedSection>
      </div>
    </ScrollAnimatedSection>
  );
};

export default EducationSection;