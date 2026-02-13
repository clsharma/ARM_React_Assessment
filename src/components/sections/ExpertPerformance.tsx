import { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';

const expertGroups = [
  [
    {
      id: 1,
      name: 'Ms Vidi Dug',
      thumbnail: '/images/image18.png',
      profile: '/images/image1.png',
    },
    {
      id: 2,
      name: 'Ms Ridhi Khosla Jalan',
      thumbnail: '/images/image19.png',
      profile: '/images/image2.png',
    },
    {
      id: 3,
      name: 'Mr Krsna Mehta',
      thumbnail: '/images/image17.png',
      profile: '/images/image3.png',
      isVideo: true,
    },
    {
      id: 4,
      name: 'Rohina',
      thumbnail: '/images/image20.png',
      profile: '/images/image4.png',
    },
    {
      id: 5,
      name: 'M Gandhi',
      thumbnail: '/images/image21.png',
      profile: '/images/image5.png',
    },
  ],
  // Add more groups as needed
];

export default function ExpertPerformance() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  
  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % expertGroups.length);
  };
  
  const prevGroup = () => {
    setCurrentGroup((prev) => (prev - 1 + expertGroups.length) % expertGroups.length);
  };
  
  const nextMobile = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % expertGroups[0].length);
  };
  
  const prevMobile = () => {
    setCurrentMobileIndex((prev) => (prev - 1 + expertGroups[0].length) % expertGroups[0].length);
  };
  
  return (
    <section className="section-padding bg-[#E6F4FA]">
      <div className="container-custom">
        {/* Title with underline */}
        <div className="flex flex-col items-center mb-12 lg:mb-24">
          <h2 className="text-2xl md:text-4xl lg:text-[40px] font-normal text-[#003946] mb-3 md:mb-4 leading-tight tracking-wide" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
            Expert-Approved <br className="md:hidden" /> Performance
          </h2>
          <div className="w-48 md:w-[420px] h-[1.5px] bg-[#003946] mx-auto"></div>
        </div>
        
        {/* Desktop Cascading View */}
        <div className="hidden lg:block relative">
          <div className="relative h-[500px] flex items-center justify-center perspective-[2000px]">
            {expertGroups[currentGroup].map((expert, index) => {
              const totalCards = expertGroups[currentGroup].length;
              const centerIndex = Math.floor(totalCards / 2);
              const offset = index - centerIndex;
              
              // Calculate position and rotation
              const translateX = offset * 200; // Horizontal spacing
              const translateZ = Math.abs(offset) * -100; // Depth
              const rotateY = offset * 8; // Rotation angle
              const scale = 1 - Math.abs(offset) * 0.1; // Scale effect
              const zIndex = totalCards - Math.abs(offset);
              
              return (
                <div
                  key={expert.id}
                  className="absolute w-72 h-108 transition-all duration-500 cursor-pointer group"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex: zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    {/* Thumbnail */}
                    <img 
                      src={expert.thumbnail} 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                    
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Left arrow */}
            <button
              onClick={prevGroup}
              className="w-12 h-12 bg-[#0A3D3D] rounded-full flex items-center justify-center hover:bg-[#174545] transition-colors shadow-lg"
              aria-label="Previous group"
            >
              <img src="/images/arrow-left.png" alt="Previous" className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-3">
              {expertGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGroup(index)}
                   className={`h-2 rounded-full transition-all ${
                  currentGroup === index ? 'bg-[#0A3D3D] w-2' : 'bg-transparent border border-white w-2'
                }`}
                  aria-label={`Go to group ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Right arrow */}
            <button
              onClick={nextGroup}
              className="w-12 h-12 bg-[#0A3D3D] rounded-full flex items-center justify-center hover:bg-[#174545] transition-colors shadow-lg"
              aria-label="Next group"
            >
              <img src="/images/arrow-right.png" alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile/Tablet View */}
        <div className="lg:hidden">
          <div className="relative mx-auto overflow-hidden" style={{ maxWidth: '420px' }}>
            {/* Stacked Cards */}
            <div className="relative flex items-center justify-center" style={{ height: '480px' }}>
              {expertGroups[0].map((expert, index) => {
                const total = expertGroups[0].length;
                const diff = index - currentMobileIndex;
                // Normalize for wrap-around
                let offset = diff;
                if (offset > Math.floor(total / 2)) offset -= total;
                if (offset < -Math.floor(total / 2)) offset += total;
                
                const isActive = offset === 0;
                const isAdjacent = Math.abs(offset) === 1;
                const isVisible = Math.abs(offset) <= 2;
                
                if (!isVisible) return null;
                
                return (
                  <div
                    key={expert.id}
                    className="absolute transition-all duration-500 ease-out"
                    style={{
                      width: '85%',
                      aspectRatio: '3/4',
                      transform: `translateX(${offset * 28}px) scale(${isActive ? 1 : isAdjacent ? 0.92 : 0.84})`,
                      zIndex: isActive ? 30 : isAdjacent ? 20 : 10,
                      opacity: isActive ? 1 : isAdjacent ? 0.7 : 0.4,
                      filter: isActive ? 'none' : 'brightness(0.7)',
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                      {/* Thumbnail */}
                      <img 
                        src={expert.thumbnail} 
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
    
                      
            
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevMobile}
              className="w-12 h-12 bg-[#0A3D3D] rounded-full flex items-center justify-center hover:bg-[#174545] transition-colors shadow-lg"
              aria-label="Previous"
            >
              <img src="/images/arrow-left.png" alt="Previous" className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2.5">
              {expertGroups[0].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentMobileIndex === index 
                      ? 'bg-[#0A3D3D] scale-110' 
                      : 'bg-transparent border-2 border-[#0A3D3D]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextMobile}
              className="w-12 h-12 bg-[#0A3D3D] rounded-full flex items-center justify-center hover:bg-[#174545] transition-colors shadow-lg"
              aria-label="Next"
            >
              <img src="/images/arrow-right.png" alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
