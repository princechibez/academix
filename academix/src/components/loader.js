import React from "react";
import Lottie from "lottie-react";
import LoadAnimation from "../assets/animations/99043-ripple-loader.json";

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

export default Loader;
