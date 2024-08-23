import React from "react";

const Button = ({ title, variant, disabled, onClick, fullwidth, type }) => {
  let className = "bg-red-500 px-4 py-1 text-white";
  if (fullwidth) {
    className += " w-full";
  }
  if (variant === "outline") {
    className = className.replace(
      "bg-red-500",
      "border border-black text-black bg-transparent"
    );
  }
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
