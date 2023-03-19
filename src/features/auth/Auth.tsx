import { validateAuth } from "./oAuth.utils";
import { useEffect, useState } from "react";
import { AuthActionEnum } from "./authAction.enum";
import { authorize, deauthorize } from "./auth.slice";
import { Redirect } from "react-router-dom";
import { unload } from "../user/user.slice";
import OAuthSignOutWrapper from "./OAuthSignOutWrapper";
import { useCheckUserAuthStatus } from "../../common/hooks/useCheckAuthStatus";
import { UserAuthStatusEnum } from "../../common/constants/userAuthStatus.enum";
import { useAppDispatch } from "../../common/hooks/reduxHooks";

const Auth = () => {
    const dispatch = useAppDispatch();
    const userUserAuthStatus = useCheckUserAuthStatus();

    const [authActionState, setAuthActionState] = useState(AuthActionEnum.IDLE);
    const [isFailed, setIsFailed] = useState<boolean>(false);

    useEffect(() => {
        const { authAction, authDetails } = validateAuth(window.location.hash);

        switch (authAction) {
            case AuthActionEnum.RE_AUTH:
                setAuthActionState(AuthActionEnum.RE_AUTH);
                break;

            case AuthActionEnum.SIGN_IN: {
                dispatch(authorize(authDetails as AuthDetails));
                setAuthActionState(AuthActionEnum.SIGN_IN);
                break;
            }

            case AuthActionEnum.SIGN_OUT: {
                dispatch(deauthorize());
                dispatch(unload());
                setAuthActionState(AuthActionEnum.SIGN_OUT);
                break;
            }

            default: {
                setIsFailed(true);
                break;
            }
        }
    }, []);

    return (
        <>
            {authActionState === AuthActionEnum.RE_AUTH &&
                userUserAuthStatus === UserAuthStatusEnum.UNAUTHORIZED && (
                    <Redirect to="/" />
                )}

            {authActionState === AuthActionEnum.SIGN_OUT && (
                <OAuthSignOutWrapper />
            )}

            {isFailed && <Redirect to="/error" />}

            <div>
                <h1>Auth Page</h1>
            </div>
        </>
    );
};

export default Auth;
