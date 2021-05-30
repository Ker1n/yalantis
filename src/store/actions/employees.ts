import { Dispatch } from "react";
import { EmployeesAction, EmployeesActionTypes } from "../../types/employees";
import axios from "axios";

function compare(a:any, b:any) {
  if (a.group < b.group) return -1;
  if (a.group > b.group) return 1;
  return 0;
}

const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const URL = "https://yalantis-react-school-api.yalantis.com/api/task0/users";

export const fetchEmployees = () => {
  return async (dispatch: Dispatch<EmployeesAction>) => {
    try {
      dispatch({
        type: EmployeesActionTypes.FETCH_EMPLOYEES,
      });
      const response = await axios.get(URL);
      response.data.sort((a: any, b: any) =>
        a.lastName > b.lastName ? 1 : -1
      );

      let sortedData = [];
      for (let key of response.data) {
        let ltr = { ...key, active: false };
        sortedData.push(ltr);
      }

      let data = sortedData.reduce((r, e) => {
        let group = e.lastName[0];
        if (!r[group]) r[group] = { group, children: [e] };
        else r[group].children.push(e);
        return r;
      }, {});
      let result:any = Object.values(data) ;
     
      
      let groupKey:any = [];
      for (let i = 0; i < result.length; i++) {
        groupKey.push(result[i].group)
      }

      for (let i = 0; i < groupKey.length; i++) {
        let index:any = arr.indexOf(groupKey[i]);
        if (index > -1) {
          arr.splice(index, 1);
        }
      }

      for (let i = 0; i < arr.length; i++) {
        result.push({
          group: arr[i],
          children: [],
        });
      }
      result.sort(compare);

    
      setTimeout(() => {
        dispatch({
          type: EmployeesActionTypes.FETCH_EMPLOYEES_SUCCESS,
          payload: result,
        });
      }, 10); //change to 1 sec
    } catch (error) {
      dispatch({
        type: EmployeesActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: "something went wrong",
      });
    }
  };
};
