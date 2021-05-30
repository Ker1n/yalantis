import React from 'react'
import Moment from 'react-moment';


interface localItemsProps {
    localItems: {
        id: string,
        firstName: string,
        lastName:string,
        dob:string,
        active: boolean
    }[]
  }

const EmployeesBirthdayList = (props:localItemsProps) => { 
    return ( 
        <div className="EmployeesBirthdayList" >
            <h2>Employees Birthday</h2>
           {props.localItems.map((item) => ( 
            <div className="employeesBirthday" key={item.id}>
                {item.firstName} {item.lastName} -  <Moment format="DD MMMM  YYYY">{item.dob}</Moment>
            </div>
              
           ))}
        </div>
    )
}

export default EmployeesBirthdayList

