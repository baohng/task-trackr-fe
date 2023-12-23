import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fi-rr-layout-fluid"></i>
      </div>
      <div className="header-branch">
        <label className="header-label">Task-Trackr</label>
      </div>
      <div className="header-center">
        <div className="header-search">
          <i className="fi-rr-search"></i>
          <input placeholder="Search..." />
        </div>

        <div className="header-profile">
          <div className="header-options">
            <i className="fi-rr-menu-dots"></i>
          </div>
          <img
            className="header-avatar"
            src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
