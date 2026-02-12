import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaCertificate, FaLeaf, FaHandshake } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: FaCheckCircle,
    title: 'DURALUΜ',
    subtitle: 'Stronger. Sleeker. Smarter.',
    description: 'Our proprietary aluminium alloy engineered for superior strength and durability',
    benefits: [
      'High tensile strength',
      'Corrosion resistant',
      'Slim profiles',
      'Low maintenance'
    ]
  },
  {
    id: 2,
    icon: FaCertificate,
    title: 'WIWAG',
    subtitle: 'Tested. Trusted. Everlasting.',
    description: 'German-engineered quality certification ensuring world-class performance',
    benefits: [
      'Global standards',
      'Rigorous testing',
      'Quality assurance',
      'Performance guaranteed'
    ]
  },
  {
    id: 3,
    icon: FaHandshake,
    title: 'ETERNIA CARE',
    subtitle: 'Assured Service Guarantee',
    description: 'Comprehensive support and service throughout your window\'s lifetime',
    benefits: [
      '10-year warranty',
      '24/7 support',
      'Expert installation',
      'Regular maintenance'
    ]
  },
  {
    id: 4,
    icon: FaLeaf,
    title: 'SUSTAINABILITY',
    subtitle: 'Greener Homes Promise',
    description: 'Eco-friendly materials and processes for a sustainable future',
    benefits: [
      '100% recyclable',
      'Energy efficient',
      'Low carbon footprint',
      'Sustainable sourcing'
    ]
  }
];

export default function WhyEternia() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };
  
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Why Choose Eternia
        </h2>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <feature.icon className="text-4xl mb-4 text-white" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm font-semibold mb-3 text-gray-200">{feature.subtitle}</p>
              <p className="text-sm mb-4 leading-relaxed text-gray-300">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <feature.icon className="text-4xl mb-4 text-white" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm font-semibold mb-3 text-gray-200">{feature.subtitle}</p>
                    <p className="text-sm mb-4 leading-relaxed text-gray-300">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/20 rounded-full p-3 shadow-lg hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/20 rounded-full p-3 shadow-lg hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-white" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
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
