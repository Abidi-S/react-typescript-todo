import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoListCard from './components/ToDoListCard';
import { ToDo } from './model';

const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const addToList = (e: React.FormEvent) => {
    //to stop page from refreshing when we press go,
    //take event variable 'e' AND
    e.preventDefault();

    if (toDo) {
      setToDoList([...toDoList, {id: Date.now(), toDo, isDone: false }]);
      setToDo("");
    }
  };

  console.log(toDoList);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} addToList={addToList} />
      <ToDoListCard toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
