import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-[90vh] ">
      <div className="">
        <h1 className="text-2xl font-bold text-center mt-10">
          Welcome to Glyco AI
        </h1>
        <p className="text-center mt-5">A place to know more about Glycogens</p>
      </div>


      <div className="px-10">
        <input className="w-full p-2 border border-gray-300 bg-gray-100 rounded mt-5" type="text" placeholder="Ask me someting......." />
        
      </div>
    </div>
  );
};

export default Home;
