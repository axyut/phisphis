import "./style.css";
import FbLogo from "./fbImg.svg";
import { useState } from "react";

export default function FbPreview() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const sendData = async (event: any) => {
        event.preventDefault();
        console.log("Data will be sent here.");
    };
    var click = 0; //to track either show eye icon and hide eye icon are clicked at least once or not
    var temp = document.getElementById("password"); //get password node

    // function showHide() {
    //     var password = document.getElementById("password").value;
    //     if (password.length == 0) {
    //         //if password cleared upto empty set it to initial states
    //         click = 0; //reset clicked value of eye icons
    //         temp.type = "password"; // set password node  type="password"
    //     }

    //     if (password.length > 5) {
    //         document.getElementById("hidePwd").style.display = "flex";

    //         if (click == 1) {
    //             //if hide eye icon clicked make visible show eye icon even if input is edited
    //             document.getElementById("hidePwd").style.display = "none";
    //             document.getElementById("showPwd").style.display = "flex";
    //         } else if (click == 2) {
    //             //if show eye icon clicked make visible hide eye icon even if input is edited
    //             document.getElementById("hidePwd").style.display = "flex";
    //             document.getElementById("showPwd").style.display = "none";
    //         }
    //     } else if (password.length < 5) {
    //         //if password length is smaller than 5 then hide eye icons
    //         document.getElementById("hidePwd").style.display = "none";
    //         document.getElementById("showPwd").style.display = "none";
    //     }
    // }

    // function show() {
    //     document.getElementById("hidePwd").style.display = "none";
    //     document.getElementById("showPwd").style.display = "flex";
    //     click = 1;
    // }

    // function hide() {
    //     document.getElementById("hidePwd").style.display = "flex";
    //     document.getElementById("showPwd").style.display = "none";
    //     click = 2;
    // }

    // // Change the type of input to password or text
    // function Toggle() {
    //     if (temp.type === "password") {
    //         temp.type = "text";
    //     } else {
    //         temp.type = "password";
    //     }
    // }
    return (
        <>
            <div className="preview">
                {/* <h1>Login to Facebook! Preview.</h1> */}
                <section id="myForm">
                    <div className="wrapper">
                        <div className="fbImage">
                            <img src={FbLogo} alt="Facebook" />
                        </div>

                        <form className="login">
                            <div className="logHead">
                                <span>Log Into Facebook</span>
                            </div>

                            <div className="form_contents">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email or Phone Number"
                                    value={user.email}
                                    onChange={handleChange}
                                    id="username"
                                    autoComplete="off"
                                    maxLength={35}
                                />

                                <div className="pswd">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={handleChange}
                                        id="password"
                                        autoComplete="off"
                                        maxLength={25}
                                        // onKeyUp={showHide()}
                                    />

                                    <div
                                        className="showHide"
                                        id="showPwd"
                                        // onClick={Toggle()}
                                    >
                                        <img
                                            src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png"
                                            alt="show"
                                        />
                                    </div>
                                    <div
                                        className="showHide"
                                        id="hidePwd"
                                        // onClick={{ Toggle();  show(); }}
                                    >
                                        <img
                                            src="https://img.icons8.com/material-outlined/24/000000/hide.png"
                                            alt="hide"
                                        />
                                    </div>
                                </div>
                            </div>

                            <br />
                            <input
                                type="submit"
                                name="button"
                                value="Log In"
                                id="button"
                                onSubmit={sendData}
                            />

                            <a href="">Forgot account?</a>

                            <div className="lineOrline">
                                <div className="leftLine"></div>{" "}
                                <div className="or">or</div>{" "}
                                <div className="rightLine"></div>
                            </div>

                            <div className="btn-new-acc">
                                <input
                                    type="button"
                                    name="button2"
                                    value="Create new account"
                                    id="button2"
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
