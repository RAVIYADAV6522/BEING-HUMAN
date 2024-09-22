import React from "react";
import Head from "../components/Header";
import logo from "../images/logo.png";
import Blogcard from "./Blogcard";
import { Link } from "react-router-dom";
import HealthCare from "../components/HealthCare";
export default function Blog() {
  return (
    <>
      {/* <div className="pb-4 py-1">
        <Link to={"/"}>
          <button className=" bg-red-500 mx-1">Back to Home</button>
        </Link>
      </div> */}

      <div>
        <h2 className=" text-3xl text-pink-500 px-6">Treated</h2>
        <div className=" flex overflow-x-scroll">
          <Blogcard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavAICeVYqmM3UrILkSArp0TRroR0iRwpFcg&s"></Blogcard>
          <Blogcard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAS9Ln1z1NiqS-EOB1b8mOG0axdCVlyCA13g&s"></Blogcard>
          <Blogcard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqVN_-uRDbKdj_sKudUCqmDU2iysiPxEgbw&s"></Blogcard>
          <Blogcard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqVN_-uRDbKdj_sKudUCqmDU2iysiPxEgbw&s"></Blogcard>
          <Blogcard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqVN_-uRDbKdj_sKudUCqmDU2iysiPxEgbw&s"></Blogcard>
        </div>
      </div>

      <div className=" my-8">
        <h2 className=" text-3xl text-pink-500 px-6">HealthCare Center :</h2>
        <div className=" flex overflow-x-scroll">
          <HealthCare src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavAICeVYqmM3UrILkSArp0TRroR0iRwpFcg&s" />
          <HealthCare src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAS9Ln1z1NiqS-EOB1b8mOG0axdCVlyCA13g&s" />
          <HealthCare src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqVN_-uRDbKdj_sKudUCqmDU2iysiPxEgbw&s" />
          <HealthCare src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqVN_-uRDbKdj_sKudUCqmDU2iysiPxEgbw&s" />
          <HealthCare src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqVN_-uRDbKdj_sKudUCqmDU2iysiPxEgbw&s" />
        </div>
      </div>
    </>
  );
}
