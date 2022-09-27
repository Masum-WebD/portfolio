import React from 'react';
import bookshop from "../Asset/portfolio/Booksop .png";
import hardware from "../Asset/portfolio/hardware.png";
import telecom from "../Asset/portfolio/telecom .png";

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: bookshop,
          demo:"https://the-online-bookshop.web.app/",
          ClientCode:"https://github.com/Masum-WebD/book-store",
          serverCode:"https://github.com/Masum-WebD/book-store-server"
          
        },
        {
          id: 2,
          src: hardware,
          demo:"https://celadon-travesseiro-543ef4.netlify.app/",
          ClientCode:"https://github.com/Masum-WebD/Travel-hardware-Industries-clientSide",
          serverCode:"https://github.com/Masum-WebD/Travel-hardware-Industries-serverSide"
        },
        {
          id: 3,
          src: telecom,
          demo:"https://superb-babka-b4fcee.netlify.app/",
          ClientCode:"https://github.com/Masum-WebD/key-two-warehouse-clientSide",
          serverCode:"https://github.com/Masum-WebD/-key-two-warehouse-serverSide"
        },
       
      ];
    return (
        <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 sm:px-0 w-full sm:items-center justify-center ">
          {portfolios.map(({ id, src,demo,ClientCode,serverCode }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center ">
                <button className=" w-1/2 px-6 py-3  duration-200 hover:scale-105">
                 <a target="_blank"  href= {demo} rel="noreferrer"> Live </a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                <a target="_blank"  href= {ClientCode} rel="noreferrer"> Client</a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                <a target="_blank"  href= {serverCode} rel="noreferrer"> Server</a>
                </button>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
    );
};

export default Portfolio;