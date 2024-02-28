import styles from "./Todolist.module.scss";
import check from "../../assets/images/check.svg";

function Todolist() {
  return (
    <div className={`${styles.todolist}`}>
      <div className={styles.title}>
        <h1>TODO</h1>
      </div>
      <div className={styles.newTask}>
        <img src={check} alt="check" />
        <input type="text" placeholder="Créer une nouvelle  tâche..." />
      </div>

      <div className={` ${styles.tasks}`}>
        <div className={`d-flex align-items-center ${styles.task}`}>
          <img src={check} alt="check" />
          <p>Salut</p>
        </div>
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
    </div>
  );
}

export default Todolist;
