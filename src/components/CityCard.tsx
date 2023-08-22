import { Link } from "react-router-dom"
import styles from "../styles/CityCard.module.scss"

type cityProp = {
    city: string
}

const CityCard = ({city}:cityProp) => {
  return (
    <div className={styles.card}>
    <Link to={`/${city}`}>
        {/* Convert the first letter of the "city" string to uppercase */}
        <h3>{city.charAt(0).toUpperCase() + city.slice(1)}</h3>
    </Link>
    </div>
  )
}

export default CityCard