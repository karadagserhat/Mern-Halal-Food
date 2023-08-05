import {
  HiOutlineIdentification,
  HiOutlineCalendarDays,
} from 'react-icons/hi2';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import StatItem from '../components/StatItem';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, brands } = useLoaderData();

  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<HiOutlineIdentification />}
      />
      <StatItem
        title="total brands"
        count={brands}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<HiOutlineCalendarDays />}
      />
    </Wrapper>
  );
};
export default Admin;
