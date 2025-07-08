import React from 'react';
import { Code, Users } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import StaggeredAnimationContainer from './StaggeredAnimationContainer';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconBg: 'bg-gradient-to-br from-green-500 to-teal-600',
      skills: [
        'C',
        'Python',
        'JAVA',
        'SQL',
        'MongoDB'
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
      skills: [
        'Docker',
        'Git',
        'VS Code'
        
      ]
    },
    {
      title: 'Design & UX',
      icon: '🎨',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
      skills: [
        'Figma',
        'Canva'
      ]
    }
  ];

  const softSkills = [
    { name: 'Leadership', icon: '👥' },
    { name: 'Communication', icon: '💬' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Project Management', icon: '📊' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Critical Thinking', icon: '🧠' }
  ];

  return (
    <ScrollAnimatedSection>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <ScrollAnimatedSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#435739] dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>
        </ScrollAnimatedSection>
        
        {/* Technical Skills Grid */}
        <StaggeredAnimationContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" staggerDelay={200}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group border border-gray-100 dark:border-gray-700 aspect-square flex flex-col"
            >
              {/* Category Header */}
              <div className="flex flex-col items-center mb-6">
                <div className={`w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white text-center">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-2 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-lg px-3 py-2 text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StaggeredAnimationContainer>

        {/* Soft Skills Section */}
        <ScrollAnimatedSection animationType="slideUp" delay={400}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl text-white hover:scale-110 transition-transform duration-300 mr-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#435739] dark:text-white">
                Soft Skills & Leadership
              </h3>
            </div>
            
            <StaggeredAnimationContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={100}>
              {softSkills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="group bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="text-2xl mb-1 group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="font-medium text-[#435739] dark:text-white text-sm">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredAnimationContainer>
          </div>
        </ScrollAnimatedSection>
      </div>
    </ScrollAnimatedSection>
  );
};

export default SkillsSection;