import React from 'react';
import AnimatedSection from '../components/UI/AnimatedSection';
import PricingCard from '../components/UI/PricingCard';
import FAQAccordion from '../components/UI/FAQAccordion';
import contentData from '../data/content.json';

const Services: React.FC = () => {
  const services = contentData.services;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: 'url(/images/office-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-hero">
              Creator Marketing Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From testing the waters to full-scale campaigns. Choose the package that matches your growth stage and ambitions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={index} 
                animation="slideUp" 
                delay={index * 0.2}
              >
                <PricingCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                All packages include
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">FTC Compliance</h3>
                    <p className="text-gray-600">All partnerships properly disclosed according to platform guidelines.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Creator Vetting</h3>
                    <p className="text-gray-600">Every creator is screened for authenticity and brand alignment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Performance Tracking</h3>
                    <p className="text-gray-600">Real-time analytics and ROI reporting on all campaigns.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to expect in the first 14 days</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <span className="text-gray-700">Strategy call and brief review</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <span className="text-gray-700">Creator research and shortlist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <span className="text-gray-700">First creator partnerships confirmed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                    <span className="text-gray-700">Content briefing and production begins</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our creator marketing services.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.3}>
            <FAQAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-hero">
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a 15-minute strategy call to discuss which package is right for your business.
            </p>
            <a
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Book your strategy call
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;