import React from 'react'
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import "./styles.css";

interface Props{
    toDoList: ToDo[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
const ToDoListCard = ({ toDoList, setToDoList}: Props) => {
  return (
    <div className="toDoList">
        {toDoList.map(toDo => (
            <SingleToDo
                toDo={toDo}
                key={toDo.id}
                toDoList={toDoList}
                setToDoList={setToDoList}
            />
            //<li>{toDo.toDo}</li>
        ))}
    </div>
  )
}

export default ToDoListCard;