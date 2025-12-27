const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Food Blogger",
    review:
      "The flavors were absolutely stunning. Every dish felt thoughtfully crafted and full of warmth.",
  },
  {
    name: "Rahul Mehta",
    role: "Regular Customer",
    review:
      "A perfect place for family dinners. The ambience, service, and food quality never disappoint.",
  },
  {
    name: "Sneha Kapoor",
    role: "Traveler",
    review:
      "One of the best dining experiences I've had. The food speaks for itself.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#111] text-white py-24 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl tracking-widest mb-4">
          TESTIMONIALS
        </h2>
        <div className="w-20 h-[2px] bg-[#c8a97e] mx-auto mb-4"></div>
        <p className="font-body text-sm text-gray-300 tracking-wider">
          What Our Guests Say
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b0b0b] p-8 rounded-2xl shadow-lg hover:translate-y-[-4px] transition"
          >
            <p className="font-body text-sm text-gray-300 leading-relaxed mb-6">
              “{item.review}”
            </p>

            <div className="border-t border-gray-700 pt-4">
              <h4 className="font-subheading tracking-wide">
                {item.name}
              </h4>
              <span className="text-xs text-[#c8a97e] tracking-widest">
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;