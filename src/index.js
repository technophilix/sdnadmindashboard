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
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import axios from "axios";
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = 'http://192.168.0.27:8001/';
// axios.defaults.proxy.host = "https://upchef.in/api/mobile"
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded; charset=UTF-8';
// axios.defaults.headers.common['X-API-KEY'] = key;

const queryclient = new QueryClient()
root.render(
    <QueryClientProvider client={queryclient}>
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  </BrowserRouter>
    </QueryClientProvider>
);
