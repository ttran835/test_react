import React from 'react';

export default function Employee(props) {
  const employee = props.employee;

  return (
    <div className="col-3">
      <p>{employee.first + ', ' + employee.last}</p>
    </div>
  );
}
