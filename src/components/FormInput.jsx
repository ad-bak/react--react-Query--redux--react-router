const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default FormInput;
