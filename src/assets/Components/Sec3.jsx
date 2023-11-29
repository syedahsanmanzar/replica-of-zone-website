import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Fab from "@mui/material/Fab";

import CircularProgress from "@mui/material/CircularProgress";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Img from "../Images/card.jpg";

const Sec3 = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="sec3">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div>
                <p className="p1 bol1">INTERFACE STARTER KIT</p>
                <h1 className="bol2">
                  Flexible <br /> Components
                </h1>
                <p className="p1 bol3">
                  Pre-set components are easy to customize and <br /> use. We
                  collected most popular elements. Menu, <br /> sliders,
                  buttons, inputs etc. are all here. Just dive <br /> in!
                </p>
                <button type="button" class="btn btn-outline-dark">
                  Browse Components &nbsp;
                  <span>
                    <i class="fa-solid fa-greater-than"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="borderr">
                  <div className="12">
                    <div className="bor">
                      <Button
                        variant="contained"
                        color="warning"
                        startIcon={<AddIcon />}
                      >
                        Add To Cart
                      </Button>
                      <button type="button" class="btn btn-dark">
                        <span>
                          <CloudUploadIcon /> &nbsp; Upload
                        </span>
                      </button>
                      <Fab color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                      <CircularProgress
                        variant="determinate"
                        value={progress}
                      />
                    </div>

                    <div className="12">
                      <div className="bor">
                        <ToggleButtonGroup
                          value={alignment}
                          exclusive
                          onChange={handleAlignment}
                          aria-label="text alignment"
                        >
                          <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeftIcon />
                          </ToggleButton>
                          <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenterIcon />
                          </ToggleButton>
                          <ToggleButton
                            value="right"
                            aria-label="right aligned"
                          >
                            <FormatAlignRightIcon />
                          </ToggleButton>
                          <ToggleButton
                            value="justify"
                            aria-label="justified"
                            disabled
                          >
                            <FormatAlignJustifyIcon />
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </div>

                    <div className="12">
                      <div className="bor">
                        <Avatar
                          alt="Remy Sharp"
                          src="../Images/avatar1.jpg"
                          sx={{ width: 56, height: 56 }}
                        />
                        <AvatarGroup max={4}>
                          <Avatar
                            alt="Remy Sharp"
                            src="../Images/avatar2.jpg"
                          />
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                          <Avatar
                            alt="Cindy Baker"
                            src="/static/images/avatar/3.jpg"
                          />
                          <Avatar
                            alt="Agnes Walker"
                            src="/static/images/avatar/4.jpg"
                          />
                          <Avatar
                            alt="Trevor Henderson"
                            src="/static/images/avatar/5.jpg"
                          />
                        </AvatarGroup>
                      </div>
                    </div>

                    <div className="12">
                      <div className="bor">
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            sx={{ height: 140 }}
                            image={Img}
                            title="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                          </CardActions>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec3;
