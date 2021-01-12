import PackingOutputMain from "./PackingOutputMain";
import PackingOutputNotPacked from "./PackingOutputNotPacked";
import PackingOutputVisualization from "./PackingOutputVisualization";

const PackingOutput = ({ data }: any) => {
	const str = JSON.stringify(data, null, 2);
	const bin = data && data[0] && data[0].bin_data;

	if (!bin) return <div></div>;

	const notpacked = data[0].not_packed_items;

	return (
		<div className="output">
			<h2>Packing Result</h2>
			<PackingOutputMain data={data} />
			{notpacked.length > 0 && <PackingOutputNotPacked items={notpacked} />}
			<PackingOutputVisualization json={data[0]} />
			{/*
			Output:
			<br />
			<textarea cols={120} rows={60} value={str} />
			 */}
		</div>
	);
};

export default PackingOutput;
