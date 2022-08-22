import Alert from '@mui/material/Alert'
// import Container from '@material-ui/core/Container';
import './ToDo.css'

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import { Card, Container, Menu, MenuList } from "@mui/material";


const ToDo = (props) => {

    const deleteTask = () =>{
        console.log("deleted")
        
        props.getDeletedTask(props.id);
        console.log(props.id)

    }

    

    return (
        <Alert severity="info" className='task-bar'>
            <div>
            <MenuList>
            <MenuItem >
                {/* <ListItemIcon>
                    <ContentPaste fontSize="small" />
                </ListItemIcon> */}
                <ListItemText>{props.task}</ListItemText>
                {props.children}
                <ListItemIcon >
                <button className='close-btn' onClick={deleteTask}>
                <i class="fa-solid fa-xmark" ></i>
                </button>
                </ListItemIcon>
            </MenuItem>
            </MenuList>
            </div>

        </Alert>


    );

}
export default ToDo;