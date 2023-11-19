import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    font-size: 1rem;
  }

  svg {
    stroke: var(--color-brand-50);
  }

  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-sm);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius-sm);
    background: var(--color-brand-600);
    color: var(--color-brand-50);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius-sm);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-brand-50);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .dropdown-btn:hover {
    background: var(--color-brand-700);
  }

  @media (min-width: 992px) {
    .logout-btn {
      font-size: 1.6rem;
    }
  }
`;

export default Wrapper;
