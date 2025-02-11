import PropTypes from "prop-types";
import "../Styles/MapEmbeded.css";

const MapEmbed = ({ latitude = 37.7577, longitude = -122.4376, zoom = 10 }) => {
	const accessToken =
		"pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg";
	const styleId = "ikerluna/cm2dk18gv007l01ph2anbepkk";
	// Removed the zoomwheel parameter so that wheel events are handled by the map.
	const src = `https://api.mapbox.com/styles/v1/${styleId}.html?title=false&access_token=${accessToken}#${zoom}/${latitude}/${longitude}`;

	console.log("MapEmbed src:", src);

	const handleWheel = (e) => {
		// Prevent the mouse wheel event from propagating to the parent container.
		e.stopPropagation();
	};

	return (
		<div className='map-wrapper' onWheel={handleWheel}>
			<iframe
				width='100%'
				height='100%'
				src={src}
				title='Mapbox embed'
				style={{ border: "none" }}
			/>
		</div>
	);
};

MapEmbed.propTypes = {
	latitude: PropTypes.number,
	longitude: PropTypes.number,
	zoom: PropTypes.number,
};

export default MapEmbed;
