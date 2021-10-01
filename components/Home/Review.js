import React from 'react';
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const Review = ({ data }) => {
    // console.log(data)
    const reviewData = data.result;

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="C_H_review_area">
            <Container maxWidth="lg">
                <div className="head_line">
                    <h3>
                        Love from our clients <br />
                        around the world
                    </h3>
                    <p>The advantage employed to were for there <br />
                        with some or heavy house it that.
                    </p>
                </div>
                <div className="reviews_area">
                    <Slider {...settings}>
                        {reviewData.map((data, index) => (
                            <div key={index} className="review">
                                <div className="avt">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="content">
                                    <h5>{data.name}</h5>
                                    <div className="star">
                                        <Stack spacing={1}>
                                            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                                            <Rating name="half-rating-read" defaultValue={data.star ? data.star : 5} precision={0.5} readOnly />
                                        </Stack>
                                    </div>
                                    <p>
                                    {data.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Review;