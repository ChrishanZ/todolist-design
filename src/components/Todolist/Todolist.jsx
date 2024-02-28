import styles from "./Todolist.module.scss";
import Newtask from "../Newtask/Newtask";
import Tasks from "../Tasks/Tasks";

function Todolist() {
  return (
    <div className={`${styles.todolist}`}>
      <div className={styles.title}>
        <h1>TODO</h1>
      </div>

      <Newtask />
      <Tasks />
    </div>
  );
}

export default Todolist;
