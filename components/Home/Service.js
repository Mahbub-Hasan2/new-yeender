/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ServiceCard from '../ShareComponents/cards/ServiceCard';

const Services = ({ data }) => {
    // const activeRouter = useRouter();

    const service = data.result;
    
    return (
        <div id="C_H_services_area">
            <div className="services_area">
                <h3 className="services_title">
                    Quality Services
                    <br /> We Provide
                </h3>
                <div className="container">
                    <Row className="justify-content-center">
                        {service.map((data, index) => (
                            <Col key={index} md="4" sm="6">
                                <ServiceCard data={data} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;
