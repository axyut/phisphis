import { useNavigate } from "react-router-dom";
import { getLoginInfo } from "../utils/LoginInfo";
import { toast } from "react-toastify";
import "../assets/Navbar.css";

const NavBar = () => {
    let navigate = useNavigate();
    const role = getLoginInfo()?.role;
    const firstName = getLoginInfo()?.firstName;

    const logout = async () => {
        localStorage.removeItem("token");
        toast.info("Logged Out!");
        navigate("/");
    };
    return (
        <nav className="navbar-whole">
            <div className="link-items">
                <div className="link-items-left">
                    <div className="text-logo-container">
                        <span
                            id="nav-span"
                            onClick={() => {
                                navigate("/home");
                            }}
                        >
                            PhisPhis
                        </span>
                    </div>
                </div>

                <div className="link-items-mid">
                    <div>
                        <a onClick={() => navigate("/phishes")}>Phishes</a>
                    </div>
                    <div>
                        <a onClick={() => navigate("/settings")}>Settings</a>
                    </div>
                </div>

                <div className="link-items-right">
                    <a onClick={logout}>LogOut</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
