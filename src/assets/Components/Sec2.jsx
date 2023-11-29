import React from "react";
import sec2img from "../Images/sec2.jpg"

const Sec2 = () => {
  return (
    <>
      <div className="a2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec2">
                <div className="pad">
                    <img src={sec2img} className="img222" alt="some thing went wrong" />
                  <p className="p2">NEW START</p>
                  <h1>
                    THE <span className="l zo">ZONE</span> UI KIT
                  </h1>
                  <p className="p1 pad1">   
                    Modern ui kit to save your time, boost your creativity. Neat
                    and super <br /> stylish layout ready to help with your
                    projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec2;
