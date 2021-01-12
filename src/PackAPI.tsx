import axios from "axios";

const PackAPI = ({ container, items, onResults, onError }: any) => {
	const handlePack = async () => {
		const params = {
			username: "tomas.holub@syntacticsugar.com",
			api_key: "2f774b6888642a647e704cd2c294f7ef",
			bins: [container],
			items,
			params: {
				images_background_color: "246,246,246",
				images_bin_border_color: "59,59,59",
				images_bin_fill_color: "230,230,230",
				images_item_border_color: "54,113,55", //"214,79,79",
				images_item_fill_color: "69,171,70", // "177,14,14",
				images_item_back_border_color: "215,103,103",
				images_sbs_last_item_fill_color: "99,93,93",
				images_sbs_last_item_border_color: "145,133,133",
				images_width: 100,
				images_height: 100,
				images_source: "file",
				images_sbs: 1,
				stats: 1,
				item_coordinates: 1,
				images_complete: 1,
				images_separated: 1,
			},
		};

		const query = `https://us-east.api.3dbinpacking.com/packer/pack?query=${JSON.stringify(
			params
		)}`;
		console.log("QUERY", query);

		try {
			const resp = await axios.get(query);
			if (resp.status === 200) {
				console.log("OK", JSON.stringify(resp.data.response, null, 2));
				onResults(resp.data.response.bins_packed);
			} else {
				console.log("NOT OK");
				onError(resp.status); // TODO:
			}
		} catch (error) {
			console.log("ERR");
			onError(error);
		}
	};

	return <input type="button" value="PACK" onClick={handlePack} />;
};

export default PackAPI;
