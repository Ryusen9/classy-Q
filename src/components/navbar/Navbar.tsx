import { UserButton, useUser } from "@clerk/clerk-react";
import { Heart, Moon, ShoppingBag, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const { user } = useUser();
  const [subMenu, setSubMenu] = useState(false);
  const [theme, setTheme] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.1; // 10% of window height
      if (currentScroll < scrollThreshold) {
        setShowNavbar(true);
      } else if (currentScroll > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  useEffect(() => {
    const handleClick = () => setSubMenu(false);
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/shop",
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
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-transparent md:p-5 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full lg:w-5/6 mx-auto flex items-center justify-between py-3 px-4 md:rounded-lg bg-black text-white dark:bg-white dark:text-black font-primary">
        {/* Left: Menu items */}
        <ul className="items-center font-primary gap-1 hidden md:flex">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => item?.subMenu && setSubMenu(true)}
              className="relative group hover:bg-white/40 dark:hover:bg-black/40 rounded-lg transition-all duration-200"
            >
              <NavLink className="flex items-center text-sm p-2" to={item.href}>
                <span className="ml-2">{item.title}</span>
              </NavLink>

              {item.subMenu && (
                <ul
                  onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                  className={`absolute top-11 left-1/2 ${
                    subMenu ? "block" : "hidden"
                  } group-hover:block transform -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black rounded-md shadow-lg mt-2 w-48`}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-white/40 dark:hover:bg-black/40 transition duration-200"
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

        {/* Center: Logo */}
        <div>
          <p className="font-fancy text-xl md:text-3xl">Classy Q</p>
        </div>

        {/* Right: Icons + Auth */}
        <div className="flex items-center justify-center space-x-3">
          <Link to={"/wishlist"} className="relative">
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></div>
            <Heart />
          </Link>
          <Link to={"/cart"} className="relative">
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></div>
            <ShoppingBag />
          </Link>
          <div className="flex items-center justify-center">
            <button onClick={toggleTheme}>{theme ? <Sun /> : <Moon />}</button>
          </div>
          <div className="flex items-center justify-center">
            {!user ? (
              <NavLink to={"/login"}>
                {" "}
                <Button>Login</Button>{" "}
              </NavLink>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
