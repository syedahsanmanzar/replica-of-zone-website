import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sec8 = () => {
  return (
    <>
      <div className="accord">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 className="h11">Frequently Asked Questions</h1>
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>What's in the product packages?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                      </Typography>
                    </AccordionDetails>
                  </Accordion>




                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>How can i upgrade my product plane?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                      </Typography>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Are design assets(Figma, Sketch, Adobe XD) included?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                      </Typography>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Does this product support TypeScript?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,

                      </Typography>
                    </AccordionDetails>
                  </Accordion>



                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Can i use this template in commercial projects like a SaaS?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,

                      </Typography>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>How can i request support?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec8;
