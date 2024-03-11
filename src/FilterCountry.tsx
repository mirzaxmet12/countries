import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select/Select';
import cardCountries from './CardCountries';
import { observer } from 'mobx-react-lite';
const FilterCountry = observer(() => {


    function ChangeRegion(event: SelectChangeEvent) {
        cardCountries.region = event.target.value.trim()
        cardCountries.changeRregion()
        console.log();

    }
    return (
        <>
            <Select value={cardCountries.region} name="filter" id="" onChange={(e) => ChangeRegion(e)}>
                <MenuItem value="All">Фильтр</MenuItem>
                <MenuItem value="Africa">Afirca</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
                <MenuItem value="Antarctic">Polar</MenuItem>
            </Select>
        </>
    )
})

export default FilterCountry
