import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../App";
import { InstructorDBSidebar } from "../../model/instructorDBSidebar";

function SideBar({ mode }) {
  const { setToken } = useContext(AuthContext);

  const logoutHandler = () => {
    setToken(null);
    localStorage.clear("token");
  };
  return (
    <Sidebar
      width="22%"
      backgroundColor="#FFFFFF"
      //   defaultCollapsed={true}
      //   collapsedWidth="0px"
      style={{
        height: "80vh",
        color: "white",
        position: "relative",
        zIndex: 100,
        top: 80,
        marginBottom: 100,
        left: 0,
      }}
    >
      <Menu>
        {InstructorDBSidebar.map((sidebarItem, i) => (
          <MenuItem
            key={i}
            onClick={sidebarItem.label === "Log Out" && logoutHandler}
            component={
              <NavLink
                to={sidebarItem.path}
                style={({ isActive }) => {
                  return {
                    color: "#252525",
                    textDecoration: "none",
                    outline: "none",
                    position: "relative",
                    // right: 10,
                    marginTop: i === 0 ? 18 : 14,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "auto",
                    borderRadius: 8,
                    padding: "0 20px",
                    width: "80%",
                    backgroundColor: isActive ? "#FFDE81" : "transparent",
                    transition: "opacity ease-out 4s",
                  };
                }}
              />
            }
            icon={
              <sidebarItem.icon fontSize={30} style={{ marginRight: 10 }} />
            }
          >
            <Typography variant="body1" fontSize={16}>
              {sidebarItem.label === "New Course" && mode === "edit"
                ? "Edit Course"
                : sidebarItem.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
