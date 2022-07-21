import { useState, useEffect } from "react";
import Menu from "./manu";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowDimenion, setWindowDimention] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimention({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  return (
    <nav className="relative  container mx-auto p-4 flex items-center justify-between">
      <div className="pt-2">
        <img src="src\assets\logo.svg" />
      </div>
      <div className="hidden md:flex space-x-6 text-darkBlue">
        <a href="" className="font-bold hover:text-darkGrayishBlue">
          Pricing
        </a>
        <a href="" className="font-bold  hover:text-darkGrayishBlue">
          Product
        </a>
        <a href="" className="font-bold  hover:text-darkGrayishBlue">
          About Us
        </a>
        <a href="" className="font-bold  hover:text-darkGrayishBlue">
          Careers
        </a>
        <a href="" className="font-bold  hover:text-darkGrayishBlue">
          Community
        </a>
      </div>

      <button className="hidden md:block p-3 px-2 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
        Get Started
      </button>

      {/* burger icon */}
      <button
        className="md:hidden transition-all"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img
          src={`src/assets/icon-${showMenu ? "close.svg" : "hamburger.svg"}`}
          alt=""
        />
      </button>
      {windowDimenion.winWidth <= 800 && showMenu ? <Menu /> : ""}
    </nav>
  );
};

export default Nav;
