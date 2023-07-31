import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a172f] flex justify-center items-center p-4 text-gray-300"
    >
      
      <form action="https://getform.io/f/a29a6be5-577c-44f0-8024-730d8abf6918" method="POST" className="flex flex-col max-w-[600px] w-full text-gray-900">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-gray-400 border-b-4 border-red-600 hover:border-b-0 transition-[300ms]">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            / / Submit the form or send me an email - <span id="blink">Ademayowa4@gmail.com</span>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea className="bg-[#ccd6f6] text-gray-800 p-2" placeholder="Message" name="message" rows="10"></textarea>
        <button className="text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
