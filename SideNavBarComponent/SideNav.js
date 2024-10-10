import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
} from "react-pro-sidebar";
import { FaHeart, FaGem, FaList } from "react-icons/fa"; // Import icons
import "./SideNav.css"; // Import custom CSS

const SideNav = () => {
  return (
    <ProSidebarProvider>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar className="sidebar">
          <Menu>
            {/* Dashboard with icon */}
            <MenuItem icon={<FaGem />} className="menu-item">
              Dashboard
            </MenuItem>

            {/* Employee SubMenu */}
            <SubMenu title="Employee" icon={<FaList />} className="menu-item">
              {/* Child Menu Items */}
              <MenuItem>Employee Details</MenuItem>
              <MenuItem>Present Employees</MenuItem>
              <MenuItem>Absent Employees</MenuItem>
              <MenuItem>Current Employees</MenuItem>
            </SubMenu>

            {/* Favorites with an icon */}
            <MenuItem icon={<FaHeart />} className="menu-item">
              Favorites
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </ProSidebarProvider>
  );
};

export default SideNav;
