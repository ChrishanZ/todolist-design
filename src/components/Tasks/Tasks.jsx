import styles from "./Tasks.module.scss";
import Task from "../Task/Task";

function Tasks() {
  return (
    <div className={` ${styles.tasks}`}>
      <Task />
      <div className={`${styles.footer}`}>
        <p className={styles.text}>5 tâches restantes</p>
        <div className={`d-flex ${styles.states}`}>
          <p>Toutes</p>
          <p>Actives</p>
          <p>Terminées</p>
        </div>
        <p className={`d-flex justify-content-end`}>Effacer terminées</p>
      </div>
    </div>
  );
}

export default Tasks;
