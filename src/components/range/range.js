import React from "react";
import "../range/range.css";
import design from "../../assets/images/design.png";
import developer from "../../assets/images/developer.png";
import web3 from "../../assets/images/web3.png";
import finance from "../../assets/images/finance.png";
import music from "../../assets/images/music.png";
import cooking from "../../assets/images/cooking.png";
import { Button, Typography } from "@mui/material";

export default function Range() {
  return (
    <div className="range">
      <div className="text-container">
        <Typography variant="h3">
          An Extensive Range of Course Offerings
        </Typography>
        <Typography variant="h6">
          Explore our comprehensive catalog of diverse courses, <br /> carefully
          curated to cater to your learning goals.
        </Typography>
      </div>
      <div className="offerings">
        {/* <div className="top"> */}
        <div>
          <img src={design} alt="designer" />
          <Button
            variant="outlined"
            sx={{ borderColor: "#6B6B6B", color: "#6B6B6B", padding: "12px 0" }}
            fullWidth
          >
            Design
          </Button>
        </div>
        <div>
          <img src={developer} alt="developer" />
          <Button
            variant="outlined"
            sx={{ borderColor: "#6B6B6B", color: "#6B6B6B", padding: "12px 0" }}
            fullWidth
          >
            Development
          </Button>
        </div>
        <div>
          <img src={web3} alt="web 3" />

          <Button
            variant="outlined"
            sx={{ borderColor: "#6B6B6B", color: "#6B6B6B", padding: "12px 0" }}
            fullWidth
          >
            Web 3
          </Button>
        </div>
        {/* </div>
        <div className="bottom"> */}
        <div>
          <img src={finance} alt="finance" />

          <Button
            variant="outlined"
            sx={{ borderColor: "#6B6B6B", color: "#6B6B6B", padding: "12px 0" }}
            fullWidth
          >
            Finance
          </Button>
        </div>
        <div>
          <img src={music} alt="music" />
          <Button
            variant="outlined"
            sx={{ borderColor: "#6B6B6B", color: "#6B6B6B", padding: "12px 0" }}
            fullWidth
          >
            Music
          </Button>
        </div>
        <div>
          <img src={cooking} alt="cooking" />
          <Button
            variant="outlined"
            sx={{ borderColor: "#6B6B6B", color: "#6B6B6B", padding: "12px 0" }}
            fullWidth
          >
            Cooking
          </Button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
