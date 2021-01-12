const PackingOutputMain = ({ data }: any) => {
	const bin = data && data[0] && data[0].bin_data;

	if (!bin) return <div></div>;

	const packed = data[0].items;
	const notpacked = data[0].not_packed_items;

	const numNotPacked = notpacked.reduce(
		(acc: number, curr: any) => (acc += curr.q),
		0
	);

	return (
		<div className="outputmain">
			<div className="outputmain2">
				<div>
					<h3>Container ID: {bin.id}</h3>
				</div>
				<img src={data[0].image_complete} alt="Complete" />
			</div>
			<div>
				<h3>Dimensions</h3>
				<div className="dimensions">
					<div>
						<div>Width: {bin.w}</div>
						<div>Height: {bin.h}</div>
						<div>Depth: {bin.d}</div>
						<div>Max. wgt.: {bin.gross_weight}</div>
					</div>
					<div>
						<div>Packed items : {packed.length}</div>
						<div>Space taken : {bin.used_space} %</div>
						<div>Weight taken : {bin.used_weight} %</div>
						<div>Packing time : {data[0].packing_time}</div>
						<div>Images generation time : {data[0].images_generation_time}</div>
						<div>Not packed items : {numNotPacked}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PackingOutputMain;
