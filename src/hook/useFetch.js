import {useState,useEffect} from "react"

function useFetch(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

useEffect(() => {
    setLoading(true)
    fetch(url)
	.then(response =>{
        if(!response.ok){
            setError("Something went wrong !")
        }else{
            return response.json()
        }
        })
	.then(data => {
        setData(data)
        setLoading(false)
    })
	
}, [])

return{data,loading,error};
}

export default useFetch