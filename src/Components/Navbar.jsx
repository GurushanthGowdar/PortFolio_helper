import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const MenuClickhandler = () => {
    setMenuOpen((prev) => {
      return !prev;
    });
  };

  const resume = "resume";

  return (
    <div className="sticky top-0 pl-5 px-{4}  flex justify-between items-center h-20  text-white  mx-auto bg-black">
      <h1
        className="text-[#00df9a] font-bold text-3xl w-full uppercases cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
        to="/"
      >
        GURUSHANTHA R G
      </h1>
      <ul className="md:flex hidden pr-12 ">
        <li className="p-4 text-xl">
          <a
            onClick={() => window.scrollTo(0, 0)}
            className="cursor-pointer"
            to="/"
          >
            Home
          </a>
        </li>
        <li className="p-4 text-xl">
          <a href="#skill">Skills</a>
        </li>
        <li className="p-4 text-xl">
          <a href="#works">Works</a>
        </li>
        <li className="p-4 text-xl">
          <a href={`#${resume}`}>Resume</a>
        </li>
        <li className="p-4 text-xl">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {!menuOpen ? (
        <AiOutlineMenu
          size={30}
          onClick={MenuClickhandler}
          className="md:hidden cursor-pointer"
        ></AiOutlineMenu>
      ) : (
        <AiOutlineClose
          size={30}
          onClick={MenuClickhandler}
          className="md:hidden cursor-pointer"
        ></AiOutlineClose>
      )}

      <div
        className={
          menuOpen
            ? "fixed pt-5 pl-5 bg-black border-r md:hidden border-r-gray-900  w-[60%] h-full  left-0 top-0 ease-in-out duration-500"
            : "fixed left-0 top-0 pt-5 hidden"
        }
      >
        <h1
          className="text-[#00df9a] font-bold text-3xl w-full uppercase"
          onClick={() => window.scrollTo(0, 0)}
          to="/"
        >
          GURUSHANTHA R G
        </h1>
        <ul className="ml-5 mr-8 pt-5 bg-black">
          <li className="p-4 pl-2 text-xl border-b-gray-700 border-b">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 pl-2 text-xl  border-b-gray-700 border-b">
            <a href="#skill">Skill</a>
          </li>
          <li className="p-4 pl-2 text-xl border-b-gray-700 border-b">
            <a href="#works">Works</a>
          </li>
          <li className="p-4 pl-2 text-xl border-b-gray-700 border-b">
            <a href={`#${resume}`}>Resume</a>
          </li>
          <li className="p-4 pl-2 text-xl  border-b-gray-700 border-b">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
