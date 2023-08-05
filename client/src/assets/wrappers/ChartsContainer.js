import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 7rem;
  text-align: center;

  .icon-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: var(--color-brand-600);
    margin-right: 0.4rem;
    font-size: 2.3rem;
  }

  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--color-brand-600);
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  h4 {
    text-align: center;
    font-size: 2.3rem;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;
