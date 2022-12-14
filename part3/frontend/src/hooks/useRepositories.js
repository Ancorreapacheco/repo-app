import { useEffect, useState } from "react";

const useRepositories =  () => {

  const [repositories , setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  const fetchRepositories = async () => {
    try {
      setLoading(true)
      //const response = await fetch('http://localhost:5000/api/repositories')
      const response = await fetch('http://192.168.1.38:5000/api/repositories')
      const json = await response.json()
      setLoading(false)
      setRepositories(json)
    } catch (error) {
      console.log(error)      
    }
  }


  useEffect(()=>{
    fetchRepositories()
  },[])

  return { repositories, loading, refetch: fetchRepositories}

} 

export default useRepositories