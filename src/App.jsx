import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Stuff from "./pages/Stuff.jsx";
import Hobbies from "./pages/Hobbies.jsx";
import NoPage from "./pages/NoPage.jsx";
import Keyboards from "./pages/Keyboards.jsx";

function App() {
	return (
		<Router basename={import.meta.env.BASE_URL}>
			<div className='site'>
				<div className='lg:max-w-side-full mx-auto'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/hobbies' element={<Hobbies />} />
						<Route
							path='/hobbies/keyboards'
							element={<Keyboards />}
						/>
						<Route path='/*' element={<NoPage />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</Router>
	);
}
export default App;
