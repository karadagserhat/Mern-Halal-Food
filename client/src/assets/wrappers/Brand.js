import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-md);
  header {
    padding: 2rem 1.5rem;
    border-bottom: 1px solid var(--color-grey-200);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--color-brand-600);
    border-radius: var(--border-radius-sm);
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-grey-0);
    margin-right: 2.5rem;
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
      letter-spacing: 0.2px;
      font-size: 1.6rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--color-grey-600);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    column-gap: 5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    border-radius: var(--border-radius-sm);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 110px;
    height: 40px;
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 35px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    background-color: var(--color-brand-600);
  }
  .edit-btn {
    margin-right: 1.2rem;
    width: 13%;
    align-items: center;
    justify-content: center;
  }
  .delete-btn {
    width: 76%;
    align-items: center;
    justify-content: center;
  }

  .edit-btn:hover,
  .delete-btn:hover {
    background-color: var(--color-brand-700);
  }
`;

export default Wrapper;
