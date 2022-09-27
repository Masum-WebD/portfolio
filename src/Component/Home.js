import React from "react";
import { FcDownload } from "react-icons/fc";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from "../Asset/My-photo.png";

const Home = () => {
  return (
    <div
      name="Home"
      className=" w-full  bg-gradient-to-b  from-black to-gray-800 "
    >
      <div className="max-w-screen-lg  flex mx-auto flex-col items-center justify-center  px-4 md:flex-row ">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a MERN Stack Developer
          </h1>
          <p className="text-gray-500 py-4 mx-w-md mr-5">
            Hello! I'm MD Masum Rana , as a MERN Stack Developer.I am available for any kind of job opportunity that match my skills.
          </p>
          <div className="flex">
            <button className="group mx-2  text-white rounded-md my-2 px-6  py-3 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </button>
            <button className="  text-white rounded-md my-2 px-8  py-3 bg-gradient-to-r from-cyan-500 to-blue-500 
          items-center ">
              <a
              className="flex items-center" 
                href="/resume.pdf"
                download="Resume"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Resume
                <span className="">
                  <FcDownload size={30} className="ml-2" />
                </span>
              </a>
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl w-4/5 h-[300px] mx-auto md:w-full"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
