import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem"

function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  return <ul className={styles.cityList}>{cities.map((city) => )}</ul>;
}

export default CityList;
