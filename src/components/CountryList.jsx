import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import CountryItem from './CountryItem'

function CountryList({cities, isLoading}) {
    if (isLoading) {
        return <Spinner/>
    }

    if (!cities.length) {
        return <Message message="Add your city by clicking on a city on the map"></Message>
    }

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el)=>el.country).includes(city.country)) {
            return [...arr, {country: city.country, emoji: city.emoji}]
        }else{
            return arr
        }
    },[]);

    return (
        <ul className={styles.cityList}>
            {countries.map((country) => (
                <CountryItem key={country.id} country={country} />
                ))}
        </ul>
    )
}

export default CountryList
