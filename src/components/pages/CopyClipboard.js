import React, { useState } from "react";

const CopyClipboard = () => {
    const [inputText, setInputText] = useState("");
    const [copyText, setCopyText] = useState("");
    const onChange = (e) => {
        setInputText(e.target.value);
        let copyString = e.target.value.match(/q=([^&]+)/);
        if (copyString) {
            //copyString = copyString.slice(2);
        }
        if (copyString) {
            setCopyText(copyString[1]);
        } else {
            setCopyText("");
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        let copyTextInput = document.getElementById("copyText");
        console.log(copyTextInput.value);
        copyTextInput.select();
        //let = document.getSelection();
        navigator.clipboard.writeText(copyTextInput.value);
    };
    return (
        <div>
            <div className="card all-center">
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
                            value={inputText}
                            onChange={onChange}
                        />
                        <input
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
                            className="btn btn-dark"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CopyClipboard;
