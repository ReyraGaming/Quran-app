import { useState, useEffect } from 'react'
import axios from 'axios'

const Location = () => {
    const [isLocation, setLocation] = useState("")

    useEffect(() => {
        const fetchLocation = async() => {
            try{
                const response = await axios.get('https://api.aladhan.com/v1/timings/23-03-2024?latitude=0.5387&longitude=116.4194')
                const data = response.data
                const location = data.data.meta.timezone
                setLocation(location)

            } catch(error) {
                console.error('fetch api error', error)
            }
        }

        fetchLocation()
    }, [])

    return (
        <div>
            <p>{isLocation}</p>
        </div>
    )
}

export default Location