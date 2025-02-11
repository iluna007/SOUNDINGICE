import "../Styles/GlitchText.css";
import PropTypes from 'prop-types';

const GlitchText = ({ children }) => {
	return <span className='glitch-text'>{children}</span>;
};
GlitchText.propTypes = {
	children: PropTypes.node.isRequired,
};

export default GlitchText;
