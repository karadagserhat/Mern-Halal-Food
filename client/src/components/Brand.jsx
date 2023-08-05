import {
  HiArrowUpRight,
  HiOutlineCalendar,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import { Link, Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Brand';
import BrandInfo from './BrandInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Brand = ({
  _id,
  brandName,
  companyName,
  address,
  brandStatus,
  category,
  createdAt,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{brandName.charAt(0)} </div>
        <div className="info">
          <h5>{brandName} </h5>
          <p>{category} </p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <BrandInfo icon={<HiOutlineBriefcase />} text={companyName} />
          <BrandInfo icon={<HiOutlineCalendar />} text={date} />
          <BrandInfo icon={<HiArrowUpRight />} text={address} />
          <div className={`status ${brandStatus}`}>{brandStatus} </div>
        </div>

        <footer className="actions">
          <Link
            to={`../edit-brand/${_id}`}
            className="btn edit-btn"
            disabled={isSubmitting}
          >
            Edit
          </Link>
          <Form method="POST" action={`../delete-brand/${_id}`}>
            <button
              type="submit"
              className="btn delete-btn"
              disabled={isSubmitting}
            >
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Brand;
