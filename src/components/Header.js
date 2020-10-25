import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import '../App.css';

const Header = (props) => {

    return(
        <div>
            <Navbar className='header-color' fixed-top>
                <NavbarBrand tag={Link} to="/">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 441.89" height="40" width="40"><path d="M143.61,232.22c-37.5-19.43-54-36.16-54-70.16,0-24.82,14.11-54.5,51.21-54.5a85.71,85.71,0,0,1,39.09,9.58L168.67,147.8,240,141.2,200.13,61.74l-7,19a97.44,97.44,0,0,0-31.86-10.6V35.06h-49V73.63C76.45,86.3,54.1,122.24,54.1,167.46c0,51.27,27.42,82,71.77,103.07,36.69,18.89,51.2,38.32,51.2,72.31,0,36.7-21,62.06-56.85,62.06-21.85,0-42.71-8.81-58.13-20.06l7.58-33L0,373.28l48.63,70.15L53,424.22c10.81,7.82,26.63,14.26,43.27,17.43v35.29h49V440.39C190.81,428.47,213,386.46,213,339.07,213,285.64,189.57,256,143.61,232.22Z" transform="translate(0 -35.06)"/><path d="M368.39,232.22c37.5-19.43,54-36.16,54-70.16,0-24.82-14.11-54.5-51.21-54.5a85.71,85.71,0,0,0-39.09,9.58l11.21,30.66L272,141.2l39.85-79.46,7,19a97.44,97.44,0,0,1,31.86-10.6V35.06h49V73.63c35.86,12.67,58.21,48.61,58.21,93.83,0,51.27-27.42,82-71.77,103.07-36.69,18.89-51.2,38.32-51.2,72.31,0,36.7,21,62.06,56.85,62.06,21.85,0,42.71-8.81,58.13-20.06l-7.58-33L512,373.28l-48.63,70.15L459,424.22c-10.81,7.82-26.63,14.26-43.27,17.43v35.29h-49V440.39c-45.5-11.92-67.64-53.93-67.64-101.32C299.05,285.64,322.43,256,368.39,232.22Z" transform="translate(0 -35.06)"/></svg>
                    Simply Start
                </NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem><NavLink tag={Link} to="/">Home</NavLink></NavItem>
                        <NavItem><NavLink tag={Link} to="/organizations">Organizations</NavLink></NavItem>
                        <NavItem><NavLink tag={Link} to="/login/">Login</NavLink></NavItem>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Header;