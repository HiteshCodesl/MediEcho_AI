"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    demoRequest: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch with our team to schedule a personalized demo and see how MediEchoAI can revolutionize your healthcare workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass border border-white/20 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Request a Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="john@hospital.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Hospital/Clinic Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="General Hospital"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your practice size, current challenges, and what you're looking for in an AI solution..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="demoRequest"
                    checked={formData.demoRequest}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-white/20 rounded focus:ring-blue-500"
                  />
                  <label className="text-slate-700 text-sm">
                    I'd like to schedule a live demo with your team
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Request</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass border border-white/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold">Email Us</p>
                      <p className="text-slate-600">hello@mediechoai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold">Call Us</p>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold">Visit Us</p>
                      <p className="text-slate-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass border border-white/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Schedule a Demo</h3>
                <p className="text-slate-600 mb-6">
                  See MediEchoAI in action with a personalized demo tailored to your practice's needs.
                </p>
                <button className="w-full glass border border-white/20 text-slate-800 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Demo Call</span>
                </button>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-violet-600/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-300/30">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Enterprise Solutions</h3>
                <p className="text-slate-700 mb-4">
                  Need a custom solution for your hospital system? Our enterprise team is ready to help.
                </p>
                <p className="text-blue-700 font-semibold">enterprise@mediechoai.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;