interface Props {
  value?: string
  required?: boolean
  type?: string
  placeholder?: string
  className?: string
}

const Input = ({ value, required, type = "text", placeholder, className }: Props) => {


  return (
    <>
      {required ? (
        <>
          <input
            className={`input-required ${className}`}
            type={type}
            value={value}
            placeholder={placeholder}
            required={required}
          />
          <span className="input-border-bottom-right"></span>
          <span className="input-border-bottom-left"></span>
        </>
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default Input;
