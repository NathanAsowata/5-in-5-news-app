import Logo from "../components/Logo"
import CityCard from "../components/cityCard"
import styles from "../styles/Home.module.scss"

const Home = () => {

  return (
    <>
    <Logo />
    <section className={styles.welcomeText}>
      <h1>Get the top 5 news in 5 categories from 5 cities</h1>
      <h2>Pick a city <br /> &#128071;&#128071;&#128071;</h2>
    </section>
    <section className={styles.citySection}>
      <CityCard city="lagos" />
      <CityCard city="london" />
      <CityCard city="dublin" />
      <CityCard city="new York" />
      <CityCard city="toronto"/>
    </section>
  </>
  )
}

export default Home