import { useEffect } from "react";
import { OAUTH_URI_SIGN_IN } from "../oAuth";

const OAuthSignInWrapper = () => {
    useEffect(() => {
        window.location.assign(OAUTH_URI_SIGN_IN);
    }, []);
    return <div></div>;
};

export default OAuthSignInWrapper;
