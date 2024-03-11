import { TextField } from "@mui/material";
import cardCountries from "./CardCountries";
// interface SearchProps {
//     handleChangeCounty: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

function SearchCountries() {
    function handleChangeCounty(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        console.log(value);
        cardCountries.countries = value == '' ? cardCountries.filterRegion : cardCountries.filterRegion?.filter((country) => country.name.common.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    }
    return (
        <>
            <TextField name="" id="text" onChange={handleChangeCounty} placeholder="Искать" />
        </>
    );
}

export default SearchCountries;
