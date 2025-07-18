import React from 'react';
import { Mic, Calendar, Shield, Globe, Clock, Brain, UserCheck, Stethoscope } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Real-time Medical Transcription",
      description: "Convert doctor-patient conversations into accurate medical records instantly with 99.2% accuracy",
      color: "from-blue-500 to-violet-600"
    },
    {
      icon: UserCheck,
      title: "AI Virtual Doctors",
      description: "24/7 AI-powered virtual doctors for initial consultations, symptom analysis, and medical guidance",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "AI Appointment Scheduling",
      description: "Intelligent booking system that handles patient scheduling, rescheduling, and reminders automatically",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Stethoscope,
      title: "AI Medical Diagnosis",
      description: "Advanced AI algorithms assist in preliminary diagnosis and treatment recommendations based on symptoms",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Secure Patient Interaction",
      description: "HIPAA-compliant voice interactions with end-to-end encryption and secure data handling",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Voice Understanding",
      description: "Support for 25+ languages with real-time translation and cultural context awareness",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "24/7 Patient Support",
      description: "Round-the-clock AI assistant for patient inquiries, medication reminders, and emergency protocols",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Brain,
      title: "Clinical Decision Support",
      description: "AI-powered insights and recommendations based on patient history and medical best practices",
      color: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Powerful AI Features for Healthcare
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advanced voice AI technology designed specifically for medical environments, 
            ensuring accuracy, security, and seamless integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass border border-white/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;