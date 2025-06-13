"use client";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(featureInterval);
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  const keyFeatures = [
    {
      title: "Early Detection",
      description: "AI detects women’s health issues before symptoms show.",
      icon: "❤️",
    },
    {
      title: "Personalized Care",
      description: "Custom recommendations based on your profile.",
      icon: "👩‍⚕️",
    },
    {
      title: "24/7 Support",
      description: "Access care professionals anytime, anywhere.",
      icon: "🔔",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-cyan-50 min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <div
            className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 text-cyan-800 font-semibold text-sm">
              ✨ AI-Powered Women`s Health
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Women with <br />
              <span className="text-cyan-700">Intelligent Healthcare</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Cyan Health uses AI to predict, diagnose, and treat women’s health conditions early, while streamlining operations and enabling transparent healthcare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
                Get Started
              </button>
              <button className="border border-cyan-600 text-cyan-700 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-50 hover:scale-105 transition">
                Learn More
              </button>
            </div>

            <div className="pt-8">
              <button
                onClick={scrollToFeatures}
                className="flex items-center gap-2 text-cyan-700 hover:text-cyan-500 transition group"
              >
                <span>See How It Works</span>
                <span className="group-hover:animate-bounce">
                  <ArrowDown size={20} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl relative max-w-md mx-auto lg:max-w-xl">
              {/* Animated Feature */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full mb-4 mx-auto text-3xl">
                  {keyFeatures[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-semibold text-cyan-800">
                  {keyFeatures[activeFeature].title}
                </h3>
                <p className="text-gray-700">{keyFeatures[activeFeature].description}</p>
              </div>

              {/* Feature selectors */}
              <div className="flex justify-center gap-2 mt-4">
                {keyFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      activeFeature === index ? "bg-cyan-600 scale-110" : "bg-gray-300"
                    }`}
                    aria-label={`Select feature ${index + 1}`}
                  />
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 font-bold">
                      95%
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Early Detection</p>
                      <p className="text-xs text-gray-500">Accuracy Rate</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                      24/7
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">AI Support</p>
                      <p className="text-xs text-gray-500">Always Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="mt-6 bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  &quot;How does AI improve women`s health outcomes?&quot;
                </p>
                <button className="text-sm font-semibold text-cyan-700 hover:text-cyan-600 mt-1">
                  Ask our health assistant →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
