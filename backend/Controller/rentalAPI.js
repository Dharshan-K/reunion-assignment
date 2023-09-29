const {connectPool} = require("../models/connectDB")

const getAllProperties = async (req,res)=>{
    const properties = await connectPool.query('select * from reunion_property;');
    res.status(200).send(properties.rows)
}

const addProperty = async(req,res)=>{
    const {
        propertyId,
    ownerName,
    NoOfBedroom,
    NoOfBathroom,
    propertyName,
    propertyLength,
    propertyBreadth,
    doorNo,
    streetName,
    area,
    city,
    stateName,
    Rent
    } = req.body
    await connectPool.query("insert into reunion_property values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
    [propertyId,ownerName,NoOfBedroom,NoOfBathroom,propertyName,propertyLength,propertyBreadth,doorNo,streetName,area,city,stateName,Rent],(error,Result)=>{
        if(error){
            console.log(error)
            res.status(400).send(error)
        }else{
            console.log("added property")
            res.status(200).send("added property")
        }
    })
}

const updateProperty = async(req,res)=>{
    const {propertyId,
        ownerName,
        NoOfBedroom,
        NoOfBathroom,
        propertyName,
        propertyLength,
        propertyBreadth,
        doorNo,
        streetName,
        area,
        city,
        stateName,
        Rent
    } = req.body
        await connectPool.query("update reunion_property set property_id = $1, owner_name = $2,No_of_bedroom = $3, No_of_bathroom = $4,property_name = $5,property_length = $6,property_breadth = $7,door_No = $8,Street_name = $9,area = $10,city = $11,state_name = $12,Rent = $13 where property_id=$14" ,
        [propertyId,ownerName,NoOfBedroom,NoOfBathroom,propertyName,propertyLength,propertyBreadth,doorNo,streetName,area,city,stateName,Rent,propertyId])
        res.status(200).send("property updated.")
}

const deleteProperty = async(req,res)=>{
    const {id, user} = req.params;
    console.log(id ,user)
    await connectPool.query("delete from reunion_property where property_id=$1 and owner_name=$2",[id, user],(error,results)=>{
        if(error){
            console.log("error", error)
            res.status(400).send("cannot Delete the property")
        }else{
            console.log("delete Property.")
            res.status(200).send("property deleted")
        }
    })
}

const getOwnerProperties = async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    await connectPool.query("select * from reunion_property where owner_name=$1",[id],(error,result)=>{
        if(error){
            console.log("error", error);
            res.status(400).send(error)
        }else if(result){
            res.status(200).send(result.rows);
        }
    })
}


module.exports = {getOwnerProperties,getAllProperties, addProperty, updateProperty, deleteProperty}