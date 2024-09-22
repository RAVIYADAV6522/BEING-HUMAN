import React from "react";
import logo from "../images/logo.png";

export default function Blogcard({ src }) {
  return (
    <>
      <div>
        <div className=" min-w-[570px] md:py-[80] py-5 flex max-auto sm:flex-row flex-col rounded-lg bg-black px-10 mx-7 my-3">
        <div>
          <div className=" basis-[45%] w-full pb-5">
            <img src={src} className=" h-24" />
            <p className=" text-center text-white">Before</p>
          </div>

          <div className=" basis-[45%] w-full pb-5">
            <img src={src} className=" h-24" />
            <p className=" text-center text-white">After</p>
          </div>
        </div>

        <div className=" basis-[55%] px-5">
          <h1 className=" text-4xl pb-5 underline text-white">Road Accident</h1>

          <p className=" py-3 text-white">Date : 12-09-2023</p>

          <p className=" py-3 text-white">HealthCare Name :SDMG Hospital</p>

          <h2 className=" py-3 underline text-white">
            Treated date : 18-09-2023
          </h2>
        </div>
      </div>
      </div>
      
    </>
  );
}
