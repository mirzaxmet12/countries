import { Link } from 'react-router-dom'
import cardCountries from './CardCountries'
import { observer } from 'mobx-react-lite'

interface CountriesArray {
    flags: { png: string },
    img: string,
    name: { common: string }
    region: string
    population: number,
    cca3: string
}

const Countries = observer(() => {
    const countries: CountriesArray[] | undefined = cardCountries.countries;

    return (

        <div className='countries'>
            {countries?.map((countrie) => (
                <Link to={countrie.cca3} className='block' key={countrie.name.common}>
                    <div className="block-img">
                        <img src={countrie.flags.png} alt="" />
                    </div>
                    <div className="block-info">
                        <h3>{countrie.name.common}</h3>
                        <p><span> Население:</span> {countrie.population}</p>
                        <p><span>Столица:</span> {countrie.name.common}</p>
                        <p><span>Регион: </span>{countrie.region}</p>
                    </div>
                </Link>))}
        </div>
    )
})

export default Countries
