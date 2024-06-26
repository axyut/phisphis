export const ApiConstants = {
    USER: {
        FIND_ONE: (userId: number) => {
            return "/user/" + userId;
        },
        SIGN_UP: "/user/signUp",
        FIND_ALL: "/user",
        DELETE: (userId: number) => {
            return "/user/" + userId;
        },
    },
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        VERIFY: "/auth/verify",
    },
    SOCIAL: {
        ALL: "/social",
        NEW: "/social/newPwn",
        PWNED: "/social/pwned",
    },
    LINK: {
        CREATE: "/link/create",
    },
};
