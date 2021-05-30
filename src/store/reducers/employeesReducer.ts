import { EmployeesAction, EmployeesActionTypes, EmployeesState } from '../../types/employees';

const initialState: EmployeesState = { 
    employees : [],
    loading: false,
    error: null
}

export const employeesReducer = (state = initialState, action: EmployeesAction): EmployeesState => { 
    switch (action.type) {
        case EmployeesActionTypes.FETCH_EMPLOYEES:
            return { 
                employees: [],
                loading: true,
                error: null,
            }
        case EmployeesActionTypes.FETCH_EMPLOYEES_SUCCESS:
            return { 
                employees: action.payload,
                loading: false,
                error: null,
            }
        case EmployeesActionTypes.FETCH_EMPLOYEES_ERROR:
            return { 
                employees: [],
                loading: true,
                error: action.payload,
                
            }
          default: 
            return state  
    } 
}