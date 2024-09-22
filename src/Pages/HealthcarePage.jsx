import React from "react";
import HealthCare from "../components/HealthCare";
import Input from "../components/Input";

import healthData from "../DummyData/dataH.json"



export default function HealthcarePage() {
  return (
    <>
      <Input/>
      <div className=" flex flex-wrap gap-7 my-5">
        {healthData.map((data,id)=>(
           <div className="border-8 border-blue-500 rounded-lg p-1">
            <HealthCare  key={id} src={data.src} name={data.name} address={data.address} rating={data.rating}/>
           </div>
        ))}
      </div>

       
      

    </>
  );
}
