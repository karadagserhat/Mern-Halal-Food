import Brand from './Brand';
import Wrapper from '../assets/wrappers/BrandsContainer';
import { useAllBrandsContext } from '../pages/AllBrands';
import PageBtnContainer from './PageBtnContainer';

const BrandsContainer = () => {
  const { data } = useAllBrandsContext();
  const { brands, totalBrands, numOfPages } = data;

  if (brands.length == 0) {
    return (
      <Wrapper>
        <h2>No brands to display.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalBrands} brand{brands.length > 1 && 's'} found
      </h5>

      <div className="brands">
        {brands.map((brand) => {
          return <Brand key={brand._id} {...brand} />;
        })}
      </div>

      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default BrandsContainer;
