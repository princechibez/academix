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
import { Playing } from "../loader";

const Module = ({
  moduleContent,
  focusLecture,
  moduleIndex,
  setIndex,
  activeIndex,
  playIndicator
}) => {
  const [open, setOpen] = React.useState(false);
  const [currentPlaying, setCurrentPlaying] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
    setIndex(moduleIndex);
  };

  return (
    <ListContainer>
      <List sx={{ width: "100%", bgcolor: "#ddd" }} component="section">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <VscFileSubmodule size={25} />
          </ListItemIcon>
          <ListItemText
            primary={`Module  ${moduleIndex + 1}: ${moduleContent.title}`}
            secondary={`${moduleContent.contents.length} Lectures | ${moduleContent.duration}`}
          />
          {open && activeIndex === moduleIndex ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>
        <Collapse
          sx={{ bgcolor: "#eee" }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          {moduleContent.contents.map((content, index) => (
            <ListItemButton
              key={index}
              onClick={
                focusLecture
                  ? () => {
                      setCurrentPlaying(index);
                      focusLecture(content);
                    }
                  : null
              }
              sx={{ pl: 4, height: 70 }}
            >
              <ListItemIcon>
                {playIndicator && currentPlaying === index ? (
                  <Playing />
                ) : (
                  <BsPersonVideo3 size={20} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={content.content_title}
                secondary={content.duration}
              />
            </ListItemButton>
          ))}
        </Collapse>
      </List>
    </ListContainer>
  );
};

export default Module;
