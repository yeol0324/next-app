import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  const name = "yurim";
  return (
    <div>
      <h4 className="title" style={{ color: "red", fontSize: "30px" }}>
        yurim
      </h4>
      <p>by {name}</p>
    </div>
  );
}
