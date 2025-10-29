import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

interface CheckboxesFieldProps {
	label: string;
	options: string[];
	values: string[];
	onChange: (values: string[]) => void;
	name?: string;
	className?: string;
}

function CheckboxesField({
	label,
	options,
	values,
	onChange,
	name,
	className = "",
}: CheckboxesFieldProps) {
	const handleToggle = (option: string) => {
		const isSelected = values.includes(option);
		if (isSelected) {
			onChange(values.filter((v) => v !== option));
		} else {
			onChange([...values, option]);
		}
	};

	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			<label className="text-sm font-medium text-gray-700">{label}</label>

			<div
				className="border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-400 transition"
				role="group"
				aria-labelledby={name}
			>
				<div className="flex flex-wrap gap-3">
					{options.map((opt) => {
						const id = `${name || "checkbox"}-${opt}`;
						const checked = values?.includes(opt);
						return (
							<label
								key={opt}
								htmlFor={id}
								className="inline-flex items-center gap-2 select-none"
							>
								<input
									id={id}
									name={name}
									type="checkbox"
									value={opt}
									checked={checked}
									onChange={() => handleToggle(opt)}
									className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
								/>
								<span className="text-sm text-gray-700">
									{capitalizeFirstLetter(opt)}
								</span>
							</label>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default CheckboxesField;
