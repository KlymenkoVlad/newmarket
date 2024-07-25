"use client";

import React from "react";
import "@/components/styles.scss";
import { useStateContext } from "@/context/StateContext";

export default function IncDecBtn() {
  const { decrementQuantities, incrementQuantities, quantities } =
    useStateContext();

  return (
    <div className="container">
      <span className="minus" onClick={decrementQuantities}>
        <span></span>
      </span>
      <span className="num">{quantities}</span>
      <span className="plus" onClick={incrementQuantities}>
        <span></span>
        <span></span>
      </span>
    </div>
  );
}
