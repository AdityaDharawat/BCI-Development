import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, Activity, FileText, Shield, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    // Animate staggered items
    const staggerItems = document.querySelectorAll('.stagger-item');
    gsap.fromTo(staggerItems, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        }
      }
    );

    // Animate scroll triggers
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    scrollTriggers.forEach(trigger => {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top 85%',
        onEnter: () => trigger.classList.add('visible'),
        onLeaveBack: () => trigger.classList.remove('visible')
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced Brain Tumor Detection with <span className="text-indigo-600">AI</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Our Vision Transformer technology provides medical professionals with accurate, 
                reliable brain tumor detection to improve patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/detection" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Start Detection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ y, opacity }}
              ref={targetRef}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-full filter blur-3xl opacity-20 float-animation"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559757175-7cb056fba93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Brain scan visualization" 
                  className="relative z-10 rounded-2xl shadow-2xl max-w-md float-animation"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              className="scroll-trigger"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-4xl font-bold text-indigo-600 mb-2">98.13%</p>
              <p className="text-gray-600">Detection Accuracy</p>
            </motion.div>
            <motion.div 
              className="scroll-trigger"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-4xl font-bold text-indigo-600 mb-2">10k+</p>
              <p className="text-gray-600">Scans Analyzed</p>
            </motion.div>
            <motion.div 
              className="scroll-trigger"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-4xl font-bold text-indigo-600 mb-2">500+</p>
              <p className="text-gray-600">Medical Partners</p>
            </motion.div>
            <motion.div 
              className="scroll-trigger"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-4xl font-bold text-indigo-600 mb-2">24/7</p>
              <p className="text-gray-600">Support Available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white features-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with intuitive design to provide the most accurate brain tumor detection available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow stagger-item">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision Transformer</h3>
              <p className="text-gray-600">
                State-of-the-art Vision Transformer architecture trained on thousands of MRI scans for unparalleled accuracy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow stagger-item">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analysis</h3>
              <p className="text-gray-600">
                Get instant results with our high-performance backend processing system optimized for speed and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow stagger-item">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Reports</h3>
              <p className="text-gray-600">
                Comprehensive analysis reports with visualization tools to help understand detection results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow stagger-item">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliant</h3>
              <p className="text-gray-600">
                Enterprise-grade security with full HIPAA compliance to protect sensitive patient data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow stagger-item">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinically Validated</h3>
              <p className="text-gray-600">
                Validated through extensive clinical trials with leading medical institutions worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow stagger-item">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <ArrowRight className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">API Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with existing hospital systems through our comprehensive API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to transform your diagnostic capabilities?
            </motion.h2>
            <motion.p 
              className="text-lg text-indigo-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of medical institutions already using NeuroVisionAI to improve patient outcomes with faster, more accurate diagnoses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/detection" 
                className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
              >
                Start Free Trial
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Experts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what medical professionals have to say about our technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-sm scroll-trigger"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Dr. Sarah Johnson" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Dr. Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Neurosurgeon, Mayo Clinic</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "NeuroVisionAI has revolutionized our diagnostic workflow. The accuracy and speed of tumor detection have significantly improved our ability to plan surgical interventions."
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-sm scroll-trigger"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Dr. Michael Chen" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Dr. Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Radiologist, Johns Hopkins</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The Vision Transformer technology behind NeuroVisionAI is truly impressive. It catches subtle anomalies that might be missed in routine screenings."
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-sm scroll-trigger"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Dr. Emily Rodriguez" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Dr. Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Oncologist, MD Anderson</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As an oncologist, having reliable early detection is crucial. NeuroVisionAI provides confidence in our diagnostic process and helps us develop more effective treatment plans."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;