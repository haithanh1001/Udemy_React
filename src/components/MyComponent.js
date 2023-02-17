
import React from "react";

class MyComponent extends React.Component {
    //JSX cú pháp đặc biệt riêng của React
    //JSX cho phép các bạn viết javascript bên trong code html
    state =  {
        name :'Hai Thanh',
        address : "HCM",
        age: 18
    };
    handleClick(event){
        console.log(">>>Click me my button");
        console.log(event);
        console.log(">>>this state: ", this.state);
    }
    handleOnMouseOver(event){
        console.log(event);
    }
    render(){
        return (
            <div> my first component
                My name is {this.state.name} and i'm from {this.state.address}
                {/* <button onClick={(event)=>this.handleClick(event)}>Click me</button> */}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={(event)=>this.handleOnMouseOver(event)} >Hover me</button>
            </div>
        );
    }
}

export default MyComponent;