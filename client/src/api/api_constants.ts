export const ApiConstants = {
  TODO: {
    ADD: (userId: number) => {
      return "/todo/" + userId;
    },
    FIND_NOT_COMPLETED: (userId: number) => {
      return "/todo/notCompleted/" + userId;
    },
    FIND_COMPLETED: (userId: number) => {
      return "/todo/completed/" + userId;
    },
    MARK_COMPLETE: (todoId: number) => {
      return "/todo/" + todoId;
    },
    DELETE: (todoId: number) => {
      return "/todo/" + todoId;
    },
  },
  USER: {
    FIND_ONE: (userId: number) => {
      return "/user/" + userId;
    },
    SIGN_UP: "/auth/register",
    FIND_ALL: "/user",
    DELETE: (userId: number) => {
      return "/user/" + userId;
    },
  },
  LOGIN: "/auth/login",
  CV: {
    PROFILE: "/cvProfile",
    REGISTER: "/register",
    LOGIN: "/signin",
  },
};
