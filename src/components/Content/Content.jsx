import { ToastContainer } from "react-toastify";

import styles from "./Content.module.scss";
import Todolist from "../../components/Todolist/Todolist";
import bgDesktopLight from "/images/bg-desktop-light.jpg";
import bgDesktopLightMobile from "/images/bg-desktop-light-mobile.jpg";

function Content() {
  return (
    <div className={styles.content}>
      <picture>
        {/* Image pour les écrans de bureau */}
        <source media="(min-width: 768px)" srcSet={bgDesktopLight} />
        {/* Image pour les écrans mobiles */}
        <img className="d-flex" src={bgDesktopLightMobile} alt="background" />
      </picture>
      <Todolist />
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default Content;
