const PackingOutput = ({ items }: any) => {
	return (
		<div className="notpacked">
			<strong>Items that have not been packed</strong>
			<ul>
				{items.map((it: any) => (
					<li key={it.id}>
						<strong>ID:</strong> {it.id} <strong>Quantity:</strong> {it.q}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PackingOutput;
