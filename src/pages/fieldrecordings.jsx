import { useEffect, useState, useCallback } from "react";
import store from "../flux/store";
import { fetchData1 } from "../flux/actions";
import RecordingCard from "../components/RecordingCard";
import MapEmbed from "../components/MapEmbeded";
import "../Styles/FieldRecordings.css";

const FieldRecordings = () => {
	const [records, setRecords] = useState([]);
	const [filters, setFilters] = useState({
		recordist: "",
		tags: "",
		conditions: "",
		date: "",
	});
	const [filteredRecords, setFilteredRecords] = useState([]);
	const [showTopBtn, setShowTopBtn] = useState(false);
	const [expandedCard, setExpandedCard] = useState(null);

	const handleUpdate = useCallback(() => {
		const data = store.getAll() || [];
		setRecords(data);
	}, []);

	useEffect(() => {
		fetchData1();
		store.on("change", handleUpdate);
		return () => store.off("change", handleUpdate);
	}, [handleUpdate]);

	const distinctRecordists = [...new Set(records.map((r) => r.recordist))];
	const distinctKeywords = [
		...new Set(
			records.flatMap((r) =>
				r.tags ? r.tags.split(",").map((k) => k.trim()) : []
			)
		),
	];
	const distinctConditions = [...new Set(records.map((r) => r.conditions))];
	const distinctDates = [...new Set(records.map((r) => r.date))];

	useEffect(() => {
		let filtered = records;
		if (filters.recordist)
			filtered = filtered.filter((r) => r.recordist === filters.recordist);
		if (filters.tags)
			filtered = filtered.filter(
				(r) =>
					r.tags && r.tags.toLowerCase().includes(filters.tags.toLowerCase())
			);
		if (filters.conditions)
			filtered = filtered.filter((r) => r.conditions === filters.conditions);
		if (filters.date)
			filtered = filtered.filter((r) => r.date === filters.date);
		setFilteredRecords(filtered);
	}, [records, filters]);

	const handleFilterClick = (column, value) => {
		setFilters((prev) => ({
			...prev,
			[column]: prev[column] === value ? "" : value,
		}));
	};

	const handleToggleCard = (cardId, viewMode) => {
		if (
			expandedCard &&
			expandedCard.id === cardId &&
			expandedCard.view === viewMode
		) {
			setExpandedCard(null);
		} else {
			setExpandedCard({ id: cardId, view: viewMode });
		}
	};

	useEffect(() => {
		const handleScroll = () => setShowTopBtn(window.pageYOffset > 300);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div className='field-recordings-page'>
			<header>
				<h2 className='titlefieldrecordings'>Field Recordings</h2>
			</header>
			<div className='field-recordings-layout'>
				<div className='left-column'>
					<div className='filter-sidebar'>
						<div className='filter-group'>
							<h3>Recordist</h3>
							<div className='buttons'>
								<button
									className={`filter-btn ${!filters.recordist ? "active" : ""}`}
									onClick={() => handleFilterClick("recordist", "")}
								>
									All
								</button>
								{distinctRecordists.map((name) => (
									<button
										key={name}
										className={`filter-btn ${
											filters.recordist === name ? "active" : ""
										}`}
										onClick={() => handleFilterClick("recordist", name)}
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
									className={`filter-btn ${!filters.tags ? "active" : ""}`}
									onClick={() => handleFilterClick("tags", "")}
								>
									All
								</button>
								{distinctKeywords.map((keyword) => (
									<button
										key={keyword}
										className={`filter-btn ${
											filters.tags === keyword ? "active" : ""
										}`}
										onClick={() => handleFilterClick("tags", keyword)}
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
										!filters.conditions ? "active" : ""
									}`}
									onClick={() => handleFilterClick("conditions", "")}
								>
									All
								</button>
								{distinctConditions.map((condition) => (
									<button
										key={condition}
										className={`filter-btn ${
											filters.conditions === condition ? "active" : ""
										}`}
										onClick={() => handleFilterClick("conditions", condition)}
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
									className={`filter-btn ${!filters.date ? "active" : ""}`}
									onClick={() => handleFilterClick("date", "")}
								>
									All
								</button>
								{distinctDates.map((date) => (
									<button
										key={date}
										className={`filter-btn ${
											filters.date === date ? "active" : ""
										}`}
										onClick={() => handleFilterClick("date", date)}
									>
										{date}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='center-column'>
					<div className='recording-list'>
						{filteredRecords.length > 0 ? (
							filteredRecords.map((record) => (
								<RecordingCard
									key={record.id}
									record={record}
									expanded={expandedCard && expandedCard.id === record.id}
									viewMode={
										expandedCard && expandedCard.id === record.id
											? expandedCard.view
											: null
									}
									onToggle={handleToggleCard}
								/>
							))
						) : (
							<p>No recordings available.</p>
						)}
					</div>
				</div>
				<div className='right-column'>
					<div className='map-container'>
						<MapEmbed />
					</div>
				</div>
			</div>
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
