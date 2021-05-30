import React from "react";

interface CardEmployeesProps {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  active: boolean;
}

const EmployeesCard = ({id,firstName,lastName,dob,active,}: CardEmployeesProps) => {

  const [isActive, setIsActive] = React.useState(active);

  const checkOnlyOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (e.target.id === "active") {
      window.location.reload();
      setIsActive(!active);
    } else {
      window.location.reload();
      localStorage.removeItem(id);
      setIsActive(active);
    }
  };

  if (isActive) {
    const item = {
      id,
      firstName,
      lastName,
      dob,
      isActive,
    };

    localStorage.setItem(id, JSON.stringify(item));
  }

  let tarn = localStorage.getItem(id);

  if (typeof tarn === "string") {
    var yarn = JSON.parse(tarn);
  }

  React.useEffect(() => {
    if (yarn?.isActive) {
      setIsActive(yarn?.isActive);
    }
  }, [yarn?.isActive]);

  let classActive;

  isActive
    ? (classActive = "userCard__fullName-active")
    : (classActive = "userCard__fullName");

  return (
    <div className="userCard__wrapper">
      <div className={classActive}>
        {firstName} {lastName}
      </div>
      <div className="userCardRatio">
        <form>
          <div className="userCardRatio__notActive">
            <label>
              <input
                type="radio"
                id="not active"
                className="activeCheck"
                checked={isActive === active}
                onChange={checkOnlyOne}
              />
              not active
            </label>
          </div>
          <div className="userCardRatio__Active">
            <label>
              <input
                type="radio"
                id="active"
                checked={isActive === true}
                className="activeCheck"
                onChange={checkOnlyOne}
              />
              active
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeesCard;
