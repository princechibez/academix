import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";

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
const Review = React.lazy(() => import("./pages/fullReview/fullReview"));
const Description = React.lazy(() =>
  import("./pages/course_description/description")
);

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/join-as" element={<JoiningAs />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/reset-password-successfull"
        element={<ResetPasswordSuccess />}
      />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course-description/:courseID" element={<Description />} />
      <Route path="/reviews" element={<Review />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Root />
      </React.Suspense>
    ),
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <Landing />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/join-as",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <JoiningAs />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/signup",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <Signup />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/signin",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <Login />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/forgot-password",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <ForgotPassword />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/reset-password",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <ResetPassword />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/reset-password-successfull",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <ResetPasswordSuccess />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/courses",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <Courses />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/course-description/:courseID",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <Description />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "/reviews",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <Review />
//       </React.Suspense>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <React.Suspense fallback={<Loader />}>
//         <NotFound />
//       </React.Suspense>
//     ),
//   },
// ]);

export default router;
