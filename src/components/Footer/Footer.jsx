import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <button onClick={props.handleChange}>New Yard</button>
        </div>
    );
};

export default Footer;