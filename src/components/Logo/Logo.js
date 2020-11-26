import React from "react";
import afternoon_roast from "../../assets/afternoon_roast.svg";

export default function Logo({ size }) {
  return (
    <img
      style={{ width: size }}
      src={afternoon_roast}
      alt="Afternoon Roast Logo"
    />
  );
}
