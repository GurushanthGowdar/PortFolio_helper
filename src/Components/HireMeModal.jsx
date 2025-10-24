import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlinePhone, AiOutlineDollar } from 'react-icons/ai';
import { FaLinkedin, FaUserTie, FaBuilding, FaCode, FaBriefcase } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const HireMeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    skillsRequired: '',
    ctcOffered: '',
    jobDescription: ''
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
          company_name: formData.companyName,
          contact_name: formData.contactName,
          contact_email: formData.contactEmail,
          contact_phone: formData.contactPhone,
          skills_required: formData.skillsRequired,
          ctc_offered: formData.ctcOffered,
          job_description: formData.jobDescription,
          to_email: 'guru22ca@gmail.com',
          subject: `Job Opportunity from ${formData.companyName}`
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          companyName: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          skillsRequired: '',
          ctcOffered: '',
          jobDescription: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      // Fallback to regular email if EmailJS fails
      const subject = `Job Opportunity from ${formData.companyName}`;
      const body = `
Company: ${formData.companyName}
Contact Person: ${formData.contactName}
Contact Email: ${formData.contactEmail}
Contact Phone: ${formData.contactPhone}
CTC Offered: ${formData.ctcOffered}

Skills Required:
${formData.skillsRequired}

Job Description:
${formData.jobDescription}
      `.trim();

      window.location.href = `mailto:guru22ca@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setTimeout(() => {
        onClose();
        setFormData({
          companyName: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          skillsRequired: '',
          ctcOffered: '',
          jobDescription: ''
        });
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-gray-700">
        {/* Header */}
        <div className="relative p-8 rounded-t-3xl bg-gradient-to-r from-green-500 to-blue-600">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <FaBriefcase className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {isSubmitted ? 'Opportunity Sent!' : 'Let\'s Work Together'}
                </h2>
                <p className="text-white/80 text-lg">
                  {isSubmitted ? 'I\'ll review and get back to you soon!' : 'Share the opportunity details and I\'ll get back to you'}
                </p>
              </div>
            </div>
            {!isSubmitted && (
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-all duration-300 p-3 rounded-2xl hover:bg-white/10"
              >
                <AiOutlineClose size={24} />
              </button>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Opportunity Details Sent!</h3>
            <p className="text-gray-300 mb-4">
              Thank you for sharing the opportunity. I've received your details and will review them carefully.
            </p>
            <p className="text-green-400 font-semibold">
              I'll get back to you within 2-4 hours during business days.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Contact Information */}
            <div className="p-8 border-r border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <AiOutlineMail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Primary Email</p>
                    <p className="font-semibold text-white text-lg">guru22ca@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="bg-green-500/20 p-3 rounded-xl">
                    <AiOutlinePhone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Direct Contact</p>
                    <p className="font-semibold text-white text-lg">+91 9538227415</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="bg-blue-600/20 p-3 rounded-xl">
                    <FaLinkedin className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Professional Profile</p>
                    <p className="font-semibold text-white text-lg">LinkedIn</p>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="mt-8 space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                  <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Quick Response
                  </h4>
                  <p className="text-green-300/80 text-sm">
                    I typically respond within 2-4 hours during business days
                  </p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4">
                  <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Availability
                  </h4>
                  <p className="text-blue-300/80 text-sm">
                    Open to full-time opportunities with competitive packages
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Opportunity Form */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                Opportunity Details
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label className="flex items-center gap-3 text-sm font-semibold text-gray-300 mb-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <FaBuilding className="text-blue-400" />
                    </div>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter company name"
                  />
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-3 text-sm font-semibold text-gray-300 mb-3">
                      <div className="bg-purple-500/20 p-2 rounded-lg">
                        <FaUserTie className="text-purple-400" />
                      </div>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-3 text-sm font-semibold text-gray-300 mb-3">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <AiOutlineMail className="text-blue-400" />
                      </div>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                {/* Phone and CTC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-3 text-sm font-semibold text-gray-300 mb-3">
                      <div className="bg-green-500/20 p-2 rounded-lg">
                        <AiOutlinePhone className="text-green-400" />
                      </div>
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-3 text-sm font-semibold text-gray-300 mb-3">
                      <div className="bg-yellow-500/20 p-2 rounded-lg">
                        <AiOutlineDollar className="text-yellow-400" />
                      </div>
                      CTC Offered (LPA) *
                    </label>
                    <input
                      type="text"
                      name="ctcOffered"
                      value={formData.ctcOffered}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="e.g., 15-20 LPA"
                    />
                  </div>
                </div>

                {/* Skills Required */}
                <div>
                  <label className="flex items-center gap-3 text-sm font-semibold text-gray-300 mb-3">
                    <div className="bg-orange-500/20 p-2 rounded-lg">
                      <FaCode className="text-orange-400" />
                    </div>
                    Key Skills Required *
                  </label>
                  <textarea
                    name="skillsRequired"
                    value={formData.skillsRequired}
                    onChange={handleChange}
                    required
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="List the main technologies and skills required for this role (e.g., Java, Spring Boot, React, AWS...)"
                  />
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Job Description / Role Overview
                  </label>
                  <textarea
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Brief description of the role, team, and key responsibilities..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Opportunity Details'
                    )}
                  </button>
                </div>

                {/* Note */}
                <p className="text-sm text-gray-400 text-center pt-4">
                  Your opportunity details will be sent directly to my email. I'll review and respond promptly.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HireMeModal;