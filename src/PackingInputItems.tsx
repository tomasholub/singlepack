import PackingInputOneItem from "./PackingInputOneItem";

const PackingInputItems = ({ items, onItemsChange }: any) => {
	const handleAddItem = () => {
		const newItems = JSON.parse(JSON.stringify(items));
		const newItem = {
			w: 1,
			h: 1,
			d: 1,
			q: 1,
			vr: 1,
			id: "NEW ITEM",
			wg: 0,
		};
		newItems.push(newItem);
		console.log("a", newItems);
		onItemsChange(newItems);
	};

	const handleItemChange = (index: number) => (id: number, value: string) => {
		const newItems = JSON.parse(JSON.stringify(items));
		const newItem = newItems[index];
		newItem[id] = value;
		onItemsChange(newItems);
	};

	const handleItemDelete = (index: number) => () => {
		const newItems = JSON.parse(JSON.stringify(items));
		newItems.splice(index, 1);
		onItemsChange(newItems);
	};

	return (
		<div className="items">
			<h2>Items</h2>
			<div>
				{items.map((it: any, index: number) => (
					<PackingInputOneItem
						key={index}
						item={it}
						onItemChange={handleItemChange(index)}
						onItemDelete={handleItemDelete(index)}
					/>
				))}
			</div>
			<input type="button" value="ADD ITEM" onClick={handleAddItem} />
		</div>
	);
};

export default PackingInputItems;
