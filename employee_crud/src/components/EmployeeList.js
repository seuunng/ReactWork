
import {useEffect, useState} from 'react';
import instance from "../api/axios";

const EmployeeList=({ employees = [], deleteEmployee, setEditingEmployee  })=>{
    return (
      <div>
        <h2>EmployeeList</h2>
        <table>
            <thead>
                <tr>
                    <th>id</th><th>name</th><th>email</th><th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp=>( 
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td onClick={()=>setEditingEmployee(emp)}>{emp.name}</td>
                            <td>{emp.email}</td>
                            <th><button onClick={()=>deleteEmployee(emp.id)}>삭제</button></th>
                        </tr>
                    ))
                }
                

            </tbody>
        </table>
      </div>
    );
  }
  
export default EmployeeList;