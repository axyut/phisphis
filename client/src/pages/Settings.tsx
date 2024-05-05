import NavBar from "../components/NavBar";
import BasicRequest from "../utils/BasicRequest";

const Settings = () => {
    // BasicRequest();

    return (
        <>
            <NavBar></NavBar>
            <div className="main">
                <div className="container">
                    <h1>User's Profile</h1>
                    <div>
                        <form>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                type="number"
                                name="phone"
                                placeholder="Number"
                            />
                            <input
                                type="submit"
                                name="contact"
                                className="form-submit"
                                value="Contact"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
