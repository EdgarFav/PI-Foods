import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getRecipeByQuery } from "../../redux/actions"


function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getRecipeByQuery(name))
        setName("")
    }


    return (
        <div>
            <input
                type="text"
                placeholder="Buscar..."
                onChange={e => handleInputChange(e)}
            />
            <button onClick={e => handleSubmit(e)} type="submit">Buscar</button>
        </div>
    )
}

export default SearchBar