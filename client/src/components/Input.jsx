import React from "react";

function Input({
  label,
  type = "text",
  className = "",
  placeholder = "",
  ...props
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
