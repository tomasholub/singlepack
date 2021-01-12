import { useState } from "react";

const InputField = ({ label, value, onChange }: any) => {
	const [isEmpty, setIsEmpty] = useState(false);

	const handleChange = (e: any) => {
		setIsEmpty(e.target.value === "");
		onChange(e.target.value);
	};

	return (
		<div className="inputfield">
			<div>{label}</div>
			<input
				className={isEmpty ? "empty" : ""}
				type="text"
				value={value}
				onChange={handleChange}
			/>
			Empty: {isEmpty ? "Y" : "N"}
		</div>
	);
};

export default InputField;
