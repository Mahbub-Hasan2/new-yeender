/* eslint-disable @next/next/link-passhref */
import Avatar from '@mui/material/Avatar';
import Link from "next/link";
import React from 'react';
import { UserContext } from '../../Layout/Layout';

const BlogCards = ({ blogs }) => {
    const { categories, setCategories } = React.useContext(UserContext);


    return (
        <div id="C_B_blogCard" className="row justify-content-center">
            {
                blogs && blogs.filter((blog) => {
                    if (categories == "") {
                        return blog
                    }
                    else if (blog.categorie.toLowerCase().includes(categories.toLowerCase())) {
                        return categories
                    }
                    else if (blog.description.toLowerCase().includes(categories.toLowerCase())) {
                        return categories
                    }
                }).map((data, index) => (
                    <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-4">
                        <Link href={'/blog/[id]'} as={`/blog/${data._id}`}>
                            <div className="card h-100">
                                {/* {console.log(data, data.tags)} */}
                                <div className="img_date">
                                    <div className="img">
                                        <img className="img-fluid" src={data.img ? data.img : "https://i.imgur.com/LirzrRm.png"} />
                                    </div>                                    <h5>12 <br /> Dec</h5>
                                </div>

                                <div className="card_content card-body">
                                    <h5>{data.title}</h5>
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
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogCards;