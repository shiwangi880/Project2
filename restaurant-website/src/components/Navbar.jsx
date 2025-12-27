const Navbar = () => {
  return (
    <header className="absolute top-0 w-full z-10 px-8 md:px-16 py-6 flex justify-between items-center">
      
      <h2 className="text-white font-body text-xl tracking-widest">
        RISTORANTE
      </h2>

      <ul className="hidden md:flex gap-8 text-white font-body text-sm">
        {["Home", "Menu", "About", "Gallery", "Contact"].map((item) => (
          <li key={item} className="relative group cursor-pointer">
            <span>{item}</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

    </header>
  );
};

export default Navbar;