import React from "react"
import { Link } from "react-router-dom"

const SearchBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/post">Create</Link>
        </div>
    )
}

export default SearchBar