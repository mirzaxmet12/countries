import { action, makeAutoObservable } from 'mobx'
import { fetchData } from './fetchData'

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

function CardCountries() {
    return {
        allCountries: undefined as CountriesArray[] | undefined,
        filterRegion: undefined as CountriesArray[] | undefined,
        countries: undefined as CountriesArray[] | undefined,
        region: 'All',
        bgColor: 'Темный',
        themeClassName: 'light',
        async saveCountries() {
            this.allCountries = await fetchData()
            this.changeRregion()
        },
        changeRregion() {
            this.filterRegion = this.region == 'All' ? this.allCountries : this.allCountries?.filter((country) => country.region === this.region)
            this.countries = this.filterRegion
        },
        // toggleBgColor: action(function (this: typeof cardCountries) {
        //     this.bgColor = this.bgColor === 'Темный' ? 'Светлый' : 'Темный'
        //     this.themeClassName = this.bgColor === 'Темный' ? 'dark' : 'light'
        // }),
        toggleBgColor () {
            this.themeClassName = this.bgColor === 'Темный' ? 'dark' : 'light'
            this.bgColor = this.bgColor === 'Темный' ? 'Светлый' : 'Темный'
        },


    }
}

const cardCountries = CardCountries()
makeAutoObservable(cardCountries)
cardCountries.saveCountries()
// cardCountries.filterCountries() ?????
export default cardCountries