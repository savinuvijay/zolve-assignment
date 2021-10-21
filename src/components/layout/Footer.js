import React from "react";

const Footer = () => {
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: "70px",
                    background: "var(--light-color)",
                }}
                className="all-center"
            >
                <div style={{ fontSize: "1.8rem" }}>
                    <a
                        style={{ marginRight: "8px" }}
                        href="https://www.linkedin.com/in/savinu-vijay/"
                    >
                        <i className="fab fa-linkedin" />
                    </a>
                    <a
                        style={{ marginRight: "8px" }}
                        href="https://twitter.com/savinuvijay"
                    >
                        <i className="fab fa-twitter" />
                    </a>
                    <a
                        style={{ marginRight: "8px" }}
                        href="https://www.facebook.com/savinu.vijay"
                    >
                        <i className="fab fa-facebook" />
                    </a>
                    <a
                        style={{ marginRight: "8px" }}
                        href="https://www.instagram.com/savinuvijay"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                    <a
                        style={{ marginRight: "8px" }}
                        href="https://github.com/savinuvijay"
                    >
                        <i className="fab fa-github" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
