import React from "react";
import Head from "../components/Header";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
    {/* <Head></Head> */}
    <h1 className=' text-5xl mx-6 text-white'>More About Us :</h1>
    <div className=" max-w-[1320px] md:py-[80] py-5 flex max-auto sm:flex-row flex-col rounded-lg bg-black px-10 mx-7 my-2 ">
        <div className=" basis-[45%] w-full pb-5 p-28 ">
          <img src={logo} className=" h-48 transform transition-transform duration-300 hover:scale-110" />
        </div> 

        <div className=" basis-[55%] px-5 ">
          <h1 className=" text-4xl pb-5 underline text-white">
            Compassion,Care,and Well-being for Every Creature.
          </h1>

          <p className=" py-3 text-white">
            Helping wounded animals is a moral responsibility that reflects our
            compassion and care for all living beings. Injured animals often
            cannot heal on their own, and by offering assistance, we relieve
            their suffering and give them a chance to survive.
          </p>

          <p className=" py-3 text-white">
            Helping a wounded animal may seem like a small gesture, but to that
            animal, it means the world—a moment of kindness that could change
            their fate forever.
          </p>

          <h2 className=" py-3 underline text-red-600 text-3xl">
            Here is some dummy data to illustrate the number of wounded animals
            that die annually:
          </h2>

          <p className=" text-white">
            Total number of injured animals annually:  <a href='#' className=' text-2xl'>50 million</a><br></br>
            Injured animals that receive no assistance: <a href='#' className=' text-2xl'>35 million</a> <br></br>
            Injured animals that die due to lack of care: <a href='#' className=' text-2xl'> 25 million</a> <br></br>
            Injured animals that receive medical care:  <a href='#' className=' text-2xl'>15 million</a> <br></br>
            Animals that survive with proper care:  <a href='#' className=' text-2xl'>12 million</a><br></br>
            Wounded animals that die without help:<a href='#' className=' text-2xl'> 71%</a> <br></br>
            Animals that survive with care: <a href='#' className=' text-2xl'>80%</a>
          </p>
        </div>
      </div>
  </>
  );
}
