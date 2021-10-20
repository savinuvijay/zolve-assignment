import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} />
                <span style={{ marginLeft: "10px" }}>{title}</span>
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/chart">Chart</Link>
                </li>
                <li>
                    <Link to="/copyclipboard">Clipboard</Link>
                </li>
                <li>
                    <Link to="/selfie">Selfie</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: "Zolve Assignment",
    icon: "fas fa-book-open",
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
