"use client";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSass } from "react-icons/fa";

export default function LeftBar() {
  const birthYear = 1997;
  const myProperties = {
    dateofBirth: birthYear,
    Age: new Date().getFullYear() - birthYear,
    Residence: "BD",
    Freelance: "Available",
    Address: "Khulna, Bangladesh",
  };

  // Animated progress values
  const [progress, setProgress] = useState({
    Bengali: 0,
    English: 0,
    Hindi: 0,
    Html: 0,
    CSS: 0,
    Js: 0,
    React: 0,
    NextJs: 0,
    Wordpress: 0,
  });

  useEffect(() => {
    const target = {
      Bengali: 100,
      English: 70,
      Hindi: 40,
      Html: 100,
      CSS: 90,
      Js: 75,
      React: 85,
      NextJs: 95,
      Wordpress: 75,
    };
    const interval = setInterval(() => {
      setProgress((prev) => {
        let updated = { ...prev };
        let done = true;
        Object.keys(target).forEach((lang) => {
          const key = lang as keyof typeof target;
          if (prev[key] < target[key]) {
            updated[key] = Math.min(prev[key] + 2, target[key]);
            done = false;
          }
        });
        if (done) clearInterval(interval);
        return updated;
      });
    }, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[20%] bg-white p-10 rounded shadow">
      <div className="titleOfleftBar">
        <img
          src="https://i.postimg.cc/DZdMRq12/94421575-1462621767243736-3919540940481495040-n.jpg"
          alt=""
          className="rounded-[50%] w-20 mx-auto"
        />
        <h2 className="mytitle text-center text-[16px] font-bold mt-1">
          Shefayet Nayon
        </h2>
        <p className="titleDescription text-center mt-1 font-extralight">
          Front-End Developer
        </p>
        <div className="socialIcones flex justify-center gap-3 mt-2 relative">
          <a href="" className="bg-[#FFB400] p-2 rounded-[50%]">
            <FaFacebookF />
          </a>
          <a href="" className="bg-[#FFB400] p-2 rounded-[50%]">
            {" "}
            <FaInstagram />
          </a>
          <a href="" className="bg-[#FFB400] p-2 rounded-[50%]">
            <FaYoutube />
          </a>
          <a href="" className="bg-[#FFB400] p-2 rounded-[50%]">
            {" "}
            <FaXTwitter />
          </a>
          <a href="" className="bg-[#FFB400] p-2 rounded-[50%]">
            {" "}
            <FaLinkedin />
          </a>
          <div className="linebye absolute w-[100%] h-[2px] bg-[#ddd] bottom-[-10px]"></div>
        </div>
      </div>
      {/* here the second line of code.. */}
      <div className="personalInfo">
        <div className=" mt-10">
          {Object.entries(myProperties).map(([key, value]) => (
            <div key={key} className="flex justify-between mb-1 ">
              <span className={key === "dateofBirth" ? "capitalize" : ""}>
                {key}:
              </span>
              <span className={key === "Freelance" ? "text-[#19b40b]" : ""}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* progress of my Languages */}
      <div className="progressBarhere relative">
        <div className="linebye absolute w-[100%] h-[2px] bg-[#ddd] top-[1px]"></div>
        <h2 className="text-[16px] font-bold text-center pt-2">Language</h2>
        <span>
          Bengali
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.Bengali}
            max="100"
          ></progress>
        </span>
        <span>
          English
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.English}
            max="100"
          ></progress>
        </span>
        <span>
          Hindi
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.Hindi}
            max="100"
          ></progress>
        </span>
      </div>
      {/* Skill Progress  */}
      <div className="progressBarhere relative">
        <div className="linebye absolute w-[100%] h-[2px] bg-[#ddd] top-[1px]"></div>
        <h2 className="text-[16px] font-bold text-center pt-2">Skills</h2>
        <span>
          Html
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.Html}
            max="100"
          ></progress>
        </span>
        <span>
          CSS
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.CSS}
            max="100"
          ></progress>
        </span>
        <span>
          JS
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.Js}
            max="100"
          ></progress>
        </span>
        <span>
          React
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.React}
            max="100"
          ></progress>
        </span>
        <span>
          NextJs
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.NextJs}
            max="100"
          ></progress>
        </span>
        <span>
          Wordpress
          <progress
            className="progress w-full transition-all duration-700"
            value={progress.Wordpress}
            max="100"
          ></progress>
        </span>
        <div className="extraSkill">
          <h2 className="text-[16px] font-bold text-center">Extra Skills</h2>
          <div className="skillsAre flex gap-3 justify-center"> 
            <span className="text-2xl"> <RiTailwindCssFill /> </span>
            <span className="text-2xl">   <FaBootstrap /> </span>
            <span className="text-2xl">  <FaGithub /> </span>
            <span className="text-2xl">    <FaSass /> </span>
          </div>
        </div>
      </div>
    </div>
  );
}
