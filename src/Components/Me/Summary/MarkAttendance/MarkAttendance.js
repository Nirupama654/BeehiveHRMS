import { Card, MenuItem, MenuList } from "@mui/material";
import React, { useState } from "react";
import Clock from 'react-live-clock'
import './MarkAttendance.css'
import Calender from "../../../icons/Calender";
// import { Button } from "@material-ui/core";
const MarkAttendance = () => {

    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');

    var d = new Date();
    let count = d.getDay();
    let day = ""

    switch (count) {
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 7:
            day = "Sunday"
            break;

        default:
            break;
    }

    const month = d.toLocaleString('en-US', { month: 'long' });
    const date = d.toLocaleString('en-US', { day: '2-digit' });
    const year = d.getFullYear();

    const inTimeClickHandler = () => {
        let currentDate = new Date();
        let time = currentDate.toLocaleTimeString();
        setTimeIn(time);
        console.log(timeIn)
    }
    const outTimeClickHandler = () => {
        let currentDate = new Date();
        let time = currentDate.toLocaleTimeString();
        setTimeOut(time);
        console.log(timeOut)
    }

    let timeInElement = '';
    let timeOutElement = '';

    if(timeIn.trim().length === 0){
        timeInElement =   <button className="outlined" onClick={inTimeClickHandler}>Time In</button>;
    }
    else{
        timeInElement = <div className="timeElement">Time In : {timeIn}</div>
        if(timeOut.trim().length === 0){
        timeOutElement = <button className="outlined" onClick={outTimeClickHandler}>Time Out</button>
        }
        else{
            timeOutElement = <div className="timeElement">Time out : {timeOut}</div>
        }
    }

    return (
        <>
            <Card sx={{
                padding : '1rem',
                height: '50vh',
                width: '50vw',
                backgroundColor: '#915F6D',
                color: 'white',
                borderRadius: '10px'
            }}>
                <h4 className="__clock_header">Mark attendance</h4>
                <hr></hr>
                <div className="clock_card">
                    <MenuList>
                        <MenuItem><span className="cal_box"><Calender /></span></MenuItem>
                        <MenuItem>
                            <div>
                                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />
                            </div>
                        </MenuItem>
                    </MenuList>
                    <MenuList>
                        <div >{day}, {date} {month} {year}</div>
                    </MenuList>
                </div>
                <MenuList>
                    <MenuItem>
                    {/* {(timeIn.trim().length === 0) ? 
                        <button className="outlined" onClick={inTimeClickHandler}>Time In</button>
                        :
                        <div>{timeIn}</div>
                    }

                    {(timeIn.trim().length === 0) ? <div></div>
                    :
                    (timeOut.trim().length === 0) ? 
                    <button className="outlined" onClick={outTimeClickHandler}>Time Out</button>
                    :
                    {timeOut}
                    
                    }
                        
                       { } */}
                       {timeInElement}
                       {timeOutElement}
                    </MenuItem>
                </MenuList>
            </Card>
        </>
    );

}
export default MarkAttendance;