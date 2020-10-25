import {Jumbotron, Button} from 'reactstrap';

const LandingPage = (props) => {
    return (
      <div>
        <Jumbotron className="banner-color-1 py-3 my-0">
            <div className="mx-3" className="text-color-light">
                <p className="display-6 text-center">Simply Start is a platform built to connect organizations and investors.</p>
                <hr className="my-2" color="#FFFFFF" />
                <p className="display-5 text-center"><strong>What makes us different?</strong></p>
                <hr className="my-2" color="#FFFFFF" />
            </div>
        </Jumbotron>
        <Jumbotron fluid className="banner-color-3 py-2">
          <div>
              <p className="display-6 text-center">You can start small.</p>
              <p className="lead text-center">There is not a minimum amount of capital needed to start investing, which makes an investing more accessible to people of all economic statuses.</p>
              <p className="lead text-center">Organizations of all sizes are able to create accounts on Simply Start, which makes it the ideal platform for entrepreneurs and small business owners to find investors.</p>
              <hr className="my-2" color="#FFFFFF" />
              <p className="display-6 text-center">Invest in what matters to you.</p>
              <p className="lead text-center">In the modern world, your money is your vote, so you should be able to invest in the organizations you believe in. We make it easy for you to find organizations that align with your values through tags and filters.</p>
              <p className="lead text-center">In turn, this makes it easy for organizations to find investors that believe in them. Additionally, every week we show case organizations owned by different minority groups in an effort to give everyone on our platform an equal chance of success.</p>
              <hr className="my-2" color="#FFFFFF" />
          </div>
        </Jumbotron>
    </div>
    );
  };
  
  export default LandingPage;