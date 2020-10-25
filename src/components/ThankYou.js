import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function ThankYou() {
    return (
        <div className="greyBg text-center mx-5 py-5 px-4">
            <h6 className="">Thank you for your contribution! It will take up to 24 hours for your contribution to be processed. Thank you for your patience.</h6>

            <div className="text-center pt-3">

                <Link to="/organizations">
                    <Button>Home Page</Button>
                </Link>
            </div>
        </div>
    )
}