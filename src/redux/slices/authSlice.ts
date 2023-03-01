import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AuthSlice {
    isAuthenticated: boolean;
    authDetails: AuthDetails;
}

const initialAuthDetails: AuthDetails = {
    access_token: "",
    token_type: "",
    expires_in: 0,
    scope: "",
    user_id: "",
};

const initialState: AuthSlice = {
    isAuthenticated: false,
    authDetails: initialAuthDetails,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authorize: (state, action: PayloadAction<AuthDetails>) => {
            state.isAuthenticated = true;
            state.authDetails = action.payload;
        },
        deauthorize: (state) => {
            state.isAuthenticated = false;
            state.authDetails = initialAuthDetails;
        },
    },
});

export const { authorize, deauthorize } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated;

export const selectAuthDetails = (state: RootState) => state.auth.authDetails;

export default authSlice.reducer;
