
import './App.css';
import React from 'react';
import MeMainPage from './Components/Me/MeMainPage/MeMainPage'
import { Route } from "react-router-dom";
import Summary from './Components/Me/Summary/Summary';
import Attendance from './Components/Me/Attendance/Attendance';
import Payroll from './Components/Me/Payroll/Payroll'
import Leave from './Components/Me/Leave/Leave'
import Grievance from './Components/Me/Grievance/Grievance';
import MyCalendar from './Components/Me/MyCalendar/MyCalendar';
import Poll from './Components/Me/Poll/Poll';
import Survey from './Components/Me/Survey/Survey';


function App() {
  return (
    <>
    <MeMainPage/>
    <Route path="/summary">
      <Summary/>
    </Route>
    <Route path="/leave">
      <Leave/>
    </Route>
    <Route path="/myCalendar">
      <MyCalendar/>
    </Route>
    <Route path="/payroll">
      <Payroll/>
    </Route>
    <Route path="/attendance">
      <Attendance/>
    </Route>
    <Route path="/grievance">
      <Grievance/>
    </Route>
    <Route path="/poll">
      <Poll/>
    </Route>
    <Route path="/survey">
      <Survey/>
    </Route>
    </>
  );
}

export default App;
