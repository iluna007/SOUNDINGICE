import { useEffect, useState, useRef } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import store from "../flux/store";
import { selectRecord } from "../flux/actions";
import "mapbox-gl/dist/mapbox-gl.css";
import mlcontour from "maplibre-contour"; // Asegúrate de instalarlo: npm install maplibre-contour

// Configura el token global de Mapbox
mapboxgl.accessToken =
	"pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY203NjMwZHptMHAzaDJrcXlrbnNuMHJlZiJ9.hkoRlM6gQ-BflcGjpI40GA";

const MapEmbed = () => {
	const [viewport, setViewport] = useState({
		latitude: 64.049004,
		longitude: -139.442815,
		zoom: 6.5,
		pitch: 0,
		bearing: 0,
		width: "100%",
		height: "100%", // altura completa de la ventana
		hash: true,
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

		// Configuración de mlcontour para contornos a partir de un DEM
		const demSource = new mlcontour.DemSource({
			url: "https://demotiles.maplibre.org/terrain-tiles/{z}/{x}/{y}.png",
			encoding: "mapbox",
			maxzoom: 12,
			worker: true,
		});
		demSource.setupMaplibre(mapboxgl);

		// Fuente y capa de hillshade basada en mlcontour
		if (!map.getSource("hillshadeSource")) {
			map.addSource("hillshadeSource", {
				type: "raster-dem",
				tiles: [demSource.sharedDemProtocolUrl],
				tileSize: 512,
				maxzoom: 12,
			});
		}
		if (!map.getLayer("hills")) {
			map.addLayer({
				id: "hills",
				type: "hillshade",
				source: "hillshadeSource",
				layout: { visibility: "visible" },
				paint: { "hillshade-exaggeration": 0.25 },
			});
		}

		// Fuente y capas de contornos
		if (!map.getSource("contourSourceFeet")) {
			map.addSource("contourSourceFeet", {
				type: "vector",
				tiles: [
					demSource.contourProtocolUrl({
						multiplier: 3.28084, // de metros a pies
						overzoom: 1,
						thresholds: {
							11: [200, 1000],
							12: [100, 500],
							13: [100, 500],
							14: [50, 200],
							15: [20, 100],
						},
						elevationKey: "ele",
						levelKey: "level",
						contourLayer: "contours",
					}),
				],
				maxzoom: 15,
			});
		}
		if (!map.getLayer("contours")) {
			map.addLayer({
				id: "contours",
				type: "line",
				source: "contourSourceFeet",
				"source-layer": "contours",
				paint: {
					"line-opacity": 0.5,
					"line-width": ["match", ["get", "level"], 1, 1, 0.5],
				},
			});
		}
		if (!map.getLayer("contour-text")) {
			map.addLayer({
				id: "contour-text",
				type: "symbol",
				source: "contourSourceFeet",
				"source-layer": "contours",
				filter: [">", ["get", "level"], 0],
				paint: {
					"text-halo-color": "white",
					"text-halo-width": 1,
				},
				layout: {
					"symbol-placement": "line",
					"text-size": 10,
					"text-field": ["concat", ["number-format", ["get", "ele"], {}], "'"],
					"text-font": ["Noto Sans Bold"],
				},
			});
		}
	};

	const handleMarkerClick = (record) => {
		selectRecord(record);
	};

	return (
		<ReactMapGL
			ref={mapRef}
			{...viewport}
			mapStyle='mapbox://styles/ikerluna/cm7b6ykln005d01s7fdffhda4'
			mapboxApiAccessToken={mapboxgl.accessToken}
			onLoad={handleMapLoad}
			onMove={(evt) => setViewport(evt.viewState)}
			onError={(error) => console.error("Mapbox error:", error)}
			interactive
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
					closeButton
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
