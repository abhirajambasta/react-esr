import React from "react";

export default () => {
  const clicker = () => {
    Reveal.initialize({
      center: true,
      hash: true,
      plugins: [RevealHighlight],
    });
  };

  return (
    <button
      onClick={clicker}
      style={{
        backgroundColor: "#04AA6D",
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: 16,
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "100%",
        position: "absolute",
        right: "2%",
      }}
    />
  );
};
