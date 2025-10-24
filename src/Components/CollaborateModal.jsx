import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineUser, AiOutlineMessage, AiOutlineCheck } from 'react-icons/ai';
import { FaRocket, FaCalendarAlt, FaMoneyBillWave, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const CollaborateModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const EMAILJS_SERVICE_ID = 'service_4vset9h';
  const EMAILJS_TEMPLATE_ID = 'template_li5wf48';
  const EMAILJS_PUBLIC_KEY = 'M2mN3pPRT0AM8rtNv';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.description,
          to_email: 'guru22ca@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or email me directly at guru22ca@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto border border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-t-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <FaRocket className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {isSubmitted ? '🎉 Success!' : 'Start Your Project'}
                </h2>
                <p className="text-blue-100 mt-1">
                  {isSubmitted ? 'Your message is on its way!' : 'Let\'s bring your ideas to life together'}
                </p>
              </div>
            </div>
            {!isSubmitted && (
              <button
                onClick={onClose}
                className="text-white hover:text-blue-200 transition-all duration-300 p-3 rounded-full hover:bg-white/10"
              >
                <AiOutlineClose size={24} />
              </button>
            )}
          </div>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="p-12 text-center">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <AiOutlineCheck className="text-green-400 text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Project Proposal Sent!</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Thank you for reaching out! I've received your project details and will review them carefully. 
              You can expect to hear back from me within 24 hours.
            </p>
            <div className="bg-gray-700 rounded-xl p-4 border border-gray-600 max-w-md mx-auto">
              <p className="text-gray-400 text-sm">
                For urgent matters, feel free to email me directly at{' '}
                <span className="text-blue-400 font-semibold">guru22ca@gmail.com</span>
              </p>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                  <AiOutlineUser className="text-blue-400" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                  <AiOutlineMail className="text-blue-400" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Project Type and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                  <FaCode className="text-purple-400" />
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white transition-all duration-200"
                >
                  <option value="" className="text-gray-400">Select project type</option>
                  <option value="web-development" className="text-white">Web Development</option>
                  <option value="mobile-app" className="text-white">Mobile Application</option>
                  <option value="full-stack" className="text-white">Full Stack Project</option>
                  <option value="data-engineering" className="text-white">Data Engineering</option>
                  <option value="api-development" className="text-white">API Development</option>
                  <option value="consultation" className="text-white">Technical Consultation</option>
                  <option value="other" className="text-white">Other</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                  <FaMoneyBillWave className="text-green-400" />
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white transition-all duration-200"
                >
                  <option value="" className="text-gray-400">Select budget range</option>
                  <option value="1k-5k" className="text-white">$1,000 - $5,000</option>
                  <option value="5k-15k" className="text-white">$5,000 - $15,000</option>
                  <option value="15k-30k" className="text-white">$15,000 - $30,000</option>
                  <option value="30k+" className="text-white">$30,000+</option>
                  <option value="to-be-discussed" className="text-white">To be discussed</option>
                </select>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                <FaCalendarAlt className="text-orange-400" />
                Project Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all duration-200"
              >
                <option value="" className="text-gray-400">Select timeline</option>
                <option value="1-month" className="text-white">1 Month</option>
                <option value="1-3-months" className="text-white">1-3 Months</option>
                <option value="3-6-months" className="text-white">3-6 Months</option>
                <option value="6-months+" className="text-white">6+ Months</option>
                <option value="flexible" className="text-white">Flexible</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                <AiOutlineMessage className="text-blue-400" />
                Project Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 resize-none transition-all duration-200"
                placeholder="Tell me about your project vision, goals, technical requirements, and any specific features you'd like to include..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <FaRocket className="text-white" />
                    <span>Launch Project</span>
                  </div>
                )}
              </button>
            </div>

            {/* Note */}
            <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
              <p className="text-gray-400 text-sm text-center">
                ✨ Your project details will be sent directly to my inbox. I typically respond within 24 hours to discuss next steps!
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CollaborateModal;