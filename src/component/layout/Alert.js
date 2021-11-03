import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className="container">
        <div className={`alert alert-dismissible alert-${alert.type} mt-2`}>
          <i className="fas fa-info-circle" />
          &nbsp;{alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
