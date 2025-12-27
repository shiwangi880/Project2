import heroBg from '../assets/hero-bg.jpg.avif';

const Hero = () => {
  return (
    <section
      className="h-screen bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg})`,
      }}
    >
      <div className="text-white max-w-3xl px-6">
        <h1 className="font-heading text-5xl md:text-7xl tracking-widest mb-4">
          La Bella Cucina
        </h1>

        <h3 className="font-subheading text-lg md:text-2xl tracking-[0.3em] mb-6">
          Fine Dining Experience
        </h3>

        <p className="font-body text-sm md:text-base leading-8 mb-10">
          Where flavors meet elegance. Crafted with passion, tradition,
          and unforgettable taste.
        </p>

        <button className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">
          RESERVE A TABLE
        </button>
      </div>
    </section>
  );
};

export default Hero;
