import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Fragment>
            <div className="container">
                <h1>Zolve Assignments</h1>
                <h3>By Savinu T Vijay</h3>
                <div style={{ fontSize: "1.3rem" }}>
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
                <a
                    style={{ marginTop: "5px" }}
                    className="btn btn-primary"
                    href="https://github.com/savinuvijay/zolve-assignment"
                >
                    View Git Repo
                </a>
                <div className="grid-3">
                    <div className="card">
                        <h2 style={{ marginBottom: "10px" }}>
                            3rd Party API & Visualization
                        </h2>
                        {/* <img
                            style={{ marginTop: "10px" }}
                            src="https://source.unsplash.com/random/1920x1080"
                            alt=""
                            srcset=""
                        /> */}
                        <p>
                            Consumes the stackOverflow JSON API and displays a
                            Bar Chart showing the the language on x-axis and
                            count of tags on y-axis
                        </p>
                        <a
                            style={{ marginTop: "10px" }}
                            className="btn btn-light btn-block all-center"
                            href="https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow"
                        >
                            <strong>View API Response</strong>
                        </a>
                        <a
                            style={{ marginTop: "10px" }}
                            className="btn btn-light btn-block all-center"
                            href="https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow"
                        >
                            <strong>View API Documentation</strong>
                        </a>
                        <p>
                            The filters present next to the chart can be set
                            accordingly to filter down the data displayed.
                        </p>
                        <div className="m-1">
                            <strong>Supported Filters</strong>
                            <ul>
                                <li>1. Fromdate</li>
                                <li>2. Todate</li>
                                <li>3. Pagesize</li>
                                <li>4. Page</li>
                            </ul>
                        </div>
                        {/* <p>
                            Default Page Size is 30 and default page is 1. The
                            output changes when the filters are teaked.
                        </p> */}
                        <Link
                            style={{ marginTop: "10px" }}
                            className="btn btn-primary btn-block all-center"
                            to="/chart"
                        >
                            View
                        </Link>
                    </div>
                    <div className="card">
                        <h2 style={{ marginBottom: "10px" }}>
                            Copy to clipboard
                        </h2>
                        {/* <img
                            style={{ marginTop: "10px" }}
                            src="https://source.unsplash.com/random/1920x1080"
                            alt=""
                            srcset=""
                        /> */}
                        <p>Text can be entered into the first input box.</p>
                        <p>
                            The second input box is not editable. It is used to
                            display the extracted text.
                        </p>
                        <p>
                            When a URL with params key name ‘q’ is entered, its
                            value is displayed in the second input box.
                        </p>
                        <div className="m-1">
                            <p>
                                If <strong>http://localhost:3000?q=ABC</strong>{" "}
                                is entered, <strong>ABC</strong> will be loaded
                                in the text box.
                            </p>
                        </div>
                        <p>
                            Its value will be copied to clipboard on clicking
                            the copy button.
                        </p>
                        <Link
                            style={{ marginTop: "10px" }}
                            className="btn btn-primary btn-block all-center"
                            to="/copyclipboard"
                        >
                            View
                        </Link>
                    </div>
                    <div className="card">
                        <h2 style={{ marginBottom: "10px" }}>Selfie</h2>
                        {/* <img
                            style={{ marginTop: "10px" }}
                            src="https://source.unsplash.com/random/1920x1080"
                            alt=""
                            srcset=""
                        /> */}
                        <p>
                            User is able to see the live feed from there selfie
                            camera on screen once the permissions are granted.
                        </p>
                        <p>
                            On clicking <strong>'Capture'</strong> button, the
                            current frame is grabbed and saved.
                        </p>
                        <p>
                            The user may <strong>'Retake'</strong> the photo if
                            not satified with the grab.
                        </p>
                        <p>
                            The user can crop the image to a 1:1 ratio by
                            clicking and draggin on the image.
                        </p>
                        <Link
                            style={{ marginTop: "10px" }}
                            className="btn btn-primary btn-block all-center"
                            to="/selfie"
                        >
                            View
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default About;
