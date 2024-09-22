import React from "react";
import Treated from "../components/Treated";
import HealthCare from "../components/HealthCare";
import OnGoingTreatment from "../components/OnGoingTreatment";

import Footer from "../components/Footer";
import About from "./About";

import OGT from "../DummyData/dataOGT.json";
import treated from "../DummyData/dataT.json";
import healthData from "../DummyData/dataH.json";

export default function Home() {
  return (
    <>
      <div className=" bg-green-400">
        <div className="">
          <div className=" flex justify-center bg-black transform transition-transform duration-300 hover:scale-110 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
            <h1 className=" text-4xl text-white underline p-2 ">
              Every Wound Deserves a Chance to Heal
            </h1>
          </div>

          <div className=" my-8">
            <h2 className=" text-5xl text-white px-6">OnGoingTreatment :</h2>
            <div className=" flex  flex-wrap py-3">
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
            </div>
          </div>

          <div className=" my-8">
            <h2 className=" text-5xl text-white px-6">Treated :</h2>
            <div className=" flex flex-wrap py-3">
              <div className="flex flex-wrap gap-20 my-5">
                {treated.map((data) => (
                  <div className="border-8 border-blue-500 rounded-lg p-1 ">
                    <Treated
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
            </div>
          </div>

          <div className=" my-8">
            <h2 className=" text-5xl text-white px-6">HealthCare Center :</h2>
            <div className=" flex flex-wrap py-3">
              <div className=" flex flex-wrap gap-7 my-5">
                {healthData.map((data, id) => (
                  <div className="border-8 border-blue-500 rounded-lg p-1">
                    <HealthCare
                      key={id}
                      src={data.src}
                      name={data.name}
                      address={data.address}
                      rating={data.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="bg-[url('https://media.licdn.com/dms/image/D5612AQFzlMWxpR8bdQ/article-cover_image-shrink_720_1280/0/1700132060992?e=2147483647&v=beta&t=YXq9SfAEd6xLjAKxjBcfxUBwAZN2rlTB5o5qLeoWHCA')] bg-cover bg-center h-screen">
      
      <h1 className="text-white text-4xl font-bold">Welcome to My Page</h1>
    </div>
   */}

          <div>
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
