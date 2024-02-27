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

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, Table} from "reactstrap";

function Systems() {


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card className="demo-icons">
                            <CardHeader>
                                <CardTitle tag="h5" className={'border-bottom pb-1'}><i
                                    className="fas fa-fan text-success"/> Fans</CardTitle>
                                <p className="card-category">

                                </p>
                            </CardHeader>
                            <CardBody className="all-icons">
                                <Row>
                                    <Col md={3}>
                                        <div className={''}>

                                            <div style={{lineHeight: '0px'}}>
                                                <h3><i className="fas fa-fan fa-spin  text-primary"/> Fan 1</h3>
                                                <p className={'ptagsystem'}>Working fine</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={''}>

                                            <div style={{lineHeight: '0px'}}>
                                                <h3><i className="fas fa-fan fa-spin  text-primary"/> Fan 2</h3>
                                                <p>Working fine</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={''}>

                                            <div style={{lineHeight: '0px'}}>
                                                <h3><i className="fas fa-fan text-gray"/> Fan 3</h3>
                                                <p>Stopped</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={''}>

                                            <div style={{lineHeight: '0px'}}>
                                                <h3><i className="fas fa-fan fa-spin  text-primary"/> Fan 4</h3>
                                                <p>Working fine</p>
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
                                <CardTitle tag="h5" className={'border-bottom pb-1'}>IP Info</CardTitle>
                                <p className="card-category">

                                </p>
                            </CardHeader>
                            <CardBody className="all-icons">

                                <Table className={'table table-borderless table-hover'}>
                                    <tr>
                                        <td className={'font-weight-bold'}>IP Address
                                        </td>
                                        <td>192.168.0.64</td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}>IP Version</td>
                                        <td>IPV4</td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}> IP Mode</td>
                                        <td> Manual</td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}>Subnet
                                            Mask
                                        </td>
                                        <td>255.255.255.0</td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}>Gateway
                                        </td>
                                        <td>{" "}</td>
                                    </tr>

                                </Table>


                            </CardBody>

                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="demo-icons">
                            <CardHeader>
                                <CardTitle tag="h5" className={'border-bottom pb-1'}><i
                                    className=""/> System Info</CardTitle>
                                <p className="card-category">

                                </p>
                            </CardHeader>
                            <CardBody className="all-icons">

                                <Table className={'table table-borderless table-hover'}>
                                    <tr>
                                        <td className={'font-weight-bold'}>Product
                                        </td>
                                        <td>SMVSDN Tool</td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}>Switch Name</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}>Switch Contact</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}>Switch Location
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className={'font-weight-bold'}>Uptime
                                        </td>
                                        <td>{" "}</td>
                                    </tr>

                                </Table>


                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>




                            <Card className="demo-icons">
                                <CardHeader>
                                    <CardTitle tag="h5" className={'border-bottom pb-1'}><i
                                        className="fas fa-database"/> Storage </CardTitle>
                                    <p className="card-category">

                                    </p>
                                </CardHeader>
                                <CardBody className="all-icons">
                                    <Table className={'table table-borderless table-hover'}>
                                        <tr>
                                            <td className={'font-weight-bold'}>1% of storage used
                                            </td>
                                        </tr>
                                    </Table>
                                    </CardBody>
                            </Card>


                            <Card className="demo-icons">
                                <CardHeader>
                                    <CardTitle tag="h5" className={'border-bottom pb-1'}><i
                                        className="fas fa-temperature-high"/>  Temperature</CardTitle>
                                    <p className="card-category">

                                    </p>
                                </CardHeader>
                                <CardBody className="all-icons">
                                    <Table className={'table table-borderless table-hover'}>
                                        <tr>
                                            <td className={'font-weight-bold'}>Current:
                                            </td>
                                            <td>30 &deg;C</td>
                                        </tr>
                                        <tr>
                                            <td className={'font-weight-bold'}>Maximum:</td>
                                            <td>31 &deg;C</td>
                                        </tr>
                                        <tr>
                                            <td className={'font-weight-bold'}>Minimum:</td>
                                            <td>29 &deg;C</td>
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
