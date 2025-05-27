"use client";
import { useState } from "react";
import { ShieldCheck, HeartPulse, ListCheck, User, UserCheck, Clock } from "lucide-react";
import { motion } from "framer-motion"; 
const features = [
  {
    name: "AI-Powered Prediction",
    description: "Advanced AI models predict risks of cervical cancer and ovarian cysts based on symptoms and medical history.",
    icon: HeartPulse,
    color: "bg-cyan-100 text-cyan-700",
    details: "Our AI analyzes thousands of data points including symptoms, genetic factors, and lifestyle choices to identify patterns that may indicate health risks before symptoms develop.",
    statistic: "75% earlier detection compared to traditional methods"
  },
  {
    name: "Early Diagnosis",
    description: "Early detection tools that flag potential abnormalities and provide actionable next steps.",
    icon: ShieldCheck,
    color: "bg-teal-100 text-teal-700",
    details: "Using machine learning algorithms trained on millions of health records, we can detect subtle signs of health issues that might otherwise go unnoticed until symptoms become severe.",
    statistic: "90% accuracy in early-stage detection"
  },
  {
    name: "Personalized Treatment",
    description: "Customized treatment plans based on patient data, medical guidelines, and similar case outcomes.",
    icon: UserCheck,
    color: "bg-emerald-100 text-emerald-700",
    details: "Every woman's body is unique. Our system creates individualized care plans that consider your specific health profile, preferences, and needs.",
    statistic: "83% of patients report better outcomes with personalized plans"
  },
  {
    name: "Inventory Management",
    description: "Real-time tracking of hospital supplies with automated alerts and reordering systems.",
    icon: ListCheck,
    color: "bg-blue-100 text-blue-700",
    details: "Our platform ensures hospitals never run out of essential supplies by monitoring usage patterns and automatically placing orders when inventory runs low.",
    statistic: "Reduces supply shortages by 94%"
  },
  {
    name: "Transparent Finances",
    description: "Clear, itemized billing with explanations of costs and blockchain-based record keeping.",
    icon: Clock,
    color: "bg-indigo-100 text-indigo-700",
    details: "No more surprise bills. We provide transparent cost breakdowns and ensure all charges are properly documented and explained in plain language.",
    statistic: "98% of patients report better understanding of their healthcare costs"
  },
  {
    name: "Patient Education",
    description: "Interactive resources and community support for women's health education and empowerment.",
    icon: User,
    color: "bg-purple-100 text-purple-700",
    details: "Knowledge is power. Our platform offers easy-to-understand educational content about women's health topics, tailored to your specific needs and concerns.",
    statistic: "86% of users feel more confident discussing health concerns with providers"
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section id="features-section" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            <span className="gradient-text">Comprehensive Features</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cyan Health combines cutting-edge AI technology with user-centered design to transform women's healthcare delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isActive = activeFeature === index;
            const cardBase = "relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300";
            const cardActive = "shadow-lg border-cyan-200 scale-105 z-10";
            const cardHover = "hover:shadow-md hover:-translate-y-1";

            return (
              <div
                key={index}
                className={`${cardBase} ${isActive ? cardActive : cardHover}`}
                onClick={() => setActiveFeature(isActive ? null : index)}
              >
                <div className={`absolute -top-4 -left-4 p-3 rounded-lg ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-between">
                    {feature.name}
                    <span className={`text-sm rounded-full px-2 py-0.5 transition-opacity ${isActive ? "opacity-100" : "opacity-0"} bg-opacity-20`}>
                      Learn more
                    </span>
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                      <p className="text-sm text-gray-700 mb-3">{feature.details}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-cyan-700">Key Statistic:</span>
                        <span className="bg-cyan-50 text-cyan-800 px-2 py-1 rounded">{feature.statistic}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
