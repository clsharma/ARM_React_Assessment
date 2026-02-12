import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaInstagram, FaYoutube } from 'react-icons/fa';

const experts = [
  {
    id: 1,
    name: 'Ms. Vridhi Duja',
    title: 'Interior Designer',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    platform: 'youtube'
  },
  {
    id: 2,
    name: 'Ms. Ridhi Khoola Jalan',
    title: 'Which Window Should I Install?',
    thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    platform: 'instagram'
  },
  {
    id: 3,
    name: 'Mr. Krsna Mehta',
    title: 'Architect & Designer',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    platform: 'youtube'
  },
  {
    id: 4,
    name: 'Rohina Gandhi',
    title: 'Home Design Expert',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    platform: 'instagram'
  }
];

export default function ExpertPerformance() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experts.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experts.length) % experts.length);
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text-dark">
          Expert-Approved Performance
        </h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <img 
                src={expert.thumbnail} 
                alt={expert.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <FaPlay className="text-2xl text-primary group-hover:text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {expert.platform === 'youtube' ? (
                      <FaYoutube className="text-red-500 text-xl" />
                    ) : (
                      <FaInstagram className="text-pink-500 text-xl" />
                    )}
                  </div>
                  <h3 className="text-white font-bold">{expert.name}</h3>
                  <p className="text-white/80 text-sm">{expert.title}</p>
                </div>
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
              {experts.map((expert) => (
                <div key={expert.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={expert.thumbnail} 
                      alt={expert.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <FaPlay className="text-2xl text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {expert.platform === 'youtube' ? (
                            <FaYoutube className="text-red-500 text-xl" />
                          ) : (
                            <FaInstagram className="text-pink-500 text-xl" />
                          )}
                        </div>
                        <h3 className="text-white font-bold">{expert.name}</h3>
                        <p className="text-white/80 text-sm">{expert.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
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
          
          <div className="flex justify-center gap-2 mt-6">
            {experts.map((_, index) => (
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
