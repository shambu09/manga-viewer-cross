import { useEffect } from "react";
import { OAUTH_URI_SIGN_OUT } from "../oAuth";

const OAuthSignOutWrapper = () => {
    useEffect(() => {
        window.location.assign(OAUTH_URI_SIGN_OUT);
    }, []);
    return <div></div>;
};

export default OAuthSignOutWrapper;
