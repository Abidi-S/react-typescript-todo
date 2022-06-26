import React, { useRef } from 'react'
import "./styles.css";

interface Props {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    addToList: (e: React.FormEvent) => void;
}

const InputField = ({ toDo, setToDo, addToList }: Props) => {
  /*like wen u say get element by classname, or get element by id */
  const inputRef = useRef<HTMLInputElement>(null);

  return <form className="input" onSubmit={(e) => {
      addToList(e)
      //by adding type, we're able to view all the methods available for us to use
      inputRef.current?.blur();
      }}>
    <input
      ref={inputRef}
      type="input"
      value={toDo}
      onChange={(e)=>setToDo(e.target.value)}
      placeholder="Enter a task"
      className="input_box">
        {/* BEM convention of writing css class names */}
    </input>
    <button className="input_submit" type="submit">Go</button>
  </form>
}

export default InputField