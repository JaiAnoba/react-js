import React from "react";

const SocialButton = ({ provider, text, icon }) => {
  return (
    <button className="flex items-center justify-center w-full p-2 border rounded-full hover:bg-gray-100">
      {icon && <i className={`${icon} text-xs mr-2`}></i>}
      {text}
    </button>
  );
};

export default SocialButton;
