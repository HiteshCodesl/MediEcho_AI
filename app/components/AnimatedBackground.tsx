import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-100"></div>
      
      {/* Moving Neon Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-pulse delay-2000 opacity-50"></div>
      </div>
      
      {/* Neon Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-500 opacity-60 shadow-lg shadow-blue-400/50"></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-violet-400 rounded-full animate-ping delay-1000 opacity-70 shadow-lg shadow-violet-400/50"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1500 opacity-65 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-2000 opacity-80 shadow-lg shadow-pink-400/50"></div>
        <div className="absolute top-80 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-2500 opacity-55 shadow-lg shadow-cyan-300/50"></div>
      </div>
      
      {/* Moving Neon Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-bounce opacity-70 shadow-2xl shadow-cyan-400/30"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-r from-violet-500/25 to-purple-600/25 rounded-full blur-xl animate-bounce delay-1000 opacity-60 shadow-2xl shadow-violet-500/30"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-bounce delay-2000 opacity-50 shadow-2xl shadow-blue-500/30"></div>
      </div>
      
      {/* Large Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse opacity-70 shadow-2xl shadow-cyan-400/20"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/25 to-purple-600/25 rounded-full blur-3xl animate-pulse delay-1000 opacity-60 shadow-2xl shadow-violet-500/20"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000 opacity-50 shadow-2xl shadow-blue-500/20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/18 to-pink-500/18 rounded-full blur-3xl animate-pulse delay-3000 opacity-40 shadow-2xl shadow-purple-500/20"></div>
      </div>
      
      {/* Enhanced Floating Neon Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-full animate-bounce opacity-60 shadow-lg shadow-cyan-400/30"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-blue-500/35 to-violet-600/35 rounded-full animate-bounce delay-500 opacity-55 shadow-md shadow-blue-500/30"></div>
        <div className="absolute bottom-32 left-40 w-10 h-10 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full animate-bounce delay-1000 opacity-50 shadow-lg shadow-violet-500/30"></div>
        <div className="absolute bottom-20 right-20 w-7 h-7 bg-gradient-to-r from-purple-500/25 to-pink-600/25 rounded-full animate-bounce delay-1500 opacity-45 shadow-md shadow-purple-500/30"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-pink-400/35 to-cyan-500/35 rounded-full animate-bounce delay-2000 opacity-65 shadow-lg shadow-pink-400/30"></div>
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-gradient-to-r from-cyan-500/30 to-blue-400/30 rounded-full animate-bounce delay-2500 opacity-50 shadow-md shadow-cyan-500/30"></div>
      </div>
      
      {/* Neon Circuit Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,100 L200,100 L200,200 L400,200" stroke="url(#neonGradient1)" strokeWidth="2" className="animate-pulse" />
          <path d="M800,300 L1000,300 L1000,400 L1200,400" stroke="url(#neonGradient2)" strokeWidth="2" className="animate-pulse delay-1000" />
          <path d="M0,600 L300,600 L300,700 L600,700" stroke="url(#neonGradient3)" strokeWidth="2" className="animate-pulse delay-2000" />
          <defs>
            <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="neonGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* AI Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,200 600,400 T1200,400 V800 H0 Z" fill="url(#wave1)" />
          <path d="M0,450 Q300,250 600,450 T1200,450 V800 H0 Z" fill="url(#wave2)" />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Enhanced Neon Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent animate-pulse delay-1000 shadow-lg shadow-cyan-400/20"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-400/15 via-transparent to-transparent animate-pulse delay-2000 shadow-lg shadow-blue-400/20"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-violet-400/12 via-transparent to-transparent animate-pulse delay-3000 shadow-lg shadow-violet-400/20"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-purple-400/10 via-transparent to-transparent animate-pulse delay-4000 shadow-lg shadow-purple-400/20"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;