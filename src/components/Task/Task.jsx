import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Task.module.scss";
import check from "../../assets/images/check.svg";
import checked from "../../assets/images/checked.svg";
import cross from "../../assets/images/cross.svg";

function Task({ task, done, todolist, setTodolist, id }) {
  const toggleTask = (id) => {
    const updatedList = todolist.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    setTodolist(updatedList);
  };

  const toggleDelete = (id) => {
    const updatedList = todolist.filter((item) => item.id !== id);
    setTodolist(updatedList);
  };

  const notifySuccess = () =>
    toast.success("Tasks as been deleted.", {
      position: "top-right",
      theme: "light",
    });

  return (
    <div
      className={`d-flex align-items-center ${
        done ? styles.taskdone : styles.task
      }`}
      onClick={(e) => {
        e.stopPropagation();
        toggleTask(id);
      }}
    >
      <img src={done ? checked : check} alt="check" />
      <p>{task}</p>
      <img
        src={cross}
        onClick={(e) => {
          e.stopPropagation();
          toggleDelete(id);
          notifySuccess();
        }}
        className={styles.cross}
        alt="cross"
      />
    </div>
  );
}

export default Task;
