import { Col, Row } from 'react-bootstrap';

const About = ({ data }) => {
    // const info = { ...data.result[0] };

    return (
        <div id="C_H_about_area">
            <div className="about_area">
            <div className="container">
                <Row className="align-items-center">
                    <Col md={6} className="col">
                        <img className="img-fluid" src="https://i.imgur.com/2O1VUhl.jpg" alt="" />
                    </Col>
                    <Col md={6} className="text_contents">
                        <h2 className="mt-3">
                            Who Are We & <br />
                            Why Should You Choose Us?
                        </h2>
                        <p>
                            We&apos;re a group of SEOs, Graphic Designers, Web & App Developers working
                            together to provide the best client experience possible from a digital
                            marketing agency
                        </p>
                        <div className="opctions">
                            <div className="opction">
                                <div className="icon">01</div>
                                <div className="ops">
                                    <h5>Creative Team</h5>
                                    <p>We have a highly talented and powerful creative team</p>
                                </div>{' '}
                            </div>
                            <div className="opction">
                                <div className="icon">02</div>
                                <div className="ops">
                                    <h5>Budget Friendly</h5>
                                    <p>
                                        We will charge you based on the amount of work one website
                                        needs to create.
                                    </p>
                                </div>{' '}
                            </div>
                            <div className="opction">
                                <div className="icon">03</div>
                                <div className="ops">
                                    <h5>Lifetime Support</h5>
                                    <p>
                                        We go beyond to help our clients. Once we finish working on
                                        your website we will always be there to help!
                                    </p>
                                </div>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </div>
    );
};

export default About;
