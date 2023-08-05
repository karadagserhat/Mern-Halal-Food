import { useNavigation } from 'react-router-dom';

const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required
        disabled={isSubmitting}
      />
    </div>
  );
};
export default FormRow;
