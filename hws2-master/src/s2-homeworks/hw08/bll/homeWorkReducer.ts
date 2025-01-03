import { UserType } from "../HW8";

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  switch (action.type) {
    case "sort": {
      return state.sort((a, b) => {
        if (action.payload === "up") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    }
    case "check": {
      return state.filter((user) => user.age >= 18);
    }
    default:
      return state;
  }
};

export const sortUsersAC = (payload: number) => {
  return { type: "check", payload };
};

export const checkedUsersAC = (payload: "up" | "down") => {
  return { type: "sort", payload };
};

export type SortUsersActionType = ReturnType<typeof sortUsersAC>;
export type ChekedUsersActionType = ReturnType<typeof checkedUsersAC>;

type ActionType = SortUsersActionType | ChekedUsersActionType;
