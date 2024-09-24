import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Timeslots from "./pages/Timeslots";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },
      {
        path: "/timeslots",
        element: <Timeslots />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/homepage" replace />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
