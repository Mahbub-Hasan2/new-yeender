import React from 'react';

const HomeContactEmail = () => (
    <div className="container mb-5 mt-5">
        <div id="C_H_contactEmail_area" className="d-flex align-items-center">
            <div className="div">
                <h2>Just Connect With Us</h2>
                <p>
                    Magicians move the said heart meet
                    <br /> were goat{' '}
                </p>
                <form className="position_relative">
                    <input className="tex_bar" type="text" placeholder="Your email here" />
                    {/* <button className={style.start_btn}>Get started</button> */}
                    <button type="button" className="start_btn btn btn-warning">
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default HomeContactEmail;
