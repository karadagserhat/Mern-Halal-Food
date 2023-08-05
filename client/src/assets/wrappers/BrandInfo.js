import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .brand-icon {
    font-size: 2rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--color-brand-500);
    }
  }
  .brand-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`;
export default Wrapper;
