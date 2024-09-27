import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Timeslots from "./pages/Timeslots";
import Booking from "./pages/Booking";
import AdminLayout from "./ui/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBookingsList from "./pages/admin/AdminBookingsList";

const queryClient = new QueryClient();

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
      ,
      {
        path: "/booking",
        element: <Booking />,
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
  {
    element: <AdminLayout />,
    children: [
      {
        path: "admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "admin/bookings_list",
        element: <AdminBookingsList />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
