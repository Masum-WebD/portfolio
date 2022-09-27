import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Follow = () => {
  return (
    <div className="lg:hidden  bg-gradient-to-b from-black to-gray-800 w-full text-white text-center ">
      <h1 className="mb-2"> Follow Me</h1>
      <div className="flex items-center justify-center ">
        <div className="mx-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-masum-rana-a87195222/"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="mx-2">
          <a
            target="_blank"
            href="https://github.com/Masum-WebD"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="mx-2">
          <a target="_blank" href="mailto:masummx3@gmail.com" rel="noreferrer">
            {" "}
            <HiOutlineMail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Follow;
