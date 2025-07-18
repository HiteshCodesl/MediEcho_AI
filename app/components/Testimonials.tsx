import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      hospital: "Metropolitan General Hospital",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "MediEchoAI has revolutionized our patient documentation process. What used to take hours now happens in real-time with incredible accuracy.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Emergency Department Director",
      hospital: "City Medical Center",
      image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The AI scheduling system has reduced our appointment no-shows by 40% and freed up our staff to focus on patient care.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Family Practice Physician",
      hospital: "Riverside Clinic",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The multi-language support has been a game-changer for our diverse patient population. Communication barriers are finally eliminated.",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join hundreds of healthcare providers who are already transforming their practice with MediEchoAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass border border-white/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-slate-800 font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;