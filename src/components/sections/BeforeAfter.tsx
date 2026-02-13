import { useState } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };
  
  return (
    <section className="py-12 md:py-20 lg:py-20 bg-white bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/images/image6.png)' }}>
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-normal text-[#003946] mb-3 md:mb-4 leading-tight tracking-wide" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
            Where Spaces<br className="md:hidden" /> Come Alive
          </h2>
          <div className="w-32 md:w-[400px] h-[1.5px] bg-[#003946] mx-auto"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl md:rounded-2xl shadow-xl aspect-[16/10] md:aspect-[21/9]">
            <img 
              src="/images/before.png" 
              alt="Before renovation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="/images/after.png" 
                alt="After renovation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-white/80 backdrop-blur-sm text-[#003946] px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium border border-white/50">
              Before
            </div>
            
            <div className="absolute top-3 right-3 md:top-5 md:right-5 bg-white/80 backdrop-blur-sm text-[#003946] px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium border border-white/50">
              After
            </div>
            
            <div 
              className="absolute inset-y-0 w-0.5 md:w-1 bg-white cursor-ew-resize shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-gray-100">
                <img 
                  src="/images/left-right-arrow.png" 
                  alt="Drag to compare"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
            </div>
            
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              aria-label="Before and after comparison slider"
            />
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <a 
              href="#gallery" 
              className="inline-block text-[#003946] hover:text-[#003946] font-small text-sm md:text-base underline decoration-1 underline-offset-4 transition-colors duration-200"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
