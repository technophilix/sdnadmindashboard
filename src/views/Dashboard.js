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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
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
import GaugeChart from 'react-gauge-chart'
function Dashboard() {
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
                      <i className="fas fa-hdd text-warning"></i>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Storage
                        </p>
                      <CardTitle tag="p">150GB</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> 1% of storage used
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
                      <i className="fas fa-thermometer-three-quarters text-success"></i>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperature</p>
                      <CardTitle tag="p">30&deg; C</CardTitle>
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
                      <CardTitle tag="p">7</CardTitle>
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
                <CardTitle tag="h5">CPU</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <GaugeChart id="gauge-chart2"
                            nrOfLevels={20}
                            percent={0.86}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-success" /> Low{" "}
                  <i className="fa fa-circle text-warning" /> Medium{" "}
                  <i className="fa fa-circle text-danger" /> High{" "}
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Some Statistics
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Memory</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <GaugeChart id="gauge-chart3"
                            nrOfLevels={20}
                            percent={0.56}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-success" /> Low{" "}
                  <i className="fa fa-circle text-warning" /> Medium{" "}
                  <i className="fa fa-circle text-danger" /> High{" "}

                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Some Statistics
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Packet Buffers</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <GaugeChart id="gauge-chart4"
                            nrOfLevels={20}
                            percent={0.26}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-success" /> Low{" "}
                  <i className="fa fa-circle text-warning" /> Medium{" "}
                  <i className="fa fa-circle text-danger" /> High{" "}
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Some Statistics
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
