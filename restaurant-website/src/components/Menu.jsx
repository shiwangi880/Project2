import { useState } from "react";
import pasta from "../assets/pasta.jpg";
import pizza from "../assets/pizza.jpg";
import paneer from "../assets/paneer.jpg";
import dessert from "../assets/dessert.jpg";

const menuData = [
  {
    category: "Starters",
    name: "Paneer Tikka",
    desc: "Marinated cottage cheese grilled to perfection.",
    price: "₹360",
    img: paneer,
    popular: true,
    special: false,
  },
  {
    category: "Main Course",
    name: "Truffle Mushroom Pasta",
    desc: "Creamy pasta with mushrooms and truffle oil.",
    price: "₹420",
    img: pasta,
    popular: true,
    special: true,
  },
  {
    category: "Main Course",
    name: "Margherita Pizza",
    desc: "Classic pizza with basil & mozzarella.",
    price: "₹350",
    img: pizza,
    popular: false,
    special: false,
  },
  {
    category: "Desserts",
    name: "Chocolate Lava Cake",
    desc: "Warm chocolate cake with molten center.",
    price: "₹280",
    img: dessert,
    popular: true,
    special: true,
  },
];

const categories = ["All", "Starters", "Main Course", "Desserts"];

const Menu = () => {
  const [active, setActive] = useState("All");

  const filteredMenu =
    active === "All"
      ? menuData
      : menuData.filter(item => item.category === active);

  return (
    <section className="bg-[#0b0b0b] text-white py-24 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="font-heading text-4xl md:text-5xl tracking-widest mb-4">
          OUR MENU
        </h2>
        <div className="w-20 h-[2px] bg-[#c8a97e] mx-auto mb-4"></div>
        <p className="font-body text-sm text-gray-300 tracking-wider">
          Crafted with Passion & Flavor
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm tracking-widest border rounded-full transition
              ${
                active === cat
                  ? "bg-[#c8a97e] text-black border-[#c8a97e]"
                  : "border-gray-600 text-gray-300 hover:border-[#c8a97e]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="max-w-5xl mx-auto space-y-10">
        {filteredMenu.map((item, index) => (
          <div
            key={index}
            className={`flex gap-5 items-start border-b border-gray-700 pb-6 ${
              item.special && "bg-[#111] p-4 rounded-xl"
            }`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 rounded-xl object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-subheading text-lg">
                  {item.name}
                </h4>

                {item.popular && (
                  <span className="text-xs bg-[#c8a97e] text-black px-2 py-[2px] rounded tracking-wider">
                    POPULAR
                  </span>
                )}

                {item.special && (
                  <span className="text-xs border border-[#c8a97e] text-[#c8a97e] px-2 py-[2px] rounded tracking-wider">
                    CHEF’S SPECIAL
                  </span>
                )}
              </div>

              <p className="font-body text-sm text-gray-400 max-w-md mt-1">
                {item.desc}
              </p>
            </div>

            {/* Price + Order */}
            <div className="text-right">
              <p className="font-body text-[#c8a97e] tracking-widest mb-2">
                {item.price}
              </p>
              <button className="text-xs tracking-widest border border-gray-600 px-3 py-1 rounded-full hover:border-[#c8a97e] transition">
                ORDER
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Menu;