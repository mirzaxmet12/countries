import { useState, useEffect } from 'react'


function UseFetch() {
    // const [data, setData] = useState<any>(null)
    const url = 'https://restcountries.com/v3.1/all'
    console.log();
    const fetchData = async () => {
        const req = await fetch(url)
        const data = await req.json()
        // setData(data)
        
        return data
    }
   
    return  fetchData()
}


export default UseFetch
