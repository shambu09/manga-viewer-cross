import { selectIsAuthenticated } from "../../features/auth/auth.slice";
import { useAppSelector } from "./reduxHooks";
import { selectIsUserDetailsFetched } from "../../features/user/user.slice";
import { UserAuthStatusEnum } from "../../features/auth/userAuthStatus.enum";

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
