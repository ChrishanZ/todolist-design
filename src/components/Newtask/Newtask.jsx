import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Newtask.module.scss";
import check from "/images/check.svg";

function Newtask({ setTodolist, todolist }) {
  const notifyError = () =>
    toast.error("Each task must contain more than two characters.", {
      position: "top-right",
      theme: "light",
    });

  const notifySuccess = () =>
    toast.success("Task successfully added.", {
      position: "top-right",
      theme: "light",
    });

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
          id: crypto.randomUUID(),
          task: newTask,
          done: false,
        },
      ]);
      setNewTask("");
      notifySuccess();
    } else if (event.key === "Enter" && newTask.length < 3) {
      notifyError();
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
