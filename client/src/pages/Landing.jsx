import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import main2 from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <div></div>
        {/* <img src={main2} alt="halal-food-track" className="img main-img" /> */}
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Halal Food <span>tracking</span> app
          </h1>
          <p>Which brands get to certificate for halal food? Track it.</p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="halal-food-track" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
