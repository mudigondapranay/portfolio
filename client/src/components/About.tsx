import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer portrait"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-poppins font-semibold text-charcoal mb-6">
              Building the Future with <span className="gradient-text">AI & Data</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate AI/ML Engineer and Data Analyst with a Bachelor's degree in Electronics & Telecommunication 
              from KIIT University. Currently working remotely with AI Variant, I specialize in creating intelligent 
              systems and extracting meaningful insights from complex datasets.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My expertise spans from developing robust machine learning models and semantic search systems to 
              building interactive dashboards and automation solutions. I've successfully deployed AI-powered APIs, 
              created multimodal RAG systems, and designed scalable data pipelines.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-accent mb-2">99.6%</div>
                <div className="text-sm text-gray-600">Model Accuracy</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
