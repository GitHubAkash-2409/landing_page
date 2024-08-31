import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { navLinks } from "../Data/data.js";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-2xl">
            Chandu<span className="text-red-500">Tech.</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex items-center space-x-6 text-white text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={`#${link.id}`} className="nav-link">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
          </button>

          <Link
            to="/blogs"
            className="hidden md:block text-gray-300 hover:text-white"
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              Blogs
            </button>
          </Link>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-800 text-white`}
        >
          <ul className="text-lg font-semibold text-center py-4">
            {navLinks.map((link) => (
              <li key={link.id} className="py-2">
                <Link
                  to={`#${link.id}`}
                  onClick={toggleMenu}
                  className="hover:text-gray-300 nav-link"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blogs"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white nav-link"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
