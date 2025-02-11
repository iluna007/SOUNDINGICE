import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getFirebaseUrl } from "../firebaseStorageHelper";
import "../Styles/RecordingCard.css";

const RecordingCard = ({ record }) => {
	const [imageUrl, setImageUrl] = useState(null);
	const [audioUrl, setAudioUrl] = useState(null);

	useEffect(() => {
		const fetchUrls = async () => {
			try {
				const [imgUrl, audUrl] = await Promise.all([
					getFirebaseUrl(record["Picture file path"]),
					getFirebaseUrl(record["Sound file path"]),
				]);
				setImageUrl(imgUrl);
				setAudioUrl(audUrl);
			} catch (error) {
				console.error("Error fetching URLs:", error);
			}
		};
		fetchUrls();
	}, [record]);

	return (
		<div className='recording-card'>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt={`Picture for ${record.Recordist}`}
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
					<strong>Date:</strong> {record.Date}
				</p>
				<p>
					<strong>Time:</strong> {record.Time}
				</p>
				<p>
					<strong>Location:</strong> Lat: {record.Lat}, Lon: {record.Lon}
				</p>
				<p>
					<strong>Conditions:</strong> {record.Conditions}
				</p>
				<p>
					<strong>Duration:</strong> {record.Duration}
				</p>
				<p>
					<strong>Key Words:</strong> {record["Key Words"]}
				</p>
				<p>
					<strong>Recordist:</strong> {record.Recordist}
				</p>

				{audioUrl ? (
					<audio controls aria-label={`Audio recording by ${record.Recordist}`}>
						<source src={audioUrl} type='audio/mpeg' />
						Your web does not support audio element.
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
		id: PropTypes.string.isRequired,
		"Picture file path": PropTypes.string.isRequired,
		"Sound file path": PropTypes.string.isRequired,
		Recordist: PropTypes.string.isRequired,
		Date: PropTypes.string.isRequired,
		Time: PropTypes.string.isRequired,
		Lat: PropTypes.string.isRequired,
		Lon: PropTypes.string.isRequired,
		Conditions: PropTypes.string.isRequired,
		Duration: PropTypes.string.isRequired,
		"Key Words": PropTypes.string.isRequired,
	}).isRequired,
};

export default RecordingCard;
