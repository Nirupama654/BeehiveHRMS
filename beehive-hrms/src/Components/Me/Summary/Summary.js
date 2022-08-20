import React from "react";
import classes from "./Summary.css";
import {
  Card,
  Grid,
  Box,
  Container,
  Alert,
  Snackbar,
  Paper,
} from "@mui/material";
import Calender from "../../icons/Calender";
import Clock from "../../icons/Clock";
import ToDoList from "./ToDoList/ToDoList";
import DateAndTime from "./DateAndTime/DateAndTime";
import MarkAttendance from "./MarkAttendance/MarkAttendance";
import PendingRequests from "./PendingRequests/PendingRequests";
import Actions from "./Actions/Actions";

const Summary = () => {
  return (
    <Container >
      <Grid container spacing={2}>
        <Grid xs={20} className="__grids">
          <ToDoList/>
        </Grid>
        <Grid xs={20} className="__grids">
          <DateAndTime/>
        </Grid>
        <Grid xs={40} className="__grids">
          <MarkAttendance/>
        </Grid>
        <Grid xs={30} className="__grids">
          <PendingRequests/>
        </Grid>
        <Grid xs={25} spacing={3} className="__grids">
          <Actions/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Summary;
