import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchDashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { CATEGORY, BRAND_STATUS, BRAND_SORT_BY } from '../utils/constants';
import { useAllBrandsContext } from '../pages/AllBrands';

const SearchContainer = () => {
  const { searchValues } = useAllBrandsContext();
  const { search, brandStatus, category, sort } = searchValues;

  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          {/* search position */}

          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={debounce((form) => submit(form))}
          />

          <FormRowSelect
            labelText="brand status"
            name="brandStatus"
            list={['all', ...Object.values(BRAND_STATUS)]}
            defaultValue={brandStatus}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <FormRowSelect
            name="category"
            list={['all', ...Object.values(CATEGORY)]}
            defaultValue={category}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(BRAND_SORT_BY)]}
            onChange={(e) => submit(e.currentTarget.form)}
          />

          <Link to="/dashboard/all-brands" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
