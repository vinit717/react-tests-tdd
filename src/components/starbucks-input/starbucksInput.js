import React from "react";

function StarbucksInput({ name, value, onChange, error }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span>{error}</span>}
    </>
  );
}

export default StarbucksInput;
