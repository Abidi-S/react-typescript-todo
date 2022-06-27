import React from 'react'
import { ToDo } from '../model';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
type Props = {
    toDo: ToDo;
    toDoList: ToDo[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleToDo = ({ toDo, toDoList, setToDoList }: Props) => {
  return (
    <form className="toDoList_single">
        <span className="toDoList_single-text">
            {toDo.toDo}
        </span>
        <div>
            <span className='icon'>
                <AiOutlineEdit />
            </span>
            <span className='icon'>
                <AiOutlineDelete />
            </span>
            <span className='icon'>
                <MdDoneOutline />
            </span>
        </div>
    </form>
  )
}

export default SingleToDo;