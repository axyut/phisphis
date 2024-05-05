import NavBar from "../components/NavBar";
import VerifyUser from "../utils/VerifyUser";

const Pwned = () => {
    VerifyUser();
    return (
        <>
            <NavBar></NavBar>
            <div className="main">
                <div className="container">
                    <div>
                        <span>
                            sort{" "}
                            <span>name:all, facebook, instagram, google</span>
                            <span>date: ascending, descending</span>
                        </span>
                        <span>table</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pwned;
