import { Card,Container,Alert } from "@mui/material";
import Calender from "../../../icons/Calender";
import Clock from "../../../icons/Clock";

const PendingRequests = () =>{

    return(
        <>
        <Card className="__card">
            <h4>Pending Requests</h4>
          </Card>
          <Container>
            <Alert severity="info" icon={<Calender />}>
              <a href="/">Leave Application</a>
            </Alert>
            <Alert severity="warning" icon={<Clock />}>
              <a href="/">Attendance Application</a>
            </Alert>
            <Alert severity="error" icon={<Calender />}>
              <a href="/">Leave Cancellation</a>
            </Alert>
          </Container>
        </>
    );

}
export default PendingRequests;