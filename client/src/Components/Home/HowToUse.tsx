function HowToUse() {
  const steps = [
    {
      title: "Put",
      desc: "Take one pieceof pili blaze",
      img: "/HTU/1.jpg",
    },
    {
      title: "Light",
      desc: "Can be cut and use several times",
      img: "/HTU/2.jpg",
    },
    {
      title: "Cut (optional)",
      desc: "Light it using a lighter",
      img: "/HTU/3.jpg",
    },
    {
      title: "Place",
      desc: "Put it on the charcoal stove/grills",
      img: "/HTU/4.jpg",
    },
  ];
  return (
    <>
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          How to Use Pili Blaze
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {steps.map((s, i) => (
            <div key={i}>
              <img
                src={s.img}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="font-bold text-xl mt-4 text-amber-700">
                {i + 1}. {s.title}
              </h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      ;
    </>
  );
}

export default HowToUse;
