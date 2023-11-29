import React from "react";
import Image1 from "../Images/sec1.jpg";

const Sec1 = () => {
  return (
    <>
      <div className="sec1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="a1">
                <h1 className="h1">
                  Create Your Website Today <br /> With {" "}<span className="l">ZONE</span>
                </h1>
                <br />
                <p className="p1">
                  The ZONE is built on top of MUI, a powerful library that{" "}
                  <br />
                  provides flexible, customizable, and easy-to-use components.
                </p>
                <br />
                <button type="button" class="btn btn-dark btn-lg">
                  Figma Workspace &nbsp;
                  <span>
                    <i class="fa-brands fa-react i1"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Image1}
                className="img1"
                alt="some thing went wrong..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec1;
