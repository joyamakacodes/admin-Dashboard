import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MonetizationOnOutlined } from '@mui/icons-material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';





const Widget = ( {type}) => {

  let data;
  const amount= 100;
  const diff= 20;
  switch(type){
    case "user": 
    data ={
      title: "USER",
      isMoney: false,
      link: 'See all users',
      icon: <PersonOutlinedIcon className='icon' style={{color: "crimson", backgroundColor:"rgb(255, 0, 0, 0.2)"}}/>,
    };
    break;
    case "order": 
    data ={
      title: "ORDER",
      isMoney: false,
      link: 'View all orders',
      icon: <ShoppingCartOutlinedIcon className='icon' style={{color: "goldenrod", backgroundColor:"rgb(218, 165, 32, 0.2)"}}/>,
    };
    break;
    case "earning": 
    data ={
      title: "EARNING",
      isMoney: true,
      link: 'View net earnings',
      icon: <MonetizationOnOutlined className='icon' style={{color: "green", backgroundColor:"rgb(0, 128, 0, 0.2)"}}/>,
    };
    break;
    case "balance": 
    data ={
      title: "BALANCE",
      isMoney: true,
      link: 'See details',
      icon: <AccountBalanceWalletOutlinedIcon  className='icon' style={{color: "green", backgroundColor:"rgb(128, 0, 128, 0.2)"}}/>,
    };
    break;
    default:
    break;

  }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon/>{diff}%</div>
            {data.icon} 
        </div>
    </div>
  )
}

export default Widget