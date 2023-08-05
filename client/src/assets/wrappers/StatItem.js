import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 2rem;
  background-color: var(--color-grey-100);

  border: 1px solid var(--color-grey-200);
  border-bottom: 5px solid ${(props) => props.color};
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-weight: 500;
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2.5rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
