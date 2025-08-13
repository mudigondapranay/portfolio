import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Brain, BarChart3, Cloud } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedSkills, setAnimatedSkills] = useState(false);

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      color: "bg-secondary/10 text-secondary",
      skills: [
        { name: "Python & Libraries", level: 95 },
        { name: "NLP & Transformers", level: 90 },
        { name: "Deep Learning", level: 85 }
      ]
    },
    {
      title: "Data Analytics", 
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-accent/10 text-accent",
      skills: [
        { name: "SQL & Databases", level: 90 },
        { name: "Power BI & Tableau", level: 88 },
        { name: "Statistical Analysis", level: 85 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="w-8 h-8" />,
      color: "bg-primary/10 text-primary",
      skills: [
        { name: "AWS & Azure", level: 80 },
        { name: "Docker & Git", level: 85 },
        { name: "API Development", level: 88 }
      ]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "Pandas", "Power BI", "SQL", "HuggingFace",
    "Streamlit", "LangChain", "OpenAI", "Tableau", "AWS", "Docker"
  ];

  useEffect(() => {
    if (isInView && !animatedSkills) {
      setAnimatedSkills(true);
    }
  }, [isInView, animatedSkills]);

  const getSkillBarColor = (index: number) => {
    const colors = ['bg-secondary', 'bg-accent', 'bg-highlight'];
    return colors[index % colors.length];
  };

  const getTechColor = (index: number) => {
    const colors = ['bg-primary text-white', 'bg-secondary text-white', 'bg-accent text-white', 'bg-highlight text-primary'];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-poppins font-bold text-charcoal">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={animatedSkills ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 2, delay: (categoryIndex * 0.5) + (skillIndex * 0.3), ease: "easeOut" }}
                        className={`h-2 rounded-full ${getSkillBarColor(categoryIndex)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-poppins font-bold text-center text-charcoal mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${getTechColor(index)}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
