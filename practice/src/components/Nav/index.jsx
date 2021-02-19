import React from 'react';
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    const links = [
        {
            to: "/",
            name: "Home"
        },
        {
            to: "/about",
            name: "About"
        },
        {
            to: "/portfolio",
            name: "Portfolio"
        },
    ]
    return (
        <div className={styles.Nav}>
            <div className={styles.linksContainer}>
                {links.map((links, i) => <Link key={i} to={links.to}>{links.name}</Link>)}
            </div>
        </div>
    );
}

export default Nav;