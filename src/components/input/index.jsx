import React from 'react';

const Input = ({ label, type = 'text', placeholder, value, onChange, error, onBlur, name }) => {
  return (
    <div className="h-[48px]">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        onBlur={onBlur}
        className="shadow appearance-none rounded w-full py-3 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline bg-primaryDark"
      />
      {error && <p className='text-xs text-danger text-left p-1'>{error}</p>}
    </div>
  );
};

export default Input;