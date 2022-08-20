// import { Container } from "@mui/system";
import MenuList from "@material-ui/core/MenuList";
import ToDo from "../ToDo/ToDo";
import Paper from "@material-ui/core/Paper";


const ToDos = (props) => {

    const sendDeletedId = (taskId) =>{
        props.getDeleted(taskId)
    }

    return (

        <div style={{margin:'5px'}}>
           
                {props.tasks.map((element) => (
                    <ToDo
                        key={element.id}
                        id={element.id}
                        task={element.task}
                        getDeletedTask = {sendDeletedId}
                        
                    />
                ))}

        </div>
    );

}
export default ToDos;