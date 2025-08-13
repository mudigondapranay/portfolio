import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Data Analyst",
      company: "AI Variant (Remote)",
      period: "Feb 2025 – Present",
      type: "current",
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        "Healthcare analytics for patient volume optimization",
        "Power BI & Tableau dashboard development", 
        "Automated executive reporting (6+ hours saved weekly)",
        "Cross-functional collaboration for product growth"
      ]
    },
    {
      title: "Project Engineer", 
      company: "Gandhi Automation Pvt. Ltd",
      period: "Oct 2024 – Feb 2025",
      type: "previous",
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        "Migrated 50+ Excel reports to Tableau dashboards",
        "Led development of 10+ executive KPI dashboards",
        "15% improvement in operational performance",
        "Agile sprint cycles with cross-functional teams"
      ]
    },
    {
      title: "Bachelor of Technology",
      company: "KIIT University",
      period: "2020 – 2024", 
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      achievements: [
        "Electronics & Telecommunication Engineering",
        "Coordinator at KIIT Technical Society",
        "IEEE Conference on AI/ML Research Projects", 
        "Teaching Assistant in KIIT Robotics Society"
      ]
    }
  ];

  const getColor = (type: string) => {
    switch(type) {
      case 'current': return 'bg-secondary border-secondary';
      case 'previous': return 'bg-accent border-accent';
      case 'education': return 'bg-highlight border-highlight';
      default: return 'bg-primary border-primary';
    }
  };

  const getBorderColor = (type: string) => {
    switch(type) {
      case 'current': return 'border-l-secondary';
      case 'previous': return 'border-r-accent';
      case 'education': return 'border-l-highlight';
      default: return 'border-l-primary';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">Professional Journey</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-accent to-highlight"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${getBorderColor(exp.type)}`}
                      >
                        <div className={`text-sm font-semibold mb-2 ${
                          exp.type === 'current' ? 'text-secondary' : 
                          exp.type === 'previous' ? 'text-accent' : 
                          'text-orange-500'
                        }`}>
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-poppins font-bold text-charcoal mb-2">{exp.title}</h3>
                        <div className={`font-medium mb-3 ${
                          exp.type === 'current' ? 'text-secondary' : 
                          exp.type === 'previous' ? 'text-accent' : 
                          'text-highlight'
                        }`}>
                          {exp.company}
                        </div>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>• {achievement}</li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 ${getColor(exp.type)} rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white`}
                    >
                      {exp.icon}
                    </motion.div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 ${getColor(exp.type)} rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white`}
                    >
                      {exp.icon}
                    </motion.div>
                    <div className="w-1/2 pl-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-white p-6 rounded-xl shadow-lg border-r-4 ${getBorderColor(exp.type).replace('border-l-', 'border-r-')}`}
                      >
                        <div className={`text-sm font-semibold mb-2 ${
                          exp.type === 'current' ? 'text-secondary' : 
                          exp.type === 'previous' ? 'text-accent' : 
                          'text-orange-500'
                        }`}>
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-poppins font-bold text-charcoal mb-2">{exp.title}</h3>
                        <div className={`font-medium mb-3 ${
                          exp.type === 'current' ? 'text-secondary' : 
                          exp.type === 'previous' ? 'text-accent' : 
                          'text-highlight'
                        }`}>
                          {exp.company}
                        </div>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>• {achievement}</li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
