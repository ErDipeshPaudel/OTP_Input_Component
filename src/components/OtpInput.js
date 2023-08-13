import React, { useRef, useState } from "react";
import "./OtpInput.css";

const OtpInput = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    console.log(index, value, otpValues);
    const newOTPValues = [...otpValues];
    console.log(`new OTP array without update value ${newOTPValues}`);
    newOTPValues[index] = value;
    console.log(
      `This is newOtp value array with updated value ${newOTPValues}`
    );
    setOtpValues(newOTPValues);

    if (index < 5 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0 && otpValues[index] === "") {
      console.log(`You pressed ${event.code} ${index}`);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  return (
    <div className="input-container">
      {otpValues.map((value, index) => (
        <input
          type="text"
          value={value}
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          maxLength={1}
          className="otp-input"
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => handleFocus(index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
