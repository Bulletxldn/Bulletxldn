import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import contentData from '../../data/content.json';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = contentData.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative bg-secondary-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our <span className="text-primary-500">Clients</span> Say
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped brands achieve their growth goals.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-neutral-200">
                    <Quote className="w-12 h-12 text-primary-500 mb-6" />
                    <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-primary-500">{testimonial.author}</div>
                        <div className="text-neutral-600">{testimonial.role} at {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white border-2 border-primary-500 rounded-full p-3 shadow-lg hover:bg-primary-500 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary-500 hover:text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white border-2 border-primary-500 rounded-full p-3 shadow-lg hover:bg-primary-500 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary-500 hover:text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;