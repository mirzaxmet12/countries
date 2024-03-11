


export const fetchData = async () => {
        const url = 'https://restcountries.com/v3.1/all'
        const req = await fetch(url)
        const data = await req.json()
        return data
    }

