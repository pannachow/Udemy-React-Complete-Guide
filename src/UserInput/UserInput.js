import React from "react";

const userInput = (props) => {
  const inputStyle = {
    border: "4px solid yellow",
    textAlign: "center",
    margin: "20px"
  };

  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default userInput;
