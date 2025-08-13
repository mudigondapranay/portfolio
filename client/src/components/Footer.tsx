import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-poppins font-bold mb-4"
          >
            SK<span className="text-secondary">.</span>
          </motion.div>
          <p className="text-gray-400 mb-6">
            Building intelligent solutions through AI, ML, and data analytics
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Sumit Kumar. All rights reserved. | Designed with passion for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
