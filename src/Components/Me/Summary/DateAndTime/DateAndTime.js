import { Card, Container, Grid, Paper, Box } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Clock from "../../../icons/Clock";
import './DateAndTime.css'
const DateAndTime = () => {

    var d = new Date();
    d.setDate(d.getDate() - 1);
    let count = d.getDay();
    let day = ""

    switch (count) {
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 7:
            day = "Sunday"
            break;

        default:
            break;
    }

    const month = d.toLocaleString('en-US', { month: 'long' });
    const date = d.toLocaleString('en-US', { day: '2-digit' });
    const year = d.getFullYear();

    return (
        <>
            <Card className="__card">
                <h4>Yesterday {day}, {date} {month} {year}</h4>
            </Card>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 150,
                        height: 100,
                    },
                }}
            >
                <Paper elevation={2}
                sx={{
                    display: 'flex',
                    flexDirection : 'column',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: 50,
                        height: 50,
                    },
                }}>
                    <Paper>
                    <i class="fa-solid fa-clock fa-lg clock-blue"></i>
                    </Paper>
                    <Paper><p>In Time</p></Paper>
                </Paper>
                <Paper elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection : 'column',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: 50,
                        height: 50,
                    },
                }}
                >
                    <Paper>
                    <i class="fa-solid fa-clock fa-lg clock-red"></i>
                    </Paper>
                    <Paper
                    ><p>Out Time</p></Paper>
                </Paper>
            </Box>
        </>
    );

}
export default DateAndTime;