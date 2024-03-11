import { Button } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import cardCountries from "./CardCountries"

interface CountriesArray {
    flags: { png: string },
    img: string,
    name: { common: string },
    region: string,
    population: number,
    capital: string,
    subregion: string,
    tld: [string],
    languages: any,
    currencies: any,
    borders: [string],
    cca3: string
}

function Country() {


    const { id } = useParams()
    console.log(id);
    const country = cardCountries.allCountries?.filter((item: CountriesArray) => item.cca3 == id)

    function currenciesName() {
        if (country) {
            const currencyName: any = Object.values(country[0].currencies)[0];
            return currencyName?.name
        }
    }
    function bordersCountries() {
        if (country) {
            console.log(country[0].borders);
            return (
                <>
                    {country[0].borders && country[0].borders.map((country) => (
                        <Link to={`/${country}`} key={country}><Button variant="outlined" size="small">{country}</Button></Link>
                    ))}
                </>
            )
        }
        return <p>None</p>
    }
    function languages() {
        if (country) {
            console.log(country[0].languages);
            const languages = Object.values(country[0].languages)
            return (
                <>
                    {languages}
                </>
            )
        }
    }

    return (
        <div className="container">
        <div id="back">
            <Button variant="outlined" className="back" > <Link to='/'>Back</Link></Button>
        </div>
            {country ? (<div className='country'>
                <div className="country-img"><img src={country[0].flags.png} alt="" /></div>
                <div className="info">
                    <h1> {country[0].name.common}</h1>
                    <div className="info-text">
                        <p>
                            <span>Название: </span> {country[0].name.common}
                        </p>
                        <p>
                            <span>Население: </span> {country[0].population}
                        </p>
                        <p>
                            <span>Регион: </span>{country[0].region}
                        </p>
                        <p>
                            <span>Субрегион: </span>{country[0].subregion}
                        </p>
                        <p>
                            <span>Столица: </span>{country[0].capital}
                        </p>
                    </div>
                    <div className="info-text">
                        <p>
                            <span>Домен верхнего уровня: </span>
                            {country[0].tld}
                        </p>
                        <p>
                            <span>Валюты: </span>
                            {currenciesName()}
                        </p>
                        <p>
                            <span>Языки: </span>
                            {languages()}
                        </p>
                    </div>
                    <div className="info-border">
                        <span>Приграничные страны: </span>
                        {bordersCountries()}
                    </div>
                </div>
            </div>) : <></>
            }
        </div>
    )
}

export default Country
