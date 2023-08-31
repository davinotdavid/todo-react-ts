import { ButtonHTMLAttributes } from "react";
import styles from "./CreateTaskButton.module.css";
import plusSignSVG from "../assets/plusSign.svg";

export default function CreateTaskButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button className={styles.button} {...props}>
      Create <img src={plusSignSVG} alt=""></img>
    </button>
  );
}
