import { combineReducers } from "redux";
import { employeesReducer } from "./employeesReducer";

export const rootReducer = combineReducers({
    employees: employeesReducer,
})



export type RootState = ReturnType<typeof rootReducer>