import Header from "../common/header/Header.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import Center from "./center/Center.jsx";
import "./tasks.css";

function Tasks() {
  return (
    <div className="tasks-container">
      <Header />
      <div className="tasks-body">
        <div className="tasks-sidebar">
          <Sidebar />
        </div>
        <div className="tasks-center">
          <Center />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
