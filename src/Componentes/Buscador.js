import React, {useState, useEffect} from 'react'


const Buscador = () => {
    const [ users, setUsers ] = useState ([])
    const [ search, setSearch ] = useState("")

    const URL = 'https://jsonplaceholder.typicode.com/users'

    const showDate = async () => {
        const response = await fetch(URL)
        const date = await 
    }



  return (
    <div>Buscador</div>
  )
}

export default Buscador
