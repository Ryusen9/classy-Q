import { Headset, House, Info, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [subMenu, setSubMenu] = useState(false);
  useEffect(() => {
    const handleClick = () => setSubMenu(false);
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);
  const menuItems = [
    {
      title: "Home",
      href: "/",
      icon: <House size={15} />,
    },
    {
      title: "Shop",
      href: "/shop",
      icon: <ShoppingBag size={15} />,
      subMenu: [
        { title: "All Products", href: "/shop/all-products" },
        { title: "New Arrivals", href: "/shop/new-arrivals" },
        { title: "Best Sellers", href: "/shop/best-sellers" },
        { title: "Men's Collection", href: "/shop/mens-collection" },
        { title: "Women's Collection", href: "/shop/womens-collection" },
        { title: "Premium Collection", href: "/shop/premium-collection" },
        { title: "Limited Edition", href: "/shop/limited-edition" },
      ],
    },
    {
      title: "About Us",
      href: "/about",
      icon: <Info size={15} />,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <Headset size={15} />,
    },
  ];

  return (
    <nav className="w-full fixed top-0 bg-transparent left-0 md:p-5 z-50">
      <div className="w-full md:w-3/4 mx-auto flex items-center justify-between py-3 px-4 md:rounded-lg bg-black text-white">
        {/* menu items */}
        <ul className="items-center gap-4 hidden md:flex">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => item?.subMenu && setSubMenu(true)}
              className="relative group hover:bg-white/40 rounded-lg transition-all duration-200"
            >
              <NavLink className="flex items-center text-sm p-2" to={item.href}>
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </NavLink>

              {item.subMenu && (
                <ul
                  onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                  className={`absolute top-11 left-1/2 ${
                    subMenu ? "block" : "hidden"
                  } group-hover:block transform -translate-x-1/2 bg-black text-white rounded-md shadow-lg mt-2 w-48`}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-white/40 transition duration-200"
                      >
                        {subItem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* logo */}
        <div>
          <p className="font-fancy text-xl md:text-3xl">Classy Q</p>
        </div>
        {/* Others */}
      </div>
    </nav>
  );
};

export default Navbar;
