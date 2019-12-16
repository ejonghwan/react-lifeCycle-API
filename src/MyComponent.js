import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        value: 0,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            }
        }
        return null
    }

    //특정 조건에 따라 랜더링을 막음. 10을 랜더링 안하고 11로 넘김
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.value === 10) return false;
        return true;
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== prevProps.value)
            console.log('value 값이 바뀌었다!!', this.props.value)
    }

    componentWillUnmount() {
        console.log('Good Bye');
    }




    render() {
        return (
            <div>
                {this.props.missing}
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        )
    }
}

export default MyComponent;