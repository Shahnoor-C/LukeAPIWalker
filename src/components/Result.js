import React,{useEffect,useState} from 'react';
import axios from 'axios';


const Result = (props) => {
    const [data,setData] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.searchTerm}/${props.id}/`)
            .then(response =>{
                console.log("logging response:",response)
                setData(response.data)
            })
            .catch(error =>{
                console.log(error)
            })


    },[props.searchTerm,props.id])
    
    return (
        
        <div>
            <h1>Here are the results from your search:</h1>
                <p> Searched for : {props.searchTerm}</p>
                <p>id number: {props.id}</p>

            {
            props.searchTerm == "planets"?
            
            <>
            <h2>{data.name}</h2>
            <p>Climate: {data.climate}</p>
            <p>Terrain:{data.terrain}</p>
            <p>Surface Water:{data.surface_water}</p>
            <p>Population:{data.population}</p>
            
            </>:null
            }    
            {
            props.searchTerm == "people"?
            
            <>
            <h2>{data.name}</h2>
            <p>Height:{data.eye_color}</p>
            <p>Mass:{data.mass}</p>
            <p>Hair Color:{data.hair_color}</p>
            <p>Skin Color:{data.skin_color}</p>
            </>:null
            }   
        </div>
    );
};



export default Result;