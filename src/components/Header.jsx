import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className=" w-full shadow-md h-20 flex justify-center items-center  ">
        <Link to={"/"}>
          <img
            className=" h-28 p-5  w-40"
            src="https://m.media-amazon.com/images/I/61E8GqwAuML._AC_UF1000,1000_QL80_.jpg"
          ></img>
        </Link>
        <Link to={"/"}>
          <h2 className=" text-3xl text-black ">BEING HUMAN</h2>
        </Link>
        <div className="  w-[70%] flex items-center justify-around">
          <div className=" flex items-center">
            {/* <img
              className=" h-28 p-5  w-40"
              src="https://m.media-amazon.com/images/I/61E8GqwAuML._AC_UF1000,1000_QL80_.jpg"
            ></img> */}
            {/* <input
              placeholder="Search..."
              type="text"
              className=" border border-black h-10"
            ></input> */}
          </div>

          <div className=" flex gap-7">
            <div className=" gap-6 flex cursor-pointer underline">
              {/* <Link to={"/About"}>
                <p>About-us</p>
              </Link> */}
            </div>
            <div className=" gap-6 cursor-pointer underline">
              {/* <Link to={"/Blog"}>
                <p>Blogs</p>
              </Link> */}
            </div>
            <div className=" gap-6 cursor-pointer underline">
              <Link to={"/OnGoingTreatmentPage"}>
                <p>OnGoingTreatment</p>
              </Link>
            </div>
            <div className=" gap-6 cursor-pointer underline">
              <Link to={"/TreatedPage"}>
                <p>Treated</p>
              </Link>
            </div>
            <div className=" gap-6 cursor-pointer underline">
              <Link to={"/HealthcarePage"}>
                <p>HealthCare</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
