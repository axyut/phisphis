import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiConstants } from "../api/api_constants";
import custom_axios from "../axios/custom_axios";

import { getLoginInfo } from "./LoginInfo";

const VerifyUser = async () => {
    const navigate = useNavigate();
    const userId = getLoginInfo()?.uuid;
    if (userId != null) {
        try {
            const response = await custom_axios.get(ApiConstants.AUTH.VERIFY, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });

            if (response.data.userFound.uuid != userId) {
                toast.info("Please Re-login.");
                navigate("/");
            }
            if (response.status == 403) {
                console.log("Token Expired.");
                toast.info("Sorry you are not authenticated");
                navigate("/");
            }
            console.log("User checked!");
            // toast.info("You are Authenticated");
        } catch (error) {
            console.log(error);
            toast.error("Sorry you are not authenticated. Please Re-login.");
            localStorage.removeItem("token");
        }
    } else {
        toast.error("Invalid token. Please Re-login.");
        navigate("/");
    }
};

export default VerifyUser;
