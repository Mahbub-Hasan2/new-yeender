import React from 'react';
import { Col, Row } from 'react-bootstrap';

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
                                <div className="service_cards card text-center">
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
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;
