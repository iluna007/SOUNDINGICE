import { useEffect, useState, useRef } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import store from "../flux/store";
import { selectRecord } from "../flux/actions";
import "mapbox-gl/dist/mapbox-gl.css";

// Configura el token global de Mapbox
mapboxgl.accessToken =
	"pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY203NjMwZHptMHAzaDJrcXlrbnNuMHJlZiJ9.hkoRlM6gQ-BflcGjpI40GA";

const MapEmbed = () => {
	const [viewport, setViewport] = useState({
		latitude: 64.03985877,
		longitude: -138.1501049,
		zoom: 3,
		width: "100%",
		height: "100%",
	});
	const [records, setRecords] = useState(store.getAll());
	const [selectedRecord, setSelectedRecord] = useState(
		store.getSelectedRecord()
	);
	const mapRef = useRef(null);

	useEffect(() => {
		const update = () => {
			setRecords(store.getAll());
			setSelectedRecord(store.getSelectedRecord());
		};
		store.on("change", update);
		return () => store.off("change", update);
	}, []);

	const handleMarkerClick = (record) => {
		selectRecord(record);
	};

	return (
		<ReactMapGL
			ref={mapRef}
			{...viewport}
			mapStyle='mapbox://styles/ikerluna/cm2dk18gv007l01ph2anbepkk'
			mapboxApiAccessToken={mapboxgl.accessToken}
			// En v8 se usa onMove en lugar de onViewportChange
			onMove={(evt) => setViewport(evt.viewState)}
			onError={(error) => console.error("Mapbox error:", error)}
			interactive={true}
		>
			{records.map((record) => (
				<Marker key={record.id} latitude={record.lat} longitude={record.lon}>
					<div
						onClick={() => handleMarkerClick(record)}
						style={{ cursor: "pointer" }}
					>
						<FaMapMarkerAlt
							size={30}
							color={
								selectedRecord && record.id === selectedRecord.id
									? "black"
									: "grey"
							}
						/>
					</div>
				</Marker>
			))}

			{selectedRecord && (
				<Popup
					className='custom-popup'
					latitude={selectedRecord.lat}
					longitude={selectedRecord.lon}
					closeButton={true}
					closeOnClick={false}
					onClose={() => selectRecord(null)}
					offsetTop={-10}
				>
					<div>
						<p>ID: {selectedRecord.id}</p>
						<audio controls autoPlay>
							<source src={selectedRecord.soundFilePath} type='audio/mpeg' />
							Your browser does not support the audio element.
						</audio>
					</div>
				</Popup>
			)}
		</ReactMapGL>
	);
};

export default MapEmbed;
