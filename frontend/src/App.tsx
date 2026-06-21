import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./features/landing/pages/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  );
}

export default App;
