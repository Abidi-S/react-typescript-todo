import React from 'react'
import "./styles.css";

interface Props {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    addToList: (e: React.FormEvent) => void;
}

const InputField = ({ toDo, setToDo, addToList }: Props) => {
  return <form className="input" onSubmit={addToList}>
    <input type="input"
        value={toDo}
        onChange={
            (e)=>setToDo(e.target.value)
        }
        placeholder="Enter a task"
        className="input_box">
        {/* BEM convention of writing css class names */}
    </input>
    <button className="input_submit" type="submit">Go</button>
  </form>
}

export default InputField