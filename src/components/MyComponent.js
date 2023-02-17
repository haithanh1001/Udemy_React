
import React from "react";

class MyComponent extends React.Component {
    //JSX cú pháp đặc biệt riêng của React
    //JSX cho phép các bạn viết javascript bên trong code html
    state =  {
        name :'Hai Thanh',
        address : "HCM",
        age: 18
    };
    render(){
        return (
            <div> my first component
                My name is {this.state.name} and i'm from {this.state.address}

            </div>
        );
    }
}

export default MyComponent;