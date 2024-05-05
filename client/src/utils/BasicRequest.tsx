import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiConstants } from "../api/api_constants";
import custom_axios from "../axios/custom_axios";

import { getLoginInfo } from "../utils/LoginInfo";

const BasicRequest = async () => {
    const navigate = useNavigate();
    const userId = getLoginInfo()?.uuid;
    if (userId != null) {
        // const response = await custom_axios.get(ApiConstants.USER.VERIFY, {
        //     headers: {
        //         Authorization: "Bearer " + localStorage.getItem("token"),
        //     },
        // });
        toast.info("You are authenticated");
    } else {
        toast.info("Sorry you are not authenticated");
        navigate("/");
    }
};

export default BasicRequest;
