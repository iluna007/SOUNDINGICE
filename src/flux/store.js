import { EventEmitter } from "eventemitter3";
import dispatcher from "./dispatcher";

class Store extends EventEmitter {
	constructor() {
		super();
		this.data = [];
	}

	getAll() {
		return this.data;
	}

	setData(newData) {
		this.data = newData;
		this.emit("change"); // Notifica a los listeners que los datos han cambiado
	}
}

const store = new Store();

// Escucha la acción FETCH_DATA
dispatcher.on("FETCH_DATA", (data) => {
	store.setData(data);
});

export default store;
