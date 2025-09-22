import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[80%]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.postimg.cc/Y26mR921/shefayetnayon.png"
            className="  rounded-lg shadow-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">I'm Shefayet Nayon</h1>
            <h2 className="text-2xl"><span className="text-amber-500 font-bold">FrontEnd</span> Developer</h2>
            <p className="py-6">
              <span className="font-bold">Frontend that feels. <span className="text-amber-600">Design that speaks</span>.</span> <br /> I'm Shefayet Nayon — I turn clean code into expressive interfaces that reflect real people, not templates.I build interfaces that connect, not just impress. Clean code, expressive layouts, and zero artificial polish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
