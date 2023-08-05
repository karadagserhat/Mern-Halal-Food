import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, FormRowSelect, SubmitBtn } from '../components/index';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { BRAND_STATUS, CATEGORY } from '../utils/constants';
import customFetch from '../utils/customFetch';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post('/brands', data);
      // queryClient.invalidateQueries(['brands']);
      // queryClient.invalidateQueries(['stats']);
      queryClient.invalidateQueries({ active: true });
      toast.success('Brand added successfully');
      return redirect('all-brands');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddBrand = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="POST" className="form">
        <h4 className="form-title">Add Brand</h4>
        <div className="form-center">
          <FormRow type="text" name="brandName" labelText="brand" />
          <FormRow type="text" name="companyName" labelText="company" />
          <FormRow type="text" name="address" defaultValue="Test Address" />

          <FormRowSelect
            labelText="brand status"
            name="brandStatus"
            defaultValue={BRAND_STATUS.PENDING}
            list={Object.values(BRAND_STATUS)}
          />

          <FormRowSelect
            name="category"
            defaultValue={CATEGORY.WHITE_MEAT}
            list={Object.values(CATEGORY)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddBrand;
