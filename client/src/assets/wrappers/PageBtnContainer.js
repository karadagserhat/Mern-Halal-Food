import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 0.1rem;
  .btn-container {
    background: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
    color: var(--color-brand-600);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    border: 1px solid var(--color-grey-200);

    display: flex;
    justify-content: center;

    height: 40px;
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--color-brand-600);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
  }
  .page-btn:hover {
    background: var(--color-brand-500);
    color: var(--color-brand-700);
    transition: var(--transition);
  }
  svg {
    fill: var(--color-brand-600);
    height: 1.5rem;
    width: 1.5rem;
    transform: scale(2);
  }
  .active {
    background: var(--color-brand-200);
    color: var(--color-brand-700);
  }
  .prev-btn,
  .next-btn {
    background: var(--color-grey-100);
    border-color: transparent;
    border-radius: var(--border-radius-md);
    border: 1px solid var(--color-grey-200);

    width: 60px;
    height: 40px;
    color: var(--color-brand-600);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--color-brand-500);
    color: var(--color-brand-700);
    transition: var(--transition);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`;
export default Wrapper;
