import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    /* display: grid; */
    /* grid-template-columns: 1fr; */
    background-color: var(--color-grey-100);
    /* height: 100vh; */
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      display: grid;
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
