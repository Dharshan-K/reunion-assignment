export const RentalComponent = (props)=>{
    const property = props.property

    return(
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10 my-10">
                <img className="w-full" src="https://source.unsplash.com/random/50x50?sig=incrementingIdentifier" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">₹ {property.rent}/month</div>
                <p className="text-gray-700 text-base font-bold">
                    {property.property_name}
                </p>
                <p className="text-gray-700 text-base">
                    {property.area}, {property.city}
                </p>
            </div>
            <hr></hr>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{property.no_of_bathroom
} beds</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{property.no_of_bedroom} bath</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{property.property_length}x{property.property_breadth}m</span>
                    
                </div>
        </div>
        </div>
    )
}