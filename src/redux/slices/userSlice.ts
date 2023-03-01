import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UserState {
    isUserDetailsFetched: boolean;
    userDetails: UserDetails;
}

const initialUserDetails: UserDetails = {
    user_id: "",
    name: "",
    email: "",
};

const initialState: UserState = {
    isUserDetailsFetched: false,
    userDetails: initialUserDetails,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        load: (state, action: PayloadAction<UserDetails>) => {
            state.isUserDetailsFetched = true;
            state.userDetails = action.payload;
        },
        unload: (state) => {
            state.isUserDetailsFetched = false;
            state.userDetails = initialUserDetails;
        },
    },
});

export const { load, unload } = userSlice.actions;

export const selectIsUserDetailsFetched = (state: RootState) =>
    state.user.isUserDetailsFetched;

export const selectUserDetails = (state: RootState) => state.user.userDetails;

export default userSlice.reducer;
