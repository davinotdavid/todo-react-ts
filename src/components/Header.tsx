import styles from "./Header.module.css";
import rocketSVG from "../assets/rocket.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src={rocketSVG}
        alt="An illustration of a rocket flying upwards"
      ></img>
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
  );
}
