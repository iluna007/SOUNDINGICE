import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import GlitchText from "../components/GlitchText";

const Home = () => {
	const videoRef = useRef(null);
	const videos = [
		"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1740349894/SI_Landing_Page_k1914v.mp4",
		"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739293566/Yukon_in_Winter_Chromatic_icotzx.mp4",
	];
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const video = videoRef.current;
		const handleEnded = () => {
			const nextIndex = (currentIndex + 1) % videos.length;
			setCurrentIndex(nextIndex);
			video.src = videos[nextIndex];
			video.play();
		};
		video.addEventListener("ended", handleEnded);
		video.addEventListener("canplay", () => video.play());
		return () => {
			video.removeEventListener("ended", handleEnded);
		};
	}, [currentIndex, videos]);

	return (
		<div className='home-container'>
			<div className='video-container'>
				<video
					ref={videoRef}
					src={videos[currentIndex]}
					autoPlay
					muted
					playsInline
					className='background-video'
				/>
			</div>
			<div className='content-overlay'>
				<div className='home-content'>
					<h1 className='titlehome'>
						SOUNDING{" "}
						<Link
							to='/fieldrecordings'
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<GlitchText>ICE</GlitchText>
						</Link>
					</h1>
					<p className='description1'>
						An acoustic cartography exploring the signals of climate change
						found in and around the Yukon and Klondike Rivers—their confluences
						and histories.
					</p>
					<p className='description2'>
						This sound mapping project acknowledges the vital presence of the
						Tr’ondëk Hwëch’in First Nation based in Dawson City, which includes
						descendants of the Hän-speaking people, who have lived along the
						Yukon River for millennia, and families descended from Gwich’in,
						Northern Tutchone and other language groups.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
