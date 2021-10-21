import React, { useState, useRef } from "react";

const CopyClipboard = () => {
    const copyRef = useRef(null);
    const [inputText, setInputText] = useState("");
    const [copyText, setCopyText] = useState("");
    const onChange = (e) => {
        setInputText(e.target.value);
        let copyString = e.target.value.match(/q=([^&]+)/);
        if (copyString) {
            setCopyText(copyString[1]);
        } else {
            setCopyText("");
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        copyRef.current.select();
        navigator.clipboard.writeText(copyRef.current.value);
    };
    return (
        <div>
            <div style={{ height: "70vh" }} className="card all-center">
                <h3>Enter Your URL</h3>
                <form onSubmit={onSubmit} className="form">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        }}
                    >
                        <input
                            type="text"
                            name="inputText"
                            placeholder="Enter URL"
                            value={inputText}
                            onChange={onChange}
                        />
                        <input
                            ref={copyRef}
                            id="copyText"
                            readOnly
                            type="text"
                            name="copyText"
                            value={copyText}
                            style={{ width: "100px" }}
                        />
                        <input
                            type="submit"
                            value="Copy"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CopyClipboard;
