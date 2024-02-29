import styles from "./TaskDone.module.scss";
import checked from "../../assets/images/checked.svg";

function TaskDone() {
  return (
    <div className={`d-flex align-items-center ${styles.taskdone}`}>
      <img src={checked} alt="check" />
      <p>Salut</p>
    </div>
  );
}

export default TaskDone;
