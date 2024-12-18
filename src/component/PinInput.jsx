import React, { forwardRef } from "react";

const PinInput = forwardRef(
  ({ maxLength, onChangeFn, onBackSpaceFun }, ref) => {
    const handleKeyPress = (e) => {
      // console.log(e);
      if (e.keyCode === 8) {
        onBackSpaceFun(e);
      } else {
        onChangeFn(e);
      }
    };
    return <input ref={ref} maxLength={maxLength} onKeyUp={handleKeyPress} />;
  }
);

export default PinInput;
