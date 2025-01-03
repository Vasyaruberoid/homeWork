import { UserType } from "../HW8";

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  switch (action.type) {
    case "sort": {
      const sortedState = [...state]; // Create a shallow copy of the state
      sortedState.sort((a, b) => {
        if (action.payload === "up") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return sortedState;
    }
    case "check": {
      return state.filter((user) => user.age >= 18);
    }
    default:
      return state;
  }
};

export const sortUsersAC = (payload: "up" | "down") => {
  return { type: "sort", payload };
};

export const checkedUsersAC = (payload:number) => {
  return { type: "check",payload };
};

export type SortUsersActionType = ReturnType<typeof sortUsersAC>;
export type ChekedUsersActionType = ReturnType<typeof checkedUsersAC>;

type ActionType = SortUsersActionType | ChekedUsersActionType;
