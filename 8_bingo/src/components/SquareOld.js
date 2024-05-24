import React, {Component} from 'react'
import './Square.css'

export default class square extends Component{

    constructor(props){
        //생성자안에서도 부모가 준 probs를 쓸수있게
        super(props);
        state = {value:null}
    }
    //화면에 그려지는 역할을 하는 render함수
    render() {
        return(
            <button className='square'
                    //onClick={()=>this.setState({value: 'X'})}>
                    onClick={()=>this.props.onClick()}>
                {/* 부모가 자식에게 데이터를 전달할때 */}
                {this.props.value}
            </button>
        )
    };
}