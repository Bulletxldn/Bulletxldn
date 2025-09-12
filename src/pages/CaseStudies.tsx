import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import AnimatedSection from '../components/UI/AnimatedSection';
import CaseStudyCard from '../components/UI/CaseStudyCard';
import contentData from '../data/content.json';

const CaseStudies: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  
  const caseStudies = contentData.caseStudies;
  const filters = ['All', 'SaaS', 'Health', 'Fashion', 'B2B'];
  
  const filteredCaseStudies = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedFilter);

  const openCaseStudy = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: 'url(/images/analytics-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-hero">
              Case Studies
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Real campaigns, real results. See how we've helped businesses across industries achieve measurable growth through creator marketing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-accent-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <AnimatedSection 
                key={caseStudy.id} 
                animation="slideUp" 
                delay={index * 0.1}
              >
                <CaseStudyCard
                  {...caseStudy}
                  onClick={() => openCaseStudy(caseStudy)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeCaseStudy}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCaseStudy.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCaseStudy.platform}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedCaseStudy.title}
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Challenge</h3>
                    <p className="text-gray-600">{selectedCaseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Approach</h3>
                    <p className="text-gray-600">{selectedCaseStudy.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Results</h3>
                    <p className="text-gray-600 mb-4">{selectedCaseStudy.results}</p>
                    <div className="text-2xl font-bold text-accent-600">{selectedCaseStudy.metric}</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <blockquote className="text-lg text-gray-900 font-medium italic">
                    "{selectedCaseStudy.testimonial}"
                  </blockquote>
                </div>
                
                <div className="mt-8 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
                  >
                    Book a similar campaign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-dark-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-hero">
              Ready for your success story?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Every great campaign starts with a conversation. Book a strategy call to discuss your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors text-lg"
            >
              Book your strategy call
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;