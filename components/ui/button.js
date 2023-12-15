import Link from "next/link";
import S from "./button.module.css";
function Button(props) {
  return (
    <Link href={props.link} className={S.btn}>
      {props.children}
    </Link>
  );
}
export default Button;
