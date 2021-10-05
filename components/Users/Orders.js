import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../Layout/Layout';
import ServiceCard from '../ShareComponents/cards/ServiceCard';

const Orders = () => {
    const { service, setService } = React.useContext(UserContext);

    return (
        <div id="p_orders_area">
            <div className="container-lg">
                <h5 className="pt-4">Your all orders list</h5>
                <Row>
                    {service.map((data, index) => (
                        <Col lg="4" md="6" sm="6" key={index}>
                            <ServiceCard data={data} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Orders;