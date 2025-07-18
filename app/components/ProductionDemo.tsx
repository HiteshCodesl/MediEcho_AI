import React from 'react';
import { Play, Monitor, Smartphone, Headphones } from 'lucide-react';

const ProductDemo = () => {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See MediEchoAI in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch how our AI voice assistant transforms medical workflows and improves patient care
            </p>
          </div>

          {/* Main Demo Video */}
          <div className="relative mb-16">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-cyan-200/30 shadow-xl shadow-cyan-500/10">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
                <button className="relative z-10 w-20 h-20 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 transform hover:scale-110 border border-cyan-200/50 shadow-lg shadow-cyan-500/20">
                  <Play className="w-8 h-8 text-cyan-600 ml-1" />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-xl rounded-lg px-3 py-2 border border-cyan-200/50">
                  <span className="text-slate-700 text-sm font-medium">Live Demo: Patient Consultation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-200/30 text-center shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <Monitor className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Desktop Integration</h3>
              <p className="text-slate-600">Seamlessly integrates with existing EMR systems and clinical workflows</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-200/30 text-center shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Mobile Ready</h3>
              <p className="text-slate-600">Access AI assistant on any device, anywhere in your healthcare facility</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-200/30 text-center shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <Headphones className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Voice First</h3>
              <p className="text-slate-600">Natural voice interactions designed for busy healthcare professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;