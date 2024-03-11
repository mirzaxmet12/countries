import axios from "axios"



export const fetchData = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    const data = (await axios(url)).data



    return data
}

