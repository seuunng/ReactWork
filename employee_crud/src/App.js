import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import {useState, useEffect} from 'react';
import instance from "./api/axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const fetchEmployees = async () => {
      try {
          const response = await instance.get('/emp');
          if (Array.isArray(response.data)) {
              setEmployees(response.data);
          } else {
              console.error('Response data is not an array:', response.data);
          }
      } catch (err) {
          console.error('fetch error:', err);
      }
  };

  useEffect(() => {
      fetchEmployees();
  }, []);

  const addEmployee = async (name, email) => {
      try {
          await instance.post('/emp', { name, email });
          fetchEmployees(); // 새로운 데이터를 추가한 후 리스트를 다시 불러옵니다.
      } catch (err) {
          console.error('insert employee:', err);
      }
  };
  const deleteEmployee = async (id) => {
    try {
      console.log(`Deleting employee with id: ${id}`); // 디버깅을 위해 추가
        await instance.delete(`/${id}`);
        fetchEmployees(); // 새로운 데이터를 추가한 후 리스트를 다시 불러옵니다.
    } catch (err) {
        console.error('delete employee:', err);
    }
  };
  
  const updateEmployee = async (id, name, email) => {
    try {
      const updatedEmployee = { id, name, email }
        console.log(`Udating employee with id: ${id}`); // 디버깅을 위해 추가
        await instance.put(`/${id}`, updatedEmployee);
        fetchEmployees(); // 새로운 데이터를 추가한 후 리스트를 다시 불러옵니다.
    } catch (err) {
        console.error('update employee:', err);
    }
  };
  
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        editingEmployee={editingEmployee}
        setEditingEmployee={setEditingEmployee}
      ></EmployeeForm>
      <hr></hr>
      <EmployeeList 
        employees={employees} 
        deleteEmployee={deleteEmployee} 
        setEditingEmployee={setEditingEmployee}
      >
      </EmployeeList>

    </div>
  );
}

export default App;
