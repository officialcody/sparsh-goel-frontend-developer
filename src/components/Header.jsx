import React from "react";
import spacexlogo from "../assets/spacex-logo-1.svg";

const Header = () => {
  return (
    <div className="flex justify-left h-[4rem] w-full">
      <img className="mix-blend-color-burn" src={spacexlogo} alt="header" />
    </div>
  );
};

export default Header;
