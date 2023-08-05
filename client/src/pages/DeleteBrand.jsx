import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/brands/${params.id}`);
      // queryClient.invalidateQueries(['brands']);
      // queryClient.invalidateQueries(['stats']);
      queryClient.invalidateQueries({ active: true });

      toast.success('Brand deleted successfully');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return redirect('/dashboard/all-brands');
  };
