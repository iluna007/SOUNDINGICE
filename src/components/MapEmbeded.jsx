// src/components/MapEmbed.jsx
import PropTypes from "prop-types";

const MapEmbed = ({ latitude, longitude, zoom = 10 }) => {
	const accessToken =
		"pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg";
	const styleId = "ikerluna/cm2dk18gv007l01ph2anbepkk";
	const src = `https://api.mapbox.com/styles/v1/${styleId}.html?title=false&access_token=${accessToken}&zoomwheel=false#${zoom}/${latitude}/${longitude}`;

	console.log("MapEmbed src:", src);

	return (
		<iframe
			width='100%'
			height='400px'
			src={src}
			title='Mapbox embed'
			style={{ border: "none" }}
		/>
	);
};

MapEmbed.propTypes = {
	latitude: PropTypes.number.isRequired,
	longitude: PropTypes.number.isRequired,
	zoom: PropTypes.number,
};

export default MapEmbed;
