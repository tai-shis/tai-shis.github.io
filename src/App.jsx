import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Stuff from "./pages/Stuff.jsx";
import Hobbies from "./pages/Hobbies.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
	return (
		<div
			className='bg-background min-h-screen transpl-side-border-md pr-side-border-md pt-top-border-md 
                            lg:pl-side-border-full lg:pr-side-border-full lg:pt-top-border-full '
		>
			<Router basename={import.meta.env.BASE_URL}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/stuff' element={<Stuff />} />
					<Route path='/hobbies' element={<Hobbies />} />
					<Route path='/*' element={<NoPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
