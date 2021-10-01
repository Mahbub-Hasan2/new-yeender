import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Header = () => (
    <div id="C_H_header_area">
        <div className="header_area">
            <div className="container">
                <Row className="align-items-center">
                    <Col md={6} className="header_col_1 col">
                        <div>
                            <h2>
                                Design <br /> Development
                                <br /> & Digital Marketing
                            </h2>
                        </div>
                        <p className="description">
                            Yeender is the best digital marketing agency in Toronto, Canada. We&#39;ve SEOs,
                            Graphic Designers, Web & App developers in our team to offer you a smooth
                            experience with Yeender.
                        </p>

                        <div className="btn_div">
                            <button type="button" className="btn btn-warning mr-2">
                                Get Started
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-warning ml-2"
                                data-mdb-ripple-color="dark"
                            >
                                Learn More
                            </button>
                        </div>

                        <div className="clients_count row row-cols-3">
                            <div className="col">
                                <h5>400+</h5>
                                <p className="text-truncate">Happy Clients</p>
                            </div>
                            <div className="col">
                                <h5>400+</h5>
                                <p className="text-truncate">Happy Clients</p>
                            </div>
                            <div className="col">
                                <h5>400+</h5>
                                <p className="text-truncate">Happy Clients</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="header_col_2 col">
                        <Image
                            src="https://i.imgur.com/zKMeVFv.png"
                            alt="Picture of the author"
                            width={533}
                            height={683}
                            className="img-fluid"
                            loading="eager"
                            priority
                        />
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);

export default Header;