import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = () => {
    return (
        <ul className={classes.NavLinks}>
            <NavLink to="/auth">Share</NavLink>
        </ul>
    );
};

export default NavLinks;