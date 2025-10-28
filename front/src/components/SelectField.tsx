import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  name?: string;
}

function SelectField({ label, value, options, onChange, name }: SelectFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='text-sm font-medium text-gray-700'>
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition'
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {capitalizeFirstLetter(opt)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
