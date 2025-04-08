import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-slate-800 h-16 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-green-500">
        👨‍💻 Employee Management Service
      </h1>
      <div className="space-x-4 ml-auto">
        <a href="/" className="hover:text-blue-400">
          Home
        </a>
        <a href="/" className="hover:text-blue-400">
          Profile
        </a>
        <a href="/" className="hover:text-blue-400">
          LogOut
        </a>
      </div>
    </div>
  );
};

export default Navbar;
