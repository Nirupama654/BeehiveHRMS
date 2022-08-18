import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import classes from './MeNav.module.css'

const MeNav = () =>{
    return(
       <>
       Navbar
       <div className={classes.navbar}>
        <ul>
            <li><i class="fa-solid fa-chart-column"></i>Summary</li>
            <li><i class="fa-solid fa-clock"></i>Attendance</li>
            <li><i class="fa-solid fa-calendar-days"></i>Leave</li>
            <li><i class="fa-solid fa-money-bill-1"></i>Payroll</li>
        </ul>
       </div>
       </>
    );

}

export default MeNav;