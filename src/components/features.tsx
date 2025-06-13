"use client";
import { useState } from "react";
import { features } from "../../content/features";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section id="features-section" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            <span className="gradient-text">Comprehensive Features</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cyan Health combines cutting-edge AI technology with user-centered design to transform women`s healthcare delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isActive = activeFeature === index;
            const cardBase =
              "relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300";
            const cardActive = "shadow-lg border-cyan-200 scale-105 z-10";
            const cardHover = "hover:shadow-md hover:-translate-y-1";

            return (
              <div
                key={index}
                className={`${cardBase} ${isActive ? cardActive : cardHover}`}
                onClick={() =>
                  setActiveFeature(isActive ? null : index)
                }
              >
                <div
                  className={`absolute -top-4 -left-4 p-3 rounded-lg ${feature.color}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-between">
                    {feature.name}
                    <span
                      className={`text-sm rounded-full px-2 py-0.5 transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      } bg-opacity-20`}
                    >
                      Learn more
                    </span>
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                      <p className="text-sm text-gray-700 mb-3">
                        {feature.details}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-cyan-700">
                          Key Statistic:
                        </span>
                        <span className="bg-cyan-50 text-cyan-800 px-2 py-1 rounded">
                          {feature.statistic}
                        </span>
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