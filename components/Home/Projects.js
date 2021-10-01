import Image from 'next/image';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../Layout/Layout';

const Projects = () => {
    const { projects } = useContext(UserContext);
// console.log(projects)
    return (
        <div id='C_H_projects_area_home'>
            <div className="projects_area_home">
                <h2 className="main_title">Our Recent Works</h2>
                <div className="container-lg">
                    <Row>
                        {projects.map((data) => (
                            <Col md={4} sm={6} key={data._id}>
                                <div className="card shadow-5 mb-4">
                                    <Image
                                        src={data.img}
                                        alt={data.title}
                                        className="img-fluid"
                                        width={373}
                                        height={120}
                                        layout="responsive"
                                        loading="eager"
                                        priority
                                    />
                                    <p>App Design</p>
                                    <h3>{data.title}</h3>
                                    <h6>
                                        View more <i className="fas fa-long-arrow-alt-right" />
                                    </h6>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <h5 className="see_more">
                        More Project <i className="fas fa-long-arrow-alt-right" />
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Projects;