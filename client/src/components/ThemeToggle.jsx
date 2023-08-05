import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from '../assets/wrappers/ThemeToggle';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <HiOutlineSun className="toggle-icon" />
      ) : (
        <HiOutlineMoon />
      )}
    </Wrapper>
  );
};
export default ThemeToggle;
