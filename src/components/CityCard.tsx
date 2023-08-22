import { Link } from "react-router-dom"
import styles from "../styles/CityCard.module.scss"

type cityProp = {
    city: string
}

const CityCard = ({city}:cityProp) => {


  return (
    <Link to={`/${city}`} className={styles.card}>
        {/* Convert the first letter of the "city" string to uppercase */}
        <h3>{city.charAt(0).toUpperCase() + city.slice(1)}</h3>
    </Link>
  )
}

export default CityCard