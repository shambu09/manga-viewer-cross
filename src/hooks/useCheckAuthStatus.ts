import { selectIsAuthenticated } from "../redux/slices/authSlice";
import { useAppSelector } from "./reduxHooks";
import { selectIsUserDetailsFetched } from "../redux/slices/userSlice";
import { UserAuthStatusEnum } from "../constants/userAuthStatusEnum";

export function useCheckUserAuthStatus(): UserAuthStatusEnum {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    const isUserDetailsFetched = useAppSelector(selectIsUserDetailsFetched);

    if (isAuthenticated) {
        if (isUserDetailsFetched) {
            return UserAuthStatusEnum.USER_FETCHED;
        } else {
            return UserAuthStatusEnum.USER_NOT_FETECHED;
        }
    } else {
        return UserAuthStatusEnum.UNAUTHORIZED;
    }
}
