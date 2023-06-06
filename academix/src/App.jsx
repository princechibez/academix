import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Landing = React.lazy(() => import("./pages/landing/landingPage"));
const Review = React.lazy(() => import("./pages/fullReview/fullReview"));
const Description = React.lazy(() =>
  import("./pages/course_description/description")
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <React.Suspense fallback={<>Landing page loading...</>}>
          <Landing />
        </React.Suspense>
      ),
    },
    {
      path: "/course-description",
      element: (
        <React.Suspense fallback={<>Description page loading...</>}>
          <Description />
        </React.Suspense>
      ),
    },
    {
      path: "/reviews",
      element: (
        <React.Suspense fallback={<>Reviews page loading...</>}>
          <Review />
        </React.Suspense>
      ),
    },
  ]);

  // return router
  return <RouterProvider router={router} />;
};

export default App;
