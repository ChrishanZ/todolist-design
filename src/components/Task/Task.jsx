import styles from "./Task.module.scss";
import check from "../../assets/images/check.svg";
import checked from "../../assets/images/checked.svg";

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

  return (
    <div
      className={`d-flex align-items-center ${
        done ? styles.taskdone : styles.task
      }`}
      onClick={() => toggleTask(id)}
    >
      <img src={done ? checked : check} alt="check" />
      <p>{task}</p>
    </div>
  );
}

export default Task;
