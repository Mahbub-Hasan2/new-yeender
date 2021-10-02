// import Head from 'next/head';
// import emailjs from 'emailjs-com';
// import React from 'react';
// import { Col, Row } from 'react-bootstrap';
// import Link from 'next/link';

// const contact = () => {
//     // our about info
//     // const { ourAbout } = useContext(UserContext);
//     // const AbData = ourAbout[0];

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm('service_v44bevo', 'template_ogr10z3', e.target, 'user_U9EP9L0vBpdLjEQAecnbk')
//             .then(
//                 (result) => {
//                     if (result) {
//                         alert('✅Your message has been sent successfully✅');
//                         document.getElementById('resetFormContact').reset();
//                     }
//                 },
//                 (error) => {
//                     if (error) {
//                         alert('⚠Sorry, your message could not be sent. Please try again🔄');
//                     }
//                     console.log(error.text);
//                 }
//             );
//     };


//     return (
//         <>
//             <Head>
//                 <meta charSet="utf-8" />
//                 <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
//                 <title>Yeender: contact page</title>
//             </Head>
//             <div id="p_contact_area">
//                 <h3 className="hadeline">Contact Us</h3>
//                 <div className="container">
//                     <Row className="align-items-center">
//                         <Col md={7}>
//                             <div className="inputs card">
//                                 <h3 className="hadeLine">
//                                     Send us a message
//                                 </h3>
//                                 <form onSubmit={sendEmail} id="resetFormContact" className="form">
//                                     <label>Full Name</label>
//                                     <input type="text" required name="name" placeholder="Mahbub Hasan" />

//                                     <label>Enter Email</label>
//                                     <input type="text" required name="email" placeholder="examole@gmail.com" />

//                                     <label>Website <span>( Optional )</span></label>
//                                     <input type="text" required name="website" placeholder="www.example.net" />

//                                     <label>Add Description</label>
//                                     <textarea name="message" required placeholder="Write your message"></textarea>

//                                     <label>Write your budget</label>
//                                     <input type="text" name="budget" placeholder="$25000" />

//                                     <button type="submit">Submit</button>
//                                 </form>
//                             </div>
//                         </Col>
//                         <Col md={5}>
//                             <div className="information card">
//                                 <h3>Contact<br /> Information</h3>
//                                 <p><span>Location :</span> 2405 Finch Ave West North
//                                     York, ON
//                                     M9M-2X2, Canada M9M-2X2,
//                                     Canada</p>

//                                 <p><span>Email :</span> shabnam.priyanka@live.ca</p>
//                                 <p><span>Phone :</span> 647-222-4345</p>

//                                 {/* icons  */}
//                                 <div className="contact_icons">
//                                     <Link href="/">
//                                         <a target="_blank" className="me-4 text-reset">
//                                             <i className="fab fa-facebook-f" />
//                                         </a>
//                                     </Link>
//                                     <Link href="/">
//                                         <a target="_blank" className="me-4 text-reset">
//                                             <i className="fab fa-twitter" />
//                                         </a>
//                                     </Link>
//                                     <Link href="/">
//                                         <a target="_blank" className="me-4 text-reset">
//                                             <i className="fab fa-google" />
//                                         </a>
//                                     </Link>
//                                     <Link href="/">
//                                         <a target="_blank" className="me-4 text-reset">
//                                             <i className="fab fa-instagram" />
//                                         </a>
//                                     </Link>
//                                     <Link href="/">
//                                         <a target="_blank" className="me-4 text-reset">
//                                             <i className="fab fa-linkedin" />
//                                         </a>
//                                     </Link>
//                                     <Link href="/">
//                                         <a target="_blank" className="me-4 text-reset">
//                                             <i className="fab fa-github" />
//                                         </a>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default contact;

import React from 'react';

const contact = () => {
    return (
        <div>
            h
        </div>
    );
};

export default contact;