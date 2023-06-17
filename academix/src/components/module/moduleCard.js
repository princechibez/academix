import React from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Typography } from "@mui/material";

function ModuleCard(props) {
  return (
    <main
      style={{
        height: 70,
        width: "100%",
        padding: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <section
        onClick={props.initializeDialog}
        style={{
          height: "100%",
          width: "70%",
        }}
      >
        <Typography variant="h5">
          Module {props.moduleDetails.index + 1} :{" "}
          {props.moduleDetails.module.title || "Click to edit"}
        </Typography>
        <Typography variant="body1" fontSize={18}>
          {props.moduleDetails.module.contents.length} Lectures | 53mins
        </Typography>
      </section>

      {/* Action icons section */}
      <section
        style={{
          height: "100%",
          width: "15%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* Remove icon */}
        <Button
          onClick={props.deleteModule}
          sx={{
            height: "100%",
            width: "40%",
            // borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eee",
          }}
        >
          <FaTrash size={30} color="salmon" />
        </Button>
      </section>
    </main>
  );
}

export default ModuleCard;
