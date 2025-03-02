import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Award, Users, BookOpen, Microscope, Zap } from 'lucide-react';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About <span className="text-indigo-600">NeuroVisionAI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              We're on a mission to revolutionize brain tumor detection through advanced AI technology,
              making accurate diagnoses more accessible to medical professionals worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                NeuroVisionAI was founded in 2023 by a team of AI researchers and neurosurgeons who recognized the potential for deep learning to transform medical imaging analysis.
              </p>
              <p className="text-gray-700 mb-6">
                After years of research and development, we created a Vision Transformer model specifically optimized for brain MRI analysis, achieving 98.13% accuracy in tumor detection.
              </p>
              <p className="text-gray-700">
                Today, our technology is used by hundreds of medical institutions around the world, helping doctors make faster, more accurate diagnoses and improving patient outcomes.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-lg filter blur-xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Medical researchers working with AI"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed"
            >
              To harness the power of artificial intelligence to improve brain tumor detection accuracy,
              reduce diagnostic time, and ultimately save lives through earlier intervention and treatment.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              The principles that guide our work and shape our culture.
            </motion.p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scientific Excellence</h3>
              <p className="text-gray-600">
                We are committed to rigorous research and continuous improvement of our algorithms to ensure the highest possible accuracy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered</h3>
              <p className="text-gray-600">
                Behind every scan is a patient. We never lose sight of the human impact of our technology and the lives it can help save.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in open communication about our technology's capabilities and limitations, sharing research findings with the medical community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Meet the experts behind NeuroVisionAI.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Member 1", "Member 2", "Member 3", "Member 4"].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src="/src/assets/images/user2.png"
                  alt={member}
                  className="w-full h-15 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technology</h2>
              <p className="text-gray-700 mb-6">
                At the core of NeuroVisionAI is our proprietary Vision Transformer (ViT) architecture, specifically optimized for medical imaging analysis.
              </p>
              <p className="text-gray-700 mb-6">
                Unlike traditional convolutional neural networks, our ViT model processes images by dividing them into patches and tracking relationships between different regions, similar to how a radiologist examines a scan.
              </p>
              <p className="text-gray-700">
                This approach allows for unprecedented accuracy in detecting even subtle anomalies that might indicate early-stage tumors, giving medical professionals a powerful tool for early diagnosis.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-lg filter blur-xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="AI brain scan analysis visualization"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Want to learn more?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-indigo-100 mb-8"
            >
              Contact our team to schedule a demo or discuss how NeuroVisionAI can benefit your medical practice.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;