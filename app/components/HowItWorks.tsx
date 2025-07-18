import React from 'react';
import { Mic, Brain, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Voice Input",
      description: "Patient speaks naturally to our AI voice assistant during consultation or appointment booking",
      color: "from-blue-500 to-violet-600"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Advanced AI analyzes speech, understands medical context, and processes information in real-time",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Instant Output",
      description: "Generate accurate transcriptions, schedule appointments, or provide patient support instantly",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simple 3-step process to transform your healthcare communication
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-violet-600 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transform -translate-y-1/2"></div>

            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="glass border border-white/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;