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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div id="p_orders_area">
            <div className="container-lg">
                <h5 className="pt-4">Your all orders list</h5>
                <Row>
                    {service.map((data, index) => (
                        <Col lg="4" md="6" sm="6" key={index}>
                            <div id="service_card_patent_style" className="card text-center">
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls="long-menu"
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                                // boxShadow: 'none',
                                            },
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>

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
                                    <button className="btn btn-success ml-1">details</button>
                                </div>

                                <div className="dates">
                                    <h5><span>Lest date:</span> 10/04/2021</h5>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Orders;