import { useState } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text-dark">
          Where Spaces Come Alive
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-video">
            {/* Before Image */}
            <img 
              src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200&q=80" 
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* After Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" 
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              After
            </div>
            
            {/* Slider */}
            <div 
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
                </svg>
              </div>
            </div>
            
            {/* Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Before and after slider"
            />
          </div>
          
          <div className="text-center mt-8">
            <a href="#gallery" className="text-primary hover:text-primary-dark underline font-semibold">
              View All Transformations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
