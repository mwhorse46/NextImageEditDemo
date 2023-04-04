import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const navClassNames = {
    container:
      "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen p-4 text-4xl bg-black sm:hidden",
    hidden: "translate-x-full opacity-0",
    visible: "translate-x-0 opacity-100",
    transition: "transform duration-300 ease-in-out",
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 z-10 w-full duration-300 ease-in"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="text-4xl font-bold">
            Capture
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-gray-300">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4 hover:text-gray-300">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 hover:text-gray-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu  */}

        <div onClick={handleNav} className="z-10 block sm:hidden">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={`${navClassNames.container} ${
            nav ? navClassNames.visible : navClassNames.hidden
          } ${navClassNames.transition}`}
        >
          <ul style={{ color: "white" }} className="flex flex-col items-center">
            <li onClick={handleNav} className="p-4 hover:text-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-gray-400">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-gray-400">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-gray-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
