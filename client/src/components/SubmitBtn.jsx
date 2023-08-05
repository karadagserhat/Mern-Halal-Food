import { useNavigation } from 'react-router-dom';
import SpinnerMini from './SpinnerMini';

const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isSubmitting}
    >
      {!isSubmitting ? 'submit' : <SpinnerMini />}
    </button>
  );
};
export default SubmitBtn;
