import axios from "axios";
import dispatcher from "./dispatcher";

export const fetchData1 = async () => {
	try {
		const response = await axios.get(
			"https://script.google.com/macros/s/AKfycbzhR1nak_o9kHP7tz7dibuCT4wpPJoGuovmi1-4cohj1Rp_JqpJ1UOx4rnYkSkniQCx/exec"
		);
		const data = response.data.sounddata; // Accede a los datos del JSON
		dispatcher.emit("FETCH_DATA", data); // Envía los datos al store
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

