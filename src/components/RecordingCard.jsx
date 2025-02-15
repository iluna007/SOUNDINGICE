import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Waveform from "./Waveform"; // Asegúrate de que la ruta sea correcta
import "../Styles/RecordingCard.css";

const RecordingCard = ({ record }) => {
	const [preview, setPreview] = useState(true);

	useEffect(() => {
		setPreview(true);
	}, [record]);

	return (
		<div
			className='recording-card'
			id={`record-${record.id}`}
			onClick={() => setPreview(false)}
			style={{ cursor: "pointer" }}
		>
			<img
				src={record.pictureFilePath}
				alt={`Picture for ${record.recordist}`}
				className='recording-image'
				loading='lazy'
				onError={(e) => {
					e.target.src =
						"https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image";
				}}
			/>
			{preview && (
				<div className='preview-info'>
					<Waveform audioUrl={record.audioFilePath} />
					<p className='recording-id'>ID: {record.id}</p>
				</div>
			)}
			{!preview && (
				<div className='recording-details'>
					<h3>{record.id}</h3>
					<p>
						<strong>Date:</strong> {record.date}
					</p>
					<p>
						<strong>Time:</strong> {record.time}
					</p>
					<p>
						<strong>Location:</strong> Lat: {record.lat}, Lon: {record.lon}
					</p>
					<p>
						<strong>Conditions:</strong> {record.conditions}
					</p>
					<p>
						<strong>Duration:</strong> {record.Duration || record.duration}
					</p>
					<p>
						<strong>Key Words:</strong> {record.tags || record["Key Words"]}
					</p>
					<p>
						<strong>Recordist:</strong> {record.recordist}
					</p>
					<audio controls autoPlay>
						<source src={record.audioFilePath} type='audio/mpeg' />
						Your browser does not support the audio element.
					</audio>
				</div>
			)}
		</div>
	);
};

RecordingCard.propTypes = {
	record: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		pictureFilePath: PropTypes.string.isRequired,
		audioFilePath: PropTypes.string.isRequired,
		recordist: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		time: PropTypes.string.isRequired,
		lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		lon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		conditions: PropTypes.string.isRequired,
		Duration: PropTypes.string,
		duration: PropTypes.string,
		tags: PropTypes.string,
		"Key Words": PropTypes.string,
	}).isRequired,
};

export default RecordingCard;
