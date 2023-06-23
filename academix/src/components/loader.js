import React from "react";
import Lottie from "lottie-react";
import LoadAnimation from "../assets/animations/99043-ripple-loader.json";
import Player from "../assets/animations/81817-soundwave.json";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie animationData={LoadAnimation} loop autoplay />
    </div>
  );
};

export const Playing = () => {
  return (
    <Lottie
      animationData={Player}
      loop
      autoplay
      style={{ width: 24, height: 24 }}
      autoPlay={false}
    />
  );
};

export default Loader;
