import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: var(--color-grey-100);
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    height: 50rem;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    text-transform: none;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--color-grey-600);
    text-transform: none;
  }
  a {
    color: var(--color-brand-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
