import React from 'react';
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
        <div className="search">
            <input type="text"  placeholder="Search..."/>
            <SearchIcon className="searchIcon"/>
        </div>
        <div className="navItems">
            <div className="item">
            <LanguageIcon className="icon"/>
            English
            </div>
            <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
            </div>
            <div className="item">
                <FullscreenExitIcon className="icon"/>
            </div>
            <div className="item">
                <NotificationsNoneOutlinedIcon className="icon"/>
                <div className="counter">1</div>
            </div>
            <div className="item">
                <ChatBubbleOutlineIcon className="icon"/>
                <div className="counter">1</div>
            </div>
            <div className="item">
                <ListOutlinedIcon className="icon"/>
            </div>
            <div className="avatar">
            <AccountCircleIcon/> 
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default navbar