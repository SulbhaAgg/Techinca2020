import LineChart from './LineChart'
import { useParams, NavLink, Route, useRouteMatch, useHistory } from 'react-router-dom'


function ChartPage(props){

    const { id } = useParams()
    const { url, path } = useRouteMatch()

    if (!props.data){
        return (
            <div>Loading...</div>
        )
    }
    const curBiz = props.data.find(it => {
      return it.name == id
    }) || {}

    console.log(curBiz)

    return (
        <div>
            {/* <p>{curBiz}</p> */}
        <LineChart data={curBiz}></LineChart>
        </div>
    )
}

export default ChartPage