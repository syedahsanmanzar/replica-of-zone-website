import React from "react";
import Image2 from "../Images/last.png";

const Sec10 = () => {
  return (
    <>
      <div className="sec10">
        <div className="container las">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <p className="pp1">PERFECT COMBINATION</p>
                <h2>
                  Looking For a <br /> Dashboard Template?
                </h2>
                <p className="pp2">
                  Minimal UI Kit is a professional dashboard used <br /> by many
                  of our clients.
                </p>
                <button type="button" class="btn btn-outline-dark ">
                  Visit Minimal Dashboard &nbsp;
                  <span>
                    <i class="fa-solid fa-greater-than"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Image2}
                className="img2"
                alt="some thing went wrong..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec10;
