import React, { useState, useEffect } from 'react'

const useFetch = (url, category) => {
    const [data, setData] = useState(null)
    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [category])

    return [data]
}
export default useFetch