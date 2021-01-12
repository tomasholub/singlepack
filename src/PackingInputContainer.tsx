import InputField from "./InputField";

const PackingInputContainer = ({ container, onContainerChange }: any) => {
	const handleChange = (id: any) => (value: any) => {
		const newContainer = { ...container, [id]: value };
		onContainerChange(newContainer);
	};

	return (
		<div className="container">
			<h2>Container</h2>
			<div className="row">
				<InputField
					label="Id"
					value={container.id}
					onChange={handleChange("id")}
				/>
				<InputField
					label="Wdt"
					value={container.w}
					onChange={handleChange("w")}
				/>
				<InputField
					label="Hgt"
					value={container.h}
					onChange={handleChange("h")}
				/>
				<InputField
					label="Dpt"
					value={container.d}
					onChange={handleChange("d")}
				/>
				<InputField
					label="Max. wgt."
					value={container.max_wg}
					onChange={handleChange("max_wg")}
				/>
			</div>
		</div>
	);
};

export default PackingInputContainer;
