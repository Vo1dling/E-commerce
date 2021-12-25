import React from "react";
import LinkItem from "../../components/LinkItem/LinkItem.components";
import "./HomePage.styles.css";
const HomePage = () => {
  return (
    <div className="flex-container">
      <div className="home-page">
        <LinkItem path="/products" className={"top-left"}></LinkItem>
        <LinkItem path="/products" className={"top-right"}></LinkItem>
        <LinkItem path="/products" className={"bottom-left"}></LinkItem>
        <LinkItem path="/products" className={"bottom-right"}></LinkItem>
      </div>
    </div>
  );
};
export default HomePage;
