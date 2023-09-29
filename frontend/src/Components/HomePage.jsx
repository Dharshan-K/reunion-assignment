import "../globals.css"
import { useEffect, useState } from "react"
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";
import { RentalComponent } from "./RentalComponent";
import { RentalPage } from "./RentalPage";
import { Select, Option } from "@material-tailwind/react";

export const HomePage = ()=>{
    
    return(
        <div>
            <div className="bg-gray-400 h-14 min-w-full flex">
                <div className="text-black text-xl p-5 ml-20">Logo</div>
                <div className="text-black text-xl p-5 ml-20"><a href="http://localhost:3001"/></div>
                <div className="bg-blue-400 h-7 w-20 py-1 px-4 my-4 mx-5 rounded-lg"><a href="http://localhost:3001/login">Login</a></div>
                <div className="bg-blue-400 h-7 w-22 py-1 px-4 my-4 rounded-lg"><a href="http://localhost:3001/signup">Sign-Up</a></div>
                <div className="bg-blue-400 h-7 w-22 py-1 px-4 my-4 mx-4 rounded-lg"><a href="http://localhost:3001/myProperties">My Properties</a></div>
            </div>
            <div>
                <h2 className="my-8 ml-10 text-3xl">Search Properties for rent</h2>
            </div>
            <div className="flex bg-gray-400 w-[200vh] h-[90px] mx-5 rounded-lg">
                <div className="py-3 px-10">
                <label
                    for="customRange1"
                    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >Price range</label>
            <input
                type="range"
                className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                id="customRange1" />
                </div>
                <div className="w-72 py-8 px-8 text-black">
                    <Select className="" label="Select Place">
                        <Option>Andheri</Option>
                        <Option>Bandra</Option>
                        <Option>Navi Mumbai</Option>
                        <Option>Tharavi</Option>
                       
                    </Select>
                    </div>
                <div className="w-[38vh] mx-20 my-5">
                  <Datepicker
                    primaryColor={"light"}
                    useRange={false}
                    asSingle={true}
                    // value={userDOB}
                    // onChange={handleValueChange}
                  />
                </div>
                <div className="w-72 py-8 px-8 text-black">
                    <Select className="" label="Select Type">
                        <Option>2 BHK</Option>
                        <Option>3 BHK</Option>
                        <Option>Villa</Option>
                        <Option>Studio</Option>
                       
                    </Select>
                    </div>
            </div>
            <div>
                <RentalPage/>
            </div>

            
</div>
        
    )
}

// "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier"