import { useEffect, useState } from "react";
import PieChart from './PieChart'


export default function Business(props){

    return (
        <div>
            <img src={props.img}></img>
            <h2>{props.name}</h2>
            <PieChart fundingGot={props.fundingGot} fundingGoal={props.fundingGoal}></PieChart>
        </div>
    )
}