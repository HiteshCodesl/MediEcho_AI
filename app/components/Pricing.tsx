import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Freemium",
      price: "Free",
      period: "forever",
      description: "Perfect for small practices getting started",
      features: [
        "Up to 50 transcriptions/month",
        "Basic appointment scheduling",
        "Email support",
        "Standard security",
        "Single user account"
      ],
      cta: "Start Free",
      popular: false,
      color: "from-slate-500 to-slate-600"
    },
    {
      name: "Pro",
      price: "$299",
      period: "per month",
      description: "Ideal for growing medical practices",
      features: [
        "Unlimited transcriptions",
        "Advanced AI scheduling",
        "Multi-language support",
        "Priority support",
        "Up to 10 user accounts",
        "EMR integrations",
        "Custom voice training",
        "Analytics dashboard"
      ],
      cta: "Start Pro Trial",
      popular: true,
      color: "from-blue-500 to-violet-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For hospitals and large healthcare systems",
      features: [
        "Everything in Pro",
        "Unlimited user accounts",
        "Custom integrations",
        "Dedicated support manager",
        "On-premise deployment",
        "Advanced compliance tools",
        "Custom AI model training",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your healthcare practice. All plans include our core AI features and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass border transition-all duration-300 transform hover:scale-105 rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-blue-400/50 shadow-2xl shadow-blue-500/20' 
                  : 'border-white/20 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-600 ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                  : 'glass border border-white/20 text-slate-800 hover:shadow-lg'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">All plans include 30-day free trial • No setup fees • Cancel anytime</p>
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Instant setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>HIPAA compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;