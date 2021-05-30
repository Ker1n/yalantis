export const FETCH_EMPLOYEES: string = "FETCH_EMPLOYEES";
export const FETCH_EMPLOYEES_SUCCESS: string = "FETCH_EMPLOYEES_SUCCESS";
export const FETCH_EMPLOYEES_ERROR: string = "FETCH_EMPLOYEES_ERROR";

export interface EmployeesState {
  employees: any[];
  loading: boolean;
  error: null | string;
}

export enum EmployeesActionTypes {
  FETCH_EMPLOYEES = "FETCH_EMPLOYEES",
  FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS",
  FETCH_EMPLOYEES_ERROR = "FETCH_EMPLOYEES_ERROR",
}


interface FetchEmployeesAction {
  type:  EmployeesActionTypes.FETCH_EMPLOYEES;
}
interface FetchEmployeesSuccessAction {
  type:  EmployeesActionTypes.FETCH_EMPLOYEES_SUCCESS;
  payload: any[];
}
interface FetchEmployeesErrorAction {
  type:  EmployeesActionTypes.FETCH_EMPLOYEES_ERROR;
  payload: string;
}

export type EmployeesAction =
  | FetchEmployeesAction
  | FetchEmployeesSuccessAction
  | FetchEmployeesErrorAction;
