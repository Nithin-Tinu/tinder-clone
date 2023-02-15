import React from 'react';
import PersonIcon from '@mui/icons-material/PersonOutline';
import ChatIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import './Header.css'

export default function Header() {
  return (
    <div className='header-icon'>
      <IconButton>
        <PersonIcon fontSize='large' />
      </IconButton>
      <img className='img-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzGy8xDaG-q63yAP6oIScPZqB5a1efvDYhw904bU9fHWez0zxkxhWvIJRixh8A5sFMfA&usqp=CAU" alt="" />
      <IconButton>
        <ChatIcon fontSize='large' />
      </IconButton>
    </div>
  )
}
