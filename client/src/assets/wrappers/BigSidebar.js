import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    .sidebar-container {
      background: var(--color-grey-0);
      padding: 3.2rem 2.4rem;
      min-height: 100vh;
      border-right: 1px solid var(--color-grey-200);
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: fixed;
      /* position: sticky; */
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 9rem;
      display: flex;
      align-items: center;
      padding-left: 5.5rem;
    }

    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--color-grey-600);
      padding: 1rem 0;
      font-weight: 500;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--color-brand-600);
      transition: var(--transition);
    }
    .icon {
      font-size: 2.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--color-brand-600);
    }
    .pending {
      background: var(--color-grey-0);
    }
  }
`;
export default Wrapper;
