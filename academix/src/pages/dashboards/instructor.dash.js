import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Nav from "../../components/navAuth/nav";
import Footer from "../../components/footer/footer";
import SideBar from "../../components/sidebar/sidebar";
import {
  Courses,
  LiveSessions,
  Profile,
  Students,
  CreateCourse,
} from "../../components/instructorDBScreens/";
import { AuthContext } from "../../App";

function InstructorDB() {
  const { user } = useContext(AuthContext);

  const { section } = useParams();
  const [visualCMP, setVisualCMP] = useState(<Profile />); //  CMP for component...

  useEffect(() => {
    switch (section) {
      case "profile":
        return setVisualCMP(<Profile />);
      case "courses":
        return setVisualCMP(<Courses user={user} />);
      case "students":
        return setVisualCMP(<Students />);
      case "live-session":
        return setVisualCMP(<LiveSessions />);
      case "create-course":
        return setVisualCMP(<CreateCourse />);
      default:
        return setVisualCMP(<Profile />);
    }
  }, [section]);

  return (
    <main style={{ position: "relative" }}>
      <Nav />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            height: "90vh",
            width: "78%",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "scroll",
          }}
        >
          {visualCMP}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default InstructorDB;
