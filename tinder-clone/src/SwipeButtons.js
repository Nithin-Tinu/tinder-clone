import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function SwipeButtons() {
    return (
        <div className='swipe-buttons'>
            <IconButton className='MuiIconButtons'>
                <ReplayIcon fontSize='large' className='icon-replay' />
            </IconButton >
            <IconButton className='MuiIconButtons'>
                <KeyboardDoubleArrowLeftIcon fontSize='large' className='icon-lr' />
            </IconButton >
            <IconButton className='MuiIconButtons'>
                <FavoriteBorderIcon fontSize='large' className='icon-like' />
            </IconButton>
            <IconButton className='MuiIconButtons'>
                <KeyboardDoubleArrowRightIcon fontSize='large' className='icon-lr' />
            </IconButton>
            <IconButton className='MuiIconButtons'>
                <CloseIcon fontSize='large' className='icon-close' />
            </IconButton>

        </div>
    )
}
