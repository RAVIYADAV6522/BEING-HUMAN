import React from "react";

export default function HealthCare({ src , name , address , rating}) {
  return (
    <>
      <div>
        <div className=" min-w-[570px] md:py-[80] py-5 flex max-auto sm:flex-row flex-col rounded-lg bg-orange-400 px-10 mx-7 my-3 transform transition-transform duration-300 hover:scale-110">
          <div>
            <div className=" basis-[45%] w-full pb-5 my-8">
              <img src={src} className=" h-24" />
              
            </div>
          </div>

          <div className=" basis-[55%] px-5">
            <h1 className=" text-4xl pb-5 underline text-white">
              Name : {name}
            </h1>

            <p className=" py-3 text-white">Address : {address}</p>

            <p className=" py-3 text-white">Rating : {rating}</p>
          </div>
        </div>
      </div>
    </>
  );
}
