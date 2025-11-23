import ProductImage from "/Product_Image.png";
const Hero = () => {
  return (
    <>
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Ignite with <span className="text-amber-700">Pili Blaze</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 text-justify">
              Pili Blaze is a reliable and affordable fire starter made from
              pili tree resin and coconut husk, designed for quick and efficient
              ignition. It is waterproof and long burning, making it ideal for
              lighting a grill, fireplace, or campfire. Its unique multicolored
              flame, a combination of blue, yellow, and orange enhances both
              performance and efficiency. The blue flame ensures quick and clean
              ignition, while the yellow and orange flames provide steady,
              long-lasting heat for sustained burning. This balance of
              efficiency and reliability makes Pili Blaze a cost-effective and
              hassle-free fire-starting solution. With its compact, easy-to-use
              design, it is a practical choice for both home and outdoor use,
              offering great value without compromising performance.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={ProductImage}
              className="w-full rounded-2xl shadow-xl object-cover h-100"
              alt="Pili Blaze Product"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
