import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <div className="logo">adminDash.</div>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icons"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <PersonOutlineIcon className="icons"/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className="icons"/>
                    <span>Products</span>
                </li>
                <li>
                    <BorderColorIcon className="icons"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icons"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className="icons"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icons"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartIcon className="icons"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className="icons"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icons"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icons"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icons"/>
                    <span>log Out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
        

    </div>
  )
}

export default Sidebar