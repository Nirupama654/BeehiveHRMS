import React from "react";
import "./MeNav.css";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Link from "@mui/material/Link";
import { Container } from "@mui/system";
import Calender from "../../icons/Calender";
import Clock from "../../icons/Clock";
import Chart from "../../icons/Chart";
import Money from "../../icons/Money";
import { Card } from "@mui/material";
import CrossCalendar from "../../icons/CrossCalendar";
import Chats from "../../icons/Chats";
import Pollicon from "../../icons/Pollicon";
import PaperIcon from "../../icons/PaperIcon";
import '../../../App.css'

const MeNav = () => {
  return (
    <Container spacing={2} maxWidth="xl" >
      <Card
      sx = 
      {{
        backgroundColor : "#313131"
        }}
      >
      <Tabs aria-label="icon label tabs example" maxWidth={false} >
        <Tab sx={{color : "white"}} icon={<Chart />} label="Summary" href="/summary" />
        <Tab sx={{color : "white"}} icon={<CrossCalendar />} label="Leave" href="/leave" />
        <Tab sx={{color : "white"}} icon={<Calender />} label="Calendar" href="/myCalendar" />
        <Tab sx={{color : "white"}} icon={<Money />} label="Payroll" href="/payroll" />
        <Tab sx={{color : "white"}} icon={<Clock />} label="Attendance" href="/attendance" />
        <Tab sx={{color : "white"}} icon={<Chats />} label="Grievance" href="/grievance" />
        <Tab sx={{color : "white"}} icon={<Pollicon />} label="Poll" href="/poll" />
        <Tab sx={{color : "white"}} icon={<PaperIcon />} label="Survey" href="/survey" />
      </Tabs>
      </Card>
    </Container>
  );
};

export default MeNav;
