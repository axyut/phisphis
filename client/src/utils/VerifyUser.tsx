import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiConstants } from "../api/api_constants";
import custom_axios from "../axios/custom_axios";

import { getLoginInfo } from "./LoginInfo";

const VerifyUser = async () => {
    const navigate = useNavigate();
    const userId = getLoginInfo()?.uuid;
    if (userId != null) {
        const response = await custom_axios.get(ApiConstants.AUTH.VERIFY, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        // console.log(response.data);
        if (response.data.userFound.uuid != userId) {
            toast.info("Sorry you are not authenticated");
            navigate("/");
        }
        console.log("You are authenticated");
    }
};

export default VerifyUser;
