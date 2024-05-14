import "./Skeleton.scss";
import React from "react";

const Skeleton: React.FC<any> = ({ type }) => {
  const classes = `skeleton animation ${type}`;
  return <div className={classes}></div>;
};

export default Skeleton;
