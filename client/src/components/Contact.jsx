import React from "react";

const Contact = () => {
    return(
        <div className="contact">
            <div className="contactInfo">
                <h1>Get in touch with our team!</h1>
                <div className="contactList">
                    <div className="contact1">
                        <span class="material-symbols-outlined">call</span>
                        <h3>PHONE</h3>
                        <p>842-775-9374</p>
                    </div>
                    <div className="contact2">
                        <span class="material-symbols-outlined">mail</span>
                        <h3>EMAIL</h3>
                        <p>Health.Help.Solutions@Gmail.com</p>
                    </div>
                    <div className="contact3">
                        <span class="material-symbols-outlined">location_on</span>
                        <h3>ADDRESS</h3>
                        <p>9289 Windfall Ave. Amethyst Lake, UT 32159</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact