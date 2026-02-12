import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaBolt, FaVolumeUp, FaCloudRain, FaWind } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: FaBolt,
    title: 'Energy Efficient',
    description: 'Advanced thermal insulation that keeps your home comfortable year-round while reducing energy costs.',
    color: 'bg-accent-blue',
    link: '#energy-efficient'
  },
  {
    id: 2,
    icon: FaVolumeUp,
    title: 'Noise Insulation',
    description: 'Superior sound dampening technology creates a peaceful indoor environment away from outside noise.',
    color: 'bg-gray-100',
    link: '#noise-insulation'
  },
  {
    id: 3,
    icon: FaCloudRain,
    title: 'Rainwater Insulation',
    description: 'Weatherproof sealing systems prevent water ingress during heavy monsoons and storms.',
    color: 'bg-gray-100',
    link: '#rainwater-insulation'
  },
  {
    id: 4,
    icon: FaWind,
    title: 'Storm Resistant',
    description: 'Engineered to withstand extreme weather conditions with reinforced frames and secure locking.',
    color: 'bg-gray-100',
    link: '#storm-resistant'
  }
];

export default function DesignFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Design. Performance. Longevity.
        </h2>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.color} ${feature.id === 1 ? 'text-white' : 'text-text-dark'} rounded-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <feature.icon className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm mb-4 leading-relaxed opacity-90">{feature.description}</p>
              <a 
                href={feature.link} 
                className={`text-sm font-semibold ${feature.id === 1 ? 'text-white' : 'text-primary'} hover:underline inline-flex items-center gap-2`}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature) => (
                <div key={feature.id} className="w-full flex-shrink-0 px-4">
                  <div className={`${feature.color} ${feature.id === 1 ? 'text-white' : 'text-text-dark'} rounded-lg p-8`}>
                    <feature.icon className="text-4xl mb-4" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-sm mb-4 leading-relaxed opacity-90">{feature.description}</p>
                    <a 
                      href={feature.link} 
                      className={`text-sm font-semibold ${feature.id === 1 ? 'text-white' : 'text-primary'} hover:underline inline-flex items-center gap-2`}
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-primary" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
