import React from "react";

class DisplayInfor extends React.Component{
    render(){
        let {name,age} = this.props
        return (
            <div>
                <div>My Name is {name}</div>
                <div>My Age is {age}</div>
            </div>
        )
    }
}

export default DisplayInfor;