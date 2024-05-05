import NavBar from "../components/NavBar";
import VerifyUser from "../utils/VerifyUser";
import { getLoginInfo } from "../utils/LoginInfo";

const Settings = () => {
    VerifyUser();
    return (
        <>
            <NavBar></NavBar>
            <div className="main">
                <div className="container">
                    <h1>User's Profile</h1>
                    <div>
                        <h3>First Name: {getLoginInfo()?.firstName}</h3>
                        <h3>Last Name: {getLoginInfo()?.lastName}</h3>
                        <h3>Email: {getLoginInfo()?.email}</h3>
                        <h3>Role: {getLoginInfo()?.role}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
