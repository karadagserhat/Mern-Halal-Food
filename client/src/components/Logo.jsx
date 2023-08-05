import logo from '../assets/images/logo.png';
import logoDark from '../assets/images/logo-dark.png';
import { useDashboardContext } from '../pages/DashboardLayout';

const Logo = () => {
  const { isDarkTheme } = useDashboardContext();

  const src = isDarkTheme ? logoDark : logo;

  return <img src={src} alt="halal-food" className="logo" />;
  // <img src={logo} alt="halal-food" className="logo" />;
};
export default Logo;
