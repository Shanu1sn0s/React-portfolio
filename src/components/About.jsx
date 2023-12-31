import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600 hover:border-b-0 transition-[300ms]">
              About
            </p>
          </div>
          <div>{/*Empty*/}</div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold">
            <p>
              Hi, I'm Olayinka, and it is nice to have you here. 
              Please, take look
              around.
            </p>
          </div>
          <div>
            <p>
              I am passional about building seamlessly responsive and functional
              websites and web applications that contributes to the day to day
              ease of any business, organization and individual clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
