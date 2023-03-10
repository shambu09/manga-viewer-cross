import queryString from "query-string";
import { AuthActionEnum } from "../constants/authActionEnum";

const redirect_sign_in_uri = import.meta.env.VITE_BASE_SIGN_IN_URL;
const redirect_sign_out_uri = import.meta.env.VITE_BASE_SIGN_OUT_URL;
const client_id = import.meta.env.VITE_OAUTH_CLIENT_ID;
const scope = import.meta.env.VITE_OAUTH_SCOPE;

export const OAUTH_URI_SIGN_IN = `https://login.live.com/oauth20_authorize.srf?client_id=${client_id}&scope=${scope}&response_type=token&redirect_uri=${redirect_sign_in_uri}`;
export const OAUTH_URI_SIGN_OUT = `https://login.live.com/oauth20_logout.srf?client_id=${client_id}&redirect_uri=${redirect_sign_out_uri}`;

const parseOAuthURI = (uri: string): AuthDetails | "signout" | null => {
    const authDetails = queryString.parse(uri);
    if (
        authDetails?.access_token == null &&
        authDetails?.user_id == null &&
        authDetails?.signout == null
    )
        return null;
    else if (authDetails.signout === "true") return "signout";
    else return authDetails as unknown as AuthDetails;
};

export const validateAuth = (
    uri: string
): { authAction: AuthActionEnum; authDetails: AuthDetails | null } => {
    const authDetails = parseOAuthURI(uri);

    if (authDetails === null)
        return {
            authAction: AuthActionEnum.RE_AUTH,
            authDetails: null,
        };
    else if (authDetails === "signout") {
        return {
            authAction: AuthActionEnum.SIGN_OUT,
            authDetails: null,
        };
    } else
        return {
            authAction: AuthActionEnum.SIGN_IN,
            authDetails: authDetails,
        };
};
