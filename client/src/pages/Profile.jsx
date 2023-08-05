import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import customFetch from '../utils/customFetch';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();

    const file = formData.get('avatar');
    if (file && file.size > 500000) {
      toast.error('Image size too large');
      return null;
    }

    try {
      await customFetch.patch('/users/update-user', formData);
      queryClient.invalidateQueries(['user']);
      toast.success('Profile updated successfully');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email } = user;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>

        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB):
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
              disabled={isSubmitting}
            />
          </div>

          <FormRow type="text" name="name" defaultValue={name} isLoading />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
