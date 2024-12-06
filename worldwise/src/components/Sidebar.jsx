import AppNav from "./AppNav";
import Logo from "./Logo";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
    </div>
  );
}

export default Sidebar;
