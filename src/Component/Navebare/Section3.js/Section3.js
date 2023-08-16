import React from "react";
import "./Section3.css";
import Card from "./Card/Crad";
import { SlDiamond } from "react-icons/sl";
import { TbColorSwatchOff } from "react-icons/tb";
import { SiHappycow } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { MdSendToMobile } from "react-icons/md";
import { ImAirplane } from "react-icons/im";

export default function Section3() {
  return (
    <div className="Section3__main">
      <h1 className="text-center my-3">Our Service</h1>
      <div className=" color__div"></div>
      <p className="text-center content__explore">
        We craft digital, graphic and dimensional thinking, to create category
        leading brand experiences that have meaning and add a value for our
        clients.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-5">
            <Card
              icon={<SlDiamond className="card m-auto" />}
              title="Digital"
              content="Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform."
            />
          </div>
          <div className="col-md-4 p-5">
            <Card
              icon={<TbColorSwatchOff className="card m-auto" />}
              title="Unlimited Colors"
              content="Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet."
            />
          </div>
          <div className="col-md-4 p-5">
            <Card
              icon={<SiHappycow className="card m-auto" />}
              title="Strategy Solutions"
              content="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia."
            />
          </div>
          <div className="col-md-4 p-5">
            <Card
              icon={<TbBrandReactNative className="card m-auto" />}
              title="Awesome Support"
              content="It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World."
            />
          </div>
          <div className="col-md-4 p-5">
            <Card
              icon={<MdSendToMobile className="card m-auto" />}
              title="Truly Multipurpose"
              content="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
            />
          </div>
          <div className="col-md-4 p-5">
            <Card
              icon={<ImAirplane className="card m-auto" />}
              title="Easy to customize"
              content="Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
