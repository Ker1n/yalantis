import React from "react";
import { fetchEmployees } from "./store/actions/employees";
import { useAction } from "./components/hooks/useActions"  
import { useTypedSelector } from "./components/hooks/employeesTypedSelector";

import EmployeesList from "./components/EmployeesList";
import EmployeesBirthdayList from "./components/EmployeesBdayList";

const App = () => {
  const { employees, error, loading } = useTypedSelector( (state) => state.employees
  );
  const [localItems, setLocalItems] = React.useState([]);

  const { fetchEmployees } = useAction();

  const getLocalItems = () => {
    const localStorageItems = [] as any;
    let localStorageItemsKeys = Object.keys(localStorage);

    for (let i = 0; i < localStorageItemsKeys.length; i++) {
      let item = localStorage.getItem(localStorageItemsKeys[i]);

      if (typeof item === "string") {
        var getJSON = JSON.parse(item);
      }
      localStorageItems.push(getJSON);
    }
    setLocalItems(localStorageItems);
  };

  React.useEffect(() => {
    fetchEmployees();
    getLocalItems();
  }, []);

  if (loading) {
    return (
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <div className="employees"><h2>Employees</h2></div>
      <div  className="list-wrapper ">
        <EmployeesList data={employees}  />
        <div className="employeesBirthdayList">
          <EmployeesBirthdayList localItems={localItems} />
        </div>
      </div>
    </div>
  );
};

export default App;
