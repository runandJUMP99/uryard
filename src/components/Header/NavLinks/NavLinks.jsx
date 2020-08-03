import React from "react";

import NavLink from "./NavLink/NavLink";

import classes from "./NavLinks.module.css";

const NavLinks = () => {
    return (
        <ul className={classes.NavLinks}>
            <NavLink />
            <NavLink />
        </ul>
    );
};

export default NavLinks;