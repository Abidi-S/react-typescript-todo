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
    <div className="container">

      <div className="toDoList">
        <span className="toDoList_heading">
          Active Tasks
        </span>
        {toDoList.map(toDo => (
          <SingleToDo
            toDo={toDo}
            key={toDo.id}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        ))}
      </div>

      <div className='toDoList remove'>
        <span className="toDoList_heading">
          Completed Tasks
        </span>
        {toDoList.map(toDo => (
          <SingleToDo
            toDo={toDo}
            key={toDo.id}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        ))}

      </div>
    {/* <div className="toDoList">
        {toDoList.map(toDo => (
            <SingleToDo
                toDo={toDo}
                key={toDo.id}
                toDoList={toDoList}
                setToDoList={setToDoList}
            />
            //<li>{toDo.toDo}</li>
        ))} */}
    </div>
  )
}

export default ToDoListCard;