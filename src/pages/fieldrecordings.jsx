import { useEffect, useState, useCallback } from "react";
import store from "../flux/store";
import { fetchData1 } from "../flux/actions";
import RecordingCard from "../components/RecordingCard";
import MapEmbed from "../components/MapEmbeded";
import "../Styles/FieldRecordings.css";

const FieldRecordings = () => {
	const [records, setRecords] = useState([]);
	const [loading, setLoading] = useState(true);
	// Filters for each column.
	const [filters, setFilters] = useState({
		Recordist: "",
		"Key Words": "",
		Conditions: "",
		Date: "",
	});
	const [filteredRecords, setFilteredRecords] = useState([]);
	const [showTopBtn, setShowTopBtn] = useState(false);

	const handleUpdate = useCallback(() => {
		const data = store.getAll();
		setRecords(data);
		setLoading(false);
	}, []);

	useEffect(() => {
		fetchData1();
		store.on("change", handleUpdate);
		return () => {
			store.off("change", handleUpdate);
		};
	}, [handleUpdate]);

	// Compute distinct filter values.
	const distinctRecordists = [...new Set(records.map((r) => r.Recordist))];
	const distinctKeywords = [
		...new Set(
			records.flatMap((r) =>
				r["Key Words"] ? r["Key Words"].split(",").map((k) => k.trim()) : []
			)
		),
	];
	const distinctConditions = [...new Set(records.map((r) => r.Conditions))];
	const distinctDates = [...new Set(records.map((r) => r.Date))];

	// Apply filters.
	useEffect(() => {
		let filtered = records;
		if (filters.Recordist) {
			filtered = filtered.filter((r) => r.Recordist === filters.Recordist);
		}
		if (filters["Key Words"]) {
			filtered = filtered.filter(
				(r) =>
					r["Key Words"] &&
					r["Key Words"]
						.toLowerCase()
						.includes(filters["Key Words"].toLowerCase())
			);
		}
		if (filters.Conditions) {
			filtered = filtered.filter((r) => r.Conditions === filters.Conditions);
		}
		if (filters.Date) {
			filtered = filtered.filter((r) => r.Date === filters.Date);
		}
		setFilteredRecords(filtered);
	}, [records, filters]);

	// Toggle filter value on button click.
	const handleFilterClick = (column, value) => {
		setFilters((prev) => ({
			...prev,
			[column]: prev[column] === value ? "" : value,
		}));
	};

	// Show scroll-to-top button when window is scrolled down.
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 300) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className='field-recordings-page'>
			{loading ? (
				<p>loading...</p>
			) : (
				<div className='field-recordings-layout'>
					<div className='filter-sidebar'>
						<div className='filter-group'>
							<h3>Recordist</h3>
							<div className='buttons'>
								<button
									className={`filter-btn ${!filters.Recordist ? "active" : ""}`}
									onClick={() => handleFilterClick("Recordist", "")}
								>
									All
								</button>
								{distinctRecordists.map((name) => (
									<button
										key={name}
										className={`filter-btn ${
											filters.Recordist === name ? "active" : ""
										}`}
										onClick={() => handleFilterClick("Recordist", name)}
									>
										{name}
									</button>
								))}
							</div>
						</div>
						<div className='filter-group'>
							<h3>Key Words</h3>
							<div className='buttons'>
								<button
									className={`filter-btn ${
										!filters["Key Words"] ? "active" : ""
									}`}
									onClick={() => handleFilterClick("Key Words", "")}
								>
									All
								</button>
								{distinctKeywords.map((keyword) => (
									<button
										key={keyword}
										className={`filter-btn ${
											filters["Key Words"] === keyword ? "active" : ""
										}`}
										onClick={() => handleFilterClick("Key Words", keyword)}
									>
										{keyword}
									</button>
								))}
							</div>
						</div>
						<div className='filter-group'>
							<h3>Conditions</h3>
							<div className='buttons'>
								<button
									className={`filter-btn ${
										!filters.Conditions ? "active" : ""
									}`}
									onClick={() => handleFilterClick("Conditions", "")}
								>
									All
								</button>
								{distinctConditions.map((condition) => (
									<button
										key={condition}
										className={`filter-btn ${
											filters.Conditions === condition ? "active" : ""
										}`}
										onClick={() => handleFilterClick("Conditions", condition)}
									>
										{condition}
									</button>
								))}
							</div>
						</div>
						<div className='filter-group'>
							<h3>Date</h3>
							<div className='buttons'>
								<button
									className={`filter-btn ${!filters.Date ? "active" : ""}`}
									onClick={() => handleFilterClick("Date", "")}
								>
									All
								</button>
								{distinctDates.map((date) => (
									<button
										key={date}
										className={`filter-btn ${
											filters.Date === date ? "active" : ""
										}`}
										onClick={() => handleFilterClick("Date", date)}
									>
										{date}
									</button>
								))}
							</div>
						</div>
					</div>
					<div className='recording-list'>
						{filteredRecords.map((record) => (
							<RecordingCard key={record.id} record={record} />
						))}
					</div>
					<div className='map-container'>
						<MapEmbed />
					</div>
				</div>
			)}
			<button
				className={`scroll-to-top ${showTopBtn ? "show" : ""}`}
				onClick={scrollToTop}
				aria-label='Scroll to top'
			>
				↑
			</button>
		</div>
	);
};

export default FieldRecordings;
