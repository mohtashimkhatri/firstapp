import React from "react";
import "./Section7.css";
import Card from "./Card7/Card";
import img2 from "../../aseste/img-2.jpg";
import img3 from "../../aseste/img-3.jpg";
import img4 from "../../aseste/img-4.jpg";
import img5 from "../../aseste/img-5.jpg";

export default function Section3() {
  return (
    <div className="Section3__main">
      <h1 className="text-center my-3">BEHIND THE PEOPLE</h1>
      <div className=" color__div "></div>
      <p className="text-center content__explore my-3">
        It is a long established fact that create category leading brand
        experiences a reader will be distracted by the readable content of a
        page when looking at its layout.
      </p>
      <div className="container">
        <div className="row p-2 ">
          <div className="col-md-3 my-5 hoverWala2">
            <Card src={img2} title="Frank Johson" content="Ceo" />
          </div>
          <div className="col-md-3  my-5 hoverWala2">
            <Card src={img3} title="Elaine Stclair
" content="DESIGNER" />
          </div>{" "}
          <div className="col-md-3  my-5 hoverWala2 ">
            <Card src={img4} title="Wanda Arthur" content="DEVELOPER" />
          </div>
          <div className="col-md-3 my-5 hoverWala2 ">
            <Card src={img5} title="Joshua Stemple" content="MANAGER" />
          </div>
        </div>
      </div>
    </div>
  );
}
