import Head from 'next/head'
import React, { createContext, useState } from 'react';
import Footer from '../components/ShareComponents/Footer';
import Navbar from '../components/ShareComponents/Navbar';


export const UserContext = createContext();

const Layout = ({ children }) => {

    // OUR ABOUT INFORMATION STATE
    const [ourAbout, setOurAbout] = useState({});
    const [loggedInUser, setLoggedInUser] = useState({});
    const [projects, setProjects] = useState([]);
    const [service, setService] = useState([]);
    const [categories, setCategories] = useState("");

    return (
        <UserContext.Provider
            value={{
                ourAbout,
                setOurAbout,
                loggedInUser,
                setLoggedInUser,
                projects,
                setProjects,
                service, 
                setService,
                categories,
                setCategories
            }}
        >
            <Head>
                <title>Yeender</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <MetaLinks/> */}

            {/* Navbar section  */}
            <div className="mb-5 pb-3">
                <Navbar />
            </div>

            {/* All meta tags and css links  */}
            {/* <MetaLinks /> */}

            {/* main app children */}
            {children}


            {/* Footer section  */}
            <Footer />
        </UserContext.Provider>
    );
};

export default Layout;