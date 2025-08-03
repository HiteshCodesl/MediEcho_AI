"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass border-b border-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center">
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-sm opacity-75 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/50"></div>
              <div className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl w-full h-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/50 animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">MediEchoAI</span>
              <p className="text-xs text-blue-700 -mt-1 font-medium">Voice Consultation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#demo" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Demo
            </a>
            <a href='#Pricing'  className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-6 glass border border-white/20 rounded-2xl shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors py-2">
                Features
              </a>
              <a href="#demo" className="text-slate-700 hover:text-blue-600 transition-colors py-2">
                Demo
              </a>
              <a href="/billing" className="text-slate-700 hover:text-blue-600 transition-colors py-2">
                Pricing
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors py-2">
                Contact
              </a>
              <div className="pt-4 border-t border-white/10">
                <button className="w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;