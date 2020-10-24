import { Link } from 'react-router-dom'
import '../App.css'
// import {Link} from 'react-router-dom'

export default function () {
    return(
        <header className='header'>
            <Link className="navItem" to="/">Home</Link>
            <Link className="navItem" to="/Companies">Companies</Link>
        </header>
    )
}