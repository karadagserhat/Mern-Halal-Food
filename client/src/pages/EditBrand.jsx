import { Form, redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import {} from 'react-router-dom';
import { BRAND_STATUS, CATEGORY } from '../utils/constants';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const singleBrandQuery = (id) => {
  return {
    queryKey: ['brand', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/brands/${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleBrandQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect('/dashboard/all-brands');
    }
  };

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.patch(`/brands/${params.id}`, data);
      // queryClient.invalidateQueries(['brands']);
      queryClient.invalidateQueries({ active: true });
      toast.success('Brand edited successfully');
      return redirect('/dashboard/all-brands');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditBrand = () => {
  const id = useLoaderData();

  const {
    data: { brand },
  } = useQuery(singleBrandQuery(id));

  return (
    <Wrapper>
      <Form method="POST" className="form">
        <h4 className="form-title">edit brand</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="brandName"
            labelText="brand"
            defaultValue={brand.brandName}
          />
          <FormRow
            type="text"
            name="companyName"
            labelText="company"
            defaultValue={brand.companyName}
          />
          <FormRow type="text" name="address" defaultValue={brand.address} />

          <FormRowSelect
            name="brandStatus"
            labelText="brand status"
            defaultValue={brand.brandStatus}
            list={Object.values(BRAND_STATUS)}
          />
          <FormRowSelect
            name="category"
            defaultValue={brand.category}
            list={Object.values(CATEGORY)}
          />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditBrand;
