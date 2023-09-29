import axios from "axios";
import { useState, useEffect} from "react";
import { RentalComponent } from "./RentalComponent";
import { OwnerProperty } from "./OwnerProperty";
export const MyProperty = ()=>{
    const [properties, setProperties] = useState([]);
    const data = {username: localStorage.getItem('username')}
    useEffect(()=>{
        console.log("owner", localStorage.getItem('username'))
        const headers = {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
        axios.get(`http://localhost:3000/reunion/api/property/${localStorage.getItem('username')}`, {headers}).then((response)=>{
            setProperties(response.data)
            console.log(response.data)
        })
    },[])
    return(
        <div className="flex">
            
                {
                    properties.map((property,index)=>(                        
                        <div key={index}>
                            <OwnerProperty property={property} />
                        </div>
                    ))
                }
            </div>
    )
}