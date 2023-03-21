import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col items-center gap-3">
      <div className="grid gap-8 py-5 grid-cols-1  msm:grid-cols-2  lg:grid-cols-3">
        <div className=" flex  items-center flex-col">
          <img className="h-20 w-20" src="https://w7.pngwing.com/pngs/35/313/png-transparent-computer-icons-book-reading-book-angle-logo-author.png" alt="" />
          <p className="text-white my-4 msm:w-10/12 ">
            Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum
            is dummy text.Loreum ipsum is dummy text.Loreum{" "}
          </p>
          <div></div>
        </div>
        <div className="flex msm:justify-center gap-7  sm:gap-14">
          <div className=" flex flex-col gap-5">
            <p className="text-white min-w-max tracking-wide font-bold">
              Quick Links
            </p>
            <ul className="text-gray-300 flex flex-col gap-3">
              <li>
                {" "}
                <Link>Services</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Work</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Industries</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>About us</Link>{" "}
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5">
            <p className="text-white tracking-wide font-bold">Policies</p>
            <ul className="text-gray-300 flex flex-col gap-3">
              <li>
                {" "}
                <Link>Cookie Policy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Terms & Conditions</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>FAQs</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Help</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h3 className="text-blue-400 font-medium text-xl">
            Your organization is not present ?
          </h3>
          <p className="text-gray-300">
            Request here, we'll add soon
          </p>
          <form className="flex gap-3 flex-col">
            <input
              className="flex-1  sm:hidden block min-w-[10px] px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="Your Name"
              type="text"
              name="name"
              id=""
            />
            <input
              className="flex-1 sm:block hidden min-w-fit px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="Enter Your Name"
              type="text"
              name="name"
              id=""
            />
            <input
              className="flex-1  sm:hidden block min-w-[10px] px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="Email Id"
              type="email"
              name="email"
              id=""
            />
            <input
              className="flex-1 sm:block hidden min-w-fit px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              id=""
            />
            <input
              className="flex-1  sm:hidden block min-w-[10px] px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="School Name"
              type="text"
              name="schoolName"
              id=""
            />
            <input
              className="flex-1 sm:block hidden min-w-fit px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="Enter Your School Name"
              type="text"
              name="schoolName"
              id=""
            />
            <input
              className="flex-1  sm:hidden block min-w-[10px] px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="School Address"
              type="text"
              name="address"
              id=""
            />
            <input
              className="flex-1 sm:block hidden min-w-fit px-4 rounded-sm py-3 text-gray-300 text-sm "
              placeholder="Enter Your School Address"
              type="text"
              name="address"
              id=""
            />
            <button className="min-w-fit bg-blue-400 px-6 rounded-sm py-2 text-white font-bold text-base">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <hr className="border-spacing-1 w-full mt-8 opacity-50 border-my-white" />
      <p className="text-center text-white text-base tracking-wide">
        +65 8100 0443 <br />
        Copyright © Team Sikhas Mitra <br /> Government Engineering College Raipur</p>
    </div>
  );
}
