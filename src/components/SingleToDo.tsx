import React, { useEffect, useRef, useState } from 'react'
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
    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(toDo.toDo)

    const handleDone = (id: number) => {
        //map according to id and check and invert value of isDone prop
        setToDoList(toDoList.map((toDo)=>toDo.id===id?{...toDo, isDone:!toDo.isDone}:toDo));
    };

    const handleDelete = (id:number) => {
        //return everything but the matching id item, henceby "deleting"
        setToDoList(toDoList.filter((toDo) => toDo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setToDoList(toDoList.map((toDo) => (toDo.id===id?{...toDo, toDo:editToDo}:toDo)));
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    //don't completely understand this
    useEffect(() => {
        inputRef.current?.focus()
    }, [edit]);


  return (
    <form className="toDoList_single" onSubmit={(e)=>handleEdit(e, toDo.id)}>
        {
            edit ? (
                <input
                    ref={inputRef}
                    value={editToDo}
                    onChange={(e) => setEditToDo(e.target.value)}
                    className="todos_single-text"/>
            ): toDo.isDone ? (
                <s className="toDoList_single-text">{toDo.toDo}</s>
            ) : (
                <span className="toDoList_single-text">{toDo.toDo}</span>
            )
        }

        <div>
            <span className='icon' onClick={() => {
                //don't really understand the line below
                if(!edit && !toDo.isDone){
                    setEdit(!edit)
                }
            }}>
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