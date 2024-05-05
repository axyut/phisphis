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
    },
};
