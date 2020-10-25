import { Jumbotron, Button, Row, Col } from 'reactstrap';
import '../App.css'
import { Link } from 'react-router-dom'

const LandingPage = (props) => {
  return (
    <div>
      <Jumbotron className="banner-color-1 py-3 my-0 px-2 jumbo">
        <div className="mx-3" className="text-color-light ">
          <p className="lead text-center">Simply Start is a platform built to connect organizations and investors.</p>
          <hr className="my-2" color="#FFFFFF" />
          <p className="display-5 text-center"><strong>What makes us different?</strong></p>
          <hr className="my-2" color="#FFFFFF" />
        </div>
      </Jumbotron>
      <Jumbotron fluid className="banner-color-3 py-4 px-5">
        <Row>
          <Col>

            <p className="display-6 text-center">You can start small.</p>
            <p className="lead text-center">There is not a minimum amount of capital needed to start investing, which makes an investing more accessible to people of all economic statuses.</p>
            <p className="lead text-center">Organizations of all sizes are able to create accounts on Simply Start, which makes it the ideal platform for entrepreneurs and small business owners to find investors.</p>
          </Col>

          <Col>
            <p className="display-6 text-center">Invest in what matters to you.</p>
            <p className="lead text-center">In the modern world, your money is your vote, so you should be able to invest in the organizations you believe in. We make it easy for you to find organizations that align with your values through tags and filters.</p>
            <p className="lead text-center">In turn, this makes it easy for organizations to find investors that believe in them. Additionally, every week we show case organizations owned by different minority groups in an effort to give everyone on our platform an equal chance of success.</p>
            <hr className="my-2" color="#FFFFFF" />
          </Col>
        </Row>
      </Jumbotron>

      <div className="text-center mx-auto">

        <h6 className="display-6 text-center text-light">Ready to invest?</h6>
        <Link  to="/organizations">
          <br/>
          <Button className="px-4 display-6">Start here</Button>
        </Link>
      </div>

    </div>
  );
};

export default LandingPage;