import React from "react";
import Container from "../common/Container";

const Experience = () => {
  return (
    <div className="py-25">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="w-111.25 text-[#1B1B1B] text-[45px] font-semibold">Experience the power of Corewave</h2>
            <p className="w-135 text-[#7B7B7B] text-base leading-6.5 pt-7 pb-11">Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
            <button className="text-primary font-semibold py-3.5 px-6.25 bg-[#DAF6EB] hover:text-white hover:bg-primary transition-all duration-500 rounded-[5px]">Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
