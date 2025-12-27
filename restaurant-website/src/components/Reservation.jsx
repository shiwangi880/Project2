const Reservation = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-24 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl tracking-widest mb-4">
          RESERVATION
        </h2>
        <div className="w-20 h-[2px] bg-[#c8a97e] mx-auto mb-4"></div>
        <p className="font-body text-sm text-gray-300 tracking-wider">
          Book Your Table or Reach Us
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Reservation Form */}
        <div className="bg-[#111] p-10 rounded-2xl">
          <h3 className="font-subheading text-2xl mb-6 tracking-wide">
            Reserve a Table
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-[#c8a97e]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-[#c8a97e]"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-[#c8a97e]"
              />
              <input
                type="time"
                className="bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-[#c8a97e]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c8a97e] text-black py-3 tracking-widest rounded-md hover:opacity-90 transition"
            >
              BOOK TABLE
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="font-subheading text-2xl mb-6 tracking-wide">
            Contact Information
          </h3>

          <div className="space-y-6 text-gray-300 font-body">
            <p>
              <span className="text-[#c8a97e] tracking-widest block mb-1">
                ADDRESS
              </span>
              123 Gourmet Street, Delhi
            </p>

            <p>
              <span className="text-[#c8a97e] tracking-widest block mb-1">
                PHONE
              </span>
              +91 98765 43210
            </p>

            <p>
              <span className="text-[#c8a97e] tracking-widest block mb-1">
                EMAIL
              </span>
              contact@labellacucina.com
            </p>

            <p>
              <span className="text-[#c8a97e] tracking-widest block mb-1">
                OPENING HOURS
              </span>
              Mon – Sun: 11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reservation;