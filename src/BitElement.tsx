import React from "react";
import "./bit.css";
import Bit from "./Bit.js";
interface BitElementProps {
  bit: Bit;
}

const BitElement: React.FC<
  BitElementProps & React.HTMLAttributes<HTMLDivElement>
> = ({ bit, ...props }) => {
  return (
    <div className="bit-element" {...props}>
      {bit.asInt()}
    </div>
  );
};

export default BitElement;
