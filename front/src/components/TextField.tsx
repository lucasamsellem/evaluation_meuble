import React from 'react';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
}

function TextField({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  name,
}: TextFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition'
      />
    </div>
  );
}

export default TextField;
