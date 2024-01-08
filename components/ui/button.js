import Link from "next/link";
import S from "./button.module.css";
function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={S.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={S.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
