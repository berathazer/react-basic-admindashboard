import "./sidebar.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersIcon from "@mui/icons-material/Group";
import ProducstIcon from "@mui/icons-material/ShoppingBag";
import OrdersIcon from "@mui/icons-material/AddShoppingCart";
import DeliveryIcon from "@mui/icons-material/LocalShipping";
import StatsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import SystemIcon from "@mui/icons-material/SettingsSystemDaydream";
import LogsIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { duration, Tooltip } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserLogout } from "../../Stores/AuthStore";
import toast,{Toaster} from "react-hot-toast";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    toast.loading("Cikis Yapiliyor",{duration:1000,position:'top-right'})
    setTimeout(() => {
      localStorage.removeItem("user");
      dispatch(UserLogout());
      navigate("/login");
    }, 1000);
  };
  return (
    <div className="sidebar">
      <Toaster/>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">BeraCorp</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <UsersIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <li>
            <ProducstIcon className="icon" />
            <span>Products</span>
          </li>

          <li>
            <OrdersIcon className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <DeliveryIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <StatsIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SystemIcon className="icon" />
            <span>System Healt</span>
          </li>

          <li>
            <LogsIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ProfileIcon className="icon" />
            <span>Profile</span>
          </li>

          <li onClick={logoutHandler}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <Tooltip title="Turn Light">
          <LightModeIcon className="icon-light" />
        </Tooltip>
        <Tooltip title="Turn Dark">
          <DarkModeIcon className="icon-dark" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
