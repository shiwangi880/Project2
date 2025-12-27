import React from "react";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import ambience from "../assets/ambience.jpg";

const Gallery = () => {
  const [stopScroll, setStopScroll] = React.useState(false);

  const galleryData = [
    { title: "Signature Dishes", image: food1 },
    { title: "Fresh Ingredients", image: food2 },
    { title: "Chef’s Special", image: food3 },
    { title: "Warm Ambience", image: ambience },
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="bg-[#0b0b0b] py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-3">
            GALLERY
          </h2>
          <div className="w-16 h-[2px] bg-[#c8a97e] mx-auto mb-3"></div>
          <p className="font-body text-sm text-gray-300 tracking-wider">
            Moments Served with Love
          </p>
        </div>

        {/* Marquee */}
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-[#0b0b0b] to-transparent" />

          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: galleryData.length * 3000 + "ms",
            }}
          >
            <div className="flex">
              {[...galleryData, ...galleryData].map((item, index) => (
                <div
                  key={index}
                  className="w-48 h-64 mx-3 relative group rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <p className="text-white text-xs tracking-widest">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-[#0b0b0b] to-transparent" />
        </div>
      </section>
    </>
  );
};

export default Gallery;