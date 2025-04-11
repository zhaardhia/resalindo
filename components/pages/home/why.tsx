// components/WhyChooseUs.tsx
export default function WhyChooseUs() {
  return (
    <section className="py-12 relative min-h-[50vh] flex flex-col justify-center items-center">
      {/* Background image (commented out) */}
      {/*
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
      ></div>
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            '7+ Years Experience',
            'Best Service\nBest Material',
            'Company Legality (PT)',
            'Competitive Price',
            'Building Guaranty 100%',
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-gray-300 mb-4 rounded"></div>
              <p className="text-sm whitespace-pre-line text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
