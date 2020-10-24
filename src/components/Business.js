import { useEffect, useState } from "react";
import PieChart from './PieChart'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

export default function Business(props){
    const { url, path } = useRouteMatch()
    return (
        <div>
            <img src={props.img}></img>
            <Link to={`${url}/${props.name}`}>
            <h2>{props.name}</h2>
            </Link>
            <PieChart fundingGot={props.fundingGot} fundingGoal={props.fundingGoal}></PieChart>
        </div>
    )
}