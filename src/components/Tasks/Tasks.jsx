import styles from "./Tasks.module.scss";
import Task from "../Task/Task";
import TaskDone from "../TaskDone/TaskDone";

function Tasks() {
  return (
    <div className={` ${styles.tasks}`}>
      <Task />
      <Task />
      <TaskDone />

      <div className={`${styles.footer}`}>
        <p className={styles.text}>5 items left</p>
        <div className={`d-flex ${styles.states}`}>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p className={`d-flex justify-content-end`}>Clear completed</p>
      </div>
    </div>
  );
}

export default Tasks;
