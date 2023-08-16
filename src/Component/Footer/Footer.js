import React from "react";
import "./Footer.css";
import { BsFillSendFill } from "react-icons/bs";
import payment from "../../aseste/payment.png";
export default function Footer() {
  return (
    <>
      <div className="background__explore">
        <div className="container">
          <div className="row p-3">
            <div className="col-md-2   p-5">
              <h4 className="my-4 text-white">DORSIN</h4>
              <div className="my-2">
                <a href="">Home</a>
              </div>
              <div className="my-2">
                <a href="">About us</a>
              </div>
              <div className="my-2">
                <a href="">Careers</a>
              </div>
              <div className="my-2">
                <a href="">Contact us</a>
              </div>
            </div>
            <div className="col-md-2 mx-5 p-5">
              <h4 className="my-4 text-white">INFORMATION</h4>
              <div className="my-2">
                <a href="">Term & Condition</a>
              </div>
              <div className="my-2">
                <a href="">About Us</a>
              </div>
              <div className="my-2">
                <a href="">Jobs</a>
              </div>
              <div className="my-2">
                <a href="">Book marks</a>
              </div>
            </div>
            <div className="col-md-2 mx-5 p-5">
              <h4 className="my-4 text-white">SUPPORT</h4>
              <div className="my-2">
                <a href="">FAQ</a>
              </div>
              <div className="my-2">
                <a href="">Contact</a>
              </div>
              <div className="my-2">
                <a href="">Discussion</a>
              </div>
            </div>
            <div className="col-md-3 mx-5 my-5">
              <h4 className="my-4 text-white">SUBCRIBER</h4>
              <p className="color">
                Contact Disscusion Subscribe In an ideal world this text
                wouldn’t exist, a client would acknowledge the importance of
                having web copy before the design starts.{" "}
              </p>
              <div className="w-100 div__input rounded">
                <input
                  type="text"
                  name=""
                  placeholder="Your Email*"
                  className="FooterInput"
                  id=""
                />
                <BsFillSendFill className="icon__send" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Copy__right">
        <div className="display__setting">
          <div>2019 - 2023 © Dorsin - Themesbrand</div>
          <div>
            <img src={payment} width={200} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
