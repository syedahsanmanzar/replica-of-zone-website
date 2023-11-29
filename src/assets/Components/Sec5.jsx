import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Sec5 = () => {
  return (
    <>
      <div className="flu">
        <div className="blur">
          <div className="sec51">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  {/* <div className="flu"> */}
                  <p>PROFESSIONAL KIT</p>
                  <h1 className="f5">For Designer</h1>
                  <Button
                    variant="contained"
                    color="warning"
                    startIcon={<AddIcon />}
                  >
                    Figma Workspace
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Sec5;
