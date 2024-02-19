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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import { fetchData } from "../fetch";
import GaugeChart from "react-gauge-chart";

//function to covert json to int
const convertJsonNumbers = (jsonString) => {
  return JSON.parse(jsonString, (key, value) => {
    if (/^\d+$/.test(value)) return parseInt(value, 10); // Convert to integer
    if (/^\d*\.\d+$/.test(value)) return parseFloat(value); // Convert to float
    if (value.toLowerCase() === "true") return true; // Convert to boolean
    if (value.toLowerCase() === "false") return false; // Convert to boolean
    return value; // No conversion
  });
};

function Systems() {
  const [fan1speed, setfan1speed] = useState(0);
  const [fan2speed, setfan2speed] = useState(0);
  const [temp1sens, settemp1sens] = useState(0);
  const [temp2sens, settemp2sens] = useState(0);
  const [temp3sens, settemp3sens] = useState(0);
  const [temp4sens, settemp4sens] = useState(0);
  const [temp5sens, settemp5sens] = useState(0);
  const [temp6sens, settemp6sens] = useState(0);
  const [power1state, setpower1state] = useState(0);
  const [power2state, setpower2state] = useState(0);
  const [cpuusage, setcpuusage] = useState(0);
  function updateData() {
    setInterval(async () => {
      const data = await fetchData();
      setfan1speed(data.fan1speed);
      setfan2speed(data.fan2speed);
      settemp1sens(data.temperaturesensor1);
      settemp2sens(data.temperaturesensor2);
      settemp3sens(data.temperaturesensor3);
      settemp4sens(data.temperaturesensor4);
      settemp5sens(data.temperaturesensor5);
      settemp6sens(data.temperaturesensor6);
      setpower1state(data.power1state);
      setpower2state(data.power2state);
      setcpuusage(data["cpu-usage"]);
    }, 5000);
  }
  useEffect(() => {
    updateData();
  }, []);

  const powerText1 = power1state === "0" ? "OFF" : "ON";
  const textColor1 = power1state === "0" ? "red" : "green";
  const powerText2 = power2state === "0" ? "OFF" : "ON";
  const textColor2 = power2state === "0" ? "red" : "green";
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
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5" className={"border-bottom pb-1"}>
                  <i className=" text-success" /> Fans and Power
                </CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  <Col md={3}>
                    <div className={""}>
                      <div style={{ lineHeight: "0px" }}>
                        <h3>
                          <i className="fas fa-fan fa-spin  text-primary" /> Fan
                          1
                        </h3>
                        <p className={"ptagsystem"}>{fan1speed} rpm</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={""}>
                      <div style={{ lineHeight: "0px" }}>
                        <h3>
                          <i className="fas fa-fan fa-spin  text-primary" /> Fan
                          2
                        </h3>
                        <p className={"ptagsystem"}>{fan2speed} rpm</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={""}>
                      <div style={{ lineHeight: "0px" }}>
                        <h3 style={{ color: textColor1 }}>
                          <i
                            className="fas fa-plug "
                            style={{ color: textColor1 }}
                          />{" "}
                          Power1
                        </h3>
                        <p
                          className={"ptagsystem"}
                          style={{ color: textColor1 }}
                        >
                          {powerText1}{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={""}>
                      <div style={{ lineHeight: "0px" }}>
                        <h3 style={{ color: textColor2 }}>
                          <i
                            className="fas fa-plug "
                            style={{ color: textColor2 }}
                          />{" "}
                          Power2
                        </h3>
                        <p
                          className={"ptagsystem"}
                          style={{ color: textColor2 }}
                        >
                          {powerText2}{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5" className={"border-bottom pb-1"}>
                  Switch Info
                </CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody className="all-icons">
                <Table className={"table table-borderless table-hover"}>
                  <tr>
                    <td className={"font-weight-bold"}>Product</td>
                    <td>SMVSDN Tool</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Switch Name</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Switch Contact</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Switch Location</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Uptime</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>IP Address</td>
                    <td>192.168.0.64</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>IP Version</td>
                    <td>IPV4</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}> IP Mode</td>
                    <td> Manual</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Subnet Mask</td>
                    <td>255.255.255.0</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Gateway</td>
                    <td> </td>
                  </tr>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">CPU Usage</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
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
          <Col md={4}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5" className={"border-bottom pb-1"}>
                  <i className="fas fa-temperature-high" /> Temperature
                </CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody className="all-icons">
                <Table className={"table table-borderless table-hover"}>
                  <tr>
                    <td className={"font-weight-bold"}>Sensor1:</td>
                    <td>{temp1sens} &deg;C</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Sensor2:</td>
                    <td>{temp2sens} &deg;C</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Sensor3:</td>
                    <td>{temp3sens} &deg;C</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Sensor4:</td>
                    <td>{temp4sens} &deg;C</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Sensor5:</td>
                    <td>{temp5sens} &deg;C</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Sensor6:</td>
                    <td>{temp6sens} &deg;C</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bold"}>Average:</td>
                    <td>{avgTemp} &deg;C</td>
                  </tr>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Systems;
