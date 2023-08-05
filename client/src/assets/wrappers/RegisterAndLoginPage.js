import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--color-grey-100);

  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--color-brand-600);
  }
  h4 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 1.38rem;
    letter-spacing: 0.2rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
    text-transform: none;
  }
  .btn {
    margin-top: 1rem;
    padding: 6px;
  }
  .member-btn {
    color: var(--color-brand-600);
    margin-left: 0.25rem;
  }
`;
export default Wrapper;
