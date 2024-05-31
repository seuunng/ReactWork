
import instance from "./axios";

// 리스트를 출력하는 함수, 다른 작업이 진행된 후 계속 다시 호출해준다.
// 호출을 안하면 마운트 될 때 만 실행되고 실행안되기 때문
export const fetchEmployees = async () => { //axios가 서버가 실행되기도전에 실행될수 있어서 await를 달아준다.
    try {
        const response = await instance.get('/emp'); //await를 이용해서 비동기식으로 작동하게 하려면 async를 안에 있어야 한다.
        //Employee가 배열 형태이면 
        if (Array.isArray(response.data)) {
            //emoloyees값을 수정
            console.log('fetch employees-crud 실행');
            return (response.data);
        } else {
            console.error('Response data is not an array:', response.data);
        }
    } catch (err) {
        console.error('fetch error:', err);
    }
};

//입력폼에 작성된 내용을 post방식으로 전달해서 회원을 추가 한다.
export const addEmployee = async (employee) => {//await를 쓸수있게 async로 묶어준다.
    try {
        //백엔드에서 지정한 데이터 형식과 일치시켜주기 위해서 변수를 객체에 담는다.
        const addEmployee = {  name: employee.name, email: employee.email }
        //instance를 통해서 axios로 해당 경로에 해당 데이터를 전달한다.
        await instance.post('/emp',  addEmployee); //순서를 지킬수있게 await를 쓴다.
        fetchEmployees(); // 새로운 데이터를 추가한 후 리스트를 다시 불러옵니다.
    } catch (err) {
        console.error('insert employee:', err);
    }
};
//삭제확인되면 삭제진행
export const deleteEmployeeok = async (id) => {
    try {
        console.log(`Deleting employee with id: ${id}`); // 디버깅을 위해 추가
        await instance.delete(`/emp/${id}`); //템플릿 리터럴${}을 사용하면 백틱을 써서 경로를 지정해야 함
        fetchEmployees(); // 새로운 데이터를 추가한 후 리스트를 다시 불러옵니다.
    } catch (err) {
        console.error('delete employee:', err);
    }
};
//리스트에 이름을 눌르면 수정되게 하는 함수
export const updateEmployee = async (employee) => {
    try {
        //변수를 객체로 저장해서 전달
        const updatedEmployee = { id : employee.id, name: employee.name, email: employee.email }
        console.log(`Udating employee with id: ${employee.id}`); // 디버깅을 위해 추가
        //put방식으로 전달하면
        await instance.put(`/emp/${employee.id}`, updatedEmployee);
        fetchEmployees(); // 새로운 데이터를 추가한 후 리스트를 다시 불러옵니다.
    } catch (err) {
        console.error('update employee:', err);
    }
};