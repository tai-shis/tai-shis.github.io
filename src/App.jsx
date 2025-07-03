import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import NoPage from "./pages/NoPage.jsx";

const Router =
	import.meta.env.MODE === "development" ? BrowserRouter : HashRouter;

function App() {
	return (
		<div
			className='bg-background min-h-screen transpl-side-border-md pr-side-border-md pt-top-border-md 
                            lg:pl-side-border-full lg:pr-side-border-full lg:pt-top-border-full '
		>
			<Header />
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/*' element={<NoPage />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
