import jwtDecode from "jwt-decode";
import { DecodedType } from "../../utils/types";

export default function Google() {
    const urlParams = new URLSearchParams(window.location.search);
    const addr_val = urlParams.get("addr_val");
    if (addr_val == null) {
        return (
            <>
                <div className="preview">
                    <h1>Login to Google!</h1>
                </div>
            </>
        );
    }
    const decoded = jwtDecode(addr_val!) as DecodedType;
    if (decoded.socialName !== "Google") {
        window.location.href = "https://www.google.com";
    }
    console.log(decoded);
    return (
        <>
            <div className="original">
                <h1>Login to Google</h1>
            </div>
        </>
    );
}
