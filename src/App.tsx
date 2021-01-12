import React, { useState } from "react";

import PackAPI from "./PackAPI";
import PackingInput from "./PackingInput";
import PackingOutput from "./PackingOutput";

const Header = () => {
	return <h1>Single Pack</h1>;
};

const App = () => {
	const [container, setContainer] = useState({
		w: "10",
		h: "11",
		d: "12",
		id: "bin1",
		max_wg: "0",
	});
	const [items, setItems] = useState([
		{
			w: 5,
			h: 5,
			d: 5,
			q: 21,
			vr: 1,
			id: "ITEM - 1",
			wg: 0,
		},
		{
			w: 20,
			h: 7,
			d: 6,
			q: 10,
			vr: 1,
			id: "ITEM - 2",
			wg: 0,
		},
	]);
	const [results, setResults] = useState({});

	const handleContainerChange = (newContainer: any) =>
		setContainer(newContainer);

	const handleItemsChange = (newItems: any) => setItems(newItems);

	const handleResults = (results: any) => {
		console.log("RESULTS", results);
		setResults(results);
	};

	const handleError = (err: any) => {
		console.error("ERROR", err);
	};

	return (
		<>
			<Header />
			<PackingInput
				container={container}
				items={items}
				onContainerChange={handleContainerChange}
				onItemsChange={handleItemsChange}
			/>
			<PackAPI
				container={container}
				items={items}
				onResults={handleResults}
				onError={handleError}
			/>
			<PackingOutput data={results} />
		</>
	);
};

export default App;
