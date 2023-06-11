import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { VscFileSubmodule } from "react-icons/vsc";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { BsPersonVideo3 } from "react-icons/bs";
import { ListContainer } from "./moduleStyle";

const Module = ({ moduleContent }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListContainer>
      <List sx={{ width: "100%", bgcolor: "#e8e8e8" }} component="section">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <VscFileSubmodule size={25} />
          </ListItemIcon>
          <ListItemText
            primary={moduleContent.title}
            secondary={`${moduleContent.contents.length} Lectures | ${moduleContent.duration}`}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          sx={{ bgcolor: "#f0eded" }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          {moduleContent.contents.map(
            (content) => (
              (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <BsPersonVideo3 size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary={content.content_title}
                    secondary={content.duration}
                  />
                </ListItemButton>
              )
            )
          )}
        </Collapse>
      </List>
    </ListContainer>
  );
};

export default Module;
