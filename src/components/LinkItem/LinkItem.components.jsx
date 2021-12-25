import React from "react";
import { Link } from "react-router-dom";
const LinkItem = ({ path, text, children, className }) => {
  return (
    <Link to={path} className={className}>
      {children} {text}
    </Link>
  );
};
export default LinkItem;
