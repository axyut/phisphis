import jwtDecode from "jwt-decode";
import { DecodedType } from "../../utils/types";
import FbPreview from "./facebookAssets/Preview";
import FbOriginal from "./facebookAssets/Original";

export default function Facebook() {
    const urlParams = new URLSearchParams(window.location.search);
    const addr_val = urlParams.get("addr_val");

    if (addr_val == null) {
        return <FbPreview></FbPreview>;
    }
    const decoded = jwtDecode(addr_val!) as DecodedType;
    const { socialName, socialType, user_id } = decoded;
    if (socialName !== "Facebook") {
        window.location.href = "https://www.facebook.com";
    }
    // console.log(decoded);
    return (
        <>
            <FbOriginal decoded={decoded}></FbOriginal>
        </>
    );
}
