// src/firebaseStorageHelper.js
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const getFirebaseUrl = async (path) => {
	try {
		const fileRef = ref(storage, path);
		const url = await getDownloadURL(fileRef);
		return url;
	} catch (error) {
		console.error("Error obteniendo la URL del archivo:", error);
		return null;
	}
};
