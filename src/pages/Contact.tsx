import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/UI/AnimatedSection';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: formData }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Call Booked!</h1>
          <p className="text-gray-600 mb-8">
            We'll send you a calendar link within the next hour. Looking forward to discussing your creator marketing goals!
          </p>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-accent-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-hero">
              Book a Strategy Call
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              15 minutes is all we need to understand your goals and show you exactly how creator marketing can transform your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <AnimatedSection animation="slideInLeft">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Let's talk
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with available time slots.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="£2,500-£5,000">£2,500 - £5,000</option>
                      <option value="£5,000-£10,000">£5,000 - £10,000</option>
                      <option value="£10,000-£25,000">£10,000 - £25,000</option>
                      <option value="£25,000+">£25,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your goals
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="What are you hoping to achieve with creator marketing?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    icon={Phone}
                    className="w-full"
                  >
                    Request Strategy Call
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            {/* Calendar Embed Placeholder */}
            <AnimatedSection animation="slideInRight">
              <div className="bg-gray-100 rounded-2xl p-8 min-h-96 flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Calendar Integration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Book directly using our calendar (coming soon)
                  </p>
                  <div className="text-sm text-gray-500">
                    For now, use the form and we'll send you available times
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Details */}
            <AnimatedSection animation="slideInRight" delay={0.2}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-accent-600" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <a href="mailto:hello@viralfoundry.com" className="text-gray-600 hover:text-accent-600 transition-colors">
                        hello@viralfoundry.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-accent-600" />
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <a href="tel:+442012345678" className="text-gray-600 hover:text-accent-600 transition-colors">
                        +44 20 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-accent-600" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <span className="text-gray-600">London, UK</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Response Time */}
            <AnimatedSection animation="slideInRight" delay={0.4}>
              <div className="bg-accent-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2"></div>
                    <span>We'll review your information within 24 hours</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2"></div>
                    <span>You'll receive available time slots via email</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2"></div>
                    <span>We'll prepare a custom strategy for your call</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;