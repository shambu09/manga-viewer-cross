import { RouteChildrenProps } from "react-router-dom";
import { useLocalStorage } from "../../common/hooks/useLocalStorage";
import {
    DEFAULT_VALUE_LOCAL_PATH_BEFORE_OAUTH,
    KEY_LOCAL_PATH_BEFORE_OAUTH,
    OAUTH_URI_SIGN_IN,
} from "../../features/auth/oAuth.utils";
import { useEffect } from "react";

const SignUp = (props: RouteChildrenProps) => {
    const [pathBeforeOAuth, setPathBeforeOAuth] = useLocalStorage(
        KEY_LOCAL_PATH_BEFORE_OAUTH,
        DEFAULT_VALUE_LOCAL_PATH_BEFORE_OAUTH
    );
    const prevPath = (props.location.state as any).from.pathname;

    useEffect(() => {
        setPathBeforeOAuth(prevPath);
    }, []);

    useEffect(() => {
        if (pathBeforeOAuth === prevPath)
            window.location.assign(OAUTH_URI_SIGN_IN);
    }, [pathBeforeOAuth]);
    return <div>SignUp Page</div>;
};

export default SignUp;
