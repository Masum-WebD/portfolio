import React from 'react';
import html from '../Asset/skills/html.png'
import css from '../Asset/skills/css.png'
import bootstrap from '../Asset/skills/bootstrap.jpg'
import tailwind from '../Asset/skills/tailwind.png'
import javascript from '../Asset/skills/javascript.png'
import react from '../Asset/skills/react.png'
import node from '../Asset/skills/node.png'
import mongodb from '../Asset/skills/mongoDb.png'
import express from '../Asset/skills/expressjs.png'
import github from '../Asset/skills/github.png'


const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: bootstrap,
          title: " Bootstrap",
          style: "shadow-purple-500",
        },
        {
          id: 4,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: react,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 7,
          src: node,
          title: "node JS",
          style: "shadow-green-700",
        },
        {
          id: 8,
          src: mongodb,
          title: "MongoDB",
          style: "shadow-green-400",
        },
        {
          id: 9,
          src:express,
          title: "Express Js",
          style: "shadow-gray-400",
        },
        {
          id: 10,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
      ];
    
    return (
        <div
      name="Skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skill
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Experience;