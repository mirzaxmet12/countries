import { observer } from 'mobx-react-lite'
import FilterCountry from './FilterCountry'
import SearchCountries from './SearchCountries'
import Countries from './Countries'
const Home = observer(() => {

    return (
        <div className='main'>
        <div className="container">
            <div className="nav">
                <SearchCountries  />
                <FilterCountry  />
            </div>
            <Countries  />
        </div>
    </div >
    )
})

export default Home
