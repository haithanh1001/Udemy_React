import ModalCreateUser from "./ModalCreateUser";
const ManageUser = (props) => {
  return (
    <div>
      <div className="manage-user-container">
        <div className="title">Manage User</div>
        <div className="users-content">
          <div></div>
          <button>Add New User</button>
        </div>
        <div>
          Table Users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
