import React from "react";
import "./card.css";
import { SlDiamond } from "react-icons/sl";


function Crad(props) {
  return (
    <div className="Card__main">
        <div className="text__hover"> 
      <div className="icon__explore">
        { props.icon }
      </div>
      <div>
    <h3 className="text-center my-3">{ props.title }</h3>
        <p className="text-center color__light">
          { props.content }
        </p>
      </div>
      </div>
    </div>
  );
}

export default Crad;
