import React from "react";
import "./Section4.css";
import Online from "../../aseste/online-world.svg";
import { BiRightArrowAlt } from "react-icons/bi";

function Section4() {
  return (
    <div className="Section__main">
      <div className="container">
        <div className="row p-2">
          <div className="col-md-6  left__section">
            <h2 className="my-3 Heading__Explore">
              A digital web design studio creating modern & engaging online
              experiences
            </h2>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <ul className="my-5">
              <li>We put a lot of effort in design.</li>
              <li>The most important ingredient of successful website.</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
              <li>Submit Your Organization.</li>
            </ul>
            <button className="btn btn-danger  gaping rounded py-3 px-3 d-flex justify-content-center align-items-center buttom ">
              <div>Learn modern</div>
              <div>
                <BiRightArrowAlt className="iconSetting" />
              </div>
            </button>
          </div>
          <div className="col-md-6 p-5">
            <img src={Online} height={540} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
