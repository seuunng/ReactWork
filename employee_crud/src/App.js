import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import {updateEmployee, addEmployee, fetchEmployees, deleteEmployeeok} from './api/crudApi'
import { useState, useEffect } from 'react';
import instance from "./api/axios";

function App() {
  //백엔드로 전달할 회원정보 객체(id, name, email)
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // 현재 수정 중인 직원을 저장하기 위한 변수
  const [editingEmployee, setEditingEmployee] = useState(null);

  //employee가 배열이 맞으면 값을 수정하게한 함수를 마운트될때 실행되게 함 
  useEffect(() => { 
    loadEmployees();
  }, []);//의존성이 비어있으면 마운트될때 한번만 실행되고 실행안됨

  const loadEmployees = async ()=>{
    try {
      const data = await fetchEmployees();
      setEmployees(data);
      console.log('fetch employees 실행');
    } catch (err) {
      console.error('Failed to fetch employees:', err);
    }
  };

  const handleSubmit = async (e)=>{
    e.preventDefault(); //먼저 서버를 중지시키고, 비동기식으로 데이터처리코드 진행
    //수정할 직원이 있으면 업데이트 실행
    if(editingEmployee){
      await updateEmployee({id:editingEmployee.id, name, email});
      console.log(editingEmployee.id)
    }
    // 없으면 추가 진행
    else{
      await addEmployee({name, email});
      console.log('add 실행');
    }
    setName('');
    setEmail('');
    //수정할 직원 없는걸로 초기화
    setEditingEmployee(null);
    loadEmployees();
  };
  
  //리스트에 삭제버튼을 누르면 데이터 삭제를 확인
  const deleteEmployee = async  (id, name) => {
    if (window.confirm(`정말로 ${name}님을 삭제하시겠습니까?`)) {
      await deleteEmployeeok(id);
      loadEmployees();
    } else {
      return;
    }
  };

  const handleUpdateClick = (emp) => {
    // setName(emp.name);
    // setEmail(emp.email);
    // setEditingEmployee(emp);
  }

  return (
    <div className="App">
      <h1>Employee Management</h1>
      {/* 각 컴포넌트로 보내줄 데이터 */}
      <EmployeeForm
        name={name} 
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        editingEmployee={editingEmployee}
        setEditingEmployee={setEditingEmployee}
        handleUpdateClick={handleUpdateClick}
      ></EmployeeForm>  {/* 속성을 여러개 쓸때는 콤마를 사용하지 않는다. */}
      <hr></hr>
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        setEditingEmployee={setEditingEmployee}
        handleUpdateClick={handleUpdateClick}
      >
      </EmployeeList>

    </div>
  );
}

export default App;
