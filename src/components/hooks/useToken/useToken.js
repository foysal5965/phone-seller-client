import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)
                    }
                })
        }

    }, [email])
    return [token]
}
export default useToken