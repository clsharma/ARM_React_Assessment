import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What are the different windows offered by Eternia?',
    answer: (
      <>
        <p style={{ marginBottom: '16px' }}>
          Eternia offers aluminium windows and doors of every type, size and colour! Our main offerings include:
        </p>
        <p style={{ marginBottom: '16px' }}>
          Sliding aluminium windows and doors<br />
          Openable/casement aluminium windows and doors.<br />
          We also offer aluminium windows and doors for all rooms: including living rooms, kitchens and bedrooms.
        </p>
        <p>
          Our aluminium windows and doors can be classified into Duraslim Edge, Duraslim and Essentials - which are three ranges of high-quality products designed to ensure that every Indian home can have aluminium windows.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: 'Which window is better for me: aluminium, wood or uPVC?',
    answer: (
      <p>
        Aluminium windows offer superior strength, durability, and slim profiles compared to wood and uPVC. They require minimal maintenance, are 100% recyclable, resistant to warping and corrosion, and ideal for Indian weather conditions. Eternia's Duraluμ technology provides 30% more strength than standard aluminium while maintaining sleek aesthetics.
      </p>
    ),
  },
  {
    id: 3,
    question: 'Do you manufacture aluminium windows and doors?',
    answer: (
      <p>
        Yes, Eternia manufactures premium aluminium windows and doors at state-of-the-art facilities backed by Aditya Birla Group. We use advanced German technology and proprietary Duraluμ aluminium alloy to ensure world-class quality. All products undergo rigorous WIWAG testing and come with comprehensive warranties and service support.
      </p>
    ),
  },
  {
    id: 4,
    question: 'What are the different colours you offer in aluminium windows?',
    answer: (
      <p>
        Eternia offers an extensive palette of powder-coated colors and wood-finish laminates. Choose from classic whites, elegant greys, bold blacks, earthy browns, and premium wood textures like teak, walnut, and oak. Custom colors are also available for large projects. All finishes are weather-resistant, fade-proof, and maintenance-free.
      </p>
    ),
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      style={{ backgroundColor: '#003946' }}
      className="py-20 lg:py-28 text-white"
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2
            className="text-3xl md:text-4xl lg:text-[40px] font-normal text-white mb-3 md:mb-4 leading-tight tracking-wide"
            style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}
          >
            Frequently Asked<br className="md:hidden" /> Questions
          </h2>
          <div className="w-64 md:w-[450px] h-[1.5px] bg-white mx-auto mb-14"></div>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>

                {index === 0 && (
                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    }}
                  />
                )}
                <div>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left"
                    style={{ padding: '20px 0' }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        color: '#FFFFFF',
                        paddingRight: '16px',
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: '22px',
                        fontWeight: 300,
                        color: '#FFFFFF',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isOpen ? '\u00D7' : '+'}
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '600px' : '0',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease, opacity 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.85)',
                        paddingBottom: '20px',
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
