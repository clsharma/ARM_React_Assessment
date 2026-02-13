const articles = [
  { id: 1, image: '/images/image22.png', link: '#article-1' },
  { id: 2, image: '/images/image23.png', link: '#article-2' },
  { id: 3, image: '/images/image24.png', link: '#article-3' },
  { id: 4, image: '/images/image25.png', link: '#article-4' },
];

export default function ThoughtfulReads() {
  return (
    <section className="relative w-full">
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/image6.png')" }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#003946]" />

      <div className="relative z-10 max-w-[1280px] mx-auto lg:px-8 pt-10 pb-10 lg:pt-16 lg:pb-16">
        <div className="absolute inset-0"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-normal text-[#003946] mb-3 md:mb-4 leading-tight tracking-wide mt-[-30px]" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
              Thoughtful Reads for<br className="md:hidden" /> Modern Living
            </h2>
            <div className="w-64 md:w-[420px] h-[1.5px] bg-[#003946] mx-auto mb-6 lg:mb-10"></div>
          </div>
        </div>

        <div className="lg:hidden flex gap-4 overflow-x-auto scrollbar-hide px-[12%] sm:px-[12%] mb-8 snap-x snap-mandatory">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group flex-shrink-0 w-[75%] rounded-xl overflow-hidden shadow-lg snap-center"
            >
              <img
                src={article.image}
                alt="Article Thumbnail"
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-12">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt="Article Thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block text-white font-semibold text-sm lg:text-base border-b-2 border-white pb-1 hover:opacity-80 transition-opacity"
          >
            <span className="lg:hidden">View All</span>
            <span className="hidden lg:inline">Explore More</span>
          </a>
        </div>
      </div>
    </section>
  );
}
