import { useEffect, useState, useRef } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
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
		latitude: 64.049004,
		longitude: -139.442815,
		zoom: 12.96,
		pitch: 62.11,
		bearing: 0,
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

	const handleMapLoad = () => {
		const map = mapRef.current.getMap();
		map.addSource("mapbox-dem", {
			type: "raster-dem",
			url: "mapbox://mapbox.mapbox-terrain-dem-v1",
			tileSize: 512,
			maxzoom: 14,
		});
		map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
	};

	const handleMarkerClick = (record) => {
		selectRecord(record);
	};

	return (
		<ReactMapGL
			ref={mapRef}
			{...viewport}
			mapStyle='mapbox://styles/ikerluna/cm76812yz01va01qx4nvo4nf3'
			mapboxApiAccessToken={mapboxgl.accessToken}
			onLoad={handleMapLoad}
			onMove={(evt) => setViewport(evt.viewState)}
			onError={(error) => console.error("Mapbox error:", error)}
			interactive={true}
		>
			<NavigationControl position='top-right' />
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
						<div style={{ textAlign: "center" }}>
							<h3>{selectedRecord.id}</h3>
						</div>
						<audio controls autoPlay>
							<source src={selectedRecord.audioFilePath} type='audio/mpeg' />
							Your browser does not support the audio element.
						</audio>
					</div>
				</Popup>
			)}
		</ReactMapGL>
	);
};

export default MapEmbed;
