import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { BrandsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const allBrandsQuery = (params) => {
  const { search, brandStatus, category, sort, page } = params;
  return {
    queryKey: [
      'brands',
      search ?? '',
      brandStatus ?? 'all',
      category ?? 'all',
      sort ?? 'newest',
      page ?? '1',
      // page ? Number(page) + 1 : 1,
      // Number(page) + 1 ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/brands', {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allBrandsQuery(params));
    return { searchValues: { ...params } };
  };

const AllBrandsContext = createContext();

const AllBrands = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allBrandsQuery(searchValues));

  return (
    <AllBrandsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <BrandsContainer />
    </AllBrandsContext.Provider>
  );
};

export const useAllBrandsContext = () => useContext(AllBrandsContext);

export default AllBrands;
