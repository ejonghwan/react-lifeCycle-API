lifeSycle API


###  Mounting ###

constructor  -  처음 만들어질때 먼저 실행되는 함수. 컴포넌트가 가지고 있을 state를 초기 설정한다던지. 만들어지는 과정에서 먼저 해야될 일이 있다면 여기서 처리함

getDeriverdStateFromProps  -  만약에 props로 받은 값을 state에 동기화를 하려면 이걸로 사용하면됨

render  -  어떤 돔을 그릴지 어떤 값을 전달해줄지

componentDidMount  -  외부 라이브러리에서 특정 돔에다 차트를 그려주세요!  네트워크 요청 api ajax 요청을 할때 여기서 처리함. 컴포넌트가 나타난 뒤 어떤 이벤트 실행할때 !! 나타난 시점에 어떤 일을 하겠다!! 



### Updating ###

getDeriverdStateFromProps (마운팅 중복)

shouldComponentUpdate  -  컴포넌트가 업데이트되는 성능을 최적화 시킨다. 부모컴포넌트가 리랜더링 되면 자식 컴포넌트도 다 랜더함수가 실행됨. 이런 과정이 불필요할 때가 있는데 (랜더 버추얼돔에 됨. 랜더 되면서 자식컴포넌트도 업데이트가 안되면 가상돔에만 그리고 실제돔엔 안그림. 근데 버츄얼돔엔 그리니깐 이것조차 낭비일때 사용함^^;;)
이 함수는 true false 를 반환하는데 false면 아래 내용을 실행하지않고 끝나고 true 값을 반환하면 랜더부터 아래를 쭉 실행함.  


getSnapshotBeforeUpdate  -  슈드컴포넌트업데이트가 실행되고 true 반환되면!! 랜더링하고 나서 브라우저에 반영되기 바로 직전 실행되는 함수.  주로 스크롤의 위치. 해당 돔의 크기를 사전에 가져오고 싶다! 할때 이걸 사용함


componentDidUpdate  -  업데이트 되었을 때 호출되는 함수. state가 바꼈을 때 이전의 상태와 지금의 상태가 다르다! 그러면 어떤 작업을 하겠다


### Unmounting ###

componentWillUnmount  -  컴포넌트가 사라지는 과정에서 호출되는 함수.  아까 componentDidMount 에서 이벤트 리스너를 등록했다면, 여기서 제거해주면 됨
