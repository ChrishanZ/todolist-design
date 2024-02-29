import styles from "./Newtask.module.scss";
import check from "../../assets/images/check.svg";

function Newtask() {
  return (
    <div className={styles.newtask}>
      <img src={check} alt="check" />
      <input type="text" placeholder="Create a new todo…" />
    </div>
  );
}

export default Newtask;
