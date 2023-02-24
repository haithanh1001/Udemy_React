import { useState } from "react";
import SideBar from "./Sidebar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollapsed(!collapsed)} />
        Content go here!
      </div>
    </div>
  );
};

export default Admin;
