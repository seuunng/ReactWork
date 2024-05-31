const EmployeeList=({ employees = [], deleteEmployee, setEditingEmployee, handleUpdateClick  })=>{
    return (
      <div>
        <h2>EmployeeList</h2>
        <table class="list">
            <thead>
                <tr>
                    <th>id</th><th>name</th><th>email</th><th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp=>( 
                        <tr key={emp.id}>
                            <td >{emp.id}</td>
                            <td onClick={()=>setEditingEmployee(emp)}style={{textDecoration:'underline'}}>{emp.name}</td>
                            <td>{emp.email}</td>
                            <th><button onClick={()=>deleteEmployee(emp.id, emp.name)}className="btn">삭제</button></th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    );
  }
  
export default EmployeeList;