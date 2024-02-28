import styles from "./Content.module.scss";
import Todolist from "../../components/Todolist/Todolist";
import bgDesktopLight from "../../assets/images/bg-desktop-light.jpg";

function Content() {
  return (
    <div className={styles.content}>
      <img className="d-flex" src={bgDesktopLight} alt="background" />
      <Todolist />
    </div>
  );
}

export default Content;
