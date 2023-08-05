import styled from 'styled-components';

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="loading"></div>
    </SpinnerContainer>
  );
};
export default Spinner;
