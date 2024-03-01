import styles from "./Task.module.scss";
import check from "../../assets/images/check.svg";
import checked from "../../assets/images/checked.svg";

function Task({ task, done }) {
  return (
    <div
      className={`d-flex align-items-center ${
        done ? styles.taskdone : styles.task
      }`}
    >
      <img src={done ? checked : check} alt="check" />
      <p>{task}</p>
    </div>
  );
}

export default Task;
