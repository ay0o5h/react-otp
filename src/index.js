import React, { useState } from 'react';
import "./index.css";
export default function React0tp({ title, errorText, fieldsNumber, handleSend, height, hasError = false, borderColor, borderWidth, borderRadius, width }) {
    const [otp, setOtp] = useState(new Array(fieldsNumber).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const handleError = () => {
        document.querySelector(".overlay").classList.add("show")
    }

    return (
        <div className="otp" >
            <center> <h3>{title}</h3></center>
            {title ? <hr /> : ""}
            {otp.map((data, index) => {
                return (
                    <input
                        style={{
                            borderColor: `${borderColor}`,
                            borderWidth: `${borderWidth}`,
                            borderRadius: `${borderRadius}`,
                            width: `${width}`,
                            height: `${height}`
                        }}
                        className="otp-field"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                    />

                );
            })}
            <button onClick={hasError && otp.includes("") ? handleError : () => handleSend(otp.join(""))}>send</button>

            <div className=" overlay">
                <div className="popup">
                    <h2>Error</h2>
                    <hr />

                    <a className="close" onClick={() => document.querySelector(".overlay").classList.remove("show")} href="#">&times;</a>
                    <div className="content">
                        {errorText}
                    </div>
                </div>
            </div>
        </div>

    );
}