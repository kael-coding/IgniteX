function KeyBenefits() {
  const benefits = [
    {
      title: "100% Natural",
      desc: "Made using natural Pili-based materials with no harmful chemicals.",
    },
    {
      title: "Long-Lasting Flame",
      desc: "Burns longer, hotter, and cleaner for efficient fire starting.",
    },
    {
      title: "Non-Toxic",
      desc: "Safe for cooking, families, and pets. No harmful fumes orresidues.",
    },
    {
      title: "Zero Waste",
      desc: "Compostable packaging and carbon-neutral production.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Key Benefits</h2>
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-justify">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="p-8 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-xl mb-2">{b.title}</h3>
            <p className="text-gray-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyBenefits;
