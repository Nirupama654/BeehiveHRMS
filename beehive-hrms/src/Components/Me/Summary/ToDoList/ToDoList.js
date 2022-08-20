import { Card, Container } from "@mui/material";
import { useState } from "react";
import AddToDo from "./AddToDo/AddToDo";
import ToDos from "./ToDos/ToDos";
const ToDoList = () => {

    let arr = [
        {
            id: "t1",
            task: "Learn React"
        },
        {
            id: "t2",
            task: "Make Beehive Project"
        },
        {
            id: "t3",
            task: "Attend a Meeting"
        }]

    const [list, setList] = useState(arr);

    const addTask = (task) => {

        setList((prevList) => {
            const updatedTask = [...prevList]
           updatedTask.unshift({ id: Math.random().toString(), task:task });
           return updatedTask;
        })
        
    }

    const getDeletedTask = (taskId) =>{
        setList(prevTasks => {
            const updatedTasks = prevTasks.filter(task => task.id !== taskId);
            return updatedTasks;
          });
    }

    return (
        <>
            <Card className="__card">
                <h4>To Do List</h4>
            </Card>
            <Container maxHeight="lg">
                <Container>
                    <ToDos tasks={list} getDeleted={getDeletedTask} />
                </Container>
                <Container>
                    <AddToDo addTask={addTask} />
                </Container>

            </Container>
        </>
    );
}
export default ToDoList;