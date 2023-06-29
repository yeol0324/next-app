import Image from "next/image";
import styles from "./page.module.css";

export default function List() {
  const list = [1, 2, 3, 4, 5];
  list.map((e) => console.log(e));
  return (
    <div>
      <h4 className="title" style={{ color: "red", fontSize: "30px" }}>
        목록
      </h4>
      {list.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
}
