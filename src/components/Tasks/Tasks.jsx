import styles from "./Tasks.module.scss";
import Task from "../Task/Task";

function Tasks({ todolist }) {
  return (
    <div className={` ${styles.tasks}`}>
      {todolist.map((item, key) => {
        return <Task key={key} task={item.task} done={item.done} />;
      })}

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
