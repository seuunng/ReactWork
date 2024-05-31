import axios from 'axios';
// axios설정
// Axios는 HTTP 클라이언트 라이브러리로, 주로 브라우저와 Node.js 환경에서 사용
// Axios를 사용하면 HTTP 요청을 쉽게 만들고, 그 결과를 처리
// Axios는 Promise 기반으로 작동하므로, 비동기 처리를 쉽게 할 수 있음
// async/await 구문과 함께 사용하면 더욱 편리
const instance = axios.create({
    baseURL : 'http://localhost:8099/api', //이 경로
    headers : {
        'Content-Type':'application/json' // 이 형식으로 데이터 전달
    },
});
export default instance;