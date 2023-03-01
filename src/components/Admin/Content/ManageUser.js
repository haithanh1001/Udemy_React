import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataUser, setDataUser] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    const res = await getAllUsers();
    // console.log("Data: ", res);
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const resetUserData = () => {
    setDataUser({});
  };

  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataUser(user);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add New User
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          />
        </div>
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataUser={dataUser}
          resetUserData={resetUserData}
        />
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};
export default ManageUser;
