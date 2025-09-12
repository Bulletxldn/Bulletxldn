import React, { useState } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap, Target, CheckCircle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import AnimatedSection from '../components/UI/AnimatedSection';
import TestimonialSlider from '../components/UI/TestimonialSlider';
import CaseStudyCard from '../components/UI/CaseStudyCard';
import contentData from '../data/content.json';

const Home: React.FC = () => {
  const featuredCaseStudy = contentData.caseStudies[0];

  const steps = [
    {
      icon: Target,
      title: "Strategy",
      description: "We design your viral plan",
      detail: "Data-driven strategy tailored to your brand and audience"
    },
    {
      icon: Users,
      title: "Creators", 
      description: "We connect you with perfect influencers",
      detail: "Vetted creators who align with your brand values and goals"
    },
    {
      icon: BarChart3,
      title: "Results",
      description: "We launch, track and optimise fast",
      detail: "Real-time optimization for maximum reach and conversions"
    }
  ];

  const whyBulletPoints = [
    {
      icon: Target,
      title: "Data-driven approach",
      description: "Every campaign is backed by research and analytics, not guesswork."
    },
    {
      icon: Users,
      title: "Proven creators",
      description: "We work with vetted influencers who deliver real engagement and results."
    },
    {
      icon: Zap,
      title: "ROI focus",
      description: "We optimize for revenue and conversions, not just vanity metrics."
    },
    {
      icon: CheckCircle,
      title: "Fast execution",
      description: "From strategy to launch in 14 days. No lengthy delays or bureaucracy."
    }
  ];

  const proofStats = [
    { value: "+340%", label: "Average ROAS" },
    { value: "2.1M", label: "Views Generated" },
    { value: "-45%", label: "Lower CAC" }
  ];

  const clientLogos = ['TechFlow', 'NutriCore', 'StyleLab', 'GrowthCo'];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative bg-white/90 backdrop-blur-sm h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection animation="slideInLeft" delay={0.2} duration={0.8}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-dark-900 mb-6 font-hero">
                We make brands <span className="highlight-blue">go viral</span>.
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInLeft" delay={0.4} duration={0.8}>
              <p className="text-xl lg:text-2xl text-secondary-600 leading-relaxed max-w-4xl mx-auto mb-12">
                Influencer campaigns designed to grow your <span className="highlight-underline">reach</span> and <span className="highlight-blue">revenue</span>.
              </p>
            </AnimatedSection>

            {/* Primary CTA */}
            <AnimatedSection animation="slideInLeft" delay={0.6} duration={0.8}>
              <div className="mb-16">
                <Button 
                  size="lg" 
                  href="/contact" 
                  className="text-lg px-12 py-4 btn-primary font-semibold"
                >
                  Book a Strategy Call
                </Button>
              </div>
            </AnimatedSection>

            {/* Proof Stats */}
            <AnimatedSection animation="slideInLeft" delay={0.8} duration={0.8}>
              <div className="flex flex-wrap justify-center gap-12 mb-16">
                {proofStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-secondary-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Proof Strip */}
      <section className="bg-navy-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-white font-medium">Trusted by growing brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-semibold text-white opacity-70">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideInLeft" delay={0.2} duration={0.8} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
              How it <span className="highlight-blue">works</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Three simple steps to transform your marketing from guesswork to <span className="highlight-underline">growth engine</span>.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <AnimatedSection 
                key={index} 
                animation="slideInLeft" 
                delay={0.4 + (index * 0.2)}
                duration={0.8}
                className="text-center"
              >
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-primary-600 mb-2">STEP {index + 1}</div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">{step.title}</h3>
                <p className="text-lg text-primary-600 font-medium mb-3">{step.description}</p>
                <p className="text-secondary-600 leading-relaxed">{step.detail}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Proof */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideInLeft" delay={0.2} duration={0.8} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
              Proven <span className="highlight-blue">results</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real campaigns, real numbers. See how we've helped brands achieve <span className="highlight-underline">measurable growth</span>.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideInLeft" delay={0.4} duration={0.8}>
            <div className="max-w-2xl mx-auto">
              <CaseStudyCard
                {...featuredCaseStudy}
                onClick={() => {/* Navigate to case study */}}
              />
            </div>
            <div className="text-center mt-8">
              <Link 
                to="/case-studies"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                View all case studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideInLeft" delay={0.2} duration={0.8} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
              Choose your <span className="highlight-blue">package</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From testing the waters to full-scale campaigns. <span className="highlight-underline">Transparent pricing</span>, proven results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contentData.services.map((service, index) => (
              <AnimatedSection 
                key={index} 
                animation="slideInLeft" 
                delay={0.4 + (index * 0.2)}
                duration={0.8}
                className="bg-white rounded-xl shadow-lg p-8 card-hover border border-secondary-200"
              >
                <h3 className="text-2xl font-bold text-dark-900 mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-primary-600 mb-4">{service.price}</div>
                <p className="text-secondary-600 mb-6">{service.description}</p>
                <Button 
                  className="w-full btn-accent font-semibold"
                  href="/services"
                >
                  Start Campaign
                </Button>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View detailed packages
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Bullet Marketing */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft" delay={0.2} duration={0.8}>
              <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-8">
                Why <span className="highlight-blue">Bullet Marketing</span>
              </h2>
              <div className="space-y-8">
                {whyBulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-900 mb-2">{point.title}</h3>
                      <p className="text-secondary-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInLeft" delay={0.4} duration={0.8}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
                <h3 className="text-2xl font-bold text-dark-900 mb-6">Campaign Dashboard</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600">Campaign ROI</span>
                    <span className="text-primary-600 font-bold text-xl">+340%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600">Reach Generated</span>
                    <span className="text-accent-500 font-bold text-xl">2.1M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600">Cost Reduction</span>
                    <span className="text-tertiary-500 font-bold text-xl">-45%</span>
                  </div>
                  <div className="bg-primary-600 text-white rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Active Campaigns</div>
                    <div className="text-2xl font-bold">24</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* For Businesses & Creators Split */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideInLeft" delay={0.2} duration={0.8}>
              <div className="bg-secondary-100 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-dark-900 mb-4">For Businesses</h3>
                <p className="text-secondary-600 mb-6">
                  Ready to scale your brand with influencer marketing? Tell us about your goals and we'll create a custom strategy.
                </p>
                <Button 
                  href="/for-businesses" 
                  className="btn-primary font-semibold"
                >
                  Submit Your Brief
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInLeft" delay={0.4} duration={0.8}>
              <div className="bg-secondary-100 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-dark-900 mb-4">For Creators</h3>
                <p className="text-secondary-600 mb-6">
                  Join our network of professional influencers. Work with premium brands and get paid fairly for quality content.
                </p>
                <Button 
                  href="/for-creators" 
                  className="btn-accent font-semibold"
                >
                  Apply to Join
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Final CTA Banner */}
      <section className="py-20 bg-navy-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideInLeft" delay={0.2} duration={0.8}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-hero">
              Ready to go viral?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a 15-minute strategy call and discover how influencer marketing can transform your business.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-12 py-4 bg-white text-primary-600 hover:bg-secondary-100 font-semibold"
              href="/contact"
            >
              Book a Call Today
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;