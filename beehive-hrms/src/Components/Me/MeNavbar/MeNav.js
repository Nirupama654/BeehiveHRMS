import React from "react";
import classes from "./MeNav.module.css";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Link from "@mui/material/Link";
import { Container } from "@mui/system";
import Calender from "../../icons/Calender";
import Clock from "../../icons/Clock";
import Chart from "../../icons/Chart";
import Money from "../../icons/Money";
import { Card } from "@mui/material";

const MeNav = () => {
  return (
    <Container spacing={2}>
      <Card>
      <Tabs aria-label="icon label tabs example">
        <Tab icon={<Chart />} label="Summary" href="/summary" />
        <Tab icon={<Clock />} label="Attendance" href="/attendance" />
        <Tab icon={<Calender />} label="Leave" href="/leave" />
        <Tab icon={<Money />} label="Payroll" href="/payroll" />
      </Tabs>
      </Card>
    </Container>
  );
};

export default MeNav;
