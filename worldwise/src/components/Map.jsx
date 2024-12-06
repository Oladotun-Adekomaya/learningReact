import { Outlet } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  return (
    <div className={styles.mapContainer}>
      Map
      <Outlet />
    </div>
  );
}

export default Map;
