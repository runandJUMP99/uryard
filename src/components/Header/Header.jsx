import React from "react";

import Logo from "./Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.Header}>
            <Logo />
            <NavLinks />
        </div>
    );
};

export default Header;