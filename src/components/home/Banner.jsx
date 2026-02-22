import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover bg-center py-29">
      <Container>
        <h1 className="w-131.5 text-[#1B1B1B] text-[60px] font-light leading-18">
          Empower Your Team
          <span className="font-bold"> With CoreWave's</span>
        </h1>
        <p className="w-lg text-[#717171] text-xl leading-7.5 pt-9.5 pb-12.5">
          Boost Productivity and Wellness in Your Organization with CoreWave's
          Advanced Tools and Techniques
        </p>
        <div className="flex items-center gap-x-5">
          <Button btnText={"Explore More"} />
          <div className="relative group">
            <Button btnText={"Watch Video"} className={"pl-10"} />
            <div className="absolute top-1/2 left-4 -translate-y-1/2 h-5 w-5 group-hover:bg-[#DAF6EB] transition-all duration-500 flex items-center justify-center rounded-[42px]">
              <FaPlay className="text-white text-[10px] group-hover:text-primary transition-all duration-400" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
