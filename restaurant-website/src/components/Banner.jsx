import bannerImg from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center px-6"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
        <h2 className="font-heading text-3xl md:text-5xl tracking-widest leading-tight mb-6">
          Where Every Meal <br /> Becomes a Memory
        </h2>

        <p className="font-body text-sm md:text-base text-gray-300 leading-relaxed mb-8">
          Crafted with passion, served with love, and remembered for its flavors.
          Join us for an experience that goes beyond food.
        </p>

        <button className="border-2 border-[#c8a97e] text-[#c8a97e] px-8 py-3 tracking-widest text-sm hover:bg-[#c8a97e] hover:text-black transition">
          RESERVE YOUR TABLE
        </button>
      </div>
    </section>
  );
};

export default Banner;