import NavBar from "../components/NavBar";
import VerifyUser from "../utils/VerifyUser";

export default function Home() {
    VerifyUser();
    return (
        <>
            <NavBar></NavBar>

            <div className="cvMain" id="cvPage">
                <div className="page">
                    <div>
                        <span>Facebook</span>
                        <ul>
                            <li>
                                <h2>Simple Login</h2>
                                <button className="active-btn">
                                    <span>Preview</span>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                            <li>
                                <h2>Iphone Offer Login</h2>
                                <button className="active-btn">
                                    <span>Preview</span>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                            <li>
                                <h2>Horoscope Login</h2>
                                <button className="active-btn">
                                    <span>Preview</span>
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
                                    <span>Preview</span>
                                </button>
                                <button className="active-btn">
                                    <span>Generate Link</span>
                                </button>
                            </li>
                            <li>
                                <h2>Free followers Login</h2>
                                <button className="active-btn">
                                    <span>Preview</span>
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
                                    <span>Preview</span>
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
