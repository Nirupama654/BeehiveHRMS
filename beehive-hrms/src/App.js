
import './App.css';
import React from 'react';
import MeMainPage from './Components/Me/MeMainPage/MeMainPage'
import { Route } from "react-router-dom";
import Summary from './Components/Me/Summary/Summary';
import Attendance from './Components/Me/Attendance/Attendance';
import Payroll from './Components/Me/Payroll/Payroll'
import Leave from './Components/Me/Leave/Leave'


function App() {
  return (
    <>
    <MeMainPage/>
    <Route path="/summary">
      <Summary/>
    </Route>
    <Route path="/attendance">
      <Attendance/>
    </Route>
    <Route path="/payroll">
      <Payroll/>
    </Route>
    <Route path="/leave">
      <Leave/>
    </Route>
    </>
  );
}

export default App;
