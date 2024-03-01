import { useState } from "react";

import styles from "./Todolist.module.scss";
import Newtask from "../Newtask/Newtask";
import Tasks from "../Tasks/Tasks";

function Todolist() {
  const [todolist, setTodolist] = useState([]);

  return (
    <div className={`${styles.todolist}`}>
      <div className={styles.title}>
        <h1>TODO</h1>
      </div>

      <Newtask todolist={todolist} setTodolist={setTodolist} />
      <Tasks todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}

export default Todolist;
