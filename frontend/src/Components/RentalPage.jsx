import axios from "axios";
import { useState, useEffect} from "react";
import { RentalComponent } from "./RentalComponent";
export const RentalPage = ()=>{
    const [properties, setProperties] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/reunion/api/list-properties").then((response)=>{
            setProperties(response.data)
            console.log(response.data)
        })
    },[])
    return(
        <div className="flex">
            
                {
                    properties.map((property,index)=>(                        
                        <div key={index}>
                            <RentalComponent property={property} />
                        </div>
                    ))
                }
            </div>
    )
}