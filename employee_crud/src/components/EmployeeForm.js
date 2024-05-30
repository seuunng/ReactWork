import instance from "../api/axios";
import {useEffect, useState} from 'react';

const EmployeeForm = ({addEmployee, updateEmployee, editingEmployee, setEditingEmployee}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        if (editingEmployee) {
          setName(editingEmployee.name);
          setEmail(editingEmployee.email);
        }
      }, [editingEmployee]);

    const handleSubmit = async (e)=>{  
        e.preventDefault(); //먼저 서버를 중지시키고, 비동기식으로 데이터처리코드 진행
        try{
            if (editingEmployee) {
                await updateEmployee(editingEmployee.id, name, email);
              } else {
                await addEmployee(name, email);
              }
            setName('');
            setEmail(''); //비동기는 코드의 순서가 중요
            setEditingEmployee(null);
             
        }
        catch(err){
            console.error("insert employee : ",err)
        }
        
    }
    // axios.delete('/');
    // axios.put('/');
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name </label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} required />
            </div>
            <div>
                <label>Email </label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}></input>
            </div>
            <button type="submit">{editingEmployee ? '수정' : '추가'}</button>
            {editingEmployee ? <button type="submit" 
                onClick={()=>{
                return setName(''),
                    setEmail(''),
                    setEditingEmployee(null);
                }}
            >취소</button> : ''}
        </form>
    )
}
export default EmployeeForm;