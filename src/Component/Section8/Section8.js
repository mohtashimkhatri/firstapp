import React from "react";
import "./Section8.css";

export default function Section3() {
  return (
    <div className="Section3__main">
      <h1 className="text-center my-3">GET IN TOUCH</h1>
      <div className=" color__div "></div>
      <p className="text-center content__explore my-3">
        We thrive when coming up with innovative ideas but also understand that
        a smart concept should be supported with faucibus sapien odio measurable
        results.
      </p>
      <div className="container">
        <div className="row p-5">
          <div className="col-md-4 p-3">
            <div className="my-2"><p className="fw-bold">Office Address 1:</p>
            <p className="color__chnage">4461 Cedar Street Moro, AR 72368</p></div>

            <div className="my-5"><p className="fw-bold">Office Address 2:</p>
            <p className="color__chnage">2467 Swick Hill Street <br />
New Orleans, LA 70171</p></div>

            <div className="my-2"><p className="fw-bold">Office Address 3:</p>
            <p className="color__chnage">9:00AM To 6:00PM</p></div>
          </div>
          <div className="col-md-8 p-3">
    <input type="text" name="" placeholder="Your Name*" className="inp" id="" />
    <input type="text" name="" placeholder="Your Email*" className="inp9" id="" />
    <input type="text" name="" placeholder="Your Subject.." className="input" id="" />
    <textarea type="text" name="" placeholder="Your Subject.." className="input1" id="" />
    <div className="m-3 button__explore__div">
        <button className="btn btn-danger px-4 py-3">Send Massage</button>
    </div>

            
          </div>
          
        </div>
      </div>
    </div>
  );
}
