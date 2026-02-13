import { useState } from 'react';

const features = [
  {
    id: 1,
    icon: '/images/image9.png',
    subtitle: 'Stronger. Sleeker. Smarter.',
    benefits: [
      'Patented alloy, 40% stronger than standard aluminium.',
      'Enables larger windows with slimmer profiles.',
      'Cyclone-tested for extreme durability & reliability.'
    ]
  },
  {
    id: 2,
    icon: '/images/image10.png',
    subtitle: 'Tested. Trusted. Strong.',
    benefits: [
      'Windows tested for wind, water, and air performance.',
      'Leak-proof, rattle-free & weather-resistant Windows.',
      'Transparent scoring system for consumer confidence.'
    ]
  },
  {
    id: 3,
    icon: '/images/image11.png',
    subtitle: 'Assured Service Guarantee',
    benefits: [
      '12-Year Warranty',
      'Dedicated 7-Day Call Center for support.',
      'Rigorous post-installation checks for complete satisfaction.'
    ]
  },
  {
    id: 4,
    icon: '/images/image12.png',
    subtitle: 'Greener Homes Promise',
    benefits: [
      'Aluminium – the world\'s only eternally recyclable material.',
      'GreenPro Certified products for a greener future.',
      'Sustainable production processes for eco-conscious living.'
    ]
  }
];

export default function WhyEternia() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <section 
      className="py-16 md:py-20 lg:py-24 text-white relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(2, 48, 61, 0.95), rgba(2, 48, 61, 0.95)), url(/images/bg-img.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#02303D'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-light tracking-wide mb-4">
            Why Choose Eternia
          </h2>
          <div className="w-48 md:w-[500px] h-[1.5px] bg-white mx-auto"></div>
        </div>
        
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-2xl p-[1.5px] transition-all duration-300"
              style={{
                background: 'linear-gradient(160deg, rgba(0,200,180,0.6) 0%, rgba(0,80,80,0.3) 30%, rgba(0,40,50,0.2) 60%, rgba(0,180,160,0.4) 100%)',
              }}
            >
              <div className="bg-[#0a2a30] rounded-2xl p-6 lg:p-3 h-full relative overflow-hidden">
                <div className="absolute inset-0 rounded-2xl" style={{
                  background: 'radial-gradient(ellipse at top left, rgba(0,180,160,0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(0,180,160,0.05) 0%, transparent 50%)',
                }} />
                
                <div className="relative z-10">
                  <div>
                    <img 
                      src={feature.icon} 
                      alt={feature.subtitle}
                      className="w-16 h-16 lg:w-40 lg:h-40 object-contain mt-[-50px]"
                    />
                  </div>
                  
                  <p className="text-lg lg:text-xl font-medium mb-8 lg:mb-5 mt-[-40px] text-white leading-relaxed tracking-wide">
                    {feature.subtitle}
                  </p>

                  <div className="w-full h-[0.5px] mb-8 lg:mb-10" style={{
                    background: 'linear-gradient(90deg, #0E3745 0%, #B1B1B1 50%, #0E3745 100%)'
                  }} />
                  
                  <ul className="space-y-5">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div 
                          className="flex-shrink-0 w-5 h-5 rounded-[5px] flex items-center justify-center mt-0.5"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            border: '0.5px solid rgba(255, 255, 255, 0.25)',
                          }}
                        >
                          <img 
                            src="/images/checkbox.png" 
                            alt="checkmark"
                            className="w-2.5 h-2.5 object-contain"
                          />
                        </div>
                        <span className="text-sm lg:text-[15px] leading-relaxed text-white/90">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature) => (
                <div key={feature.id} className="w-full flex-shrink-0 px-2">
                  <div
                    className="relative rounded-2xl p-[1.5px]"
                    style={{
                      background: 'linear-gradient(160deg, rgba(0,200,180,0.6) 0%, rgba(0,80,80,0.3) 30%, rgba(0,40,50,0.2) 60%, rgba(0,180,160,0.4) 100%)',
                    }}
                  >
                    <div className="bg-[#0a2a30] rounded-2xl p-8 relative overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl" style={{
                        background: 'radial-gradient(ellipse at top left, rgba(0,180,160,0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(0,180,160,0.05) 0%, transparent 50%)',
                      }} />
                      
                      <div className="relative z-10">
                        <div className="mb-8">
                          <img 
                            src={feature.icon} 
                            alt={feature.subtitle}
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        
                        <p className="text-xl font-medium mb-8 text-white leading-relaxed tracking-wide">
                          {feature.subtitle}
                        </p>
                        
                        <div className="w-full h-[0.5px] mb-8" style={{
                          background: 'linear-gradient(90deg, #0E3745 0%, #B1B1B1 50%, #0E3745 100%)'
                        }} />
                        
                        <ul className="space-y-5">
                          {feature.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div 
                                className="flex-shrink-0 w-5 h-5 rounded-[5px] flex items-center justify-center mt-0.5"
                                style={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  border: '0.5px solid rgba(255, 255, 255, 0.25)',
                                }}
                              >
                                <img 
                                  src="/images/checkbox.png" 
                                  alt="checkmark"
                                  className="w-2.5 h-2.5 object-contain"
                                />
                              </div>
                              <span className="text-[16px] leading-relaxed text-white/90">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2.5 mt-10">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-10' : 'bg-white/40 w-2.5'
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
