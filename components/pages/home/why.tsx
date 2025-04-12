import FadeBox from "@/components/fade-box";

export default function WhyChooseUs() {
  const why = [
    {
      label: '7+ Years Experience',
      url: '/rpm/choose-experience.png'
    },
    {
      label: 'Best Service\nBest Material',
      url: '/rpm/choose-material.png'
    },
    {
      label: 'Company Legality (PT)',
      url: '/rpm/choose-legality.png'
    },
    {
      label: 'Competitive Price',
      url: '/rpm/choose-price.png'
    },
    {
      label: 'Building Guarantee 100%',
      url: '/rpm/choose-guarantee.png'
    },
  ]
  return (
    <section className="py-12 relative min-h-[600px] flex flex-col justify-center items-center bg-[url('/rpm/bg-section.png')] bg-cover bg-center">
      {/* Background image (commented out) */}
      {/*
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
      ></div>
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {why.map((_, index) => (
            <FadeBox
              delay={`${index + 1}00ms`}
              key={index}
              className="bg-white px-2 py-4 rounded-lg shadow flex flex-col items-center justify-between text-center gap-4"
            >
              {/* <div className="w-20 h-20 bg-gray-300 mb-4 rounded"></div> */}
              <img src={_.url} alt="" className="h-24" />
              <p className="text-md whitespace-pre-line text-gray-700">{_.label}</p>
            </FadeBox>
          ))}
        </div>
      </div>
    </section>
  );
}
