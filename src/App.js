import React, {Component} from 'react';
import MyComponent from "./MyComponent";
class App extends Component {

    state = {
        counter: 1,
        error: false
    }

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
        // console.log(this.myDiv.getBoundingClientRect().height)
    }


    //에러가 날 자식의 부모 컴포넌트에서 설정. state에 에러 초기값 설정하고, componentDidCatch에서 setState 함수로 상태변경해주면 랜더할때 if문으로 에러 메시지작성
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true,
        })
        //API 통해서 서버로 오류 내용 날리기
    }


    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }



    render() {

        //여기부분 에러메시지 작성. componentDidCatch가 에러를 잡았을때 setState가 state.error값을 true로 바꾸고 아래부분 if가 true가 되면서 리턴문이 변경됨
        if(this.state.error) {
            return (
                <div>에러가 났어요~!!</div>
            )
        }
    return (
        <div ref={ ref => this.myDiv = ref }>
            {this.state.counter < 10 && <MyComponent value={this.state.counter}/>}
            <button onClick={this.handleClick}>click me!</button>
        </div>
    )
  }
}



export default App;
