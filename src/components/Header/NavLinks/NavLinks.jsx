import React from "react";

import NavLink from "./NavLink/NavLink";

import classes from "./NavLinks.module.css";

const NavLinks = () => {
    return (
        <ul className={classes.NavLinks}>
            <NavLink name="Sign In"/>
            <NavLink name="Sign Up"/>
        </ul>
    );
};

export default NavLinks;