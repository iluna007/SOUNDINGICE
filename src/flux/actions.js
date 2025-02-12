import dataDummy from "./datadummy";
import dispatcher from "./dispatcher";

export const fetchData1 = async () => {
	try {
		// Optionally simulate a network delay:
		await new Promise((resolve) => setTimeout(resolve, 500));
		const data = dataDummy; // Use the dummy array directly
		dispatcher.emit("FETCH_DATA", data); // Emit the data to the store
	} catch (error) {
		console.error("Error fetching dummy data:", error);
	}
};
