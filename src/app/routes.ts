import { createBrowserRouter } from "react-router";
import InsurerDashboard from "./screens/InsurerDashboard";
import InsureeHome from "./screens/InsureeHome";
import VehicleStatusSafe from "./screens/VehicleStatusSafe";
import VehicleStatusModerate from "./screens/VehicleStatusModerate";
import VehicleStatusCrash from "./screens/VehicleStatusCrash";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: InsureeHome,
  },
  {
    path: "/insurer",
    Component: InsurerDashboard,
  },
  {
    path: "/vehicle-safe",
    Component: VehicleStatusSafe,
  },
  {
    path: "/vehicle-moderate",
    Component: VehicleStatusModerate,
  },
  {
    path: "/vehicle-crash",
    Component: VehicleStatusCrash,
  },
]);
