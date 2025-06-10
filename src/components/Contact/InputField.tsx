import { ErrorMessage, Field } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  isTextarea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  isRequired,
  isTextarea = false,
}) => (
  <div className="group">
    <label
      htmlFor={name}
      className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3"
    >
      {label} 
      {isRequired && <span className="text-red-500">*</span>}
      <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
    </label>
    
    <div className="relative">
      <Field
        as={isTextarea ? "textarea" : "input"}
        type={!isTextarea ? type : undefined}
        id={name}
        name={name}
        placeholder={placeholder}
        rows={isTextarea ? 5 : undefined}
        className="w-full px-4 py-4 bg-white/80 dark:bg-zinc-700/80 backdrop-blur-sm border-2 border-zinc-200 dark:border-zinc-600 rounded-xl 
                   text-zinc-800 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400
                   focus:border-zinc-900 dark:focus:border-zinc-300 focus:ring-2 focus:ring-zinc-900/20 dark:focus:ring-zinc-300/20 
                   transition-all duration-300 outline-none resize-none
                   hover:border-zinc-300 dark:hover:border-zinc-500
                   group-focus-within:shadow-lg group-focus-within:scale-[1.02]"
      />
      
      {/* Floating gradient border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-sm"></div>
    </div>
    
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 dark:text-red-400 text-sm mt-2 font-medium flex items-center gap-2"
    >
      {(msg) => (
        <>
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
          {msg}
        </>
      )}
    </ErrorMessage>
  </div>
);
export default InputField;
