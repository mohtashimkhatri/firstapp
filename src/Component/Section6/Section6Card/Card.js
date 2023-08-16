import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="p-3 m-2 background__color">
      <h5 className="text-center">{props.title}</h5>
      <h1 className="text-center">{props.price}</h1>
      <p className="text-center explore__content">{props.content}</p>
      <hr />
      <p className="text-center  my-4">
        BandWidth: <span className="text-danger">{props.first}</span>
      </p>
      <p className="text-center  my-4">
        OnlineSpace: <span className="text-danger">{props.second}</span>
      </p>
      <p className="text-center  my-4">
        Support: <span className="text-danger">{props.third}</span>
      </p>
      <p className="text-center  my-4">
        Domain: <span className="text-danger">{props.fourth}</span>
      </p>
      <p className="text-center  my-4">
        {" "}
        Hidden Fees : <span className="text-danger">{props.five}</span>
      </p>
      <div className="text-center">
        <button className="btn m-auto btn-danger py-3 px-3">Join Now</button>
      </div>
    </div>
  );
}
