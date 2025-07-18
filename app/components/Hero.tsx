import React from 'react';
import { ArrowRight, Shield, Award, Users, Mic, Brain, Heart, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 glass border border-white/20 rounded-full px-4 py-2 mb-8 shadow-lg">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-slate-700 font-medium">HIPAA + SOC 2 Certified</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="text-slate-900 font-poppins font-extrabold">
              AI Medical Voice
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent text-Inter font-extrabold">
              Consultation Platform
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing healthcare with AI-powered voice tech. Real-time transcription, 
            automated scheduling, 24/7 voice assistants.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <button className="group bg-gradient-to-r from-blue-500 to-violet-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Mic className="w-5 h-5" />
              <span>Request Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group glass border border-white/20 text-slate-800 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Play className="w-5 h-5" />
              <span>Try It Now</span>
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="glass border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Voice Recognition</h3>
              <p className="text-slate-600 text-sm">99.2% accuracy in medical terminology</p>
            </div>
            
            <div className="glass border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Smart Analysis</h3>
              <p className="text-slate-600 text-sm">Real-time clinical insights</p>
            </div>
            
            <div className="glass border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Patient Care</h3>
              <p className="text-slate-600 text-sm">24/7 AI assistance</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-3xl font-bold text-slate-800">500+</span>
              </div>
              <p className="text-slate-600 text-sm">Healthcare Providers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-violet-600" />
                <span className="text-3xl font-bold text-slate-800">99.2%</span>
              </div>
              <p className="text-slate-600 text-sm">Voice Accuracy</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="text-3xl font-bold text-slate-800">100%</span>
              </div>
              <p className="text-slate-600 text-sm">HIPAA Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;