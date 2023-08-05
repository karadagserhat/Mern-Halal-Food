import styled from 'styled-components';
import Spinner from './Spinner';

const SpinnerFull = styled.div`
  height: 100vh;
  background-color: var(--color-grey-100);
`;

const SpinnerFullPage = () => {
  return (
    <SpinnerFull>
      <Spinner />
    </SpinnerFull>
  );
};
export default SpinnerFullPage;
