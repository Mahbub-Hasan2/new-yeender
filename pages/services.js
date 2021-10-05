/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import ServiceCard from '../components/ShareComponents/cards/ServiceCard';
import { UserContext } from '../Layout/Layout';
import yeenderServer from '../serverConfig';


const Services = ({ servicesData }) => {
    const { service, setService } = useContext(UserContext);

    React.useEffect(() => {
        setService(servicesData.result);
    }, [servicesData, setService]);

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
                <title>Yeender: service page</title>
            </Head>

            <div id="C_A_services_area">
                <h3 className="services_title">
                    Quality Services
                    <br /> We Provide
                </h3>
                <div className="container">
                    <Row>
                        <Col md={8}>
                            <Row>
                                {service.map((data, index) => (
                                    <Col key={index} md="6" sm="6">
                                        <ServiceCard data={data} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col md={4}>
                            <div className="left_side card p-5">
                                <h3>Web Design</h3>
                                <p>
                                    If you own a weak website, visitors won&apos;t take your words seriously. Make your website as strong as possible via custom web designing. Yeender is blessed with professional web designers to satisfy clients accordingly. We&apos;ll take care of your website&apos;s User interface (UI) & User experience (UX) to make them more user-friendly.
                                    <br /><br />
                                    If you want us to make a website for you from scratch, we can do that as well. You just need to ask; the rest is our responsibility. <br /><br />
                                    Firstly, we need to inspect your existing website design. We&apos;ll show you the issues & the SEO impact on your website due to the design. Later on, we will make several proposals for you regarding the design. After confirming your order, our experts will deliver your new or improved design within the deadline.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
};

export default Services;

export async function getStaticProps(context) {
    const res = await fetch(`${yeenderServer}/service/active`);
    const servicesData = await res.json();

    if (!servicesData) {
        return {
            notFound: true,
        };
    }

    return {
        props: { servicesData },
    };
}
