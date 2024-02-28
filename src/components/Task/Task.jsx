import styles from "./Task.module.scss";
import check from "../../assets/images/check.svg";

function Task() {
  return (
    <div className={`d-flex align-items-center ${styles.task}`}>
      <img src={check} alt="check" />
      <p>Salut</p>
    </div>
  );
}

export default Task;
