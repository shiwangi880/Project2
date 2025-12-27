import about1 from "../assets/about4.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about5.jpg";

const About = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-20 px-6 md:px-20">

      {/* Center Heading */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl tracking-widest mb-3">
          ABOUT US
        </h2>

        <div className="w-16 h-[2px] bg-[#c8a97e] mx-auto mb-3"></div>

        <p className="font-body text-sm text-gray-300 tracking-wider">
          Our Story • Our Passion • Our Taste
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Compact Image Panel */}
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto md:mx-0">

          {/* Large Image */}
          <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={about1}
              alt="Restaurant ambience"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Small Images */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={about2}
              alt="Food dish"
              className="w-full h-40 object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={about3}
              alt="Restaurant interior"
              className="w-full h-40 object-cover"
            />
          </div>

        </div>

        {/* Text Content */}
        <div>
          <h3 className="font-subheading text-2xl md:text-3xl tracking-widest mb-5">
            Where Taste Meets Comfort
          </h3>

          <p className="font-body text-gray-300 leading-7 mb-5">
            At <span className="text-white font-medium">La Bella Cucina</span>,
            we focus on creating food that feels warm, honest, and memorable.
            Every recipe is prepared with fresh ingredients and a love
            for tradition.
          </p>

          <p className="font-body text-gray-300 leading-7 mb-8">
            Our space is designed to bring people together — whether
            for a quiet dinner or a joyful celebration, every moment
            here feels special.
          </p>

          <button className="border border-[#c8a97e] text-[#c8a97e] px-7 py-3 tracking-widest
                             hover:bg-[#c8a97e] hover:text-black transition duration-300">
            READ MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;