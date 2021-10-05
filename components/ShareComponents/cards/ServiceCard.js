/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ServiceCard = ({data}) => {
    return (
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
        </div>
    );
};

export default ServiceCard;