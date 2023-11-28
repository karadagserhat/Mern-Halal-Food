import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background: var(--color-grey-100);
  padding: 3rem 2rem 4rem;
  /* height: 100vh; */

  .form-title {
    /* margin: 2rem; */
    margin-bottom: 2rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
  .form {
    margin: 0;
    /* border-radius: var(--border-radius-sm); */
    box-shadow: none;
    /* padding: 2rem; */
    max-width: 100%;
    width: 100%;
    box-shadow: var(--shadow-md);
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
    padding: 0;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
