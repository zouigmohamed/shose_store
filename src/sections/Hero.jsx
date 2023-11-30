import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants/index";
import { useState } from "react";

function Hero() {
  const [bigShoeImg , setBigShoeImg]=useState(bigShoe1)
  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
 <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize">
          <span className="xl:bg-white  rounded-xl xl:whitespace-nowrap relative z-10 pr-10 ">the new arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">nike </span> shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
          Discover stylish nike arrivals , quality comfort , and innovation for
          your active life.{" "}
        </p>
        <Button label="shop now" iconUrl={arrowRight} alt="arrow right" />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((state) => (
            <div key={state.label}>
            <p className="text-4xl font-palanquin font-bold" > {state.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray"> {state.label}</p>

            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:main-h-screen max-xl:py-40  bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe" width={610} height={500} className="object-contain z-10 relative" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left[10%] max-sm:px-6">{shoes.map((shoe, index) => (
          <div key={shoe}>
            <ShoeCard imgUrl={shoe} changeBigShoeIOmage={(shoe) => { setBigShoeImg(shoe) }} bigShoeImage={bigShoeImg} />
          </div>

        ))}</div>
      </div>
    </section>
  );
}

export default Hero;
