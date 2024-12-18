import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, maxLength }) => {
  const array = useRef(new Array(length).fill("a"));
  const inputBoxValue = useRef(new Array(length).fill(""));
  const inputRef = useRef([]);
  useEffect(() => {
    console.log(inputRef);
  });

  const onChangeHandler = (e, index) => {
    inputBoxValue.current[index] = e.target.value;

    if (index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const backSpaceHandler = (e, index) => {
    inputBoxValue.current[index] = e.target.value;
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handlePasteEvent = (e) => {
    // console.log(e.clipboardData.getData("text"));
    let data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);

    data.forEach((item, index) => {
      inputRef.current[index].value = item;
    });
  };

  //document("input").vlaue="123"
  //  read eventBubbling and event deligation

  return (
    <div onPaste={handlePasteEvent}>
      {array.current.map((item, index) => {
        return (
          <PinInput
            key={index}
            maxLength={maxLength}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            onChangeFn={(e) => onChangeHandler(e, index)}
            onBackSpaceFun={(e) => backSpaceHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  maxLength: PropTypes.number,
};
