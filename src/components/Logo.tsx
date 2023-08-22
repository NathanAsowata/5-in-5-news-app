import styles from "../styles/Logo.module.scss"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={"/"} className={styles.logo}>5-in-5</Link>
  )
}

export default Logo