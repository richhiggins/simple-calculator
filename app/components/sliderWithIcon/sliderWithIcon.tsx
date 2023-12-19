import React from "react";
import { sliderWithIconProps } from "./sliderWithIcon.types";

const SliderWithIcon = (sliderWithIconProps: sliderWithIconProps) => (
  <>
    <label htmlFor={sliderWithIconProps.name}>
      {sliderWithIconProps.label}
    </label>
    <input
      id={sliderWithIconProps.name}
      name={sliderWithIconProps.name}
      type="range"
      min="0"
      max="20"
      //      value={sliderWithIconProps.value}
      onChange={() => {
        console.log(
          `update ${sliderWithIconProps.name} value in localstorage/state`
        );
      }}
    />
  </>
);

export default SliderWithIcon;
