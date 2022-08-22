import { Card,Container,Alert, } from "@mui/material";
import Calender from "../../../icons/Calender";

const Actions = () =>{

    return(
        <>
        <Card className="__card">
            <h4>Actions</h4>
          </Card>

          <Container spacing={3}>
            <Alert severity="info" icon={<Calender />}>
              <a href="/">Apply Leave</a>
            </Alert>
            <Alert severity="info" icon={<Calender />}>
              <a href="/">Regularise Attendance</a>
            </Alert>
          </Container>
        </>
    );
}
export default Actions;