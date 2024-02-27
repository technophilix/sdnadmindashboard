/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "./views/Systems.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "System",
    icon: "nc-icon nc-settings",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Status",
    icon: "nc-icon nc-alert-circle-i",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Monitor",
    icon: "nc-icon nc-chart-bar-32",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "SNMP",
    icon: "nc-icon nc-compass-05",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Firmware Update",
    icon: "nc-icon nc-laptop",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Security",
    icon: "nc-icon nc-lock-circle-open",
    component: <Typography />,
    layout: "/admin",
  },

];
export default routes;
