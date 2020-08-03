import React from "react";

import Display from "./Display/Display";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import classes from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={classes.Layout}>
            <Header />
            <Display />
            <Footer />
        </div>
    );
};

export default Layout;