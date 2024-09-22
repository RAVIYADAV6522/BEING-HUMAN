import React from "react";
import OnGoingTreatment from "../components/OnGoingTreatment";
import OGT from "../DummyData/dataOGT.json";
import Input from "../components/Input";

export default function OnGoingTreatmentPage() {
  return (
    <>
      <Input/>

      <div className="flex flex-wrap gap-20 my-5">
        {OGT.map((data) => (
          <div className="border-8 border-blue-500 rounded-lg p-1">
            <OnGoingTreatment
              key={data.id}
              src1={data.src1}
              matter={data.matter}
              date={data.date}
              healthcareName={data.healthcareName}
              treatedDate={data.treatedDate}
            />
          </div>
        ))}
      </div>

      {/* <OnGoingTreatment/> 
      <OnGoingTreatment/> 
      <OnGoingTreatment/>  */}
    </>
  );
}
