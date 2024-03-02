import { ToastContainer } from "react-toastify";

import styles from "./Content.module.scss";
import Todolist from "../../components/Todolist/Todolist";
import bgDesktopLight from "/images/bg-desktop-light.jpg";

function Content() {
  return (
    <div className={styles.content}>
      <img className="d-flex" src={bgDesktopLight} alt="background" />
      <Todolist />
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default Content;
