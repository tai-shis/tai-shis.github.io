import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
	return (
		<div
			className='bg-background min-h-screen transpl-side-border-md pr-side-border-md pt-top-border-md 
                            lg:pl-side-border-full lg:pr-side-border-full lg:pt-top-border-full '
		>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
