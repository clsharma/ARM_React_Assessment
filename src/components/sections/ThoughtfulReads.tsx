import { FaArrowRight } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: 'Beyond the Basics: Exploring Unique Window Types for Your Dream Home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    link: '#article-1'
  },
  {
    id: 2,
    title: 'Energy-Efficient Windows: How to Save on Bills While Staying Comfortable',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    link: '#article-2'
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Window Maintenance: Keep Them Looking New',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80',
    link: '#article-3'
  },
  {
    id: 4,
    title: 'Aluminium vs uPVC vs Wood: Which Window Material is Right for You?',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    link: '#article-4'
  }
];

export default function ThoughtfulReads() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Accent Areas */}
      <div className="absolute top-0 left-0 w-32 h-full bg-primary hidden lg:block"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-primary hidden lg:block"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text-dark">
          Thoughtful Reads for Modern Living
        </h2>
        
        {/* Desktop & Tablet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg leading-tight mb-3">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-white">
                      <span className="text-sm font-semibold">Read More</span>
                      <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <button className="btn-secondary">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
