import React from 'react'
import { ToDo } from '../model';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import './styles.css';
//import ToDoListCard from './ToDoListCard';

type Props = {
    toDo: ToDo;
    toDoList: ToDo[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleToDo = ({ toDo, toDoList, setToDoList }: Props) => {
    const handleDone = (id: number) => {
        //map according to id and check and invert value of isDone prop
        setToDoList(toDoList.map((toDo)=>toDo.id===id?{...toDo, isDone:!toDo.isDone}:toDo));
    };

    const handleDelete = (id:number) => {
        //return everything but the matching id item, henceby "deleting"
        setToDoList(toDoList.filter((toDo) => toDo.id !== id));
    };

  return (
    <form className="toDoList_single">
        {
            toDo.isDone ? (
                <s className="toDoList_single-text">{toDo.toDo}</s>
            ) : (
                <span className="toDoList_single-text">{toDo.toDo}</span>
            )
        }

        <div>
            <span className='icon'>
                <AiOutlineEdit />
            </span>
            <span className='icon' onClick={() => handleDelete(toDo.id)}>
                <AiOutlineDelete />
            </span>
            <span className='icon' onClick={()=>handleDone(toDo.id)}>
                <MdDoneOutline />
            </span>
        </div>
    </form>
  )
}

export default SingleToDo;