import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Styles/RecordingCard.css";

const RecordingCard = ({ record }) => {
	const [expanded, setExpanded] = useState(false);
	const [show, setShow] = useState(false);

	const toggleExpanded = () => {
		setExpanded((prev) => !prev);
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div
			className='recording-card'
			onClick={toggleExpanded}
			id={`record-${record.id}`}
		>
			<img
				src={record.pictureFilePath}
				alt={`Picture for ${record.recordist}`}
				className='recording-image glitch-image'
				loading='lazy'
				onError={(e) => {
					e.target.src =
						"https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image";
				}}
			/>
			{expanded ? (
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
						<strong>Key Words:</strong> {record.tags || record["Key Words"]}
					</p>
					<p>
						<strong>Recordist:</strong> {record.recordist}
					</p>
					<audio controls autoPlay>
						<source src={record.audioFilePath} type='audio/mpeg' />
						Your browser does not support the audio element.
					</audio>
					<Button variant='dark' onClick={handleShow}>
						Field Notes
					</Button>
				</div>
			) : (
				<div className='preview-info'>
					<h3 className='recording-id'> {record.id}</h3>
				</div>
			)}

			{/* Offcanvas component */}
			<Offcanvas show={show} onHide={handleClose} backdrop='static'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Field Notes for:  {record.id}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<p >
						<strong>Recordist:</strong> {record.recordist}
					</p>
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
						<strong>Key Words:</strong> {record.tags || record["Key Words"]}
					</p>
					<audio controls autoPlay>
						<source src={record.audioFilePath} type='audio/mpeg' />
						Your browser does not support the audio element.
					</audio>
					<h5>Field Notes:</h5>
					<ul>
						{record.field_notes.map((note, index) => (
							<li key={index}>{note}</li>
						))}
					</ul>
				</Offcanvas.Body>
			</Offcanvas>
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
		tags: PropTypes.string,
		"Key Words": PropTypes.string,
		field_notes: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};

export default RecordingCard;
