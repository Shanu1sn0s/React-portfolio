import React from "react";
import Todo from "../assets/Todo.PNG";
import Cloud from "../assets/cloud-management.PNG";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a172f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600 hover:border-b-0 transition-[300ms]">
            Work
          </p>
          <p className="py-6">/ / Check out some of my recent work</p>
        </div>
        {/*Card Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {/*Grid Items*/}
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effect*/}
            <div className="opacity-0 group-hover:opacity-100 duration-700 ">
              <span className="text-2xl font-bold text-wide tracking-wider">
                Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://ola-todo-list.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shanu1sn0s/To-do-list" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Cloud})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effect*/}
            <div className="opacity-0 group-hover:opacity-100 duration-700 ">
              <span className="text-2xl font-bold text-wide tracking-wider">
                Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://cloud-mng.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shanu1sn0s/Cloud-Management-LP" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
