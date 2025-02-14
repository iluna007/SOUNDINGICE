import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import GlitchText from "../components/GlitchText";

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
					<h1 className='title'>
						SOUNDING{" "}
						<Link to='/fieldrecordings' className='glitch-link'>
							<GlitchText>ICE</GlitchText>
						</Link>
					</h1>
					<p className='description'>
						An acoustic cartography exploring the signals of climate change
						found in and around the Yukon River—its confluences and histories.
						Produced in collaboration with students from{" "}
						<a
							href='https://yukonsova.net/'
							target='_blank'
							rel='noopener noreferrer'
							className='glitch-link'
						>
							<GlitchText>Yukon School of Visual Arts</GlitchText>
						</a>
						,
						<a
							href='https://dawsoncity.ca/'
							target='_blank'
							rel='noopener noreferrer'
							className='glitch-link'
						>
							<GlitchText>Dawson City</GlitchText>
						</a>
						, Canada, Winter 2025
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
