import InputField from "./InputField";

const PackingInputOneItem = ({ item, onItemChange, onItemDelete }: any) => {
	const handleChange = (id: any) => (value: any) => {
		onItemChange(id, value);
	};

	return (
		<div className="row">
			<InputField label="Id" value={item.id} onChange={handleChange("id")} />
			<InputField label="Wdt" value={item.w} onChange={handleChange("w")} />
			<InputField label="Hgt" value={item.h} onChange={handleChange("h")} />
			<InputField label="Dpt" value={item.d} onChange={handleChange("d")} />
			<InputField label="Wgt" value={item.wg} onChange={handleChange("wg")} />
			<InputField label="Qty" value={item.q} onChange={handleChange("q")} />
			<input className="delete" type="button" value="X" onClick={onItemDelete} />
		</div>
	);
};

export default PackingInputOneItem;
