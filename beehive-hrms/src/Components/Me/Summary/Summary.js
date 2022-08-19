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

const Summary = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={10} className="__grids">
          <Card className="__card">
            <h4>To Do List</h4>
          </Card>
        </Grid>
        <Grid xs={20} className="__grids">
          <Card className="__card">
            <h4>Date and Time</h4>
          </Card>
        </Grid>
        <Grid xs={40} className="__grids">
          <Card className="__card">
            <h4>Mark attendance</h4>
          </Card>
          <Container>
          <Snackbar>
            <Alert severity="success">
              This is a success message!
            </Alert>
          </Snackbar>
          </Container>
        </Grid>
        <Grid xs={30} >
          <Card className="__card">
            <h4>Pending Requests</h4>
          </Card>
          <Container>
            <Alert severity="info" icon={<Calender />}>
              Leave Application
            </Alert>
            <Alert severity="warning" icon={<Clock />}>
              Attendance Application
            </Alert>
            <Alert severity="error" icon={<Calender />}>
              Leave Cancellation
            </Alert>
          </Container>
        </Grid>
        <Grid xs={25} spacing={3}>
          <Card className="__card">
            <h4>Actions</h4>
          </Card>

          <Container spacing={3}>
            <Alert severity="info" icon={<Calender />}>
              Apply Leave
            </Alert>
            <Alert severity="info" icon={<Calender />}>
              Regularise Attendance
            </Alert>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Summary;
