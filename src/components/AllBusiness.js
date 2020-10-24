import { useEffect, useState } from "react";
import Business from "./Business";

export default function AllBusiness (props){

    if (!props.data){
        return(
            <div>Loading...</div>
        )
    }


    return (
        <div className="group">
          {props.data.map((item) => (
            <Business img={item.img} name={item.name} fundingGoal={item.fundingGoal} fundingGot={item.fundingGot}></Business>
          ))}
        </div>
    )
}