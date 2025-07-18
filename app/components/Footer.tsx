import React from 'react';
import { Mail, Phone, MapPin, Stethoscope, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 glass">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-800">MediEchoAI</span>
              </div>
            </div>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
              Revolutionizing healthcare communication with AI-powered voice technology. 
              Trusted by 500+ healthcare providers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass border border-white/20 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200">
                <Twitter className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 glass border border-white/20 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200">
                <Linkedin className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 glass border border-white/20 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200">
                <Youtube className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 glass border border-white/20 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200">
                <Github className="w-5 h-5 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Features</a></li>
              <li><a href="#demo" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Demo</a></li>
              <li><a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">API Docs</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Partners</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-500 text-sm">
                © 2025 MediEchoAI. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">HIPAA Compliance</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;