import { ErrorMessage, Field } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  isRequired,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {isRequired && <span className="text-red-500">*</span>}
    </label>
    <Field
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
export default InputField;
