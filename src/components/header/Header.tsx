import THeader from "./THeader";
import styles from "./header.module.scss";

export default function Header({render, headerProps}: THeader){
const headerStyles = Array.isArray(headerProps?.style)
    ? headerProps?.style?.map((el: string) => styles[el]).join(" ") 
    : headerProps

    return (
        <header className={styles.header + " " + headerStyles}>{render()}</header>
    )
}