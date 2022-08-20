import { Button, Container } from "@material-ui/core";
import { useState } from "react";
import './AddToDo.css'

const AddToDo = (props) => {

    const [enteredTask, setEnteredTask] = useState('');

    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value)
    }

    const submitTask = (event) => {
        event.preventDefault();
        props.addTask(enteredTask);
        setEnteredTask('');
    }



    return (

        <Container>
            <form onSubmit={submitTask}>
                <div className="new-task__controls">
                    <div className="new-task__control">
                        <label>Task</label>
                        <input
                            type="text"
                            value={enteredTask}
                            onChange={taskChangeHandler}
                        />

                    <button type="submit" className="btn">Submit</button>
                    </div>
                </div>
            </form>
        </Container>


    );

}
export default AddToDo;