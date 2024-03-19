import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Tasks.module.scss";
import Task from "../Task/Task";

function Tasks({ todolist, setTodolist }) {
  const [filter, setFilter] = useState("all");

  let remainingTodos = todolist.filter((x) => x.done === false).length;

  const handleClear = () => {
    const todolistCleared = todolist.filter((x) => x.done === false);
    setTodolist(todolistCleared);
    notifySuccess();
  };

  const notifySuccess = () =>
    toast.success("All completed tasks has been removed.", {
      position: "top-right",
      theme: "light",
    });

  return (
    <div className={` ${styles.tasks}`}>
      {todolist
        .filter((x) =>
          filter === "all"
            ? x
            : filter === "active"
            ? x.done === false
            : filter === "completed"
            ? x.done === true
            : null
        )
        .map((item) => {
          return (
            <Task
              key={item.id}
              id={item.id}
              task={item.task}
              done={item.done}
              todolist={todolist}
              setTodolist={setTodolist}
            />
          );
        })}

      <div className={`${styles.footer}`}>
        <p className={styles.text}>{remainingTodos} item(s) left</p>
        <div className={`d-flex ${styles.states}`}>
          <p
            onClick={() => {
              setFilter("all");
            }}
            className={filter === "all" ? styles.active : null}
          >
            All
          </p>
          <p
            onClick={() => {
              setFilter("active");
            }}
            className={filter === "active" ? styles.active : null}
          >
            Active
          </p>
          <p
            onClick={() => {
              setFilter("completed");
            }}
            className={filter === "completed" ? styles.active : null}
          >
            Completed
          </p>
        </div>
        <p onClick={handleClear} className={`d-flex justify-content-end`}>
          Clear completed
        </p>
      </div>
      <div className={`justify-content-center ${styles.statesMobile}`}>
        <p
          onClick={() => {
            setFilter("all");
          }}
          className={filter === "all" ? styles.active : null}
        >
          All
        </p>
        <p
          onClick={() => {
            setFilter("active");
          }}
          className={filter === "active" ? styles.active : null}
        >
          Active
        </p>
        <p
          onClick={() => {
            setFilter("completed");
          }}
          className={filter === "completed" ? styles.active : null}
        >
          Completed
        </p>
      </div>
    </div>
  );
}

export default Tasks;
