import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Styles/Layout.css";

// Define our five pages with routes, colors and Material icon names.
const pages = [
	{ title: "Home", route: "/", color: "#ffffff", icon: "ac_unit" },
	{
		title: "Field Recordings",
		route: "/fieldrecordings",
		color: "#ffff00",
		icon: "graphic_eq",
	},
	{
		title: "Field Works",
		route: "/fieldworks",
		color: "#ff00ff",
		icon: "asterisk",
	},
	{
		title: "Resources",
		route: "/resources",
		color: "#000000",
		icon: "bookmark",
	},
	{ title: "About", route: "/about", color: "#00ffff", icon: "info" },
];

// Define darker scrollbar colors for each background.
const scrollbarColors = {
	"#ffffff": { track: "#dddddd", thumb: "#bbbbbb" },
	"#ffff00": { track: "#cccc00", thumb: "#aaaa00" },
	"#ff00ff": { track: "#990099", thumb: "#770077" },
	"#000000": { track: "#333333", thumb: "#222222" },
	"#00ffff": { track: "#009999", thumb: "#007777" },
};

// Custom hook to get window width.
function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return width;
}

export default function Layout({ children }) {
	const location = useLocation();
	const navigate = useNavigate();
	const width = useWindowWidth();
	const activeIndex = pages.findIndex(
		(page) => page.route === location.pathname
	);

	// Mobile layout: if width is less than 768px, show a top nav bar.
	if (width < 768) {
		return (
			<div className='mobile-layout'>
				<div className='mobile-nav'>
					{pages.map((page, index) => {
						const isActive = index === activeIndex;
						// For Resources (black) force icon white; otherwise, black.
						const iconColor =
							page.route === "/resources" ? "#ffffff" : "#000000";
						return (
							<div
								key={page.route}
								className={`mobile-nav-item ${isActive ? "active" : ""}`}
								style={{ backgroundColor: page.color }}
								onClick={() => {
									if (!isActive) navigate(page.route);
								}}
							>
								<span
									className='material-symbols-outlined'
									style={{ color: iconColor, fontSize: "24px" }}
								>
									{page.icon}
								</span>
							</div>
						);
					})}
				</div>
				<div
					className='mobile-content'
					style={{
						backgroundColor: pages[activeIndex]?.color || "#ffffff",
						color:
							pages[activeIndex]?.route === "/resources"
								? "#ffffff"
								: "inherit",
					}}
				>
					<div
						className='scrollable-content'
						style={{
							padding: activeIndex === 0 ? 0 : "20px",
							"--scrollbar-track": pages[activeIndex]
								? scrollbarColors[pages[activeIndex].color].track
								: "#222",
							"--scrollbar-thumb": pages[activeIndex]
								? scrollbarColors[pages[activeIndex].color].thumb
								: "#555",
						}}
					>
						{children}
					</div>
				</div>
			</div>
		);
	}

	// Desktop layout: five sections arranged horizontally.
	return (
		<div className='layout-container'>
			{pages.map((page, index) => {
				const isActive = index === activeIndex;
				const sectionClass = isActive ? "section expanded" : "section narrow";
				const iconColor = page.route === "/resources" ? "#ffffff" : "#000000";
				return (
					<div
						key={page.route}
						className={sectionClass}
						style={{ backgroundColor: page.color }}
						onClick={() => {
							if (!isActive) navigate(page.route);
						}}
					>
						{isActive ? (
							<div
								className='scrollable-content'
								style={{
									padding: activeIndex === 0 ? 0 : "20px",
									"--scrollbar-track": scrollbarColors[page.color].track,
									"--scrollbar-thumb": scrollbarColors[page.color].thumb,
									color: page.route === "/resources" ? "#ffffff" : "inherit",
								}}
							>
								{children}
							</div>
						) : (
							<div className='icon-container'>
								<span
									className='material-symbols-outlined'
									style={{ color: iconColor, fontSize: "24px" }}
								>
									{page.icon}
								</span>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
