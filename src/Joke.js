import React from "react";
import { useData } from "./data";

export default () => {
  const joke = useData();

  return <div>{joke}</div>;
};
