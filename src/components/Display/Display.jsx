import React from "react";

import classes from "./Display.module.css";

const Display = (props) => {    
    return <img className={classes.Display} src={props.featuredYard} alt="Featured Yard"/>;
};

export default Display;