import React from "react";
import "./Section6.css";
import Card from "./Section6Card/Card";

export default function Section3() {
  return (
    <div className="Section3__main">
      <h1 className="text-center my-3">OUR PRICING</h1>
      <div className=" color__div "></div>
      <p className="text-center content__explore my-3">
        Call to action pricing table is really crucial to your for your business
        website. Make your bids stand-out with amazing options.
      </p>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-4 p-4  my-4 hoverWala">
            <Card
              title="ECONOMY"
              price="&9.90"
              content="Building Per Month"
              first="1GB"
              second="50MB"
              third="No"
              fourth="1"
              five="No"
            />
          </div>
          <div className="col-md-4 p-4 my-4  hoverWala">
            <Card
              title="DELUXE"
              price="$19.90"
              content="Building Per Month"
              first="10GB"
              second="500MB"
              third="Yes"
              fourth="10"
              five="No"
            />
          </div>
          <div className="col-md-4 p-4 my-4 hoverWala ">
            <Card
              title="ULTIMATE"
              price="$29.90
              "
              content="Building Per Month"
              first="100GB"
              second="2 GB"
              third="Yes"
              fourth="ULTIMATE"
              five="No"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
