import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: 'Runwal Nirwana',
    description: '54 Storey Luxury Tower',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
  },
  {
    id: 2,
    name: 'Rustomjee Reserve',
    description: '22 Storey High Rise Tower',
    location: 'Thane',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  },
  {
    id: 3,
    name: 'L&T Seawoods',
    description: '40 acre Development',
    location: 'Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80'
  },
  {
    id: 4,
    name: 'Birla Vanya',
    description: '33 Storey Tower',
    location: 'Kalyan',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
  }
];

export default function ProjectsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  return (
    <section className="section-padding bg-primary text-white overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Crafted for Iconic Spaces
        </h2>
        
        {/* Desktop Horizontal Scroll */}
        <div className="hidden md:flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300 mb-1">{project.description}</p>
                <p className="text-sm text-gray-400">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-sm text-gray-300 mb-1">{project.description}</p>
                      <p className="text-sm text-gray-400">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
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
          
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
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
      
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
