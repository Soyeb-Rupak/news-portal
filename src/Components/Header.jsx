import React from "react";
// import logo from '../assets/logo.png'
// import { format } from 'date-and-time';
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-[350px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
