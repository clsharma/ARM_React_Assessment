import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: '/images/image1.png',
    title: 'Energy Efficient',
    description: 'Designed to enhance thermal performance while maintaining year-round indoor comfort.',
    color: '#2BAAE1',
    link: '#energy-efficient'
  },
  {
    id: 2,
    icon: '/images/image2.png',
    title: 'Noise Insulation',
    description: 'Carefully engineered to significantly reduce external noise and create serene living spaces.',
    color: 'bg-white',
    link: '#noise-insulation'
  },
  {
    id: 3,
    icon: '/images/image3.png',
    title: 'Rainwater Insulation',
    description: 'Precision sealing systems prevent water ingress, even during intense monsoon conditions.',
    color: 'bg-white',
    link: '#rainwater-insulation'
  },
  {
    id: 4,
    icon: '/images/image4.png',
    title: 'Storm Resistant',
    description: 'Tested to endure high wind loads and extreme weather with lasting reliable strength.',
    color: 'bg-white',
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
    <section className="section-padding" style={{ backgroundColor: '#E6F4FA' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-gray-900 mb-3">
            Design. Performance. Longevity.
          </h2>
          <div className="w-80 mt-6 h-[1.5px] bg-gray-400 mx-auto"></div>
        </div>
        
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              style={feature.id === 1 ? { backgroundColor: feature.color } : {}}
              className={`${feature.id === 1 ? '' : feature.color} ${feature.id === 1 ? 'text-white' : 'text-gray-800'} rounded-xl p-8 transition-all duration-300 hover:shadow-xl border ${feature.id === 1 ? 'border-sky-400' : 'border-gray-300'} flex flex-col`}
            >
              <div className="flex justify-center mb-5">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-sm mb-5 leading-relaxed text-center flex-grow">{feature.description}</p>
              <div className="text-center">
                <a 
                  href={feature.link} 
                  className={`text-sm font-medium ${feature.id === 1 ? 'text-white underline' : 'text-teal-700 underline'} hover:no-underline`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden md:flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 bg-white rounded-full shadow-md transition-colors border border-gray-200 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-gray-600 text-sm" />
          </button>
          <div className="flex gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-gray-800 w-2' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === features.length - 1}
            className={`p-2 bg-white rounded-full shadow-md transition-colors border border-gray-200 ${currentSlide === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            aria-label="Next slide"
          >
            <FaArrowRight className="text-gray-600 text-sm" />
          </button>
        </div>
        
        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.color.startsWith('#') ? 'bg-white' : feature.color} text-gray-800 rounded-xl p-4 border border-gray-300 shadow-sm flex flex-col`}
            >
              <div className="flex justify-center mb-3">
                <img src={feature.id === 1 ? '/images/image5.png' : feature.icon} alt={feature.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-sm font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-[10px] mb-3 leading-snug text-center flex-grow">{feature.description}</p>
              <div className="text-center">
                <a 
                  href={feature.link} 
                  className={`text-[10px] font-medium text-teal-700 underline hover:no-underline`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden flex justify-center items-center gap-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-1.5 bg-white rounded-full shadow-md transition-colors border border-gray-200 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-gray-500 text-xs" />
          </button>
          <div className="flex gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentSlide === index ? 'bg-gray-800 w-1.5' : 'bg-gray-300 w-1.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === features.length - 1}
            className={`p-1.5 bg-white rounded-full shadow-md transition-colors border border-gray-200 ${currentSlide === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            aria-label="Next slide"
          >
            <FaArrowRight className="text-gray-500 text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}
