# 1. 리액트란?
사용자 인터페이스를 만들기 위한 javascript라이브러리이다.  
프레임워크와 라이브러리의 차이?  
- virtual DOM  
- Component  
    - 리액트로 이루어진 앱을 이루는 최소한의 단위  
    - 클래스형 컴퍼넌트, 함수형 컴퍼넌트  
    *리액트는 규정의 틀이 없다..?
# 2. 프로젝트 구성방법  
## (1) 직접 작성
## (2) CRA(Create React App)
## (3) Online Code Tool
    - CodeSandbox
# 3. TypeScript
    - JS Static TypeChecker
    - 자바스크립의 Superset
## (1) 실습준비
### 1) 프로젝트 만들기
> npm init
npm install -D typescript 
### 2) 코드 작성 및 실행
ts 파일을 작성하고 tsx로 컴파일
npx tsc
-npm은 관리
-npx은 프로그램을 실행하는
## (2) 기본타입들
- number
- string
- boolean
- object
- enum
- any
- unknown
- void
- never
- null
- undefined
## (3) Function
- parameter type
- return type
## (4) Union & Intersection
- union 
    + 여러 타입들 중 하나
    + OR(|)  연산자
- Intersection
    +  여러 타입을 하나로
    + and(&) 연산자
## (5) Type Alias & Interface
- Type Alias
- Interface
# 4. React 메뉴얼 설치 
[] ESlint & Prttier: Linter&Formatter
 서로 다른 두개의 프로그램이지만 궁합이 잘 맞아서 대부분 같이 사용한다.

-js코드 작성시 놓치는 부분을 도와주는 툴
-주로 코드컨벤션, 문법적 오류, 포맷팅을 도와준다.
ESlint: [eslint.org](https://eslint.org/) 
        npm init @eslint/config@latest
Prttier: [prettier.io](https://prettier.io/)
        npm install --save-dev --save-exact prettier
eslint-plugin-prettier
        npm install --save-dev eslint-plugin-prettier eslint-config-prettier
        

[] TypeSctipt : Static Typecheker
        [TypeSctipt](https://www.typescriptlang.org/)
        npm install typescript --save-dev

[] Babel : Transpiler
        [Babel](https://babeljs.io/)
        npm install --save-dev @babel/core @babel/cli
        npm install --save-dev babel-loader   
        npm install @babel/preset-env --save-dev     
-최신 문법의 JS를 특정 버전의 JS로 변환해 주는 툴
-현재 작성된 코드가 다양한 환경에서 호환될 수 있도록 도와주는 툴
-특히 리액트에서는 JSX문법을 JS로 변환해주는 역할을 한다.

[] Webpack : bundler 
        [Webpack](https://webpack.js.org/)
        mkdir webpack-demo
        cd webpack-demo
        npm init -y
        npm install webpack webpack-cli --save-dev
        npm install ts-loader --save-dev

-방대해진 JS프로젝트 코드를 최적의 조건으로 전달 할 수 있도록 프로젝트 코드를 모아서 적절한 기준으로 나눠 파일에 담는 역할

[] 리액트
        npm install react react-dom
        npm i -D @types/react @types/react-dom
[] webpack-dev-server

리액트 프로젝트 만드는 명령
npx create-react-app 3_react_auto
타입스크립트를 사용하고 싶다면
npx create-react-app 3_react_auto --template typescript


5. 기본키워드
(1) Virtual DOM
        - 화면에 렌더링되지 않고 메모리에만 존재하는 DOM
        - DOM 변경사항 =>  Virtual DOM => Real DOM
(2) ReactElement
        - Virtaual DOM에 HTML을 그려줄 수 있는 도구
        - React.createElement(type, [props], [...child])
(3) JSX
        - javascript +xml
        - 코드를 줄이고 View를 직관적으로 상상할 수 있게 도움을 준다.
        - 주의할점 및 특징
                Babel을 통해서 JSX->JS로 Transpling이 된다.
                시작과 끝 태그가 반드시 한쌍으로 묶어야 한다.
                반드시 하나의 요소로 표현해야 한다.
                중괄호를 이용해서 JS표현식을 사용할 수 있다.
(4) ReactComponent
        1)  기본동작
                - props
                        외부에서 주입되는 데이터(부모->자식)
                        불변, 수정할 수 없음(부모가 고쳐서 보내는건 가능)
                        함수의 인자와 비슷함
                - state
                        컴퍼넌트 안에서 생성되고, 내부에서만 사용가능한 객체
                        수정가능
                        함수 내 변수와 비슷함
                - Hook API
                        Hook는 컴퍼넌트 외부로 렌더로직을 분리하기 위한 수단으로 로직의 재사용성을 높이며 Function Component적합하다
                        useState
                                [상태값, 상태변경함수] = useState(초기값)
                                -상태변경함수로 상태값을 변경할수 있음
                                -이 변수(상대값)를 출력할때는 최신상태의 변수가 출력된다.
                        useEffect
                                useEffect(함수, [의존성])
                                함수를 리턴(clean-up)
                                        모든  Render마다=>의존성 체크=>clean-up=>useEffect 실행
                                LifeCycle과 연관
                                *class Component LifeCycle   
                                mounting constructor => render => componentDidMount  
                                updating                render => componentDidUpdate
                                unmounting                        componentWillUnmount
                                *Funtion Component LifeCycle
                                mounting Run Function => useEffect 실행
                                updating Run Function => useEffect 실행
                                unmounting              clean-up 실행
                        useMemo
                                리턴하는 값은 값 자체이다. 이 값을 Memoization한다.
                        useCallback
                                리턴하는 값은 함수 자체이다. 이것을 Memoization한다.
                        useReducer
                                const[state, dispatch] = useReducer(함수, 초기값)

*백엔드랑 연결하는 라이브러리 설치: npm install axios