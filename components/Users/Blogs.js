/* eslint-disable @next/next/link-passhref */
import Avatar from '@mui/material/Avatar';
import Link from "next/link";
import React from 'react';

const Blogs = () => {

    return (
        <div>
            <div className="container-lg pt-4">
            <h5 className="pb-4 blogs_list_title">Your all blogs list</h5>

                <div id="C_B_blogCard" className="row">

                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                        <Link href={'/blog/id_1'} as={`/blog/id_1`}>
                            <div className="card h-100">
                                {/* {console.log(data, data.tags)} */}
                                <div className="img_date">
                                    <div className="img">
                                        <img className="img-fluid" src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                    </div>                            <h5>12 <br /> Dec</h5>
                                </div>

                                <div className="card_content card-body">
                                    <h5>Where does it come from?</h5>
                                </div>

                                <div className="user d-flex text-truncate  card-footer">
                                    <div className="col-sm d-flex pl-0">
                                        <Avatar alt="Remy Sharp" src="https://i.imgur.com/2HB8eQZ.jpg" />
                                        <h6 className="pl-2 pt-2 text-truncate">Mahbub Hasan</h6>
                                    </div>
                                    <h6>Read More &gt;</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;