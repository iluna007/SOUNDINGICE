import "../Styles/About.css"; // Usamos el mismo CSS que About

const Resources = () => {
	return (
		<div className='container-fluid'>
			<div
				className='mt-6'
				style={{
					textAlign: "justify",
					paddingTop: "48px",
					paddingBottom: "24px",
					paddingLeft: "32px",
					paddingRight: "32px",
				}}
			>
				<div className='row example'>
					<div className='col-2'></div>
					<div className='col'>
						<h2 className='mt-5'>Resources</h2>
						<div className='mt-5'></div>
						<p>
							<strong>Audio Resources (PDF manuals)</strong>
						</p>
						<p>
							<strong>Yukon University / Climate Change:</strong> The Climate
							Change Research program has developed two climate change training
							courses through the Climate Resilience Knowledge to Action
							project.{" "}
							<a
								href='https://www.yukonu.ca/programs/continuing-studies/climate-change'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://www.yukonu.ca/programs/continuing-studies/climate-change
							</a>
						</p>
						<p>
							<strong>Klondike Institute of Art & Culture (KIAC):</strong>{" "}
							<a
								href='https://kiac.ca/'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://kiac.ca/
							</a>
						</p>
						<p>
							<strong>Dawson City Film Fest:</strong>{" "}
							<a
								href='http://www.dawsonfilmfest.com/about.html'
								target='_blank'
								rel='noopener noreferrer'
							>
								http://www.dawsonfilmfest.com/about.html
							</a>
						</p>
						<p>
							<strong>Cold Cuts Video Festival:</strong>{" "}
							<a
								href='https://coldcutsvideofestival.wordpress.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://coldcutsvideofestival.wordpress.com/
							</a>
						</p>
					</div>
					<div className='col-2'></div>
				</div>
			</div>
		</div>
	);
};

export default Resources;
