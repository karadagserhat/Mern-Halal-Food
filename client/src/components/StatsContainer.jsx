import {HiOutlineCheckCircle, HiOutlineXMark, HiNoSymbol,HiOutlineEyeSlash} from "react-icons/hi2"
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
import { useDashboardContext } from '../pages/DashboardLayout';

const StatsContainer = ({ defaultStats }) => {
  const { isDarkTheme } =useDashboardContext();

  const stats = [
    {
      title: 'pending brands',
      count: defaultStats?.pending || 0,
      icon: <HiOutlineEyeSlash />,
      color: isDarkTheme ? "#fef9c3" : '#a16207',
      bcg: isDarkTheme ? "#854d0e" : '#fef9c3',
    },
    {
      title: 'confirmed brands',
      count: defaultStats?.confirmed || 0,
      icon: <HiOutlineCheckCircle />,
      color: isDarkTheme ? "#dcfce7" : '#15803d',
      bcg: isDarkTheme ? "#166534" : '#dcfce7',
    },
    {
      title: 'cancelled brands',
      count: defaultStats?.cancelled || 0,
      icon: <HiOutlineXMark />,
      color: isDarkTheme ? "#b91c1c" : '#b91c1c',
      bcg: isDarkTheme ? "#fee2e2" : '#fee2e2',
    },
    {
      title: 'expired brands',
      count: defaultStats?.expired || 0,
      icon: <HiNoSymbol />,
      color: isDarkTheme ? "#f3f4f6" : '#374151',
      bcg: isDarkTheme ? "#374151" : '#e5e7eb',
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
