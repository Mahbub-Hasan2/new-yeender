import React from 'react';
import Header from '../../components/Users/USHeader';

const index = () => {
    return (
        <>
            <Header />

            <div id="user_p_tabs_area">
                <div className="tabs_and_content border-top border-bottom">
                    <div className="container-lg">
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                {/* <!-- Tabs navs --> */}
                                <ul className="nav nav-tabs" id="ex1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link active"
                                            id="ex1-tab-1"
                                            data-mdb-toggle="tab"
                                            href="#ex1-tabs-1"
                                            role="tab"
                                            aria-controls="ex1-tabs-1"
                                            aria-selected="true"
                                        >

                                            <span className="mb-5">33</span>
                                            <br />
                                            orders
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            id="ex1-tab-2"
                                            data-mdb-toggle="tab"
                                            href="#ex1-tabs-2"
                                            role="tab"
                                            aria-controls="ex1-tabs-2"
                                            aria-selected="false"
                                        >

                                            <span className="mb-5">33</span>
                                            <br />
                                            Blogs
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            id="ex1-tab-3"
                                            data-mdb-toggle="tab"
                                            href="#ex1-tabs-3"
                                            role="tab"
                                            aria-controls="ex1-tabs-3"
                                            aria-selected="false"
                                        >

                                            <span className="mb-5">05</span>
                                            <br />
                                            Review
                                        </a>
                                    </li>
                                </ul>
                                {/* <!-- Tabs navs --> */}
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-outline-warning">Contact me</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tabs_contents">
                    {/* <!-- Tabs content --> */}
                    <div className="tab-content" id="ex1-content">
                        <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                            Tab 1 content
                        </div>
                        <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                            Tab 2 content
                        </div>
                        <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                            Tab 3 content
                        </div>
                    </div>
                    {/* <!-- Tabs content --> */}
                </div>
            </div>
        </>
    );
};

export default index;
