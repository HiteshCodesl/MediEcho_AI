"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate is MediEchoAI's medical transcription?",
      answer: "MediEchoAI achieves 99.2% accuracy in medical transcription, which is significantly higher than industry standards. Our AI is specifically trained on medical terminology and continuously learns from healthcare interactions to improve accuracy over time."
    },
    {
      question: "Is MediEchoAI HIPAA compliant and secure?",
      answer: "Yes, MediEchoAI is fully HIPAA compliant and SOC 2 certified. We use end-to-end encryption, secure data centers, and follow strict privacy protocols. All patient data is encrypted both in transit and at rest, and we never store sensitive information longer than necessary."
    },
    {
      question: "How does the AI appointment scheduling work?",
      answer: "Our AI scheduling system integrates with your existing calendar and EMR systems. It can handle appointment bookings, rescheduling, cancellations, and reminders through voice or text. The AI understands context, availability, and can even suggest optimal appointment times based on patient preferences and medical urgency."
    },
    {
      question: "What languages does MediEchoAI support?",
      answer: "MediEchoAI supports over 25 languages including Spanish, Mandarin, French, German, Arabic, and many others. The AI can provide real-time translation and understands cultural nuances in medical communication, making it perfect for diverse patient populations."
    },
    {
      question: "How quickly can we implement MediEchoAI in our practice?",
      answer: "Implementation typically takes 1-2 weeks depending on your practice size and existing systems. Our team provides full onboarding support, training for your staff, and seamless integration with your current EMR and practice management systems."
    },
    {
      question: "Can MediEchoAI integrate with our existing EMR system?",
      answer: "Yes, MediEchoAI integrates with all major EMR systems including Epic, Cerner, Allscripts, and many others. We also provide API access for custom integrations and can work with your IT team to ensure seamless connectivity."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about MediEchoAI
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass border border-white/20 rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <button className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;