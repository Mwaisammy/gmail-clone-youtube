import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import { Apps, ArrowDropDown, Notifications, Search } from '@mui/icons-material';


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton />
            <MenuIcon />
            <IconButton />
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="" />
        </div>

        <div className="header__middle">
            <Search /> 
            <input type="text" placeholder='Search mail'/>
            <ArrowDropDown /> 
        </div>

        <div className="header__right">
            <IconButton />
                <Apps/>
                <IconButton />
                <IconButton />
                <Notifications/>
                <Avatar/>
                <IconButton />
        </div>
    </div>
  )
}

export default Header