import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'What are the different windows offered by Eternia?',
    answer: 'Eternia offers a comprehensive range of premium aluminium windows including sliding windows, casement windows, fixed windows, tilt & turn windows, and combination windows. Each type is available in multiple series - Eternia Duraslim Edge for ultra-slim profiles, Eternia Duraslim for modern aesthetics, and Eternia Essentials for value-conscious homeowners. All windows feature our proprietary Duraluμ aluminium alloy and are backed by WIWAG certification for assured quality and performance.'
  },
  {
    id: 2,
    question: 'Which window is better for me: aluminium, wood or uPVC?',
    answer: 'Aluminium windows offer superior strength, durability, and slim profiles compared to wood and uPVC. They require minimal maintenance, are 100% recyclable, resistant to warping and corrosion, and ideal for Indian weather conditions. Eternia\'s Duraluμ technology provides 30% more strength than standard aluminium while maintaining sleek aesthetics.'
  },
  {
    id: 3,
    question: 'Do you manufacture aluminium windows and doors?',
    answer: 'Yes, Eternia manufactures premium aluminium windows and doors at state-of-the-art facilities backed by Aditya Birla Group. We use advanced German technology and proprietary Duraluμ aluminium alloy to ensure world-class quality. All products undergo rigorous WIWAG testing and come with comprehensive warranties and service support.'
  },
  {
    id: 4,
    question: 'What are the different colours you offer in aluminium windows?',
    answer: 'Eternia offers an extensive palette of powder-coated colors and wood-finish laminates. Choose from classic whites, elegant greys, bold blacks, earthy browns, and premium wood textures like teak, walnut, and oak. Custom colors are also available for large projects. All finishes are weather-resistant, fade-proof, and maintenance-free.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openId === faq.id}
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <span className="flex-shrink-0">
                  {openId === faq.id ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Have more questions?</p>
          <button className="btn-primary">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
