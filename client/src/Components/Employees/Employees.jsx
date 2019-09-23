import React from 'react';

import Employee from './Employee/Employee';

export default function Employees(props) {
  const employees = props.employees;
  console.log({ employees });
  return (
    <div className="col-sm-12 text-color">
      <h3 className="uppercase">List of Employees</h3>
      <div className="row">
        {employees.map((employee, i) => (
          <Employee employee={employee} index={i} />
        ))}
      </div>
    </div>
  );
}
