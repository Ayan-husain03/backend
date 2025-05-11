import React from "react";

function Button({ className = "", children, ...props }) {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
