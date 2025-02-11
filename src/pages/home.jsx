import { useEffect, useRef } from "react";
import "../Styles/Home.css";

const Home = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		const handleCanPlay = () => {
			video.play();
		};
		video.addEventListener("canplay", handleCanPlay);
		return () => {
			video.removeEventListener("canplay", handleCanPlay);
		};
	}, []);

	return (
		<div className='home-container'>
			<div className='video-container'>
				<video
					ref={videoRef}
					src='https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739293566/Yukon_in_Winter_Chromatic_icotzx.mp4'
					autoPlay
					loop
					muted
					playsInline
					className='background-video'
				/>
			</div>
			<div className='content-overlay'>
				<div className='home-content'>
					<h1 className='title'>SOUNDING ICE</h1>
					<p className='description'>
						An acoustic cartography exploring the signals of climate change
						found in and around the Yukon River—its confluences and histories.
						Produced in collaboration with students from the Yukon School of
						Visual Arts, Dawson City, Canada, Winter 2025
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
