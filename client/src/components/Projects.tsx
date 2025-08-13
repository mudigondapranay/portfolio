import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FileText, Bot, BarChart, Heart, DollarSign, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Semantic Search System",
      description: "Advanced NLP-powered search system with sub-second response times. Built with sentence-BERT embeddings and Pinecone vector database achieving 95%+ retrieval accuracy.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "NLP", "Pinecone", "BERT"],
      icon: <Search className="w-6 h-6" />,
      color: "text-accent",
      period: "August 2024 – September 2024"
    },
    {
      title: "AI Resume Analyzer", 
      description: "ATS-driven resume analysis application using Django and OpenAI API. Implements semantic similarity matching with transformer-based embeddings for accurate candidate profiling.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Django", "OpenAI", "NLP", "ML"],
      icon: <FileText className="w-6 h-6" />,
      color: "text-secondary",
      period: "August 2024 – September 2024"
    },
    {
      title: "Fashion AI Chatbot",
      description: "Generative AI-powered fashion chatbot with multimodal product recommendations, real-time RAG integration, and personalization capabilities for virtual styling.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 
      tags: ["RAG", "Spacy", "AI", "Chatbot"],
      icon: <Bot className="w-6 h-6" />,
      color: "text-highlight",
      period: "Open Source Contribution"
    },
    {
      title: "Hospitality Dashboard",
      description: "Comprehensive Tableau dashboard analyzing hotel performance metrics including booking trends, guest satisfaction, and revenue segmentation for business decision support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Tableau", "SQL", "Analytics", "BI"],
      icon: <BarChart className="w-6 h-6" />,
      color: "text-accent",
      period: "November 2024 – January 2025"
    },
    {
      title: "Panic Attack Management",
      description: "Python-based healthcare system integrating biometric sensors, real-time alerting, and data-driven mental health monitoring for panic attack management.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "IoT", "Healthcare", "ML"],
      icon: <Heart className="w-6 h-6" />,
      color: "text-secondary",
      period: "Open Source Contribution"
    },
    {
      title: "Crowdfunding Analytics",
      description: "SQL-driven analysis of Kickstarter data with predictive modeling. Built logistic regression model achieving 81% accuracy in campaign success prediction.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["SQL", "Power BI", "ML", "Analytics"],
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-highlight",
      period: "August 2024 – September 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my latest work in AI/ML, data analytics, and automation solutions
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <span className={project.color}>{project.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-poppins font-bold text-charcoal">{project.title}</h3>
                </div>
                
                <div className="text-xs text-gray-500 mb-3">{project.period}</div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        project.color === 'text-accent' ? 'bg-accent/10 text-accent' :
                        project.color === 'text-secondary' ? 'bg-secondary/10 text-secondary' :
                        project.color === 'text-highlight' ? 'bg-highlight/20 text-orange-600' :
                        'bg-primary/10 text-primary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${project.color} hover:${project.color.replace('text-', 'bg-')}/10 font-medium transition-colors duration-300 flex items-center gap-1 px-3 py-1 rounded-md`}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-charcoal transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
