import PackingInputContainer from "./PackingInputContainer";
import PackingInputItems from "./PackingInputItems";

const PackingInput = ({
	container,
	items,
	onContainerChange,
	onItemsChange,
}: any) => (
	<div className="input">
		<PackingInputContainer
			container={container}
			onContainerChange={onContainerChange}
		/>
		<PackingInputItems items={items} onItemsChange={onItemsChange} />
	</div>
);

export default PackingInput;
