import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loader from "./components/loader";
import NotFound from "./pages/404page";
const Signup = React.lazy(() => import("./pages/auth/signup"));
const Login = React.lazy(() => import("./pages/auth/signin"));
const ForgotPassword = React.lazy(() => import("./pages/auth/forgotPassword"));
const Courses = React.lazy(() => import("./pages/courses/courses"));
const ResetPassword = React.lazy(() => import("./pages/auth/resetPassword"));
const ResetPasswordSuccess = React.lazy(() =>
  import("./pages/auth/resetSuccessful")
);
const JoiningAs = React.lazy(() => import("./pages/auth/joiningAs"));
const Landing = React.lazy(() => import("./pages/landing/landingPage"));
const InstructorDB = React.lazy(() =>
  import("./pages/dashboards/instructor.dash")
);
const Review = React.lazy(() => import("./pages/fullReview/fullReview"));
const Description = React.lazy(() =>
  import("./pages/course_description/description")
);
const Classroom = React.lazy(() => import("./pages/classroom/classroom"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Landing />
        </React.Suspense>
      ),
    },
    {
      path: "/join-as",
      element: (
        <React.Suspense fallback={<Loader />}>
          <JoiningAs />
        </React.Suspense>
      ),
    },
    {
      path: "/signup",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Signup />
        </React.Suspense>
      ),
    },
    {
      path: "/signin",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Login />
        </React.Suspense>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <React.Suspense fallback={<Loader />}>
          <ForgotPassword />
        </React.Suspense>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <React.Suspense fallback={<Loader />}>
          <ResetPassword />
        </React.Suspense>
      ),
    },
    {
      path: "/reset-password-successfull",
      element: (
        <React.Suspense fallback={<Loader />}>
          <ResetPasswordSuccess />
        </React.Suspense>
      ),
    },
    {
      path: "/courses",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Courses />
        </React.Suspense>
      ),
    },
    {
      path: "/course-description/:courseID",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Description />
        </React.Suspense>
      ),
    },
    {
      path: "/classroom/:courseID",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Classroom />
        </React.Suspense>
      ),
    },
    {
      path: "/reviews",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Review />
        </React.Suspense>
      ),
    },
    {
      path: "/dashboard/instructor",
      children: [
        {
          path: "/dashboard/instructor/:section",
        },
      ],
      element: (
        <React.Suspense fallback={<Loader />}>
          <InstructorDB />
        </React.Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <React.Suspense fallback={<Loader />}>
          <NotFound />
        </React.Suspense>
      ),
    },
  ]);

  // return router
  return <RouterProvider router={router} />;
};

export default App;
