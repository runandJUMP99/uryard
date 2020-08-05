import React from "react";

import classes from "./NavLink.module.css";

const NavLink = (props) => {
    return (
        <li className={classes.NavLink}>
            {props.name}
        </li>
    );
};

export default NavLink;