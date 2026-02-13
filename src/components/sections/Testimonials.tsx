import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
  },
  {
    id: 2,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
  },
  {
    id: 3,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
  },
  {
    id: 4,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
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
    <section className="section-padding text-white relative overflow-hidden" style={{ backgroundColor: '#003946' }}>
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-white mb-3 md:mb-4 leading-tight tracking-wide" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
            What Our Customers<br className="md:hidden" /> Have to Say
          </h2>
          <div className="w-72 md:w-[420px] h-[1.5px] bg-white mx-auto"></div>
        </div>
        
        <div className="hidden md:block relative mb-8">
          <div className="overflow-hidden mx-auto" style={{ maxWidth: '1200px' }}>
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(calc(-${currentSlide * 25}% - ${currentSlide * 1.5}rem))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: 'calc(25% - 1.125rem)' }}
                >
                  <div 
                    className="rounded-lg p-6 border border-white/20 h-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <FaQuoteLeft className="text-4xl mb-4 text-white/70" />
                    <p className="text-sm mb-6 leading-relaxed text-gray-200">{testimonial.quote}</p>
                    <div className="pt-4 border-t border-white/20">
                      <p className="font-bold">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:hidden relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div 
                    className="rounded-lg p-6 border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <FaQuoteLeft className="text-4xl mb-4 text-white/70" />
                    <p className="text-sm mb-6 leading-relaxed text-gray-200">{testimonial.quote}</p>
                    <div className="pt-4 border-t border-white/20">
                      <p className="font-bold">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            aria-label="Previous slide"
          >
            <img src="/images/left1.png" alt="Previous" className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-2' : 'bg-transparent border border-white w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            aria-label="Next slide"
          >
            <img src="/images/right1.png" alt="Next" className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-center">
          <a href="#explore" className="text-white hover:text-gray-200 underline font-semibold">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
