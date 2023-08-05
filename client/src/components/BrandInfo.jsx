import Wrapper from '../assets/wrappers/BrandInfo';

const BrandInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="brand-icon">{icon}</span>
      <span className="brand-text">{text}</span>
    </Wrapper>
  );
};
export default BrandInfo;
