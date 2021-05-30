import React from "react";
import EmployeesCard from "./EmployeesCard";

interface sortEmployeesProps {
  data: {
    group: string;
    children: [
      {
        id: string;
        firstName: string;
        lastName: string;
        dob: string;
        active: boolean;
      }
    ];
  }[];
}

const employeesList = (props: sortEmployeesProps) => {
  let list = props?.data.map((employees) => {
    if (!employees.children.length) {
      return (
        <div className='group' key={employees.group + Date.now()}>
          <div className="group__header"><h3>{employees.group}</h3></div>
          <div className="dushed">_ _ _ _ _</div>
        </div>
      );
    }
    return (
      <div className='group' key={employees.group + Date.now()}>
        <div className="group__header">
          <h3>{employees.group}</h3>
        </div>
        <div className="group__body">
          {employees.children.map((child) => {
            return (
              <EmployeesCard
                firstName={child.firstName}
                lastName={child.lastName}
                id={child.id}
                dob={child.dob}
                active={child.active}
                key={child.id}
              />
            );
          })}
        </div>
      </div>
    );
  });

  return <div className="usersList__wrapper">{list}</div>;
};

export default employeesList;
