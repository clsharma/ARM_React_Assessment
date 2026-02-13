import { useState } from 'react';

const projects = [
  {
    id: 1,
    image: '/images/image13.png',
  },
  {
    id: 2,
    image: '/images/image14.png',
  },
  {
    id: 3,
    image: '/images/image15.png',
  },
  {
    id: 4,
    image: '/images/image16.png',
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
    <section className="relative overflow-hidden">
      <div 
        className="relative pt-16 pb-48 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image6.png')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-normal text-[#003946] mb-3 md:mb-4 leading-tight tracking-wide mt-[-30px]" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
              Crafted or<br className="md:hidden" /> Iconic Spaces
            </h2>
            <div className="w-32 md:w-[420px] h-[1.5px] bg-[#003946] mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="relative pt-48 pb-20 md:pb-16" style={{ backgroundColor: '#003946' }}>
        <div className="absolute left-0 right-0 -top-40 z-20 pb-16 md:pb-0">
          <div className="container-custom">
            <div className="hidden md:block">
              <div className="grid md:grid-cols-4 gap-6 px-4 mb-8">
                {projects.map((project) => (
                  <div key={project.id} className="rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt='Project'
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <img src="/images/left1.png" alt="Previous" className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {projects.map((_, index) => (
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
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Next slide"
                >
                  <img src="/images/right1.png" alt="Next" className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="md:hidden overflow-x-auto px-4 scrollbar-hide">
              <div className="flex gap-4 pb-4">
                {projects.map((project) => (
                  <div key={project.id} className="flex-shrink-0 w-64 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt='Project'
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
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
