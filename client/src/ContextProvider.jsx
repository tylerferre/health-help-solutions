import axios from "axios"
import React, {createContext, useEffect, useState} from 'react'

const context = createContext()

const ContextProvider = (props) => {

    const [nurseData, setNurseData] = useState([])
    const [searchData, setSearchData] = useState({search: ''})

    const getRequest = () => {
        axios.get('/api/nurses')
        .then(res => setNurseData(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getRequest()
    }, [searchData])

    const handleChange = (e) =>{
        const {name, value} = e.target
        setSearchData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.get(`/api/nurses/search/nurse?nurse=${searchData.search}`)
        .then(res => setNurseData(res.data))
        .catch(err => console.log(err))
    }

    const searchForm =
             <form className="searchForm" onSubmit={handleSubmit}>
                <input
                    className="searchBar" 
                    type="search"
                    name="search"
                    value={searchData.search}
                    onChange={handleChange}
                    placeholder="Search Nurses"
                />
                <button>Enter</button>
            </form>

    return(
        <context.Provider
            value={{
                nurseData: nurseData,
                setNurseData: setNurseData,
                searchForm: searchForm
            }}
        >
            {props.children}
        </context.Provider>
    )
}

export {context, ContextProvider}