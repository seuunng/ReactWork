import { useEffect, useState } from 'react';

//부모로 부터 받아온 데이터: 추가함수, 수정함수, 수정상태 직원, 직원 수정상태 수정 함수
const EmployeeForm = ({ editingEmployee, setEditingEmployee, handleSubmit, handleUpdateClick, name, email, setName, setEmail }) => {

    // 수정상태의 직원이 있을때 해당 직원의 이름과 이메일을 작성
    useEffect(() => {
        if (editingEmployee) {
            setName(editingEmployee.name);
            setEmail(editingEmployee.email);
        }
    }, [editingEmployee]); //의존성으로 수정상태 직원을 넣었음, 수정상태직원에 변동이 있을때마다 다시 실행됨
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required className="btn" />
            </div>
            <div>
                <label>Email </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="btn"></input>
            </div>
            {/* 수정 상태의 직원이 있을때 수정/추가로 변동되게 삼항연산자 설정 */}
            <button type="submit" className="btn">{editingEmployee ? ' 수정 ' : ' 추가 '}</button>
            {/* 수정상태일때만 취소버튼이 생성되도록 삼항연산자 설정 */}
            {editingEmployee ?
                <button className="btn"
                    style={{ backgroundColor: 'lightgrey' }}
                    type="submit"
                    onClick={() => {
                        return setName(''),
                            setEmail(''),
                            setEditingEmployee(null);
                    }}
                > 취소 </button> : ''}
        </form>
    )
}


export default EmployeeForm;
