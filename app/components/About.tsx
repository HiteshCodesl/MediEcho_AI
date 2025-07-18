import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Patients Served" },
    { icon: Award, value: "99.7%", label: "Accuracy Rate" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: TrendingUp, value: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Leading the Future of Healthcare
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              mediechoAI represents the next evolution in medical technology, combining artificial intelligence 
              with human expertise to deliver unprecedented accuracy in diagnosis and treatment recommendations.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our platform has been developed in collaboration with leading medical institutions and 
              has undergone rigorous testing to ensure the highest standards of accuracy and safety.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-md border border-white/20">
              <div className="bg-white/10 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To democratize access to high-quality healthcare through AI-powered diagnostics, 
                  making expert medical analysis available to everyone, everywhere.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  A world where advanced medical AI assists healthcare providers in delivering 
                  faster, more accurate diagnoses and personalized treatment plans.
                </p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;