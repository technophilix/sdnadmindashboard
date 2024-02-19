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
import React, { useEffect, useState } from "react";

import { fetchData } from "../fetch";
// react plugin used to create charts

import { Chart, Line } from "react-google-charts";

import ApexCharts from "apexcharts";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import GaugeChart from "react-gauge-chart";

const convertJsonNumbers = (jsonString) => {
  return JSON.parse(jsonString, (key, value) => {
    if (/^\d+$/.test(value)) return parseInt(value, 10); // Convert to integer
    if (/^\d*\.\d+$/.test(value)) return parseFloat(value); // Convert to float
    if (value.toLowerCase() === "true") return true; // Convert to boolean
    if (value.toLowerCase() === "false") return false; // Convert to boolean
    return value; // No conversion
  });
};

function Dashboard() {
  const [temperature, settemperature] = useState(0);
  const [cpuusage, setcpuusage] = useState(0);
  const [ethes, setethes] = useState(0);
  const [temp1sens, settemp1sens] = useState(0);
  const [temp2sens, settemp2sens] = useState(0);
  const [temp3sens, settemp3sens] = useState(0);
  const [temp4sens, settemp4sens] = useState(0);
  const [temp5sens, settemp5sens] = useState(0);
  const [temp6sens, settemp6sens] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  function updateData() {
    setInterval(async () => {
      const data = await fetchData();
      settemperature(data.temperaturesensor1);
      setcpuusage(data["cpu-usage"]);
      setethes(data.ethes);
      settemp1sens(data.temperaturesensor1);
      settemp2sens(data.temperaturesensor2);
      settemp3sens(data.temperaturesensor3);
      settemp4sens(data.temperaturesensor4);
      settemp5sens(data.temperaturesensor5);
      settemp6sens(data.temperaturesensor6);
      setCurrentTime(new Date());
    }, 5000);
  }

  useEffect(() => {
    updateData();
  }, []);

  // to find avg temperature
  const avgTemp = (
    (convertJsonNumbers(temp1sens) +
      convertJsonNumbers(temp2sens) +
      convertJsonNumbers(temp3sens) +
      convertJsonNumbers(temp4sens) +
      convertJsonNumbers(temp5sens) +
      convertJsonNumbers(temp6sens)) /
    6
  ).toFixed(2);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-ethernet text-warning"></i>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Ethernet</p>
                      <CardTitle tag="p">{ethes}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-link" /> Go To more details
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" style={{ width: "100%" }}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-thermometer-three-quarters text-success"></i>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperature</p>
                      <CardTitle tag="p">{avgTemp}&deg; C</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Within normal range
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-plug text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Power Supplies</p>
                      <CardTitle tag="p">OK</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> All power supplies are normal
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-fan fa-spin text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Fan</p>
                      <CardTitle tag="p">2</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Updates
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        {/*<Row>*/}
        {/*  <Col md="12">*/}
        {/*    <Card>*/}
        {/*      <CardHeader>*/}
        {/*        <CardTitle tag="h5">Users Behavior</CardTitle>*/}
        {/*        <p className="card-category">24 Hours performance</p>*/}
        {/*      </CardHeader>*/}
        {/*      <CardBody>*/}
        {/*        <Line*/}
        {/*          data={dashboard24HoursPerformanceChart.data}*/}
        {/*          options={dashboard24HoursPerformanceChart.options}*/}
        {/*          width={400}*/}
        {/*          height={100}*/}
        {/*        />*/}
        {/*      </CardBody>*/}
        {/*      <CardFooter>*/}
        {/*        <hr />*/}
        {/*        <div className="stats">*/}
        {/*          <i className="fa fa-history" /> Updated 3 minutes ago*/}
        {/*        </div>*/}
        {/*      </CardFooter>*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">CPU Usage</CardTitle>
                <p className="card-category">Current CPU Usage</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <GaugeChart
                  id="gauge-chart3"
                  nrOfLevels={20}
                  percent={cpuusage / 20}
                  hideText={false}
                  formatTextValue={(v) => {
                    return v.toString() + "%";
                  }}
                  textColor="#000000"
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Average Temperature</CardTitle>
                <p className="card-category">Currnet Average Temperature</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <GaugeChart
                  id="gauge-chart3"
                  nrOfLevels={25}
                  percent={avgTemp / 100}
                  hideText={false}
                  formatTextValue={(v) => {
                    return v.toString() + "°C";
                  }}
                  textColor="#000000"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
