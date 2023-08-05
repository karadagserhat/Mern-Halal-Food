import styled from 'styled-components';

const Wrapper = styled.button`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  margin-right: 2rem;
  height: 3.5rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  .toggle-icon {
    font-size: 1.15rem;
    color: red;
  }

  svg {
    height: 2rem;
    width: 2rem;
    stroke: var(--color-brand-600);
  }
`;
export default Wrapper;
