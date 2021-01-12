const PackingOutputVisualization = ({ json }: any) => {
	const separated: any = [];
	const sbs: any = [];
	json.items.forEach((it: any) => {
		separated.push(
			<img src={it.image_separated} alt="Separated" className="visimage" />
		);
		sbs.push(<img src={it.image_sbs} alt="SBS" className="visimage" />);
	});

	return (
		<div>
			<div className="visualization">
				<h2>Packing Visualization</h2>
				<div className="visualizations">
					<div>
						<div>
							<strong>Images showing single items in container</strong>
						</div>
						{separated}
					</div>
					<div>
						<div>
							<strong>Images showing packing step by step</strong>
						</div>
						{sbs}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PackingOutputVisualization;
