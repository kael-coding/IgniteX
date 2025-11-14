function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">About IgniteX</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          IgniteX is a sustainable fire-starting business in Sorsogon City,
          founded by nine 4th-year Bachelor of Science in Entrepreneurship
          students of Sorsogon State University – Sorsogon City Campus. Its core
          product, <span className="font-bold text-amber-700">Pili Blaze</span>,
          utilizes locally sourced pili tree resin, offering more sustainable
          and reliable fire starters for households, campers, and BBQ vendors.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          Company Image
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            IgniteX is committed to producing high-quality and efficient fire
            starters that provide reliable ignition for outdoor and everyday
            use. Through innovation, we aim to deliver a convenient and
            effective solution while maintaining responsible business practices.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the leading provider of sustainable fire-starting solutions in
            Sorsogon City, offering innovative, sustainable products that
            promote safety and environmental responsibility.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Why Pili Blaze?</h2>
          <p className="text-gray-600 leading-relaxed">
            Pili Blaze is designed to replace chemical fire starters with
            something better: clean-burning, renewable, biodegradable, and
            sourced from nature.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
