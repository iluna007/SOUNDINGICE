import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "../Styles/CustomNavbar.css";

const CustomNavbar = () => {
	const [show, setShow] = useState({
		start: false,
		end: false,
		top: false,
		bottom: false,
	});

	const handleClose = (placement) => {
		setShow((prev) => ({ ...prev, [placement]: false }));
	};

	const handleShow = (placement) => {
		setShow((prev) => ({ ...prev, [placement]: true }));
	};

	useEffect(() => {
		if (show.end) {
			document.body.classList.add("offcanvas-open-right");
		} else {
			document.body.classList.remove("offcanvas-open-right");
		}
	}, [show.end]);

	return (
		<>
			<div className='d-flex justify-content-center mb-3'>
				<Button
					variant='primary'
					onClick={() => handleShow("end")}
					className='me-2'
				>
					Open Right
				</Button>
			</div>

			{["start", "end", "top", "bottom"].map((placement) => (
				<Offcanvas
					key={placement}
					show={show[placement]}
					onHide={() => handleClose(placement)}
					placement={placement}
					dialogClassName={placement === "end" ? "custom-offcanvas-half" : ""}
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Menu ({placement})</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<ul className='list-unstyled'>
							<li className='mb-2'>
								<Link to='/' className='text-decoration-none text-dark'>
									Home
								</Link>
							</li>
							<li className='mb-2'>
								<Link to='/about' className='text-decoration-none text-dark'>
									About
								</Link>
							</li>
							<li className='mb-2'>
								<Link
									to='/fieldworks'
									className='text-decoration-none text-dark'
								>
									Field Works
								</Link>
							</li>
							<li className='mb-2'>
								<Link
									to='/fieldrecordings'
									className='text-decoration-none text-dark'
								>
									Field Recordings
								</Link>
							</li>
							<li className='mb-2'>
								<Link
									to='/resources'
									className='text-decoration-none text-dark'
								>
									Resources
								</Link>
							</li>
						</ul>
						
					</Offcanvas.Body>
				</Offcanvas>
			))}
		</>
	);
};

export default CustomNavbar;
