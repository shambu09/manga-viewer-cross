import { Redirect } from "react-router-dom";
import { useCheckUserAuthStatus } from "../hooks/useCheckAuthStatus";
import { UserAuthStatusEnum } from "../constants/userAuthStatusEnum";
import OAuthSignInWrapper from "./OAuthSignInWrapper";

export function AuthRedirect() {
    const userUserAuthStatus = useCheckUserAuthStatus();

    switch (userUserAuthStatus) {
        case UserAuthStatusEnum.UNAUTHORIZED:
            return <OAuthSignInWrapper />;
        case UserAuthStatusEnum.USER_NOT_FETECHED:
            return <Redirect to="/auth" />;
        case UserAuthStatusEnum.USER_FETCHED:
            return null;
        default:
            return <Redirect to="/error" />;
    }
}
