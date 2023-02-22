import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listUsers.length == 0) {
      alert("Oh no!!!");
    }
    console.log(">>call me effect");
  }, [listUsers]);

  useEffect(() => {
    console.log(">>call me effect");
  }, []);

  console.log(">>>call me render");
  return (
    <div className="display-infor-container">
      <div>
        <button onClick={() => handleShowHideListUser()}>
          <span>
            {isShowHideListUser === true
              ? "Hide List Users"
              : "Show List Users"}
          </span>
        </button>
      </div>
      {isShowHideListUser && (
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
