import { Button } from "@mui/material"
import cardCountries from './CardCountries'
// import { observable } from "mobx"
import { observer } from "mobx-react-lite"


const Thema = observer(() => {
    function clickBgColor() {
        cardCountries.toggleBgColor()
    }
    return (
        <Button onClick={clickBgColor} variant='text'>{cardCountries.bgColor}</Button>
    )
})

export default Thema
