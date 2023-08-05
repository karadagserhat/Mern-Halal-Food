import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, SubmitBtn } from '../components';
import logo from '../assets/images/logo.png';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import SpinnerMini from '../components/SpinnerMini';
import { useState } from 'react';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries();
      toast.success('Login successful');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      setIsLoading(true);
      await customFetch.post('/auth/login', data);
      toast.success('Take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Form method="POST" className="form">
        {/* <Logo /> */}
        <Link to="/">
          <img src={logo} alt="halal-food" className="logo" />
        </Link>
        <h4>Login</h4>

        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />

        <SubmitBtn />

        <button
          type="button"
          className="btn btn-block"
          onClick={loginDemoUser}
          disabled={isLoading}
        >
          {!isLoading ? 'explore the app' : <SpinnerMini />}
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
