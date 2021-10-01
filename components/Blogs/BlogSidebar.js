import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import React from 'react';
import { UserContext } from '../../Layout/Layout';

const categoriesData = [
    "Web Development",
    "Web Design",
    "Digital Marketing",
    "IT Conference",
    "Start Up",
    "App Development",
    "Graphics Design",
]

const tagsData = [
    "Web", "Design", "SEO", "App", "web development", "digital marketing", "SEO"
]

const BlogSidebar = ({ newBlog }) => {
    const {categories, setCategories}  = React.useContext(UserContext);
    // console.log(categories);

    return (
        <div id="C_B_blogSidebar">
            {/* <PostNewBlog /> */}
            <Paper variant="outlined" className="latest_blog card p-4">
                <h4>Latest blog</h4>
                <div className="img_date">
                    <img className="img-fluid" src="https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <h5>12 <br /> Dec</h5>
                </div>
                <h6 className="latest_blog_title">Content writing demand day by day increasing</h6>
    
                <div className="d-flex text-truncate">
                    <div className="col-sm d-flex pl-0">
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        <h6 className="pl-2 pt-2 text-truncate">Mahbub Hasan</h6>
                    </div>
                    <h6>Read More &gt;</h6>
                </div>
            </Paper>
    
            <Paper variant="outlined" className="categories card p-4 mt-4">
                <h4>Categories</h4>
                
                {
                    categoriesData.map((data, index) => (
                        <div key={index} style={{ background: "" }} onClick={() => setCategories(data)}>
                            <h5>{data}</h5>
                        </div>
                    ))
                }
            </Paper>
    
            <Paper variant="outlined" className="tags card p-4 mt-4">
                <h4>Tags</h4>
                <div>
                    {tagsData.map((data, index) => (
                        <button key={index} onClick={() => setCategories(data)}>{data}</button>
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default BlogSidebar;
