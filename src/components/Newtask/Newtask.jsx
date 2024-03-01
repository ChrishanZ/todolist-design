import { useState } from "react";

import styles from "./Newtask.module.scss";
import check from "../../assets/images/check.svg";

function Newtask({ setTodolist, todolist }) {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setNewTask(value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newTask.length > 2) {
      setTodolist([
        ...todolist,
        {
          task: newTask,
          done: false,
        },
      ]);
      setNewTask("");
    }
  };

  return (
    <div className={styles.newtask}>
      <img src={check} alt="check" />
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo…"
      />
    </div>
  );
}

export default Newtask;
