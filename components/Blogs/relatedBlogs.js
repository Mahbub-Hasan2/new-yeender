/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import React from 'react';

const RelatedBlogs = ({ newBlog }) => {

    // let i = newBlog.length - 1;
    // for (; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = newBlog[i];
    //     newBlog[i] = newBlog[j];
    //     newBlog[j] = temp;
    // }

    return (
        <div id="C_B_related_blog_area">
            <Container maxWidth="lg">
                <h3 className="relatedBlog_title">Related Blogs</h3>
                <div className="row">
                    {
                        newBlog && newBlog.map((data, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                <div className="card h-100">

                                    <div className="img_date">
                                    <img className="img-fluid" src={data.img ? data.img : "https://i.imgur.com/LirzrRm.png"} />
                                        <h5>12 <br /> Dec</h5>
                                    </div>

                                    <div className="card_content card-body">
                                        <h5>{data.title}</h5>
                                        {/* <Link href={'/blog/[id]'} as={`/blog/${data._id}`}>
                                            <a className="btn-floating halfway-fab waves-effect waves-light"><LinkIcon style={{ fontSize: '40px' }} /></a>
                                        </Link> */}
                                    </div>
                                    <div className="user d-flex text-truncate  card-footer">
                                        <div className="col-sm d-flex pl-0">
                                            <Avatar alt="Remy Sharp" src={data.img} />
                                            <h6 className="pl-2 pt-2 text-truncate">Mahbub Hasan</h6>
                                        </div>
                                        <h6>Read More &gt;</h6>
                                    </div>
                                    {/* <div className="card-content">
                                        <p>{data.description.substring(105, 0) + "..."}</p>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default RelatedBlogs;