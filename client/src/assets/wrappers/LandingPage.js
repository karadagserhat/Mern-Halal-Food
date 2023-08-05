import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--color-grey-100);

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    /* margin-top: -3rem; */
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--color-brand-600);
    }
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 2;
    color: var(--color-grey-600);
    margin-bottom: 2.5rem;
    max-width: 35em;
    text-transform: none;
  }

  .register-link {
    margin-right: 1rem;
  }

  .main-img {
    display: none;
  }

  .btn {
    /* padding: 0.75rem 1rem; */
  }

  .logo {
    width: 10%;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      /* margin-top: -6rem; */
      width: 50%;
    }
  }
`;
export default Wrapper;
