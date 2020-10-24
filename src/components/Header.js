import { Link } from 'react-router-dom'
import '../App.css'
// import {Link} from 'react-router-dom'

export default function () {
    return(
        <header className='App-header'>
            <Link to="/">Home</Link>
            <Link to="/Companies">Companies</Link>
        </header>
    )
}