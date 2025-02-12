import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../Styles/RecordingCard.css";

const RecordingCard = ({ record }) => {
	const [imageUrl, setImageUrl] = useState(null);
	const [audioUrl, setAudioUrl] = useState(null);

	useEffect(() => {
		// Using the correct keys from dummy data
		const imgUrl = record.pictureFilePath;
		const audUrl = record.soundFilePath;
		setImageUrl(imgUrl);
		setAudioUrl(audUrl);
	}, [record]);

	return (
		<div className='recording-card'>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt={`Picture for ${record.recordist}`}
					className='recording-image'
					loading='lazy'
					onError={(e) => {
						e.target.src =
							"https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image";
					}}
				/>
			) : (
				<p>Loading images...</p>
			)}
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
				{audioUrl ? (
					<audio controls aria-label={`Audio recording by ${record.recordist}`}>
						<source src={audioUrl} type='audio/mpeg' />
						Your browser does not support the audio element.
					</audio>
				) : (
					<p>Loading Audio...</p>
				)}
			</div>
		</div>
	);
};

RecordingCard.propTypes = {
	record: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		pictureFilePath: PropTypes.string.isRequired,
		soundFilePath: PropTypes.string.isRequired,
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
