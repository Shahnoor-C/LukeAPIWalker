import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";


const Search = () => {
    
    const [starWarsData,setStarWarsData] = useState({})
    const [dropdownKeys,setDropdownKeys] = useState([])
    
    const [formInfo,setFormInfo] = useState({
        searchTerm:"people",
        idInput:"",
    })
    
    
    const changeHandler = (e)=>{
        console.log("filling out form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }



    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response =>{
            console.log("***************")
            console.log(response)
            console.log("***************")
            setStarWarsData(response.data)
            setDropdownKeys(Object.keys(response.data))
        })
        .catch(error=>{
            console.log("ERROR ERROR ERROR",error)
        })

    },[])

    const submitHandler = (e)=>{
        e.preventDefault()
        navigate(`/${formInfo.searchTerm}/${formInfo.idInput}`)
    }
    
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <p>search for: <select name="searchTerm" id=""  onChange = {changeHandler} >
                    {dropdownKeys.map((item,idx)=>{
                        return <option key = {idx} value={item}>{item}</option>
                    })}
                    
                   
                    </select></p>
                    
                    <p>Id: <input type="number" name="idInput" id="" onChange = {changeHandler}/></p>
                    <input type="submit" value="Search"/>

            </form>
        </div>
    );
};



export default Search;