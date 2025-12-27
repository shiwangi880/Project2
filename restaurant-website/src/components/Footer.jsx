const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 px-6 md:px-20 pt-20 pb-10">
      
      {/* Top */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl tracking-widest text-white mb-4">
            La Bella Cucina
          </h3>
          <p className="font-body text-sm leading-relaxed">
            A place where flavors come alive and every meal is served with
            warmth, passion, and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-subheading text-sm tracking-widest text-white mb-4">
            QUICK LINKS
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#c8a97e] transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#c8a97e] transition cursor-pointer">
              About
            </li>
            <li className="hover:text-[#c8a97e] transition cursor-pointer">
              Menu
            </li>
            <li className="hover:text-[#c8a97e] transition cursor-pointer">
              Reservation
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-subheading text-sm tracking-widest text-white mb-4">
            CONTACT
          </h4>
          <ul className="space-y-3 text-sm">
            <li>123 Gourmet Street, Delhi</li>
            <li>+91 98765 43210</li>
            <li>contact@labellacucina.com</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-subheading text-sm tracking-widest text-white mb-4">
            OPENING HOURS
          </h4>
          <p className="text-sm">
            Mon – Sun <br />
            11:00 AM – 11:00 PM
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-xs tracking-widest">
        © {new Date().getFullYear()} La Bella Cucina. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;