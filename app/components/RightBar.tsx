import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { FaMessage } from "react-icons/fa6";


export default function RightBar() {
  return (
    <div className="w-[5%] bg-white p-5 shadow">
      <div className="lightAndDark flex flex-col items-center align-middle pb-20 text-2xl">
        <MdDarkMode />
      </div>
      <div className="navMenu flex flex-col gap-15 items-center align-middle">
        <div className="tooltip tooltip-left" data-tip="Home">
          <Link href={"/"} className="text-2xl">
            <CiHome />
          </Link>
        </div>
        <div className="tooltip tooltip-left" data-tip="Service">
          <Link href={"/"} className="text-2xl">
            <FaRegFileCode />
          </Link>
        </div>

           <div className="tooltip tooltip-left" data-tip="Project">
          <Link href={"/"} className="text-2xl">
            <GoProject />
          </Link>
        </div>
           <div className="tooltip tooltip-left" data-tip="Price Plans">
          <Link href={"/"} className="text-2xl">
           <BiBriefcaseAlt2 />
          </Link>
        </div>
           <div className="tooltip tooltip-left" data-tip="Blog">
          <Link href={"/"} className="text-2xl">
            <ImBlog />
          </Link>
        </div>
           <div className="tooltip tooltip-left" data-tip="Contact">
          <Link href={"/"} className="text-2xl">
           <FaMessage />

          </Link>
        </div>
      </div>
    </div>
  );
}
