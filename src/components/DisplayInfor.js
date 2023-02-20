import React from "react";
import "./DisplayInfor.scss";

// class DisplayInfor extends React.Component {
//   render() {
//     // console.log(this.props);
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               // console.log(">>>Check map user: ", user);
//               return (
//                 <div
//                   key={user.id}
//                   id={user.id}
//                   className={+user.age > 30 ? "red" : "green"}
//                 >
//                   <div>My Name is {user.name}</div>
//                   <div>My Age is {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       <span>Delete</span>
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  return (
    <div className="display-infor-container">
      {true && (
        <>
          {listUsers.map((user) => {
            // console.log(">>>Check map user: ", user);
            return (
              <div
                key={user.id}
                id={user.id}
                className={+user.age > 30 ? "red" : "green"}
              >
                <div>My Name is {user.name}</div>
                <div>My Age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    <span>Delete</span>
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
