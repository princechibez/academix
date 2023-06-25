// import React from 'react'
import { MdLibraryBooks, MdCreateNewFolder } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { CgMediaLive } from "react-icons/cg";
import { BsFillPersonLinesFill, BsFillPeopleFill } from "react-icons/bs";

export const InstructorDBSidebar = [
  {
    path: "/dashboard/instructor/profile",
    label: "Profile",
    icon: (props) => <BsFillPersonLinesFill {...props} />,
  },
  {
    path: "/dashboard/instructor/courses",
    label: "Courses",
    icon: (props) => <MdLibraryBooks {...props} />,
  },
  {
    path: "/dashboard/instructor/create-course",
    label: "New Course",
    icon: (props) => <MdCreateNewFolder {...props} />,
  },
  // {
  //   path: "/dashboard/instructor/students",
  //   label: "Students",
  //   icon: () => <BsFillPeopleFill fontSize="large" />,
  // },
  {
    path: "/dashboard/instructor/live-session",
    label: "Live Session",
    icon: (props) => <CgMediaLive {...props} />,
  },
  {
    path: "/",
    label: "Log Out",
    icon: (props) => <FiLogOut {...props} />,
  },
];
