import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import our new Layout

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const FieldWorks = lazy(() => import("./pages/fieldworks"));
const FieldRecordings = lazy(() => import("./pages/fieldrecordings"));
const Resources = lazy(() => import("./pages/Resources"));

const App = () => {
	return (
		<div>
			<Suspense fallback={<div>Cargando aplicación...</div>}>
				{/* The Layout wraps the Routes so that only the active section expands */}
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/fieldworks' element={<FieldWorks />} />
						<Route path='/fieldrecordings' element={<FieldRecordings />} />
						<Route path='/resources' element={<Resources />} />
					</Routes>
				</Layout>
			</Suspense>
		</div>
	);
};

export default App;
