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
              Leave Application
            </Alert>
            <Alert severity="warning" icon={<Clock />}>
              Attendance Application
            </Alert>
            <Alert severity="error" icon={<Calender />}>
              Leave Cancellation
            </Alert>
          </Container>
        </>
    );

}
export default PendingRequests;