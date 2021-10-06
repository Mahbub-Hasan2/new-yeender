/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../Layout/Layout';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    'Delate',
];

const ITEM_HEIGHT = 48;

const Orders = () => {
    const { service, setService } = React.useContext(UserContext);


    return (
        <div id="p_orders_area">
            <div className="container-lg">
                <h5 className="pt-4">Your all orders list</h5>
                <Row>
                    {service.map((data, index) => (
                        <Col lg="4" md="6" sm="6" key={index}>
                            <div id="service_card_patent_style" className="card text-center">

                                <div style={{ background: '#DCDEFF' }}>
                                    <img
                                        className="img-fluid"
                                        src={data.img ? data.img : "https://i.imgur.com/R6YBPIO.png"}
                                        alt={data.title ? data.title : "service"}
                                    />
                                </div>
                                <h4>
                                    {data.title ? data.title : "..."}
                                </h4>

                                <div className="btns">
                                    <button className="btn btn-primary mr-1">pending</button>
                                    <button
                                        className="btn btn-success ml-1"
                                        type="button"
                                        data-mdb-toggle="modal"
                                        data-mdb-target={`#staticBackdrop${index}`}
                                    >
                                        details
                                    </button>
                                    {/* <button className="btn btn-danger ml-2">delate</button> */}
                                </div>

                                <div className="dates">
                                    <h5><span>Lest date:</span> 10/04/2021</h5>
                                </div>
                            </div>

                            {/* <!-- Modal --> */}
                            <div
                                className="modal fade"
                                id={`staticBackdrop${index}`}
                                data-mdb-backdrop="static"
                                data-mdb-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">{data.title ? data.title : "..."}</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-mdb-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal --> */}
                            
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Orders;