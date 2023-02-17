
import React from "react";

class MyComponent extends React.Component {
    //JSX cú pháp đặc biệt riêng của React
    //JSX cho phép các bạn viết javascript bên trong code html
    state =  {
        name :'Hai Thanh',
        address : "HCM",
        age: 18
    };
    handleClick = (event) =>{
        console.log(">>>Click me my button");
        console.log(">>>this state: ", this.state);
        this.setState({
            name: "Eric",
            age: Math.floor(Math.random()*100+1),
        })
        console.log(">>>this state: ", this.state);
    }
    render(){
        return (
            <div> my first component
                My name is {this.state.name} and my age is {this.state.age}
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;