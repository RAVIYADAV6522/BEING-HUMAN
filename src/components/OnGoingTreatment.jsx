import React from 'react'

export default function OnGoingTreatment({src1,matter,date,healthcareName,treatedDate}) {
  return (
    <>
      <div>
        <div className=" min-w-[570px] md:py-[80] py-5 flex max-auto sm:flex-row flex-col rounded-lg bg-red-600 px-10 mx-7 my-3 transform transition-transform duration-300 hover:scale-110">
        <div>
          <div className=" basis-[45%] w-full pb-5">
            <img src={src1} className=" h-24" />
            <p className=" text-center text-white">Before</p>
          </div>

          <div className=" basis-[45%] w-full pb-5">
            {/* <img src={src} className=" h-24" /> */} 
            <p className=" text-center text-white">Update soon...</p>
          </div> 
        </div>

        <div className=" basis-[55%] px-5 ">
          <h1 className=" text-4xl pb-5 underline text-white">{matter}</h1>

          <p className=" py-3 text-white">Date : {date}</p>

          <p className=" py-3 text-white">HealthCare Name :{healthcareName}</p>

          <h2 className=" py-3 underline text-white">
            Treated date : {treatedDate}
          </h2>
        </div>
      </div>
      </div>
      
    </>
  )
}
