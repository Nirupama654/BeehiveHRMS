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
              Apply Leave
            </Alert>
            <Alert severity="info" icon={<Calender />}>
              Regularise Attendance
            </Alert>
          </Container>
        </>
    );
}
export default Actions;