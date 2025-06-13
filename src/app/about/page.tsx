import Link from "next/link";
import { Shield, Heart, Users, ShieldCheck } from "lucide-react";
import { teamMembers } from "../../../content/team";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-800 font-semibold text-sm">
                  Our Mission
                </span>
                <h1 className="font-bold tracking-tight text-4xl lg:text-5xl">
                  <span className="block text-gray-900">Transforming Women`s</span>
                  <span className="block text-cyan-600">Healthcare with AI</span>
                </h1>
                <p className="text-lg text-gray-600">
                  At Cyan Health, we`re dedicated to revolutionizing women`s healthcare through intelligent technology.
                  Our mission is to make quality healthcare more accessible, personalized, and effective for women everywhere.
                </p>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 shadow-lg overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 -ml-16 -mb-16"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                      <Heart className="h-12 w-12 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-700 mb-8 max-w-md">
                      Creating a future where AI-powered healthcare saves lives through early detection and personalized treatment for all women.
                    </p>
                    <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-700">95%</div>
                        <div className="text-sm text-gray-600">Detection Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-700">60%</div>
                        <div className="text-sm text-gray-600">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-700">+10M</div>
                        <div className="text-sm text-gray-600">Women Helped</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-cyan-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                These principles guide everything we do at Cyan Health, from product development to customer support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Patient-Centered Care", icon: <Heart />, desc: "We put women`s unique healthcare needs at the center of everything we do." },
                { title: "Privacy & Security", icon: <Shield />, desc: "We maintain the highest standards for protecting sensitive health data." },
                { title: "Clinical Excellence", icon: <ShieldCheck />, desc: "Built on rigorous medical research and evidence-based practices." },
                { title: "Accessibility", icon: <Users />, desc: "Making healthcare available to women from all walks of life." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Meet the experts behind Cyan Health`s mission to transform women`s healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-cyan-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Healthcare Experience?</h2>
              <p className="text-lg mb-8">Join us today and be part of the future of women`s healthcare.</p>
              <Link
                href="/signup"
                className="inline-block px-6 py-3 bg-white text-cyan-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                Get Started
              </Link>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
