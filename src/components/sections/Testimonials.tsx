import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia windows have transformed our home. The quality is exceptional, and the noise reduction is remarkable. We can finally enjoy peace and quiet despite living on a busy street.',
    location: 'Mumbai'
  },
  {
    id: 2,
    name: 'Mrs. Priya Sharma',
    quote: 'The sleek design and energy efficiency of Eternia windows are unmatched. Our electricity bills have reduced significantly, and the windows look absolutely stunning.',
    location: 'Delhi'
  },
  {
    id: 3,
    name: 'Mr. Rajesh Kumar',
    quote: 'Installation was smooth, and the after-sales service is excellent. The Eternia Care team is always available to address any concerns. Highly recommended!',
    location: 'Bangalore'
  },
  {
    id: 4,
    name: 'Ms. Anita Desai',
    quote: 'The WIWAG certification gave us confidence in the quality. After two years, the windows still look and function like new. Worth every penny.',
    location: 'Pune'
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          What Our Customers Have to Say
        </h2>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <FaQuoteLeft className="text-3xl mb-4 text-white/70" />
              <p className="text-sm mb-4 leading-relaxed text-gray-200">{testimonial.quote}</p>
              <div className="pt-4 border-t border-white/20">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <FaQuoteLeft className="text-3xl mb-4 text-white/70" />
                    <p className="text-sm mb-4 leading-relaxed text-gray-200">{testimonial.quote}</p>
                    <div className="pt-4 border-t border-white/20">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-300">{testimonial.location}</p>
                    </div>
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
            {testimonials.map((_, index) => (
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
        
        <div className="text-center">
          <a href="#explore" className="text-white hover:text-gray-200 underline font-semibold">
            Explore More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
