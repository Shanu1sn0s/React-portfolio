import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a172f]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shanu Olayinka
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a frontend developer who crafts monumental experiences by
          creating responsive websites and web applications. Leveraging
          React.js, JavaScript, CSS, and HTML, I push the boundaries of
          innovation. With Git and Node.js, I ensure efficient collaboration and
          scalability, showcasing my expertise in shaping the future of web
          development.
        </p>
        <div>
          <button className="group text-white border-2 px-3 py-6 my-2 flex item-center hover:bg-red-600 hover:border-red-600 ">
          <Link to="work" smooth={true} duration={500}>
           View work
          </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
 